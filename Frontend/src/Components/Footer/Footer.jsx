import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section bg-dark">
      <div className="footer-top space">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 footer-brand">
              <div className="brand-header">
                <Link to="/" className="cs_site_branding">
                  <img
                    src="./sft_logo.png"
                    alt="Logo"
                    style={{ height: "48px", width: "auto" }}
                  />
                </Link>
                <p className="text">
                  Empowering learners with practical skills, <br /> expert
                  mentorship, and real-world training
                  <br />
                  to build strong tech careers.
                </p>
              </div>
              <div className="footer-social">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="row">
                <div className="col-lg-6 col-md-6 p-0 sm-pl-15">
                  <div className="footer-widget">
                    <h4 className="title">Quick Links</h4>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/courses">Courses</Link>
                      </li>
                      {/* <li>
                        <Link to="/team">Instructors</Link>
                      </li> */}
                      <li>
                        <Link to="/Testimonial">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 p-0 sm-pl-15">
                  <div className="footer-widget">
                    <h4 className="title">Courses</h4>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/project/project-details">
                          {" "}
                          Full Stack QA
                        </Link>
                      </li>
                      <li>
                        <Link to="/project/project-details">Cybersecurity</Link>
                      </li>
                      <li>
                        <Link to="/project/project-details">
                          Data Analytics + AI / AI Fundamentals{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/project/project-details">
                          Computer Fundamentals
                        </Link>
                      </li>
                      <li>
                        <Link to="/project/project-details">QuickBooks</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 md-d-none"></div>
            <div className="col-lg-3 col-md-4">
              <div className="footer-widget ml-0 mb-0">
                <h4 className="title">Newsletter</h4>
                <p className="text">Don’t miss the latest news</p>
                {/* <form className="newsletter-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                <div className="form-group">
                                    <input type="email" name="email" className="email" placeholder="Email Address" autoComplete="on"  />
                                    <button type="submit">
                                    <i className="bi bi-send"></i>
                                        <span className="btn-title"></span>
                                    </button>
                                </div>
                            </form> */}
                <div className="contact-btn">
                  <a
                    href="https://api.leadconnectorhq.com/widget/form/XvpypwEPXY6wJxjWjkLG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                  >
                    <span className="link-effect">
                      <span className="effect-1">Contact Us Now</span>
                      <span className="effect-1">Contact Us Now</span>
                    </span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>

                <br></br>
                <div className="notify">
                  {/* <div className="icon">
                    <i className="bi bi-bell"></i>
                  </div>{" "} */}
                  {/* Please sign up for notify any updates */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center mx-auto">
              <p className="mb-0">
                &copy;Copyright © 2026 Embtel Solutions- All Rights Reserved.
                Designed by Embtel Solutions, Inc{" "}
              </p>
            </div>

            {/* <div className="col-md-6 text-md-end">
              <div className="footer-policy">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Legal</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
