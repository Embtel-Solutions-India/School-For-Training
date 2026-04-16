import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Layout4 from "../Layout/Layout4";
import TeamPage from "../Pages/TeamPage";
import GalleryPage from "../Pages/GalleryPage";
import TestimonialPage from "../Pages/TestimonialPage";
import PricingPage from "../Pages/PricingPage";
import FaqPage from "../Pages/FaqPage";
import ContactPage from "../Pages/ContactPage";
import ServicePage from "../Pages/ServicePage";
import ServiceDetailPage from "../Pages/ServiceDetailPage";
import BlogGridPage from "../Pages/BlogGridPage";
import BlogListPage from "../Pages/BlogListPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import ProjectDetailPage from "../Pages/ProjectDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout4></Layout4>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/team",
        element: <TeamPage></TeamPage>,
      },
      {
        path: "/gallery",
        element: <GalleryPage></GalleryPage>,
      },
      {
        path: "/testimonial",
        element: <TestimonialPage></TestimonialPage>,
      },
      {
        path: "/pricing",
        element: <PricingPage></PricingPage>,
      },
      {
        path: "/faq",
        element: <FaqPage></FaqPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/courses",
        element: <ServicePage></ServicePage>,
      },
      {
        path: "/courses/course-details",
        element: <ServiceDetailPage></ServiceDetailPage>,
      },
      {
        path: "/blog",
        element: <BlogGridPage></BlogGridPage>,
      },
      {
        path: "/blog-sidebar",
        element: <BlogListPage></BlogListPage>,
      },
      {
        path: "/blog/blog-details",
        element: <BlogDetailsPage></BlogDetailsPage>,
      },
      {
        path: "/project/project-details",
        element: <ProjectDetailPage></ProjectDetailPage>,
      },
    ],
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  // {
  //   path: "home2",
  //   element: <Layout2></Layout2>,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home2></Home2>,
  //     },
  //   ],
  // },
  // {
  //   path: "home3",
  //   element: <Layout3></Layout3>,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home3></Home3>,
  //     },
  //   ],
  // },
]);
