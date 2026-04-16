import { Link } from "react-router-dom";

const Choose1 = () => {
  return (
    <section className="choose-section space bg-theme3 overflow-hidden">
      <div className="p-top-right wow slideInRight">
        <img src="/assets/images/choose/shape01.png" alt="Choose shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 position-relative">
            <div className="choose-thumb">
              <img src="/assets/New images/Whyuss.jpg" alt="Choose Thumb" />
            </div>

            <div className="since-box">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon">
                    <i className="bi bi-compass"></i>
                  </span>
                </div>
                <h5 className="since"></h5>
                <div className="text">
                  Programs Designed for Real Career Success
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-content-wrapper">
              <div className="title-area two">
                <div className="sub-title">
                  <span>
                    <i className="asterisk"></i>
                  </span>
                  Why Choose Us
                </div>
                <h2 className="sec-title">
                  School for Training <br />{" "}
                  {/* <span className="bold"></span> */}
                </h2>
                <p className="sec-text text-gray">
                  Our programs are designed with one goal — helping you gain the
                  skills top employers need today. Every course includes
                  hands-on practice, real projects, internship support, and
                  mentorship.
                </p>
              </div>
              <div className="feature-grid">
                <div className="feature-item">
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                  <p>Learn From Senior Industry Professionals</p>
                </div>
                <div className="feature-item">
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                  <p>Hands-On, Project-Focused Learning</p>
                </div>
              </div>
              <div className="py-25">
                <div className="border"></div>
              </div>
              <div className="feature-grid">
                <div className="feature-item">
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                  <p>Updated Curriculum Aligned With Market Demand</p>
                </div>
                <div className="feature-item">
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                  <p>1:1 Career Guidance & Interview Support</p>
                </div>
              </div>
              <Link to="/courses" className="theme-btn bg-dark mt-35">
                <span className="link-effect">
                  <span className="effect-1">Explore Courses</span>
                  <span className="effect-1">Explore Courses</span>
                </span>
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose1;
