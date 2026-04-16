// import Choose4 from "../Components/Choose/Choose4";
// import BreadCumb from "../Components/Common/BreadCumb";
// // import ContactInfo4 from "../Components/ContactInfo/ContactInfo4";
// import Nwesletter from "../Components/ContactInfo/Nwesletter";
// // import Marquee from "../Components/Marquee/Marquee";
// // import Pricing3 from "../Components/Pricing/Pricing3";
// // import Process4 from "../Components/Process/Process4";
// import Services4 from "../Components/Services/Services4";

// const ServicePage = () => {
//     return (
//         <div>
//              <BreadCumb
//                 bg="/assets/New images/WhyUs.jpg"
//                 Title="Courses"
//                 Content="Completely transform careers with practical, industry-focused learning. <br> Empowering students with real skills for real opportunities.">
//             </BreadCumb>
//             <Choose4></Choose4>
//             {/* <Marquee></Marquee>    */}
//             <Services4></Services4>
//             {/* <Process4></Process4>   */}
//             {/* <Pricing3></Pricing3> */}
//             {/* <ContactInfo4></ContactInfo4>  */}
//             <Nwesletter addclass="newsletter-section"></Nwesletter>
//         </div>
//     );
// };

// export default ServicePage;

import { useEffect } from "react";
import Choose4 from "../Components/Choose/Choose4";
import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Services4 from "../Components/Services/Services4";

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BreadCumb
        bg="/assets/New images/WhyUs.jpg"
        Title="Courses"
        Content="Completely transform careers with practical, industry-focused learning. <br> Empowering students with real skills for real opportunities."
      />
      <Choose4 />
      <Services4 />
      <Nwesletter addclass="newsletter-section" />
    </div>
  );
};

export default ServicePage;
