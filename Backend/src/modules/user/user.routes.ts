import express from "express";
import userController from "./user.controller";
import authenticator from "../../middlewares/authenticator";
import { checkApproval } from "../../middlewares/checkAdminApproval";

const router = express.Router();

// USER ROUTES
router.post("/sign-up", userController.signUp);
router.post("/login", userController.login);
router.get("/view-profile", authenticator, userController.viewProfile);
router.post("/change-password", authenticator, userController.changePassword);
router.post("/forgot-password", userController.forgetPassword);
router.post("/set-new-password", userController.setNewPassword);
router.post("/edit", authenticator, userController.edit);

// CONTACT ROUTE
router.post("/contact", userController.createContact);

//COURSE ROUTE
router.get("/course", userController.getAllCourses);
router.get("/course/:id", userController.getCourseById);

//BLOG ROUTE
router.get("/blogs", userController.getAllBlogs);
router.get("/blog/:id", userController.getBlog);

export default router;
