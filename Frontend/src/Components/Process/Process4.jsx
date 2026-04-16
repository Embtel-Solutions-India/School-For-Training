import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";

const Process4 = () => {

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
<section className="process-section style-2 space bg-dark">
            <div className="container">
                <div className="row gy-30 align-items-center">
                    <div className="col-lg-6">
                        <div className="process-thumb mr-75 xxl-mr-0">
                            <div className="image-box">
                                <img className="wow img-custom-anim-left" src="/assets/images/process/home3-img01.jpg" alt="Process image" />
                                <div className="video-box">
                                    <div className="circle-box">
                                        <a className="popup-video" onClick={handelClick} data-fancybox="video-gallery">
                                        <i className="bi bi-play-fill"></i>
                                        </a>
                                        <div className="text-inner spin">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="250.5" height="250.5" viewBox="0 0 250.5 250.5">
                                                <path d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125" id="e-path-35ee1b2"></path>
                                                <text>
                                                    <textPath id="e-text-path-35ee1b2" href="#e-path-35ee1b2" startOffset="0%">* HR CONSULTANT * MARKETING * BUSINESS & FINANCE</textPath>
                                                </text>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="process-right-wrapper">
                            <div className="title-area two white">
                                <div className="sub-title"><span><i className="asterisk"></i></span>Work PROCESS</div>
                                <h2 className="sec-title">We follow the easy & simple <br/><span className="bold">work steps</span> for solution</h2>
                            </div>
                            <div className="process-list">
                                <div className="process-item">
                                    <div className="number">01.</div>
                                    <h3 className="title">Business Plan</h3>
                                    <p className="description">Collaboratively supply bricks to reinvent the unique time</p>
                                </div>
                                <div className="process-item">
                                    <div className="number">02.</div>
                                    <h3 className="title">Information gather</h3>
                                    <p className="description">Collaboratively supply bricks to reinvent the unique time</p>
                                </div>
                                <div className="process-item">
                                    <div className="number">03.</div>
                                    <h3 className="title">Competitor Analysis</h3>
                                    <p className="description">Collaboratively supply bricks to reinvent the unique time</p>
                                </div>
                                <div className="process-item">
                                    <div className="number">04.</div>
                                    <h3 className="title">Finished Project</h3>
                                    <p className="description">Collaboratively supply bricks to reinvent the unique time</p>
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

        </section>
    );
};

export default Process4;