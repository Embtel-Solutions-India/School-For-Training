const Choose4 = () => {
  return (
    <section className="feature-section space bg-theme3">
      <div className="container">
        <div className="row gy-30">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="title-area mb-0">
              <div className="sub-title">
                <span>
                  <i className="asterisk"></i>
                </span>
                WHY US
              </div>
              <h2 className="sec-title mb-0">
                We provide the <br />
                best <span className="bold">learning</span> <br /> journey
              </h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="feature-single-box d-flex flex-column justify-content-center text-center"
              style={{ minHeight: "260px" }}
            >
              <div className="icon mb-3">
                <i className="icon-three-people"></i>
              </div>
              <h4 className="title">Successful Graduates</h4>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="feature-single-box">
              <div className="icon">
                <i className="icon-target"></i>
              </div>
              <h4 className="title">Course Completion Rate</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="feature-single-box">
              <div className="icon">
                <i className="icon-message"></i>
              </div>
              <h4 className="title">Industry-Experienced Instructors</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose4;
