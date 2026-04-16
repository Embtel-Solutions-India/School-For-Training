import BreadCumb from "../Components/Common/BreadCumb";
import ContactInfo2 from "../Components/ContactInfo/ContactInfo2";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Faq2 from "../Components/Faq/Faq2";

const FaqPage = () => {
    return (
        <div>
             <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="FAQ"
                Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
            ></BreadCumb>   
            <Faq2></Faq2>  
            <ContactInfo2></ContactInfo2>
            <Nwesletter addclass="newsletter-section bg-white"></Nwesletter>               
        </div>
    );
};

export default FaqPage;