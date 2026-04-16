import BlogList from "../Components/Blog/BlogList";
import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";

const BlogListPage = () => {
    return (
        <div>
             <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Blog List"
                Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
            ></BreadCumb>      
            <BlogList></BlogList>
            <Nwesletter addclass="newsletter-section"></Nwesletter>            
        </div>
    );
};

export default BlogListPage;