import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";


const Video = () => {

    const [iframeSrc, setIframeSrc] = useState('about:blank');
    const [toggle, setToggle] = useState(false);
  
    const handelClick = () => {
      setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
      setToggle(!toggle);
    };
    const handelClose = () => {
      setIframeSrc('about:blank');
      setToggle(!toggle);
    };

    return (
<div className="video-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="video-box">
                            <div className="video-thumb">
                                <a className="popup-video" onClick={handelClick} data-fancybox="video-gallery">
                                    <div className="inner-popup d-flex align-items-center">
                                        <span className="icon"><i className="bi bi-play-fill"></i></span>
                                        <p><strong>Watch</strong><br/>Bentol Story</p>
                                    </div>
                                </a>
                                <div className="image-box">
                                    <img className="wow img-custom-anim-left" src="/assets/images/video/thumb01.jpg" alt="" />
                                </div>
                            </div>
                            <div className="stats-container">
                                <div className="stat-box bg-theme2 br_tl-10 dark">
                                  <div className="count-box"><span className="count-number odometer" data-count="6">6</span>k+</div>
                                  <p className="text">Total work complete</p>
                                </div>
                                <div className="stat-box bg-dark br_br-10 white">
                                  <div className="count-box"><span className="count-number odometer" data-count="15">15</span>M+</div>
                                  <p className="text">Traffic Generates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}        
        ></VideoModal> 

        </div>

    );
};

export default Video;