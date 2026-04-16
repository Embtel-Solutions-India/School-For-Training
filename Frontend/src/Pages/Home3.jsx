import About3 from "../Components/About/About3";
import Blog1 from "../Components/Blog/Blog1";
import Choose3 from "../Components/Choose/Choose3";
import ContactList from "../Components/ContactInfo/ContactList";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Counter1 from "../Components/Counter/Counter1";
import HeroBanner3 from "../Components/HeroBanner/HeroBanner3";
import Marquee from "../Components/Marquee/Marquee";
import Pricing2 from "../Components/Pricing/Pricing2";
import Process2 from "../Components/Process/Process2";
import Project2 from "../Components/Project/Project2";
import Services3 from "../Components/Services/Services3";
import Team2 from "../Components/Team/Team2";
import Testimonial3 from "../Components/Testimonial/Testimonial3";

const Home3 = () => {
    return (
        <div>
            <HeroBanner3></HeroBanner3>
            <Services3></Services3>
            <About3></About3>
            <Choose3></Choose3>
            <Project2></Project2>
            <Counter1></Counter1>
            <Process2></Process2>
            <Pricing2></Pricing2>
            <Team2></Team2>
            <Testimonial3></Testimonial3>
            <Marquee></Marquee>
            <Blog1></Blog1>
           <ContactList></ContactList>
           <Nwesletter addclass="newsletter-section"></Nwesletter>            
        </div>
    );
};

export default Home3;