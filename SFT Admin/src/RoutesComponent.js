import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import TermsAndCondition from "./pages/TermsAndCondition";
import Support from "./pages/Support";
import ContactsList from "./pages/contentmanagement/ContactsList";

// IMPORTS for Course Management
import CourseList from "./pages/contentmanagement/CourseList";
import CreateCourse from "./pages/contentmanagement/CreateCourse";
import EditCourse from "./pages/contentmanagement/EditCourse";

//IMPORTS FOR BLOG MANAGEMENT
import BlogList from "./pages/contentmanagement/BlogList";
import CreateBlog from "./pages/contentmanagement/CreateBlog";
import EditBlog from "./pages/contentmanagement/EditBlog";

function RoutesComponent() {
  return (
    <HashRouter>
      <ToastContainer />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/support" element={<Support />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />

          {/*CONTACT MANAGEMENT ROUTES */}
          <Route path="/contact" element={<ContactsList />} />

          {/*COURSE MANAGEMENT ROUTES */}
          <Route path="/courses" element={<CourseList />} />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/edit-course/:id" element={<EditCourse />} />

          {/*BLOG ROUTES */}
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default RoutesComponent;
