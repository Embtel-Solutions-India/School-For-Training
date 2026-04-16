import { Link } from "react-router-dom";
import SkillBar from '../Skills/Skills1';
import data from '../../Data/skills1.json';

const About3 = () => {
    return (
        <section className="about-section style-3 space bg-theme3 overflow-hidden">
            <div className="p-top-right wow slideInRight"><img src="/assets/images/choose/shape01.png" alt="About shape" /></div>
            <div className="bg-path__shape"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 position-relative">

                        <div className="about-thumb">
                            <img src="/assets/images/about/home3-thumb.jpg" alt="About Thumb" />
                        </div>
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
                    <div className="col-lg-6">
                        <div className="about-content-wrapper ml-40 ml-ml-0">
                            <div className="title-area two">
                                <div className="sub-title">
                                    <span><i className="asterisk"></i></span>About Bentol
                                </div>
                                <h2 className="sec-title">
                                    Best powerful business <br />
                                    <span className="bold">consulting agency</span>
                                </h2>
                                <p className="sec-text text-gray">
                                    Collaboratively disintermediate one-to-one functionalities and long-term impactful granular consulting.
                                </p>
                            </div>

                            <div className="skills">
                                {data.map((skill, index) => (
                                    <SkillBar key={index} title={skill.title} percentage={skill.percentage} />
                                ))}
                            </div>
                            <ul className="features-list">
                                <li>Increasing your productivity for best sales</li>
                                <li>Audience growth & competitor analysis</li>
                            </ul>
                            <Link to="/about" className="theme-btn bg-dark mt-40">
                                <span className="link-effect">
                                    <span className="effect-1">More about</span>
                                    <span className="effect-1">More about</span>
                                </span>
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About3;
