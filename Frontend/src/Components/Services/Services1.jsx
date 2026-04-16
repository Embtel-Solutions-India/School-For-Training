import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { courseAPI } from "../../API";
import { FaGraduationCap } from "react-icons/fa";

const Services1 = () => {
  const [courses, setCourses] = useState([]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        let data = await courseAPI.getAll();
        setCourses(data.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch courses", error);
      }
    };

    fetchCourses();
  }, []);

  const colorClass = (index) => {
    return index % 2 === 0 ? "bg-theme2" : "bg-theme";
  };

  const shapeImg = (index) =>
    index % 2 === 0 ? "box-shape.png" : "box-shape02.png";

  return (
    <section className="service-section overflow-hidden py-100">
      <div className="p-top-left wow slideInLeft">
        <img src="/assets/images/service/shape01.png" alt="shape" />
      </div>

      <div className="container">
        <div className="row gy-20 align-items-stretch">
          {/* LEFT TEXT SECTION */}
          <div className="col-lg-4 col-md-6">
            <div className="service-content-wrap h-100 d-flex flex-column justify-content-between">
              <div className="title-area two white">
                <div className="sub-title">
                  <span>
                    <i className="asterisk"></i>
                  </span>
                  Programs
                </div>

                <div className="title-wrap">
                  <h2 className="sec-title">Programs We Offer</h2>

                  <p className="sec-text">
                    Choose from our most in-demand training programs designed
                    for students, professionals, and career-switchers.
                  </p>
                </div>
              </div>

              <div className="service-btn-wrapper mt-4">
                <div className="service-btn">
                  <Link to="/courses">View All Programs</Link>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 1 : CARD 1 & 2 */}
          {courses.slice(0, 2).map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div
                  className={`service-single-box ${colorClass(index)} h-100`}
                >
                  <div className="inner-box d-flex flex-column h-100">
                    <div className="icon react-icon">
                      <FaGraduationCap />
                    </div>

                    <div className="d-flex justify-content-end mt-2">
                      <span className="date-text">
                        {formatDate(item.createdAt)}
                      </span>
                    </div>

                    <div className="border mt-40 mb-30"></div>

                    <h4 className="title">{item.title}</h4>
                    <p className="text">{item.shortDescription}</p>

                    <div style={{ marginTop: "auto" }}>
                      <Link
                        to={`/project/project-details?id=${item._id}`}
                        className="theme-btn service-btn"
                      >
                        <i className="bi bi-plus-lg"></i>
                        <span className="link-text">View Details</span>
                      </Link>
                    </div>

                    <div className="p-bottom-right wow slideInRight">
                      <img
                        src={`/assets/images/service/${shapeImg(index)}`}
                        alt="shape"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ROW 2 : CARD 3, 4, 5 */}
        <div className="row gy-30 mt-4">
          {courses.slice(2, 5).map((item, index) => {
            const actualIndex = index + 2;

            return (
              <div className="col-lg-4 col-md-6" key={actualIndex}>
                <div
                  className={`service-single-box ${colorClass(actualIndex)} h-100`}
                >
                  <div className="inner-box d-flex flex-column h-100">
                    <div className="icon react-icon">
                      <FaGraduationCap />
                    </div>

                    <div className="d-flex justify-content-end mt-2">
                      <span className="date-text">
                        {formatDate(item.createdAt)}
                      </span>
                    </div>

                    <div className="border mt-40 mb-30"></div>

                    <h4 className="title">{item.title}</h4>
                    <p className="text">{item.shortDescription}</p>

                    <div style={{ marginTop: "auto" }}>
                      <Link
                        to={`/project/project-details?id=${item._id}`}
                        className="theme-btn service-btn"
                      >
                        <i className="bi bi-plus-lg"></i>
                        <span className="link-text">View Details</span>
                      </Link>
                    </div>

                    <div className="p-bottom-right wow slideInRight">
                      <img
                        src={`/assets/images/service/${shapeImg(actualIndex)}`}
                        alt="shape"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services1;
