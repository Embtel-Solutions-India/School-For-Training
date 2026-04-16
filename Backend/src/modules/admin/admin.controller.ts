import express from "express";
import * as DAO from "../../DAO/index";
import * as Models from "../../models/index";
import fs from "fs";
import path from "path";

import {
  handleCatch,
  handleCustomError,
  helpers,
  sendResponse,
} from "../../middlewares/index";
import adminServices from "./admin.services";
import * as emailServices from "../../middlewares/email_services";
import userServices from "../user/user.services";

class adminController {
  
  static async login(req: any, res: express.Response) {
    try {
      let { email, password: input_password, language = "ENGLISH" } = req.body;
      let query = { email: email.toLowerCase() };
      let projection = { __v: 0 };
      let options = { lean: true };
      let fetch_data: any = await DAO.getData(Models.Admin, query, projection, options);

      if (fetch_data.length) {
        let { _id, password } = fetch_data[0];
        let decrypt = await helpers.decrypt_password(input_password, password);

        if (decrypt !== true) {
          throw await handleCustomError("INCORRECT_PASSWORD", language);
        } else {
          let generate_token = await adminServices.generateAdminToken(_id);
          let response = await adminServices.makeAdminResponse(generate_token, language);
          let message = "Login Successfully";

          let resp = {
            user_details: {
              _id: response._id,
              email: response.email,
              phone_no: response.phone_no,
              name: response.name,
              access_token: response.access_token,
            },
            message,
          };
          sendResponse(res, resp, "Success");
        }
      } else {
        throw await handleCustomError("EMAIL_NOT_REGISTERED", language);
      }
    } catch (err) {
      handleCatch(res, err);
    }
  }

  static async viewProfile(req: any, res: any) {
    try {
      let { _id: admin_id } = req.user_data;
      let query = { _id: admin_id };
      let projection = { password: 0 };
      let options = { lean: true };
      let response = await DAO.getData(Models.Admin, query, projection, options);
      sendResponse(res, response, "Success");
    } catch (err) {
      handleCatch(res, err);
    }
  }

  static async updateProfile(req: any, res: express.Response) {
    try {
      let _id = req.user_data._id;
      await adminServices.updateAdmin(_id, req.body, req.files || null);
      sendResponse(res, null, "Profile updated successfully.");
    } catch (err) {
      handleCatch(res, err);
    }
  }

  static async forgetPassword(req: any, res: express.Response) {
    try {
      let { email, language = "ENGLISH" } = req.body;
      let query = { email: email.toLowerCase() };
      let fetch_data: any = await adminServices.verifyAdmin(query);

      if (fetch_data.length) {
        let { _id } = fetch_data[0];
        let security_code = Math.floor(100000 + Math.random() * 900000).toString();

        let update = { security_code };
        let options = { new: true };
        let Update_data = await DAO.findAndUpdate(Models.Admin, { _id }, update, options);

        await emailServices.adminForgetPasswordMail(Update_data);
        sendResponse(res, "Reset Password Link is sent on your email.", "Success");
      } else {
        throw await handleCustomError("EMAIL_NOT_REGISTERED", language);
      }
    } catch (err) {
      handleCatch(res, err);
    }
  }

  static async setNewPassword(req: any, res: express.Response) {
    try {
      let { password, security_code, language } = req.body;
      let query = { security_code };
      let projection = { __v: 0 };
      let options = { lean: true };
      let fetch_data: any = await DAO.getData(Models.Admin, query, projection, options);

      if (fetch_data.length) {
        let { _id } = fetch_data[0];
        let bcrypt_password = await helpers.bcrypt_password(password);

        await DAO.findAndUpdate(Models.Admin, { _id }, { password: bcrypt_password }, { new: true });
        await DAO.findAndUpdate(Models.Admin, { _id }, { security_code: null }, { new: true });

        sendResponse(res, "New Password Set Successfully", "Success");
      } else {
        throw await handleCustomError("LINK_EXPIRED", language);
      }
    } catch (err) {
      handleCatch(res, err);
    }
  }

  static async checkSecurityCode(req: any, res: express.Response) {
    try {
      let { security_code, language } = req.body;

      if (!security_code) {
        throw await handleCustomError("SECURITY_CODE_REQUIRED", language);
      }

      let query = { security_code };
      let projection = { _id: 1, email: 1 };
      let options = { lean: true };

      let fetch_data: any = await DAO.getData(Models.Admin, query, projection, options);

      if (fetch_data.length) {
        sendResponse(res, fetch_data[0], "Success");
      } else {
        throw await handleCustomError("INVALID_OR_EXPIRED_CODE", language);
      }
    } catch (err) {
      handleCatch(res, err);
    }
  }

  static async changePassword(req: any, res: express.Response) {
    try {
      let { old_password, new_password, language } = req.body;
      let { _id: admin_id } = req.user_data;
      let query = { _id: admin_id };
      let projection = { __v: 0 };
      let options = { lean: true };
      let fetch_data: any = await DAO.getData(Models.Admin, query, projection, options);

      if (fetch_data.length) {
        let password = fetch_data[0].password;
        let decrypt = await helpers.decrypt_password(old_password, password);
        if (!decrypt == true) {
          throw await handleCustomError("OLD_PASSWORD_MISMATCH", language);
        } else {
          let bcrypt = await helpers.bcrypt_password(new_password);
          await DAO.findAndUpdate(Models.Admin, { _id: admin_id }, { password: bcrypt }, { new: true });
          sendResponse(res, null, "Password changed successfully.");
        }
      } else {
        throw await handleCustomError("UNAUTHORIZED", language);
      }
    } catch (err) {
      handleCatch(res, err);
    }
  }

  static async approveUser(req: any, res: any) {
    try {
      const { id } = req.params;
      const { approved } = req.body;
      const updatedUser = await adminServices.toggleApproveUser(id, approved);
      if (!updatedUser) return res.status(404).json({ message: "User not found" });
      sendResponse(res, updatedUser, `User ${approved ? "approved" : "disapproved"} successfully`);
    } catch (error: any) {
      handleCatch(res, error);
    }
  }

  static async getUsers(req: any, res: any) {
    try {
      const users = await adminServices.getAllUsers();
      return res.status(200).json({
        message: "Users fetched successfully",
        count: users.length,
        data: users,
      });
    } catch (error: any) {
      return res.status(500).json({ message: error.message || "Server error" });
    }
  }

  static async createContact(req: any, res: express.Response) {
    try {
        const { name, email, phone, message, courseId, courseName, language = "ENGLISH" } = req.body;

        if (!name || !email || !phone || !message) {
            throw await handleCustomError("ALL_FIELDS_REQUIRED", language);
        }

        const response = await userServices.createContact(req.body);
        sendResponse(res, response, "Contact form submitted successfully");
    } catch (err) {
        handleCatch(res, err);
    }
}

  static async getAllContacts(req: any, res: express.Response) {
    try {
        const response = await adminServices.getAllContacts();
        sendResponse(res, response, "All contacts fetched successfully");
    } catch (err) {
        handleCatch(res, err);
    }
}

 static async getSingleContact(req: any, res: express.Response) {
    try {
        const { id } = req.params;
        const response = await adminServices.getSingleContact(id);
        sendResponse(res, response, "Single contact fetched successfully");
    } catch (err) {
        handleCatch(res, err);
    }
}

  static async deleteContact(req: any, res: express.Response) {
    try {
      const { id } = req.params;
      await adminServices.deleteContactById(id);
      sendResponse(res, null, "Contact deleted successfully");
    } catch (err) {
      handleCatch(res, err);
    }
  }

  static async replyContact(req: any, res: express.Response) {
    try {
      const { id } = req.params;
      const { message } = req.body;
      if (!message) throw await handleCustomError("MESSAGE_REQUIRED", "ENGLISH");

      const response = await adminServices.replyToContact(id, message);
      await emailServices.replyToUser(response.email, response.name, message);
      sendResponse(res, response, "Message sent successfully");
    } catch (err) {
      handleCatch(res, err);
    }
  }

  static async deleteReply(req: any, res: express.Response) {
    try {
      const { contactId, replyId } = req.params;
      const response = await adminServices.deleteReply(contactId, replyId);
      sendResponse(res, response, "Reply deleted successfully");
    } catch (err) {
      handleCatch(res, err);
    }
  }

  // =================== COURSE CONTROLLERS ===================
static async createCourse(req: any, res: express.Response) {
  try {
    // Accept either JSON string in req.body.data OR normal form fields in req.body
    let courseData: any = {};
    if (req.body && req.body.data) {
      try {
        courseData = JSON.parse(req.body.data);
      } catch (e) {
        courseData = req.body;
      }
    } else {
      courseData = req.body || {};
    }

    // ---- MULTI-IMAGE HANDLING ----
    const uploadedImages: string[] = [];

    if (req.files) {
      // If frontend sends multiple images as "images"
      const filesAny: any = req.files;

      if (Array.isArray(filesAny.images)) {
        // many images
        for (const file of filesAny.images) {
          const imagePath = await adminServices.uploadFile({ image: file }, "/courses");
          if (imagePath) uploadedImages.push(imagePath);
        }
      } else if (filesAny.images) {
        // single "images" field
        const imagePath = await adminServices.uploadFile(
          { image: filesAny.images },
          "/courses"
        );
        if (imagePath) uploadedImages.push(imagePath);
      }

      // Backward compat: single "image"
      if (filesAny.image && uploadedImages.length === 0) {
        const imagePath = await adminServices.uploadFile(req.files, "/courses");
        if (imagePath) uploadedImages.push(imagePath);
      }
    }

    if (uploadedImages.length) {
      courseData.images = uploadedImages;      // array of all
      courseData.image = uploadedImages[0];    // main/primary
    }

    const course = await adminServices.createCourse(courseData);
    sendResponse(res, course, "Course created successfully");
  } catch (err) {
    handleCatch(res, err);
  }
}

static async updateCourse(req: any, res: express.Response) {
  try {
    const { id } = req.params;

    // 1. Parse incoming data (same as before)
    let courseData: any = {};
    if (req.body && req.body.data) {
      try {
        courseData = JSON.parse(req.body.data);
      } catch (e) {
        courseData = req.body;
      }
    } else {
      courseData = req.body || {};
    }

    // 2. Get existing course from DB (to know old images)
    const existingCourse: any = await adminServices.getCourseById(id);

    const previousImages: string[] = Array.isArray(existingCourse?.images)
      ? existingCourse.images
      : existingCourse?.image
      ? [existingCourse.image]
      : [];

    // 3. Normalize images coming from client (after × clicks on frontend)
    let keptImagesFromClient: string[] = [];

    // `images` can be array or single string in data
    if (Array.isArray(courseData.images)) {
      keptImagesFromClient = courseData.images;
    } else if (typeof courseData.images === "string" && courseData.images.trim()) {
      keptImagesFromClient = [courseData.images];
    }

    const newUploadedImages: string[] = [];

    // 4. Handle newly uploaded images
    if (req.files) {
      const filesAny: any = req.files;

      if (Array.isArray(filesAny.images)) {
        for (const file of filesAny.images) {
          const imagePath = await adminServices.uploadFile({ image: file }, "/courses");
          if (imagePath) newUploadedImages.push(imagePath);
        }
      } else if (filesAny.images) {
        const imagePath = await adminServices.uploadFile(
          { image: filesAny.images },
          "/courses"
        );
        if (imagePath) newUploadedImages.push(imagePath);
      }

      // Backward compat: single "image"
      if (filesAny.image && newUploadedImages.length === 0) {
        const imagePath = await adminServices.uploadFile(req.files, "/courses");
        if (imagePath) newUploadedImages.push(imagePath);
      }
    }

    // 5. Final list that will be stored in DB
    const finalImages: string[] = [...keptImagesFromClient, ...newUploadedImages];

    if (finalImages.length) {
      courseData.images = finalImages;
      courseData.image = finalImages[0]; // primary image
    } else {
      courseData.images = [];
      courseData.image = "";
    }

    // 6. Find which old images were removed (these should be deleted from disk)
    const removedImages = previousImages.filter(
      (oldPath) => !finalImages.includes(oldPath)
    );

    // DEBUG (you can keep this during testing)
    console.log("previousImages:", previousImages);
    console.log("finalImages:", finalImages);
    console.log("removedImages:", removedImages);

    // 7. Delete removed images from filesystem using SAME base as uploadFile
    for (const imgRelPath of removedImages) {
      try {
        if (!imgRelPath) continue;

        const safeRelPath = imgRelPath.replace(/^\/+/, ""); // remove leading slash
        // 👉 use same base logic as uploadFile: __dirname + "../../uploads"
        const uploadsRoot = path.join(__dirname, "../../uploads");
        const absolutePath = path.join(uploadsRoot, safeRelPath); // e.g. src/uploads/courses/xxx.jpg

        console.log("Trying to delete:", absolutePath);

        if (fs.existsSync(absolutePath)) {
          fs.unlinkSync(absolutePath);
          console.log("Deleted course image:", absolutePath);
        } else {
          console.log("File not found on disk for deletion:", absolutePath);
        }
      } catch (err) {
        console.error("Failed to delete course image:", imgRelPath, err);
      }
    }

    // 8. Finally, update course in DB
    const course = await adminServices.updateCourse(id, courseData);
    sendResponse(res, course, "Course updated successfully");
  } catch (err) {
    handleCatch(res, err);
  }
}

static async getAllCourses(req: any, res: express.Response) {
  try {
    const courses = await adminServices.getAllCourses();
    sendResponse(res, courses, "All courses fetched successfully");
  } catch (err) {
    handleCatch(res, err);
  }
}

static async getCourseById(req: any, res: express.Response) {
  try {
    const { id } = req.params;
    const course = await adminServices.getCourseById(id);
    sendResponse(res, course, "Course fetched successfully");
  } catch (err) {
    handleCatch(res, err);
  }
}

static async deleteCourse(req: any, res: express.Response) {
  try {
    const { id } = req.params;
    await adminServices.deleteCourse(id);
    sendResponse(res, null, "Course deleted successfully");
  } catch (err) {
    handleCatch(res, err);
  }
}

// =================== BLOG CONTROLLERS ===================

  static async createBlog(req: any, res: express.Response) {
  try {
    // parse body data (same as courses)
    let blogData: any = {};
    if (req.body && req.body.data) {
      try {
        blogData = JSON.parse(req.body.data);
      } catch (e) {
        blogData = req.body;
      }
    } else {
      blogData = req.body || {};
    }

    // handle uploaded images (same pattern as courses)
    const uploadedImages: string[] = [];

    if (req.files) {
      const filesAny: any = req.files;

      if (Array.isArray(filesAny.images)) {
        for (const file of filesAny.images) {
          const imagePath = await adminServices.uploadFile({ image: file }, "/blogs");
          if (imagePath) uploadedImages.push(imagePath);
        }
      } else if (filesAny.images) {
        const imagePath = await adminServices.uploadFile({ image: filesAny.images }, "/blogs");
        if (imagePath) uploadedImages.push(imagePath);
      }

      // backward compat - single "image"
      if (filesAny.image && uploadedImages.length === 0) {
        const imagePath = await adminServices.uploadFile(req.files, "/blogs");
        if (imagePath) uploadedImages.push(imagePath);
      }
    }

    if (uploadedImages.length) {
      blogData.images = uploadedImages;
      blogData.image = uploadedImages[0];
    }

    const newBlog = await adminServices.createBlog(blogData);
    sendResponse(res, newBlog, "Blog created successfully");
  } catch (err) {
    handleCatch(res, err);
  }
}

  static async getAllBlogs(req: any, res: express.Response) {
    try {
      const blogs = await adminServices.getAllBlogs();
      sendResponse(res, blogs, "Blogs fetched successfully");
    } catch (err) {
      handleCatch(res, err);
    }
  }

  static async getBlog(req: any, res: express.Response) {
    try {
      const { id } = req.params;
      const blog = await adminServices.getBlogById(id);
      sendResponse(res, blog, "Blog fetched successfully");
    } catch (err) {
      handleCatch(res, err);
    }
  }

static async updateBlog(req: any, res: express.Response) {
  try {
    const { id } = req.params;

    // 1. Parse incoming data (client will send data JSON with possibly images array of kept relative paths)
    let blogData: any = {};
    if (req.body && req.body.data) {
      try {
        blogData = JSON.parse(req.body.data);
      } catch (e) {
        blogData = req.body;
      }
    } else {
      blogData = req.body || {};
    }

    // 2. Fetch existing blog to know previous images
    const existingBlog: any = await adminServices.getBlogById(id);

    const previousImages: string[] = Array.isArray(existingBlog?.images)
      ? existingBlog.images
      : existingBlog?.image
      ? [existingBlog.image]
      : [];

    // 3. Normalize kept images coming from client (blogData.images can be array or single string)
    let keptImagesFromClient: string[] = [];

    if (Array.isArray(blogData.images)) {
      keptImagesFromClient = blogData.images;
    } else if (typeof blogData.images === "string" && blogData.images.trim()) {
      keptImagesFromClient = [blogData.images];
    }

    // 4. Handle newly uploaded images (files)
    const newUploadedImages: string[] = [];

    if (req.files) {
      const filesAny: any = req.files;

      if (Array.isArray(filesAny.images)) {
        for (const file of filesAny.images) {
          const imagePath = await adminServices.uploadFile({ image: file }, "/blogs");
          if (imagePath) newUploadedImages.push(imagePath);
        }
      } else if (filesAny.images) {
        const imagePath = await adminServices.uploadFile({ image: filesAny.images }, "/blogs");
        if (imagePath) newUploadedImages.push(imagePath);
      }

      // backward compat - single "image"
      if (filesAny.image && newUploadedImages.length === 0) {
        const imagePath = await adminServices.uploadFile(req.files, "/blogs");
        if (imagePath) newUploadedImages.push(imagePath);
      }
    }

    // 5. Final images to be stored
    const finalImages: string[] = [...keptImagesFromClient, ...newUploadedImages];

    if (finalImages.length) {
      blogData.images = finalImages;
      blogData.image = finalImages[0];
    } else {
      blogData.images = [];
      blogData.image = "";
    }

    // 6. Determine removed images (previous - final)
    const removedImages = previousImages.filter((oldPath) => !finalImages.includes(oldPath));

    // 7. Delete removed images from filesystem (use same base as uploadFile)
    for (const imgRelPath of removedImages) {
      try {
        if (!imgRelPath) continue;
        const safeRelPath = imgRelPath.replace(/^\/+/, ""); // remove leading slash
        const uploadsRoot = path.join(__dirname, "../../uploads");
        const absolutePath = path.join(uploadsRoot, safeRelPath); // e.g. src/uploads/blogs/xxx.jpg

        if (fs.existsSync(absolutePath)) {
          fs.unlinkSync(absolutePath);
          console.log("Deleted blog image:", absolutePath);
        } else {
          console.log("File not found on disk for deletion:", absolutePath);
        }
      } catch (err) {
        console.error("Failed to delete blog image:", imgRelPath, err);
      }
    }

    // 8. Update blog in DB
    const updatedBlog = await adminServices.updateBlog(id, blogData);
    sendResponse(res, updatedBlog, "Blog updated successfully");
  } catch (err) {
    handleCatch(res, err);
  }
}

  static async deleteBlog(req: any, res: express.Response) {
    try {
      const { id } = req.params;
      await adminServices.deleteBlog(id);
      sendResponse(res, null, "Blog deleted successfully");
    } catch (err) {
      handleCatch(res, err);
    }
  }
}

export default adminController;