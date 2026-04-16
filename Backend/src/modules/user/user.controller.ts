import express, { response } from "express";
import * as DAO from "../../DAO/index";
import * as Models from "../../models/index";
import { handleCatch, handleCustomError, helpers, sendResponse } from "../../middlewares/index";
import { userForgetPasswordMail } from "../../middlewares/email_services"
import userServices from "./user.services";
import path from "path";
import fs from "fs";

class userController {

    static async signUp(req: any, res: express.Response) {
        try {
            let createUser = await userServices.createUser(req.body, req.files);
            sendResponse(res, createUser, "Your account is successfully created.")
        } catch (err) {
            handleCatch(res, err)
        }
    }

    static async edit(req: any, res: express.Response) {
        try {
            let { _id } = req.user_data;

            let createUser = await userServices.editUser(_id, req.body, req.files || null);
            sendResponse(res, createUser, "Profile updated successfully.")
        } catch (err) {
            handleCatch(res, err)
        }
    }

    static async viewProfile(req: any, res: express.Response) {
        try {
            const { _id: user_id } = req.user_data;
            const query = { _id: user_id };

            const projection = {
                password: 0,
                otp: 0,
                security_code: 0,
            } as const;

            const options = { lean: true };

            const response = await Models.User.findOne(query, projection, options)
                .populate({
                    path: 'interestedProjects',
                })
                .lean();

            sendResponse(res, response, 'Success');
        } catch (err) {
            handleCatch(res, err);
        }
    }

    static async emailVerification(req: any, res: express.Response) {
        try {
            let { security_code, language = 'ENGLISH' } = req.query
            let query = { security_code: security_code }
            let projection = { __v: 0 }
            let options = { lean: true }
            let fetch_data: any = await DAO.getData(Models.User, query, projection, options)

            if (fetch_data.length > 0) {
                let { _id } = fetch_data[0]

                let query = { _id: _id }
                let update = { email_varification: 1 }
                let options = { new: true }
                await DAO.findAndUpdate(Models.User, query, update, options)

                let message = 'Email Successfully verified!'

                if (message) {
                    let query = { _id: _id }
                    let update = { security_code: null }
                    let options = { new: true }
                    await DAO.findAndUpdate(Models.User, query, update, options)
                }
                return res.redirect('http://49.249.236.30:3009/login');

            } else {
                throw await handleCustomError("LINK_EXPIRED", language)
            }
        } catch (err) {
            handleCatch(res, err)
        }
    }

    static async login(req: any, res: express.Response) {
        try {
            let { email, password: input_password, language = "ENGLISH" } = req.body
            let response: any

            let query = { email: email.toLowerCase() }
            let projection = { __v: 0 }
            let options = { lean: true }
            let fetch_data: any = await DAO.getData(Models.User, query, projection, options)
            if (fetch_data.length) {
                let { _id, password } = fetch_data[0]
                let decryt = await helpers.decrypt_password(input_password, password)

                if (decryt !== true) {
                    throw await handleCustomError("INCORRECT_PASSWORD", language)
                } else {
                    let generate_token = await userServices.generateUserToken(_id)
                    response = await userServices.makeAdminResponse(generate_token, language)

                    let resp = {
                        user_details: {
                            _id: response._id,
                            email: response.email,
                            user_type: response.user_type,
                            role: response.role,
                            name: response.name,
                            access_token: response.access_token,
                        },
                    }
                    // await welcomeMail(response)
                    sendResponse(res, response, "Successfully Logged In")
                }
            } else {
                throw await handleCustomError("EMAIL_NOT_REGISTERED", language)
            }

        } catch (err) {
            handleCatch(res, err)
        }
    }

    static async forgetPassword(req: any, res: express.Response) {
        try {
            let { email, language } = req.body
            let query = { email: email.toLowerCase() }
            let fetch_data: any = await userServices.verifyUser(query)

            if (fetch_data.length) {
                let { _id } = fetch_data[0]
                let security_code = await helpers.gen_unique_code(Models.User)

                let query = { _id: _id }
                let update = { security_code: security_code }
                let options = { new: true }
                let Update_data = await DAO.findAndUpdate(Models.User, query, update, options)


                await userForgetPasswordMail(Update_data)
                let message = "Reset Password Link is sent on your email."

                sendResponse(res, message, "Success")
            } else {
                throw await handleCustomError("EMAIL_NOT_REGISTERED", language)
            }

        } catch (err) {
            handleCatch(res, err)
        }
    }

    static async setNewPassword(req: any, res: express.Response) {
        try {
            let { password, security_code, language } = req.body
            let query = { security_code: security_code }
            let projection = { __v: 0 }
            let options = { lean: true }
            let fetch_data: any = await DAO.getData(Models.User, query, projection, options)

            if (fetch_data.length) {
                let { _id } = fetch_data[0]
                let bcrypt_password = await helpers.bcrypt_password(password)

                let query = { _id: _id }
                let update = { password: bcrypt_password }
                let options = { new: true }
                await DAO.findAndUpdate(Models.User, query, update, options)

                let message = 'New Password Set Successfully'

                if (message) {
                    let query = { _id: _id }
                    let update = { security_code: null }
                    let options = { new: true }
                    await DAO.findAndUpdate(Models.User, query, update, options)
                }

                sendResponse(res, message, "Success")
            } else {
                throw await handleCustomError("LINK_EXPIRED", language)
            }

        } catch (err) {
            handleCatch(res, err)
        }
    }

    static async changePassword(req: any, res: express.Response) {
        try {
            let { old_password, new_password, language = "ENGLISH" } = req.body
            let { _id } = req.user_data,
                session_data = req.session_data

            //check old password
            let query = { _id: _id }
            let projection = { __v: 0 }
            let options = { lean: true }
            let fetch_data: any = await DAO.getData(Models.User, query, projection, options)

            if (fetch_data.length) {
                let password = fetch_data[0].password
                let decrypt = await helpers.decrypt_password(old_password, password)
                if (!decrypt == true) {
                    throw await handleCustomError("OLD_PASSWORD_MISMATCH", language)
                } else {
                    let bcrypt = await helpers.bcrypt_password(new_password)
                    let query = { _id: _id }
                    let update = { password: bcrypt }
                    let options = { new: true }
                    await DAO.findAndUpdate(Models.User, query, update, options)

                    await userServices.makeAdminResponse(session_data, language)
                    let message = "Password changed Successfully"
                    sendResponse(res, null, message)

                }
            } else {
                throw await handleCustomError("UNAUTHORIZED", language);
            }
        } catch (err) {
            handleCatch(res, err)
        }
    }
    
// Create Contact    
    static async createContact(req: any, res: express.Response) {
    try {
        const { name, email, phone, message, language = "ENGLISH" } = req.body;

        if (!name || !email || !phone || !message) {
            throw await handleCustomError("ALL_FIELDS_REQUIRED", language);
        }

       const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            throw await handleCustomError("INVALID_EMAIL", language);
        }

        if (phone.length < 10) {
            throw await handleCustomError("INVALID_PHONE", language);
        }

        const response = await userServices.createContact(req.body);
        sendResponse(res, response, "Contact form submitted successfully");
    } catch (err) {
        handleCatch(res, err);
    }
}

// Get all courses
static async getAllCourses(req: any, res: express.Response) {
    try {
        const courses = await userServices.getAllCourses();
        sendResponse(res, courses, "All courses fetched successfully");
    } catch (err) {
        handleCatch(res, err);
    }
}

// Get single Course by ID
static async getCourseById(req: any, res: express.Response) {
    try {
        const { id } = req.params;
        const course = await userServices.getCourseById(id);
        sendResponse(res, course, "Course fetched successfully");
    } catch (err) {
        handleCatch(res, err);
    }
}

// Get All Blogs
static async getAllBlogs(req: any, res: express.Response) {
  try {
    const blogs = await userServices.getAllBlogs();
    sendResponse(res, blogs, "Blogs fetched successfully");
  } catch (err) {
    handleCatch(res, err);
  }
}

// Get Single Blog by ID
static async getBlog(req: any, res: express.Response) {
  try {
    const { id } = req.params;
    const blog = await userServices.getBlogById(id);
    sendResponse(res, blog, "Blog fetched successfully");
  } catch (err) {
    handleCatch(res, err);
  }
}

}

export default userController;