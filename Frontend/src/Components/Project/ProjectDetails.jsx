import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCourses, useCourseDetails } from "../../hooks/useCourses";
import LoadingSpinner from "../UI/LoadingSpinner";
import CourseNavigation from "./CourseNavigation";
import CourseDetailsCard from "./CourseDetailsCard";
import ConsultingBox from "./ConsultingBox";
import { Accordion, Button, Card } from "react-bootstrap";
import parse from "html-react-parser";

const ProjectDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const courseId = searchParams.get("id");

  const { courses, loading: coursesLoading } = useCourses();
  const { course, loading: courseLoading } = useCourseDetails(courseId);
  const [currentCourse, setCurrentCourse] = useState(null);

  useEffect(() => {
    if (course) {
      setCurrentCourse(course);
    } else if (!courseId && courses.length > 0) {
      setCurrentCourse(courses[0]);
    }
  }, [course, courseId, courses]);

  const handleNavigateCourse = (id) => {
    setSearchParams({ id });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handlePrevious = () => {
    if (!currentCourse || courses.length === 0) return;
    const currentIndex = courses.findIndex(
      (c) => (c._id || c.id) === (currentCourse._id || currentCourse.id),
    );
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : courses.length - 1;
    const prevCourse = courses[prevIndex];
    handleNavigateCourse(prevCourse._id || prevCourse.id);
  };

  const handleNext = () => {
    if (!currentCourse || courses.length === 0) return;
    const currentIndex = courses.findIndex(
      (c) => (c._id || c.id) === (currentCourse._id || currentCourse.id),
    );
    const nextIndex = currentIndex < courses.length - 1 ? currentIndex + 1 : 0;
    const nextCourse = courses[nextIndex];
    handleNavigateCourse(nextCourse._id || nextCourse.id);
  };

  const handleDownloadBrochure = () => {
    const brochureUrl = "/assets/brochure/course-brochure.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Course-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEnroll = () => {
    alert("Enrollment feature coming soon!");
  };

  const loading = coursesLoading || courseLoading;

  if (loading || !currentCourse) {
    return (
      <section className="project-details space bg-white">
        <div className="container">
          <LoadingSpinner message="Loading course details..." />
        </div>
      </section>
    );
  }

  return (
    <section className="project-details py-5 bg-light">
      <div className="container">
        <div className="row gy-4">
          {/* ---------- SIDEBAR ---------- */}
          <div className="col-xl-4 col-lg-4">
            <div
              className="project-sidebar bg-white shadow-sm rounded-4 p-3 sticky-top"
              style={{ top: "100px" }}
            >
              <CourseDetailsCard course={currentCourse} />
              <hr className="my-3" />

              <CourseNavigation
                courses={courses}
                currentCourse={currentCourse}
                onNavigate={handleNavigateCourse}
              />
              <hr className="my-3" />

              <ConsultingBox />
            </div>
          </div>

          {/* ---------- MAIN CONTENT ---------- */}
          <div className="col-xl-8 col-lg-8">
            <div className="bg-white shadow-sm rounded-4 p-4">
              {/* Image */}
              {currentCourse.image && (
                <div className="text-center mb-4">
                  <img
                    src={currentCourse.image}
                    alt={currentCourse.title}
                    className="img-fluid rounded-4 shadow-sm"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </div>
              )}

              {/* Title */}
              <div className="text-center mb-5">
                <h2 className="fw-bold text-dark mb-2">
                  {currentCourse.title}
                </h2>

                {/* 🔥 Upcoming Batch Highlight */}
                {currentCourse.upcomingBatch && (
                  <div
                    className="d-inline-block mb-3"
                    style={{
                      background: "linear-gradient(90deg, #ff4d4f, #ff7875)",
                      color: "#fff",
                      padding: "8px 18px",
                      borderRadius: "30px",
                      fontWeight: "600",
                      fontSize: "14px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    Upcoming Batch
                    {currentCourse.startDate && (
                      <span style={{ marginLeft: "8px", fontWeight: "500" }}>
                        | Starts on {formatDate(currentCourse.startDate)}
                      </span>
                    )}
                  </div>
                )}

                <p className="text-success fw-semibold">
                  {currentCourse.status}
                </p>

                <div className="d-flex justify-content-center gap-3 mt-3">
                  <Button
                    variant="success"
                    className="px-4 rounded-pill"
                    onClick={() =>
                      window.open(
                        "https://api.leadconnectorhq.com/widget/form/XvpypwEPXY6wJxjWjkLG",
                        "_blank",
                      )
                    }
                  >
                    {currentCourse?.buttons?.enroll || "Enroll Now"}
                  </Button>

                  <Button
                    variant="outline-primary"
                    className="px-4 rounded-pill"
                    onClick={() =>
                      document
                        .getElementById("curriculum-section")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {currentCourse?.buttons?.curriculum || "View Curriculum"}
                  </Button>
                </div>
              </div>

              {/* Duration */}
              {currentCourse.duration && (
                <p className="text-center text-muted mb-5">
                  <strong>Duration:</strong> {currentCourse.duration}
                </p>
              )}

              {/* Overview */}
              <Card className="border-0 shadow-sm mb-5 rounded-4">
                <Card.Body className="p-4">
                  <h4 className="text-teal fw-bold mb-3">Course Overview</h4>
                  <div className="text-muted lh-lg">
                    {parse(currentCourse.fullDescription)}
                  </div>
                </Card.Body>
              </Card>

              {/* Structure */}
              {currentCourse.courseStructure?.length > 0 && (
                <Card className="border-0 shadow-sm mb-5 rounded-4">
                  <Card.Body className="p-4">
                    <h4 className="text-teal fw-bold mb-4">Course Structure</h4>
                    <div className="row g-4">
                      {currentCourse.courseStructure.map((item) => (
                        <div key={item._id} className="col-md-6">
                          <div className="p-3 rounded-4 border h-100 hover-shadow-sm">
                            <h6 className="fw-semibold text-dark mb-2">
                              {item.cardName}
                            </h6>
                            <p className="text-muted mb-0">
                              {item.cardDescription}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              )}

              {/* Features */}
              {currentCourse.courseFeatures?.length > 0 && (
                <Card className="border-0 shadow-sm mb-5 rounded-4">
                  <Card.Body className="p-4">
                    <h4 className="text-teal fw-bold mb-4">Course Features</h4>
                    <div className="row">
                      {currentCourse.courseFeatures.map((feature, index) => (
                        <div
                          key={index}
                          className="col-md-6 mb-3 d-flex align-items-start"
                        >
                          <i
                            className="bi bi-check-circle-fill text-success me-2"
                            style={{ fontSize: "1.2rem" }}
                          ></i>
                          <span className="text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              )}

              {/* What You'll Learn */}
              {currentCourse.whatWillYouLearn && (
                <Card className="border-0 shadow-sm mb-5 rounded-4">
                  <Card.Body className="p-4">
                    <h4 className="text-teal fw-bold mb-4">
                      What You’ll Learn
                    </h4>
                    <p className="text-muted">
                      {currentCourse.whatWillYouLearn.description}
                    </p>
                    <ul className="list-unstyled mt-3">
                      {currentCourse.whatWillYouLearn.points?.map(
                        (point, index) => (
                          <li
                            key={index}
                            className="mb-2 d-flex align-items-start"
                          >
                            <i
                              className="bi bi-arrow-right-circle text-primary me-2"
                              style={{ fontSize: "1.1rem" }}
                            ></i>
                            <span>{point}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </Card.Body>
                </Card>
              )}

              {/* Curriculum */}
              {currentCourse.courseCurriculum?.length > 0 && (
                <Card
                  id="curriculum-section"
                  className="border-0 shadow-sm mb-5 rounded-4"
                >
                  <Card.Body className="p-4">
                    <h4 className="text-teal fw-bold mb-4">Curriculum</h4>
                    <Accordion alwaysOpen>
                      {currentCourse.courseCurriculum.map((section, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                          <Accordion.Header>
                            <strong>{section.dropdownTitle}</strong>
                          </Accordion.Header>
                          <Accordion.Body className="bg-light">
                            <p
                              className="text-muted mb-0"
                              style={{ whiteSpace: "pre-line" }}
                            >
                              {section.content}
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </Card.Body>
                </Card>
              )}

              {/* ---------- Upcoming Batch Information ---------- */}
              {currentCourse.upcomingBatchInfo && (
                <Card className="border-0 shadow-sm mb-5 rounded-4">
                  <Card.Body className="p-4">
                    <h4 className="text-teal fw-bold mb-4">
                      Upcoming Batch Information
                    </h4>

                    <div className="p-4 rounded-4 border bg-light">
                      {/* Batch Title (Optional) */}
                      {/* {currentCourse.upcomingBatchInfo.title && (
                        <h5 className="fw-semibold text-dark mb-3">
                          {currentCourse.upcomingBatchInfo.title}
                        </h5>
                      )} */}

                      {/* Description */}
                      {currentCourse.upcomingBatchInfo && (
                        <p className="text-muted mb-3 fs-6">
                          {currentCourse.upcomingBatchInfo}
                        </p>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              )}

              {currentCourse.whatWillYouLearn && (
                <Card className="border-0 shadow-sm mb-5 rounded-4">
                  <Card.Body className="p-4">
                    <h4 className="text-teal fw-bold mb-4">
                      What You’ll Learn
                    </h4>
                    <p className="text-muted">
                      {currentCourse.whatWillYouLearn.description}
                    </p>
                    <ul className="list-unstyled mt-3">
                      {currentCourse.whatWillYouLearn.points?.map(
                        (point, index) => (
                          <li
                            key={index}
                            className="mb-2 d-flex align-items-start"
                          >
                            <i
                              className="bi bi-arrow-right-circle text-primary me-2"
                              style={{ fontSize: "1.1rem" }}
                            ></i>
                            <span>{point}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </Card.Body>
                </Card>
              )}

              {/* Instructors */}
              {currentCourse.instructors?.length > 0 && (
                <Card className="border-0 shadow-sm mb-5 rounded-4">
                  <Card.Body className="p-4">
                    <h4 className="text-teal fw-bold mb-4">Instructors</h4>
                    <div className="row g-4">
                      {currentCourse.instructors.map((inst, index) => (
                        <div key={index} className="col-md-6">
                          <div className="d-flex align-items-center border rounded-4 p-3 h-100 shadow-sm">
                            {inst.image && (
                              <img
                                src={inst.image}
                                alt={inst.name}
                                className="rounded-circle me-3"
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  objectFit: "cover",
                                }}
                              />
                            )}
                            <div>
                              <h6 className="fw-semibold text-dark mb-1">
                                {inst.name}
                              </h6>
                              <p
                                className="text-muted mb-0"
                                style={{ fontSize: "0.9rem" }}
                              >
                                {inst.description ||
                                  "Instructor details coming soon."}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              )}

              {/* Brochure + Pagination */}
              <div className="text-center mt-5">
                <Button
                  variant="outline-success"
                  className="rounded-pill px-4"
                  onClick={handleDownloadBrochure}
                >
                  Download Brochure
                </Button>

                <div className="d-flex justify-content-between mt-4">
                  <Button variant="light" onClick={handlePrevious}>
                    ← Previous
                  </Button>
                  <Button variant="light" onClick={handleNext}>
                    Next →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
