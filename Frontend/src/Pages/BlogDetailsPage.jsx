import { useEffect } from "react";
import BlogDetails from "../Components/Blog/BlogDetails";
import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";

const BlogDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BreadCumb
        bg="/assets/New images/WhyUs.jpg"
        Title="Blog Details"
        Content="Completely transform careers with practical, industry-focused learning. <br> Empowering students with real skills for real opportunities."
      />
      <BlogDetails />
      <Nwesletter addclass="newsletter-section" />
    </div>
  );
};

export default BlogDetailsPage;
