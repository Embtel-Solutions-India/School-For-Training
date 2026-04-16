import ContactForm from "./ContactForm";

const ContactInfo1 = () => {
  return (
    <section className="contact-section space bg-white">
      <div className="p-top-left wow slideInLeft">
        <img src="/assets/images/contact/shape01.png" alt="Service shape" />
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column - Contact Form */}
          <div className="col-lg-6">
            <ContactForm />
          </div>

          <div className="col-lg-1 lg-d-none"></div>

          {/* Right Column - Contact Info */}
          <div className="col-lg-5">
            <div className="contact-content-wrap">
              <div className="title-area">
                <div className="sub-title">
                  <span>
                    <i className="asterisk"></i>
                  </span>
                  Free Consultation
                </div>
                <h2 className="sec-title">
                  Need Guidance? <br /> Talk to {" "}
                  <span className="bold"> Our Career Advisors</span>
                </h2>
              </div>

              <div className="contact-img br-10 overlay-anim1">
                <img
                  className="hover-reveal-item"
                  // src="/assets/images/contact/01.jpg"
                  src="/assets/images/liveimages/contact01.png"
                  alt="Contact"
                />
                <a href="+126083456789" className="contact-info">
                  <div className="icon">
                    <i className="icon-phone-circle"></i>
                  </div>
                  <div className="number">+12 608 (3456) 789</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo1;
