import { Link } from "react-router-dom";
import data from '../../Data/services1.json';

const Services2 = () => {
    return (
<section className="service-section style-2 bg-white">
            <div className="container space">
                <div className="row gy-30">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-content-wrap">
                            <div className="title-area two">
                                <div className="sub-title"><span><i className="asterisk"></i></span>Services</div>
                                <h2 className="sec-title">Providing the best <br/> <span className="bold">digital business</span> <br/> solutions</h2>
                            </div>
                            <Link to="/about" className="theme-btn bg-theme3">
                                <span className="link-effect">
                                    <span className="effect-1">All Services</span>
                                    <span className="effect-1">All Services</span>
                                </span><i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    {data.map((item, index)=>(
                    <div key={index} className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft">
                        <div className="service-single-box">
                            <div className="inner-box">
                                <div className="icon"><i className={item.icon}></i></div>
                                <div className="border mt-50 xs-mt-40 mb-30"></div>
                                <h4 className="title">{item.title}</h4>
                                <p className="text">{item.desc}</p>
                                <Link to={item.btnLink} className="theme-btn service-btn">
                                <i className="bi bi-plus-lg"></i>
                                    <span className="link-text">{item.btnText}</span>
                                </Link>
                                <span className="serial">{item.number}</span>
                                <div className="path__shape"></div>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services2;