import About1 from "../Components/About/About1";
// import Blog1 from "../Components/Blog/Blog1";
import Choose1 from "../Components/Choose/Choose1";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
// import ContactList from "../Components/ContactInfo/ContactList";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Counter2 from "../Components/Counter/Counter2";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
// import Marquee from "../Components/Marquee/Marquee";
// import Partner1 from "../Components/Partner/Partner1";
// import Pricing1 from "../Components/Pricing/Pricing1";
// import Process from "../Components/Process/Process";
import Services1 from "../Components/Services/Services1";
// import Services2 from "../Components/Services/Services2";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {

  return (
    <div>
      <HeroBanner1
        videotext="<strong>Watch</strong><br>Bentol Story"
        title="Launch Your Tech<br> <span class='bold'>Career With</span> <br>Industry-Led Training"
        subtitle="Master high-demand tech skills through expert-led,
career-focused programs in QA, Cybersecurity, Data
Analytics, AI & more. Learn online or in NYC — with
internship & job support included."
        btnname="Explore Courses"
        btnurl="/courses"
        mainimg="/assets/New images/Banner.jpg"
        Clientnumber="5k"
        Client="We Consultant Client World-wide"
        customers="Rated"
        rating="4.9/5"
        review="(by Our Learners)"
      ></HeroBanner1>

      <About1
        subtitle="ABOUT US"
        title="SCHOOL FOR TRAINING<br> <span class='bold'>Your Pathway to a</span> <br> High-Growth Tech Career"
        rotatetext="* Tech Education  *   Career Training  *  Job Placement Support"
        subtitle2="SINCE 2006"
        content="We provide practical, job-ready training in Full
Stack QA, Cybersecurity, Data Analytics, AI, and
more — delivered by industry professionals and
backed by internship + placement support."
        btnname="Learn More"
        expyear="10K"
        exptitle="<span class='fw-semibold'>Hours of</span> <br>Live Training Delivered"
        avatar="/assets/images/liveimages/about02.png"
      ></About1>

      <Choose1></Choose1>

      <Services1></Services1>

      <Counter2></Counter2>

      <Testimonial></Testimonial>

      <ContactInfo1></ContactInfo1>

      <Nwesletter addclass="newsletter-section"></Nwesletter>
    </div>
  );
};

export default Home;
