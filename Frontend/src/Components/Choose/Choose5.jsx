import { Link } from "react-router-dom";

const Choose5 = () => {
    return (
        <section className="planning-section space bg-white">
            <div className="p-top-right wow slideInRight"><img src="/assets/images/choose/shape01.png" alt="Planning shape" /></div>
            <div className="container">
                <div className="row gy-30 align-items-center">
                    <div className="col-lg-6">
                        <div className="planning-image-box">
                            <img className="image wow img-custom-anim-left" src="/assets/images/resource/planning01.jpg" alt="Planning image" />
                            <div className="since-box">
                                <div className="inner-box">
                                     <div className="icon-box">
                                        <span className="icon"><i className="icon-since"></i></span>
                                    </div>
                                    <h5 className="since">SINCE 2007</h5>
                                    <div className="text">Providing marketing solutions client satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                       <div className="planning-content-wrapper">
                            <div className="title-area two">
                                <div className="sub-title"><span><i className="asterisk"></i></span>BUSINESS PLANNING</div>
                                <h2 className="sec-title">We make the most creative <br/> <span className="bold">digital solutions</span> and best <br/> business consult</h2>
                                <p className="sec-text text-gray">Collaboratively supply bricks-and-clicks metrics for maintainable users reinvent unique value for just in time consult provide access to cost effective strategic theme areas with adaptive</p>
                            </div>
                            <div className="feature-grid mb-20">
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>End-to-End finance solution</p>
                                </div>
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>High standards in networks</p>
                                </div>
                            </div>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>Competently architect market</p>
                                </div>
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>Collaboration and idea-sharing</p>
                                </div>
                            </div>
                            <div className="py-35"><div className="border"></div></div>
                            <div className="planning-btn d-flex gap-15 align-items-center">
                                <Link to="/contact" className="theme-btn bg-dark">
                                    <span className="link-effect">
                                        <span className="effect-1">Contact With Us</span>
                                        <span className="effect-1">Contact With Us</span>
                                    </span><i className="bi bi-arrow-right"></i>
                                </Link>
                                <a href="tel:+181234567890" className="contact-info">
                                    <div className="icon"><i className="icon-phone-circle-small"></i></div>
                                    <div className="number">+18 123 (4567) 890</div>
                                </a>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose5;