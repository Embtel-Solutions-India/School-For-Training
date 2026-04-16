import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  BASE_URL_ADMIN,
  GET_COURSES,
  GET_COURSE,
  DELETE_COURSE,
} from "../../API";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL_ADMIN}${GET_COURSES}`, {
        headers: { Token: token },
      });
      setCourses(response.data?.data || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load courses!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // View single course
  const handleView = async (id) => {
    try {
      setIsModalLoading(true);
      setShow(true);
      const response = await axios.get(`${BASE_URL_ADMIN}${GET_COURSE(id)}`, {
        headers: { Token: token },
      });
      setSelectedData(response.data?.data || null);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch course!");
    } finally {
      setIsModalLoading(false);
    }
  };

  // Delete course
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      setIsLoading(true);
      await axios.delete(`${BASE_URL_ADMIN}${DELETE_COURSE(id)}`, {
        headers: { Token: token },
      });

      toast.success("Course deleted successfully!");
      fetchCourses();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete course!");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredList = courses.filter(
    (c) =>
      c.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Loader isLoading={isLoading} />
      <div className="container-fluid">
        <Header />
        <div className="row">
          <Sidebar />
          <div className="col-9 main-dash-left">
            <section className="back-dashboard-sec comn-dashboard-page">
              <div className="main-notification-messege">
                <div className="notifi-list d-flex justify-content-between align-items-center">
                  <h6>Courses</h6>
                  <div className="dropdowns-inner-list d-flex">
                    <div className="icon-search-main">
                      <Form.Control
                        type="text"
                        placeholder="Search Course..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <button
                      className="ms-2 add-notification-btn"
                      onClick={() => navigate("/create-course")}
                    >
                      + Create Course
                    </button>
                  </div>
                </div>

                <div className="notification-table pt-0">
                  <Table bordered hover responsive>
                    <thead>
                      <tr className="head-class-td">
                        <th>Sr. No.</th>
                        <th>Title</th>
                        <th>Short Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredList.length > 0 ? (
                        filteredList.map((course, index) => (
                          <tr key={course._id}>
                            <td>{index + 1}</td>
                            <td>{course.title}</td>
                            <td>
                              {course.shortDescription?.length > 50
                                ? course.shortDescription.substring(0, 50) +
                                  "..."
                                : course.shortDescription}
                            </td>
                            <td>
                              <div className="d-flex gap-2">
                                <Button
                                  variant="info"
                                  size="sm"
                                  onClick={() => handleView(course._id)}
                                >
                                  View
                                </Button>
                                <Button
                                  variant="primary"
                                  size="sm"
                                  onClick={() =>
                                    navigate(`/edit-course/${course._id}`)
                                  }
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  onClick={() => handleDelete(course._id)}
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="text-center">
                            No Courses Found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* View Modal */}
        <Modal
          show={show}
          onHide={() => {
            setShow(false);
            setSelectedData(null);
          }}
          centered
          size="lg"
          className="comm_modal cst_inner_wid_modal"
        >
          <Modal.Header
            closeButton
            style={{
              padding: "20px 25px",
              backgroundColor: "#f8f9fa",
              borderBottom: "2px solid #ddd",
            }}
          >
            <Modal.Title
              style={{
                fontSize: "28px",
                fontWeight: "700",
                letterSpacing: "0.5px",
              }}
            >
              Course Details
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {isModalLoading ? (
              <p style={{ fontSize: "18px" }}>Loading...</p>
            ) : selectedData ? (
              <div style={{ fontSize: "18px", lineHeight: "1.6" }}>
                <p>
                  <strong>Title:</strong> {selectedData.title}
                </p>
                <p>
                  <strong>Duration:</strong> {selectedData.duration}
                </p>
                <p>
                  <strong>Short Description:</strong>{" "}
                  {selectedData.shortDescription}
                </p>
                <p>
                  <strong>Full Description:</strong>{" "}
                  {selectedData.fullDescription}
                </p>
                <p>
                  <strong>Features:</strong>{" "}
                  {selectedData.courseFeatures?.join(", ")}
                </p>
                <p>
                  <strong>What You'll Learn:</strong>{" "}
                  {selectedData.whatWillYouLearn?.description}
                </p>

                {selectedData.instructors?.length > 0 && (
                  <>
                    <h6 className="mt-3" style={{ fontSize: "20px" }}>
                      <strong>Instructors:</strong>
                    </h6>
                    {selectedData.instructors.map((ins, idx) => (
                      <p key={idx} style={{ fontSize: "18px" }}>
                        <strong>{ins.name}</strong> - {ins.description}
                      </p>
                    ))}
                  </>
                )}
              </div>
            ) : (
              <p style={{ fontSize: "18px" }}>No data available.</p>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default CourseList;
