import { Link } from "react-router-dom";

const Choose3 = () => {
    return (
        <section className="choose-section style-3 space bg-white">
            <div className="container">
                <div className="row gy-30 align-items-center">
                    <div className="col-lg-6">
                        <div className="choose-content-wrapper">
                            <div className="title-area two dark">
                                <div className="sub-title"><span><i className="asterisk"></i></span>Why Bentol</div>
                                <h2 className="sec-title">We make the creative digital <br/> <span className="bold">marketing</span> solutions</h2>
                                <p className="sec-text text-gray">Collaboratively supply bricks-and-clicks metrics for maintainable users <br/> reinvent unique value for just in time consult.</p>
                            </div>
                            <ul className="features-list">
                                <li>End-to-End marketing consulting solutions</li>
                                <li>Customized marketing blueprint professional consult</li>
                                <li>Designing & implementing multi-channel campaigns</li>
                            </ul>
                            <Link to="/contact" className="theme-btn bg-theme3 mt-45">
                                <span className="link-effect">
                                    <span className="effect-1">Contact Us</span>
                                    <span className="effect-1">Contact Us</span>
                                </span><i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-right-wrapper">
                            <img src="/assets/images/chart.png" alt="About Thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose3;