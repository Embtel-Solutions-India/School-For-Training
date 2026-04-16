import { Link } from "react-router-dom";

const ContactInfo4 = () => {
    return (
    <section className="cta-section space-bottom bg-theme3">
            <div className="container border-top space-top">
                <div className="row gy-30 align-items-center">
                    <div className="col-lg-6">
                        <div className="cta-content-wrapper">
                            <div className="title-area two">
                                <h2 className="sec-title">Lets <span className="bold">collaborate</span> with us!</h2>
                                <p className="sec-text text-gray">Collaboratively supply bricks-and-clicks metrics for maintainable users from <br/> reinvent unique value for just in time consult.</p>
                            </div>
                            <Link to="/contact" className="theme-btn bg-dark">
                                <span className="link-effect">
                                    <span className="effect-1">Connect With Us</span>
                                    <span className="effect-1">Connect With Us</span>
                                </span><i className="bi bi-arrow-right"></i>
                            </Link>
                       </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image-grid">
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="lines2">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="image-box">
                                <div className="image-item"><img src="/assets/images/cta/img01.jpg" alt="Person 1" /></div>
                                <div className="image-item"><div className="icon"><i className="icon-handshake"></i></div></div>
                                <div className="image-item"><img src="/assets/images/cta/img02.jpg" alt="Person 3" /></div>
                                <div className="image-item"><img src="/assets/images/cta/img03.jpg" alt="Person 4" /></div>
                                <div className="image-item"><img src="/assets/images/cta/img04.jpg" alt="Person 5" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo4;