import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Faq2 from "../Components/Faq/Faq2";
import Pricing3 from "../Components/Pricing/Pricing3";

const PricingPage = () => {
    return (
        <div>
             <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Pricing"
                Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
            ></BreadCumb>   
            <Pricing3></Pricing3>  
            <Faq2></Faq2>  
            <Nwesletter addclass="newsletter-section bg-white"></Nwesletter>      
        </div>
    );
};

export default PricingPage;