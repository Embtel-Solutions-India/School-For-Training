import { Link } from "react-router-dom";

const About4 = () => {
    return (
        <section className="join-section space pb-195 lg-pb-165 md-pb-155 vxs-60 bg-theme3 overflow-hidden">
            <div className="p-top-right wow slideInRight"><img src="/assets/images/team/join-shape01.png" alt="Join shape" /></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="join-thumb md-d-none">
                            <img src="/assets/images/team/thumb.jpg" alt="Join Thumb" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="join-content-wrapper">
                            <div className="title-area two">
                                <div className="sub-title"><span><i className="asterisk"></i></span>JOIN US NOW</div>
                                <h2 className="sec-title">Join our <span className="bold">expert team</span> & give <br /> your best responsibility</h2>
                                <p className="sec-text text-gray">Dramatically enable resource sucking improvement diverse user <br /> myocardinate introduces standards experiences had without pro <br /> best practices done reconceptualize</p>
                            </div>
                            <Link to="/team" className="theme-btn bg-dark mt-5">
                                <span className="link-effect">
                                    <span className="effect-1">Join Our Team</span>
                                    <span className="effect-1">Join Our Team</span>
                                </span><i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About4;