import BlogGrid from "../Components/Blog/BlogGrid";
import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";

const BlogGridPage = () => {
    return (
        <div>
             <BreadCumb
                bg="/assets/New images/WhyUs.jpg"
                Title="Blogs"
                Content="Completely transform careers with practical, industry-focused learning. <br> Empowering students with real skills for real opportunities."
            ></BreadCumb>      
            <BlogGrid></BlogGrid>
            <Nwesletter addclass="newsletter-section"></Nwesletter>       
        </div>
    );
};

export default BlogGridPage;