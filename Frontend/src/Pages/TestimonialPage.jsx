import { useEffect } from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Testimonial5 from "../Components/Testimonial/Testimonial5";

const TestimonialPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BreadCumb
        bg="/assets/images/bg-img/breadcrumb.jpg"
        Title="Testimonial"
        Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
      />
      <Testimonial5 />
      <Nwesletter addclass="newsletter-section bg-image2" />
    </div>
  );
};

export default TestimonialPage;
