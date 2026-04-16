import { useEffect } from "react";
import About2 from "../Components/About/About2";
import Choose1 from "../Components/Choose/Choose1";
import BreadCumb from "../Components/Common/BreadCumb";
import Counter2 from "../Components/Counter/Counter2";
import Marquee from "../Components/Marquee/Marquee";
import Process3 from "../Components/Process/Process3";
import Services1 from "../Components/Services/Services1";
import About1 from "../Components/About/About1";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BreadCumb
        bg="/assets/New images/WhyUs.jpg"
        Title="About Us"
        Content="Completely transform careers with practical, industry-focused learning. <br> Empowering students with real skills for real opportunities."
      />

      <About2 />
      <Marquee />

      <About1
        subtitle="ABOUT US"
        title="Empowering students with the most<br> <span class='bold'>practical and job-oriented skills</span> <br> for long-term career success"
        rotatetext="* Tech Education  *   Career Training  *  Job Placement Support"
        subtitle2="SINCE 2006"
        content="Providing high-quality training with expert instructors,
real-time practical exposure, and a focused learning
environment designed to help every student grow
confidently and achieve their professional goals."
        btnname="Learn More"
        expyear="10K"
        exptitle="<span class='fw-semibold'>Hours of</span> <br>Live Training Delivered"
        avatar="/assets/images/liveimages/about02.png"
      />

      <Process3 />
      <Choose1 />
      <Counter2 />
      <Services1 />
    </div>
  );
};

export default About;
