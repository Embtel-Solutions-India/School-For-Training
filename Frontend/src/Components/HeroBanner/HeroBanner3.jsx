import { Link } from "react-router-dom";

const HeroBanner3 = () => {
    return (
        <section className="hero-section style-3">
            <div className="outer-box">
                <div className="content-area bg-theme3">
                    <div className="p-top-left wow slideInLeft" data-wow-delay="500ms" data-wow-duration="1000ms"><img src="/assets/images/banner/shape03.png" alt="shape" /></div>
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <div className="hero-content md-mb-50">
                                    <span className="sub-title"><i className="icon-small-hand"></i> Gorwth your Brand with Marketing</span>
                                    <h1 className="title">Innovative Approaches <br/> Branding Growth</h1>
                                    <div className="pt-30 pb-30"><div className="border"></div></div>
                                    <p className="text">Dramatically whiteboard visionary networks via wireless collaboration and <br/> idea-sharing efficiently procrastinate.</p>
                                    <div className="hero-btn d-flex gap-15 align-items-center">
                                        <Link to="/team" className="theme-btn bg-dark">
                                            <span className="link-effect">
                                                <span className="effect-1">Free Consultation</span>
                                                <span className="effect-1">Free Consultation</span>
                                            </span><i className="bi bi-arrow-right"></i>
                                        </Link>
                                        <a href="tel:+181234567890" className="contact-info">
                                            <div className="icon"><i className="icon-phone-circle-small"></i></div>
                                            <div className="number">+18 123 (4567) 890</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
            
                            <div className="col-lg-6">
                                <div className="hero-right">
                                    <div className="image-box">
                                        <div className="image-group">
                                            <div className="image1"><img className="img br-10" data-tilt src="/assets/images/banner/hero3-img-1.jpg" alt="People discussing" /></div>
                                            <div className="image2">
                                                <div className="inner-box">
                                                    <img className="img" src="/assets/images/banner/home3-img-2.png" alt="Person" />
                                                    <div className="ellipse-path"></div>
                                                    <div className="downloads-card">
                                                        <h5 className="download">Downloads</h5>
                                                        <span className="count-box">
                                                            <span className="count"><span className="count-text" data-speed="2000" data-stop="10">10</span>M</span>
                                                            <span className="icon"><i className="icon-recycle-arrow"></i></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info-box jump3">
                                            <img className="img" src="/assets/images/banner/marketer.jpg" alt="Marketer" />
                                            <div className="info">
                                                <h4 className="name">Jakulin Farna</h4>
                                                <p className="position">Professional marketer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="agency-info">
                                        <span className="icon"><i className="bi bi-send-fill"></i></span>
                                        <p>Marketing <br/> Agency</p>
                                    </div>
                                    <div className="dot-shape jump"><img src="/assets/images/banner/home3-dot-shape.png" alt="" /></div>
                                    <div className="circle-path_shape"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner3;