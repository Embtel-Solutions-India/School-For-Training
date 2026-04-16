import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Project3 from "../Components/Project/Project3";

const ProjectPage = () => {
    return (
        <div>
             <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Projects"
                Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
            ></BreadCumb>      
            <Project3></Project3>
            <Nwesletter addclass="newsletter-section"></Nwesletter>               
        </div>
    );
};

export default ProjectPage; 