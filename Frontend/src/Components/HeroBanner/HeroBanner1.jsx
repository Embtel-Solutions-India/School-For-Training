import parse from "html-react-parser";
import { Link } from "react-router-dom";

const HeroBanner1 = ({
  title,
  subtitle,
  btnname,
  btnurl,
  mainimg,
  customers,
  rating,
  review,
}) => {
  return (
    <div>
      <section className="hero-section">
        <div
          className="p-top-left wow slideInLeft"
          data-wow-delay="500ms"
          data-wow-duration="1000ms"
        >
          <img src="/assets/images/banner/shape01.png" alt="shape" />
        </div>
        <div
          className="shape-mockup spin2 d-none d-xxl-block hero-shape-mockup1"
          data-top="23%"
          data-left="48%"
        >
          <img src="/assets/images/shapes/star.png" alt="shape" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <h1 className="text-white">{parse(title)}</h1>
                <p className="text-white">{parse(subtitle)}</p>
                <Link to={btnurl} className="theme-btn">
                  <span className="link-effect">
                    <span className="effect-1">{btnname}</span>
                    <span className="effect-1">{btnname}</span>
                  </span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-img p-top-right">
          <img src={mainimg} alt="hero" />
        </div>

        <div className="hero-info-wrapper d-flex align-items-end">
          <div className="d-flex flex-wrap mt-3">
            <div className="client-count-box infographic-box text-center angled-card">
              <div className="count-box mb-2">
                <div className="inner-count">
                  <span className="counter" data-target="15000">
                    3K+
                  </span>
                </div>
              </div>
              <div className="text">
                3,000+ Students
                <br />
                <strong>Trained & Thriving</strong>
              </div>
            </div>

            <div className="client-count-box infographic-box text-center">
              <div className="count-box mb-2">
                <div className="inner-count">
                  <span className="counter" data-target="80">
                    80%
                  </span>
                </div>
              </div>
              <div className="text">
                Learners Get Placed
                <br />
                <strong>Within 6 months</strong>
              </div>
            </div>

            <div className="client-count-box infographic-box text-center">
              <div className="count-box mb-2">
                <div className="inner-count">
                  <i className="bi bi-briefcase-fill fs-3 text-black"></i>
                </div>
              </div>
              <div className="text">
                Top companies <br />
                <strong>Hire Our Graduates</strong>
              </div>
            </div>
          </div>

          <div className="review-block pt-0.5" style={{ height: "100%" }}>
            <div className="hero-social-proof d-flex flex-column gap-4 py-4">
              <div className="social mb-2">
                <img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop&crop=faces"
                  alt="Client 01"
                  className="rounded-circle me-1"
                />
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=faces"
                  alt="Client 02"
                  className="rounded-circle me-1"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Client 03"
                  className="rounded-circle"
                />
              </div>

              <div className="happy-customers mb-1 text-white">{customers}</div>

              <div className="rating-viewers d-flex align-items-center justify-content-center">
                <i
                  className="bi bi-star-fill me-1"
                  style={{ color: "#fdaf08" }}
                ></i>
                <span className="rating">{rating}</span>
                <span className="count ms-1">{review}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner1;
