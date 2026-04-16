import About5 from "../Components/About/About5";
import Benifit from "../Components/Benefit/Benifit";
import Choose5 from "../Components/Choose/Choose5";
import BreadCumb from "../Components/Common/BreadCumb";
import ContactInfo4 from "../Components/ContactInfo/ContactInfo4";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Faq2 from "../Components/Faq/Faq2";
import Process5 from "../Components/Process/Process5";
import Video from "../Components/Video/Video";

const ServiceDetailPage = () => {
    return (
        <div>
            <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Business Intelligence"
                Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
            ></BreadCumb> 
            <Choose5></Choose5> 
            <Benifit></Benifit>
            <Video></Video>
            <Process5></Process5>
            <About5></About5>
            <Faq2></Faq2>
            <ContactInfo4></ContactInfo4> 
            <Nwesletter addclass="newsletter-section"></Nwesletter>                       
        </div>
    );
};

export default ServiceDetailPage;