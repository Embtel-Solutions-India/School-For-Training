import { Link } from "react-router-dom";

const Pricing2 = () => {
    return (
        <section className="pricing-section style-2 space bg-dark">
        <div className="container">
            <div className="title-area three white text-center">
                <div className="sub-title"><span><i className="asterisk"></i></span>PRICING PLANS</div>
                <h2 className="sec-title">awesome rate <span className="bold text-theme2">pricing plans</span> <br/> join us today</h2>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="pricing-table">
                        <table>
                            <thead>
                                <tr className="table-header">
                                    <th className="features-header">*Features</th>
                                    <th className="pricing-header standard">
                                        <span className="pricing-type">Standard</span>
                                        <span className="pricing-amount">
                                            <span className="price">39</span>
                                            <span className="duration">/ month*</span>
                                        </span>
                                    </th>
                                    <th className="pricing-header pro">
                                        <span className="pricing-type">Pro</span>
                                        <span className="pricing-amount">
                                            <span className="price">89</span>
                                            <span className="duration">/ month*</span>
                                        </span>
                                    </th>  
                                    <th className="pricing-header plus">
                                        <span className="pricing-type">Plus</span>
                                        <span className="pricing-amount">
                                            <span className="price">99</span>
                                            <span className="duration">/ month*</span>
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="feature-row">
                                    <td className="feature-name">Business Solutions</td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                </tr>
                                <tr className="feature-row">
                                    <td className="feature-name">Unlimited Projects</td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                </tr>
                                <tr className="feature-row">
                                    <td className="feature-name">Great Customers Support</td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                </tr>
                                <tr className="feature-row">
                                    <td className="feature-name">Orientation for Business</td>
                                    <td className="unavailable"><i className="fa-regular fa-xmark"></i></td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                </tr>
                                <tr className="feature-row">
                                    <td className="feature-name">Market Growth Solutions</td>
                                    <td className="unavailable"><i className="fa-regular fa-xmark"></i></td>
                                    <td className="unavailable"><i className="fa-regular fa-xmark"></i></td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                </tr>
                                <tr className="feature-row">
                                    <td className="feature-name">Auto Renewal</td>
                                    <td className="unavailable"><i className="fa-regular fa-xmark"></i></td>
                                    <td className="unavailable"><i className="fa-regular fa-xmark"></i></td>
                                    <td className="available"><i className="icon-checkmark-small"></i></td>
                                </tr>
                                <tr className="feature-row">
                                    <td className="guarantee-text"><i className="fa-regular fa-circle-check"></i>30 days money-back guarantee</td>
                                    <td className="standard-btn">
                                        <Link to="/pricing" className="theme-btn bg-dark3">
                                            <span className="link-effect">
                                                <span className="effect-1">Choose Now</span>
                                                <span className="effect-1">Choose Now</span>
                                            </span>
                                        </Link>
                                    </td>
                                    <td className="pro-btn">
                                        <Link to="/pricing" className="theme-btn bg-theme2">
                                            <span className="link-effect">
                                                <span className="effect-1">Choose Now</span>
                                                <span className="effect-1">Choose Now</span>
                                            </span>
                                        </Link>
                                    </td>
                                    <td className="plus-btn">
                                        <Link to="/pricing" className="theme-btn bg-dark3">
                                            <span className="link-effect">
                                                <span className="effect-1">Choose Now</span>
                                                <span className="effect-1">Choose Now</span>
                                            </span>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Pricing2;