import { useEffect } from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import ProjectDetails from "../Components/Project/ProjectDetails";

const ProjectDetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BreadCumb
        bg="/assets/New images/WhyUs.jpg"
        Title="Course Details"
        Content="Completely transform careers with practical, industry-focused learning. <br> Empowering students with real skills for real opportunities."
      />
      <ProjectDetails />
      <Nwesletter addclass="newsletter-section" />
    </div>
  );
};

export default ProjectDetailPage;
