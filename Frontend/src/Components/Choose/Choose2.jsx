import { Link } from "react-router-dom";

const Choose2 = () => {
    return (
        <section className="choose-section style-2 bg-white">
            <div className="outer-box space bg-dark">
                <div className="p-top-right wow slideInRight"><img src="/assets/images/choose/shape02.png" alt="Choose Shape" /></div>
                <div className="shape-mockup spin2 d-none d-xxl-block" data-bottom="20%" data-right="8%"><img src="/assets/images/shapes/star4.png" alt="shape" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 position-relative">
                            <div className="choose-thumb">
                                <img src="/assets/images/choose/choose02.jpg" alt="Service" />
                            </div>
                            <div className="since-box">
                                <div className="inner-box">
                                    <div className="icon-box mb-60">
                                        <span className="icon"><i className="icon-growth-arrow"></i></span>
                                    </div>
                                    <div className="text d-flex gap-15">
                                        <div className="icon"><i className="icon-arrow-up-right"></i></div>
                                        <p>Collaboratively disints mediate impacter has compellingly</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose-content-wrapper pl-60 ltm-pl-0">
                                <div className="title-area two white">
                                    <div className="sub-title"><span><i className="asterisk"></i></span>Why Bentol</div>
                                    <h2 className="sec-title">We make the creative digital <br /> <span className="bold text-theme2">finance const.</span> solution</h2>
                                    <p className="sec-text">Collaboratively supply bricks-and-clicks metrics for maintainable users reinvent unique value for just in time consult.</p>
                                </div>
                                <ul className="features-list">
                                    <li>End-to-End marketing consulting solutions</li>
                                    <li>Customized marketing blueprint professional consult</li>
                                    <li>Designing & implementing multi-channel campaigns</li>
                                </ul>
                                <Link to="/service" className="theme-btn bg-border mt-45">
                                    <span className="link-effect">
                                        <span className="effect-1">All Services</span>
                                        <span className="effect-1">All Services</span>
                                    </span><i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Choose2;