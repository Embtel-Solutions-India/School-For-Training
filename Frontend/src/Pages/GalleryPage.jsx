import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Gallery from "../Components/Gallery/Gallery";

const GalleryPage = () => {
    return (
        <div>
            <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Gallery"
                Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
            ></BreadCumb>  
            <Gallery></Gallery>   
            <Nwesletter addclass="newsletter-section bg-white"></Nwesletter>
        </div>
    );
};

export default GalleryPage;