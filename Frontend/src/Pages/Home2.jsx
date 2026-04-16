import About2 from "../Components/About/About2";
import Blog1 from "../Components/Blog/Blog1";
import Choose2 from "../Components/Choose/Choose2";
import ContactList from "../Components/ContactInfo/ContactList";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Faq1 from "../Components/Faq/Faq1";
import HeroBanner2 from "../Components/HeroBanner/HeroBanner2";
import Marquee2 from "../Components/Marquee/Marquee2";
import Project1 from "../Components/Project/Project1";
import Services2 from "../Components/Services/Services2";
import Team1 from "../Components/Team/Team1";
import Testimonial2 from "../Components/Testimonial/Testimonial2";

const Home2 = () => {
    return (
        <div>
            <HeroBanner2></HeroBanner2>
            <About2></About2>
            <Services2></Services2>
            <Choose2></Choose2>
            <Project1></Project1>
            <Faq1></Faq1>
            <Team1></Team1>
            <Testimonial2></Testimonial2>
            <Marquee2></Marquee2>
            <Blog1></Blog1>
            <ContactList></ContactList>
           <Nwesletter addclass="newsletter-section"></Nwesletter>
        </div>
    );
};

export default Home2;