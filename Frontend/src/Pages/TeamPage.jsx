// import About4 from "../Components/About/About4";
// import BreadCumb from "../Components/Common/BreadCumb";
// import Nwesletter from "../Components/ContactInfo/Nwesletter";
// import Team3 from "../Components/Team/Team3";

// const TeamPage = () => {
//     return (
//         <div>
//             <BreadCumb
//                 bg="/assets/images/bg-img/breadcrumb.jpg"
//                 Title="Our Team"
//                 Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
//             ></BreadCumb>
//             <Team3></Team3>
//             <About4></About4>
//             <Nwesletter addclass="newsletter-section bg-image3 mt--75"></Nwesletter>
//         </div>
//     );
// };

// export default TeamPage;

import { useEffect } from "react";
import About4 from "../Components/About/About4";
import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Team3 from "../Components/Team/Team3";

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BreadCumb
        bg="/assets/images/bg-img/breadcrumb.jpg"
        Title="Our Team"
        Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
      />
      <Team3 />
      <About4 />
      <Nwesletter addclass="newsletter-section bg-image3 mt--75" />
    </div>
  );
};

export default TeamPage;
