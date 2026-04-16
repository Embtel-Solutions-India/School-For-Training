import { Link } from "react-router-dom";

const Pricing1 = () => {
    return (
            <section className="pricing-section space bg-theme2">
            <div className="container">
                <div className="row gy-30">
                    <div className="col-lg-4">
                        <div className="pricing-content-wrap">
                            <div className="title-area">
                                <div className="sub-title"><span><i className="asterisk"></i></span>PRICING PLANS</div>
                                <h2 className="sec-title">Collaboratively on <br/><span className="bold">cheaf pricing plan</span><br/> for business</h2>
                            </div>
                            <div className="text">
                                <div className="icon"><i className="icon-arrow-up-right"></i></div>
                                <p>Collaboratively disintermediate <br/> impacter compellingly</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="pricing-card current">
                            <div className="pricing-plan">
                                <div className="path"><div className="hover"></div></div>
                                <h5 className="plan">Basic Plans</h5>
                                <p className="price">$39</p>
                                <p className="billing-cycle">monthly</p>
                            </div>
                            <ul className="features">
                                <li><span className="checkmark"><i className="bi bi-check-lg"></i></span> Timesheet top Scheduler</li>
                                <li><span className="checkmark"><i className="bi bi-check-lg"></i></span> Market Report Analysis</li>
                                <li><span className="checkmark"><i className="bi bi-check-lg"></i></span> Exclusive Manual</li>
                                <li><span className="checkmark"><i className="bi bi-check-lg"></i></span> Creative Leadership Team</li>
                                <li className="disabled"><span className="checkmark"><i className="bi bi-x"></i></span> 24 Hours Support</li>
                            </ul>
                            <Link to="/pricing" className="theme-btn bg-white w-100">
                                <span className="link-effect">
                                    <span className="effect-1">Join the Plan</span>
                                    <span className="effect-1">Join the Plan</span>
                                </span><i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="pricing-card">
                            <div className="recommended-badge">
                            <i className="bi bi-lightning-charge-fill"></i><span>Recommended</span>
                            </div>
                            <div className="pricing-plan">
                                <div className="path"><div className="hover"></div></div>
                                <h5 className="plan">Business Plan</h5>
                                <p className="price">$69</p>
                                <p className="billing-cycle">monthly</p>
                            </div>
                            <ul className="features">
                                <li><span className="checkmark"><i className="bi bi-check-lg"></i></span> Timesheet top Scheduler</li>
                                <li><span className="checkmark"><i className="bi bi-check-lg"></i></span> Market Report Analysis</li>
                                <li><span className="checkmark"><i className="bi bi-check-lg"></i></span> Exclusive Manual</li>
                                <li><span className="checkmark"><i className="bi bi-check-lg"></i></span> Creative Leadership Team</li>
                                <li><span className="checkmark"><i className="bi bi-check-lg"></i></span> 24 Hours Support</li>
                            </ul>
                            <Link to="/pricing" className="theme-btn bg-white w-100">
                                <span className="link-effect">
                                    <span className="effect-1">Join the Plan</span>
                                    <span className="effect-1">Join the Plan</span>
                                </span><i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Pricing1;