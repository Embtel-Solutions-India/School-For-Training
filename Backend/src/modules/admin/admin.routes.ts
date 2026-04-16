import express from "express";
import adminController from "./admin.controller";
import authenticator from "../../middlewares/authenticator";
import userController from "../user/user.controller";

const router = express.Router();

// Profile apis
router.post("/login", adminController.login)
router.get("/view-profile", authenticator, adminController.viewProfile)
router.post("/update-profile", authenticator, adminController.updateProfile)
router.put("/forgot-password", adminController.forgetPassword)
router.post("/set-new-password", adminController.setNewPassword)
router.post("/check-security-code", adminController.checkSecurityCode)
router.put("/change-password", authenticator, adminController.changePassword)
router.get("/get-all-users", adminController.getUsers);
router.patch("/approve/:id", authenticator, adminController.approveUser);

// Contact routes
router.get("/contact", authenticator, adminController.getAllContacts);
router.get("/contact/:id", authenticator, adminController.getSingleContact);
router.delete("/contact/:id", authenticator, adminController.deleteContact);
// Reply to contact
router.post("/contact/:id/reply", authenticator, adminController.replyContact);
// Delete a reply
router.delete("/contact/:contactId/reply/:replyId", authenticator, adminController.deleteReply);

//----------------------------COURSE ROUTES-----------------------
router.post("/create-course", authenticator, adminController.createCourse);
router.get("/course", authenticator, adminController.getAllCourses);
router.get("/course/:id", authenticator, adminController.getCourseById);
router.patch("/course/:id", authenticator, adminController.updateCourse);
router.delete("/course/:id", authenticator, adminController.deleteCourse);

// ------------------------- BLOG MANAGEMENT ROUTES -------------------------
router.post("/blog", authenticator, adminController.createBlog);
router.get("/blogs", authenticator, adminController.getAllBlogs);
router.get("/blog/:id", authenticator, adminController.getBlog);
router.put("/edit-blog/:id", authenticator, adminController.updateBlog);
router.delete("/delete-blog/:id", authenticator, adminController.deleteBlog);

export default router;