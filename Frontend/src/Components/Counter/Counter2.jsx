const Counter2 = () => {
  return (
    <section className="counter-section py-80 bg-theme2">
      <div className="p-top-left wow slideInLeft">
        <img src="/assets/images/counter/shape01.png" alt="Counter shape" />
      </div>
      <div className="p-bottom-right wow slideInRight">
        <img src="/assets/images/counter/shape02.png" alt="Counter shape" />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="title-area mb-0 md-mb-40">
              <h2 className="sec-title mb-0">
                {" "}
                Our Student Success <br />
                Track <span className="bold">Record</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="achievement-stats">
              <div className="stat-item">
                <div className="count-box">
                  <span className="count-number odometer" data-count="10">
                    11
                  </span>
                  k+
                </div>
                <p className="text">Successful Graduates</p>
              </div>
              <div className="stat-item">
                <div className="count-box">
                  <span className="count-number odometer" data-count="97">
                    90
                  </span>
                  %
                </div>
                <p className="text">Course Completion Rate</p>
              </div>
              <div className="stat-item">
                <div className="count-box">
                  <span className="count-number odometer" data-count="100">
                    20
                  </span>
                  +
                </div>
                <p className="text"> Industry-Experienced Instructors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter2;
