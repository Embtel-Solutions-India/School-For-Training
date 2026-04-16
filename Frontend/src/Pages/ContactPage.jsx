// import BreadCumb from "../Components/Common/BreadCumb";
// import ContactInfo3 from "../Components/ContactInfo/ContactInfo3";
// import Nwesletter from "../Components/ContactInfo/Nwesletter";

// const ContactPage = () => {
//   return (
//     <div style={{ backgroundColor: "white" }}>
//       <BreadCumb
//         bg="/assets/New images/WhyUs.jpg"
//         Title="Contact Us"
//         Content="Completely transform careers with practical, industry-focused learning. <br> Empowering students with real skills for real opportunities."
//       ></BreadCumb>
//       <ContactInfo3></ContactInfo3>
//       <div className="container" style={{ height: "130px" }}></div>
//       <Nwesletter addclass="newsletter-section bg-white"></Nwesletter>
//     </div>
//   );
// };

// export default ContactPage;

import { useEffect } from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import ContactInfo3 from "../Components/ContactInfo/ContactInfo3";
import Nwesletter from "../Components/ContactInfo/Nwesletter";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      <BreadCumb
        bg="/assets/New images/WhyUs.jpg"
        Title="Contact Us"
        Content="Completely transform careers with practical, industry-focused learning. <br> Empowering students with real skills for real opportunities."
      />
      <ContactInfo3 />
      <div className="container" style={{ height: "130px" }}></div>
      <Nwesletter addclass="newsletter-section bg-white" />
    </div>
  );
};

export default ContactPage;
