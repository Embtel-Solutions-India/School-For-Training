import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const HeroBanner2 = () => {

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
        <section className="hero-section style-2">
            <div className="container-fluid">
                <div className="outer-box">
                    <div className="row gy-30">
                       
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <div className="p-top-right wow slideInRight" data-wow-delay="500ms" data-wow-duration="1000ms"><img src="/assets/images/banner/shape02.png" alt="shape" /></div>
                                <a className="popup-video" onClick={handelClick}  data-fancybox="video-gallery">
                                    <div className="inner-popup d-flex align-items-center">
                                        <span className="icon"><i className="bi bi-play-fill"></i></span>
                                        <p><strong>Watch</strong><br/>Bentol Story</p>
                                    </div>
                                </a>
                                <h1 className="title">Digital <span className="orange-dot"><i className="asterisk"></i></span> Solution <br/> Finance Consulting</h1>
                                <div className="pt-25 pb-30"><div className="border"></div></div>
                                <p className="text">Collaboratively disintermediate move to impacter <br/> compellingly web architectures</p>
                                <Link to="/team" className="theme-btn bg-theme">
                                    <span className="link-effect">
                                        <span className="effect-1">Free Consultation</span>
                                        <span className="effect-1">Free Consultation</span>
                                    </span><i className="bi bi-arrow-right"></i>
                                </Link>
                                <div className="since"><span>Since - 2006</span></div>
                            </div>
                        </div>

                        
                        <div className="circle-box xs-d-none">
                            <div className="logo-box"><img src="/assets/images/shapes/star2.png" alt="" /></div>
                            <div className="text-inner spin2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="250.5" height="250.5" viewBox="0 0 250.5 250.5">
                                    <path d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125" id="e-path-35ee1b2"></path>
                                    <text>
                                        <textPath id="e-text-path-35ee1b2" href="#e-path-35ee1b2" startOffset="0%">* IT BUSINESS  *  CONSULTANTIS  *  DEVELOPMENTS</textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
        
                        
                        <div className="col-lg-6">
                            <div className="hero-img br-10">
                                <img src="/assets/images/banner/hero2-img-1.jpg" alt="Consulting Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container space">
                <div className="hero-info-wrap">
                    <div className="row align-items-end gy-30">
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <h4>Get A free consultation</h4>
                            <form className="d-flex consulation-form" method="post" action="https://formspree.io/f/mzbnjrnb">
                                <input type="email" name="email" className="form-control" placeholder="Enter your E-Mail" required autoComplete="on" /> 
                                <button type="submit">
                                <i className="bi bi-arrow-right"></i>
                                    <span className="btn-title"></span>
                                </button>
                            </form>
                        </div>
        
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="hero-social-proof pl-25">
                                <div className="social">
                                    <img src="/assets/images/social/social-img01.jpg" alt="Client 01" />
                                    <img src="/assets/images/social/social-img02.jpg" alt="Client 02" />
                                    <img src="/assets/images/social/social-img03.jpg" alt="Client 03" />
                                </div>
                                <div className="happy-customers">
                                    <div className="text">Happy Customers</div>
                                    <div className="rating-viewers">
                                    <i className="bi bi-star-fill"></i>
                                        <span className="rating">4.8</span>
                                        <span className="count">(120K Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="success-rate-wrapper">
                                <div className="rate-circle">
                                    <span className="count-number odometer" data-count="95"></span>95%
                                </div>
                                <div className="content">
                                    <h4 className="title mb-5">Success Rate</h4>
                                    <p className="text">
                                        Credibly harness client-centrics prospective consultation
                                    </p>
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

export default HeroBanner2;