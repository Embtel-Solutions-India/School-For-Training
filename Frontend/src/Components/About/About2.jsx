import { Link } from "react-router-dom";

const About2 = () => {
  return (
    <section className="about-section style-2 space bg-theme3">
      <div className="container">
        <div className="row gy-30 align-items-center">
          {/* ---------- LEFT SIDE: Image Box ---------- */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div
              className="image-box overlay-anim2"
              style={{
                height: "100%",
                overflow: "hidden",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            >
              <img
                src="/assets/New images/AboutFour.jpg"
                alt="About Image"
                className="br-10 w-100 h-100 object-cover"
              />
            </div>
          </div>
          {/* ---------- END LEFT SIDE ---------- */}
          <div className="col-lg-3 col-md-12">
            <div className="about-right-wrap d-flex flex-column">
              {/* 🔹 First image box */}
              <div
                className="image-box overlay-anim2 overflow-hidden"
                style={{
                  height: "250px",
                  objectFit: "cover", // 👈 adjust this as per layout
                  borderRadius: "10px",
                }}
              >
                <img
                  src="/assets/New images/WhyUs.jpg"
                  alt="About Image"
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>

              {/* 🔹 Second box (achievement) */}
              <div
                className="achievement-box bg-theme2 br-10 overflow-hidden overlay-anim2"
                style={{
                  height: "290px", // 👈 smaller box height
                  borderRadius: "10px",
                  position: "relative",
                }}
              >
                <div className="p-bottom-right wow slideInRight position-absolute w-100 h-100">
                  <img
                    src="/assets/New images/AboutOne.jpg"
                    alt="shape"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-5 col-md-6 col-sm-6"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <div className="about-content-wrap">
              <div className="title-area twoT">
                <div className="sub-title">
                  <span>
                    <i className="asterisk"></i>
                  </span>
                  WHAT WE OFFER
                </div>
                <h2 className="sec-title">
                  Empowering students with practical skills <br />{" "}
                  <span className="bold">Building strong foundations</span>{" "}
                  <br /> and enhancing real-time learning exposure through
                  expert-led training programs.
                </h2>
              </div>
              <ul className="features-list">
                <li>Learn industry-ready skills</li>
                <li>Grow with confidence</li>
                <li>Advance your career with us</li>
              </ul>
              <Link to="/contact" className="theme-btn bg-dark mt-40">
                <span className="link-effect">
                  <span className="effect-1">Contact Us</span>
                  <span className="effect-1">Contact Us</span>
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

export default About2;
