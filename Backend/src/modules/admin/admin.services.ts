import { Post } from './../../models/posts';
import { Course } from './../../models/course';
import * as DAO from '../../DAO/index';
import * as Models from '../../models';
import { app_constant } from '../../config/index';
const admin_scope = app_constant.scope.admin;
import { generate_token, handleCustomError, helpers } from '../../middlewares/index';
import path from 'path';
import fs from "fs";


class adminServices {

    static async saveSessionData(access_token: any, token_data: any) {
        try {
            let { _id: admin_id, token_gen_at, expire_time } = token_data
            let set_data = {
                type: "ADMIN",
                admin_id: admin_id,
                access_token: access_token,
                token_gen_at: token_gen_at,
                created_at: +new Date(),
                expire_time: expire_time
            }
            let response = await DAO.saveData(Models.Sessions, set_data)
            return response

        } catch (err) {
            throw err;
        }
    }

    static async fetchAdminToken(token_data: any) {
        try {
            let access_token = await generate_token(token_data)
            let response = await this.saveSessionData(access_token, token_data)
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async fetchTotalCount(collection: any, query: any) {
        try {
            let response = await DAO.countData(collection, query);
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async generateAdminToken(_id: string) {
        try {
            let token_data = {
                _id: _id,
                scope: admin_scope,
                collection: Models.Admin,
                token_gen_at: +new Date()
            }
            let response = await this.fetchAdminToken(token_data)
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async makeAdminResponse(data: any, language: string) {
        try {
            let { admin_id, token_gen_at, access_token } = data


            let query = { _id: admin_id }
            let projection = { password: 0 }
            let options = { lean: true }
            let fetch_data: any = await DAO.getData(Models.Admin, query, projection, options)

            if (fetch_data.length) {
                fetch_data[0].access_token = access_token
                fetch_data[0].token_gen_at = token_gen_at

                return fetch_data[0]
            } else {
                throw await handleCustomError('UNAUTHORIZED', language)
            }

        } catch (err) {
            throw err;
        }
    }

    static async verifyAdmin(query: any) {
        try {
            let projection = { __v: 0 }
            let options = { lean: true }
            let response = await DAO.getData(Models.Admin, query, projection, options)
            return response
        } catch (err) {
            throw err;
        }
    }
    
    static async uploadFile(file: any, uploadPath: string) {
     try {
    const uploadedFile = file.image || file.file;
    if (!uploadedFile) throw await handleCustomError("FILE_NOT_UPLOAD", "ENGLISH");

    // 🔴 FIX: normalize uploadPath so "/courses" and "courses" both become "courses"
    const safeUploadPath = uploadPath.replace(/^\/+/, "");

    // This will now resolve to: <project>/src/uploads/courses
    const uploadDir = path.join(__dirname, "../../uploads", safeUploadPath);
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const uniqueFileName = `${Date.now()}_${uploadedFile.name}`;
    const finalPath = path.join(uploadDir, uniqueFileName);

    await uploadedFile.mv(finalPath);

    // Stored in DB as "courses/filename.ext"
    const relativePath = path
      .join(safeUploadPath, uniqueFileName)
      .replace(/\\/g, "/");

    return relativePath;
     } catch (err) {
    throw err;
     }
    }

    static async editUser(id: any, req_data: any, file: any) {
        try {

            const { first_name, last_name, email, contact_no, business_name, country, state, city, description, language } = req_data
            const projection = { __v: 0 }
            const options = { lean: true }
            const check: any = await DAO.getData(Models.User, { _id: id }, projection, options);
            if (!check.length) {
                throw await handleCustomError("NO_DATA_FOUND", language)
            }

            const data: any = {
                first_name: first_name,
                last_name: last_name,
                contact_no: contact_no,
                business_name: business_name,
                country: country,
                state: state,
                city: city,
                description: description,
            }
            if (file) {
                let image = await this.uploadFile(file, 'uploads/user/image');
                data.image = image
            }
            const response = await DAO.findAndUpdate(Models.User, { _id: id }, data, options)
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async updateAdmin(id: any, req_data: any, file: any) {
        try {
            const { name, language = 'ENGLISH' } = req_data;
            const projection = { __v: 0 };
            const options = { lean: true };
            const check: any = await DAO.getData(Models.Admin, { _id: id }, projection, options);
            if (!check.length) {
                throw await handleCustomError("NO_DATA_FOUND", language);
            }

            const data: any = {
                name: name,
            };

            if (file) {
                let image = await this.uploadFile(file, 'uploads/admin/image');
                data.image = image;
            }

            const response = await DAO.findAndUpdate(Models.Admin, { _id: id }, data, options);
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async toggleApproveUser(userId: string, approved: boolean) {
        const updatedUser = await Models.User.findByIdAndUpdate(
            userId,
            { approved }, 
            { new: true }
        );
        return updatedUser;
    }

    static async getAllUsers() {
        return await Models.User.find().select("-password -security_code").sort({ createdAt: -1 }).populate("interestedProjects");
    };

     // Fetch all contacts
   static async getAllContacts() {
    try {
        const response = await Models.Contact
            .find({})
            .sort({ createdAt: -1 })
            .populate("courseId", "title")   
            .lean();

        return response;
    } catch (err) {
        throw err;
    }
}

    // Create Contact
static async createContact(payload: any) {
    try {
        const { name, email, phone, message, courseId, courseName } = payload;

        if (!name || !email || !phone || !message) {
            throw await handleCustomError("MISSING_REQUIRED_FIELDS", "ENGLISH");
        }

        const contactData = {
            name,
            email: email.toLowerCase(),
            phone,
            message,
            courseId: courseId || null,
            courseName: courseName || null,
            createdAt: new Date(),
        };

        return await DAO.saveData(Models.Contact, contactData);
    } catch (err) {
        throw err;
    }
}

    // Fetch single contact by ID
static async getSingleContact(id: string) {
    try {
        let response: any = await Models.Contact
            .findOne({ _id: id })
            .populate("courseId", "title")
            .lean();

        if (!response) {
            throw await handleCustomError("NO_DATA_FOUND", "ENGLISH");
        }

        // safely access courseId.title
        const course: any = response.courseId;

        if (!response.courseName && course?.title) {
            response.courseName = course.title;
        }

        if (!response.courseName && !response.courseId) {
            response.courseName = "Not Selected";
        }

        return response;

    } catch (err) {
        throw err;
    }
}

   // Delete contact by ID
   static async deleteContactById(id: string) {
    try {
        const response = await DAO.removeData(Models.Contact, { _id: id });
        if (!response) {
            throw await handleCustomError("NO_DATA_FOUND", "ENGLISH");
        }
        return response;
    } catch (err) {
        throw err;
    }
    }

    static async getTotalCount(query: any = {}) {
        try {
            const response = await DAO.countData(Models.Contact, query);
            return response;
        } catch (err) {
            throw err;
        }
    } 

    // Reply to a contact
    static async replyToContact(contactId: string, message: string) {
    try {
        const reply = { message, createdAt: new Date() };
        const updatedContact = await Models.Contact.findByIdAndUpdate(
            contactId,
            { $push: { replies: reply } },
            { new: true, lean: true }
        );
        if (!updatedContact) throw await handleCustomError("NO_DATA_FOUND", "ENGLISH");
        return updatedContact;
    } catch (err) {
        throw err;
    }
    }

    // Delete a specific reply
    static async deleteReply(contactId: string, replyId: string) {
    try {
        const updatedContact = await Models.Contact.findByIdAndUpdate(
            contactId,
            { $pull: { replies: { _id: replyId } } },
            { new: true, lean: true }
        );
        if (!updatedContact) throw await handleCustomError("NO_DATA_FOUND", "ENGLISH");
        return updatedContact;
    } catch (err) {
        throw err;
    }
    }

   // =================== COURSE SERVICES ===================
   static async createCourse(data: any) {
    try {
        const course = await DAO.saveData(Models.Course, data);
        return course;
    } catch (err) {
        throw err;
    }
   }

   static async updateCourse(id: string, data: any) {
    try {
        const query = { _id: id };
        const options = { new: true };
        const updatedCourse = await DAO.findAndUpdate(Models.Course, query, data, options);
        return updatedCourse;
    } catch (err) {
        throw err;
    }
   }

   static async getAllCourses() {
    try {
        const courses = await DAO.getData(Models.Course, {}, {}, { lean: true, sort: { createdAt: -1 } });
        return courses;
    } catch (err) {
        throw err;
    }
   }

static async getCourseById(id: string) {
    try {
        const courses = await DAO.getData(Models.Course, { _id: id }, {}, { lean: true });
        return courses[0];
    } catch (err) {
        throw err;
    }
}

static async deleteCourse(id: string) {
  try {
    await DAO.removeData(Models.Course, { _id: id });
  } catch (err) {
    throw err;
  }
}

// =================== BLOG SERVICES =================== 

static async createBlog(data: any) {
  try {
    return await DAO.saveData(Models.Blog, data);
  } catch (err) {
    throw err;
  }
}

static async getAllBlogs() {
  try {
    return await DAO.getData(Models.Blog, {}, {}, { sort: { createdAt: -1 } });
  } catch (err) {
    throw err;
  }
}

static async getBlogById(id: string) {
  try {
    return await DAO.getSingleData(Models.Blog, { _id: id });
  } catch (err) {
    throw err;
  }
}

static async updateBlog(id: string, data: any) {
  try {
    return await DAO.findAndUpdate(Models.Blog, { _id: id }, data, { new: true });
  } catch (err) {
    throw err;
  }
}

static async deleteBlog(id: string) {
  try {
    await DAO.removeData(Models.Blog, { _id: id });
  } catch (err) {
    throw err;
  }
}
}

export default adminServices;
