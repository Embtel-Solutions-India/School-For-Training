import { Link } from "react-router-dom";

const ContactInfo2 = () => {
    return (
        <section className="faq-contact space bg-theme3">
            <div className="p-top-right wow slideInRight"><img src="/assets/images/team/join-shape01.png" alt="Join shape" /></div>
            <div className="container">
                <div className="row gy-30 align-items-center">
                    <div className="col-lg-6">
                        <div className="contact-thumb mr-55 lg-mr-0">
                            <div className="image-box">
                                <div className="thumb-bg"><img src="/assets/images/faq/inner-thumb-bg.png" alt="" /></div>
                                <div className="image"><img src="/assets/images/faq/inner-img01.png" alt="Faq Img" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                       <div className="faq-content-wrapper">
                            <div className="title-area two">
                                <div className="sub-title"><span><i className="asterisk"></i></span>CONTACT US</div>
                                <h2 className="sec-title">Our customer <span className="bold">services</span> <br/> ready to serve you</h2>
                                <p className="sec-text text-gray">Dramatically enable resource sucking improvement diverse user <br/> myocardinate introduces standards experiences had without pro <br/> best practices done reconceptualize</p>
                            </div>
                            <Link to="/contact" className="theme-btn bg-dark mt-5">
                                <span className="link-effect">
                                    <span className="effect-1">Contact with Us</span>
                                    <span className="effect-1">Contact with Us</span>
                                </span><i className="bi bi-arrow-right"></i>
                            </Link>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo2;