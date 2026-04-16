// src/pages/admin/CreateCourse.jsx
import { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import axios from "axios";
import { BASE_URL_ADMIN, CREATE_COURSE } from "../../API";
import { toast } from "react-toastify";

const CreateCourse = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // STATES
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [status, setStatus] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [enrollButton, setEnrollButton] = useState("Enroll Now");
  const [curriculumButton, setCurriculumButton] = useState("Course Curriculum");
  const [courseStructure, setCourseStructure] = useState([
    { cardName: "", cardDescription: "" },
  ]);
  const [courseFeatures, setCourseFeatures] = useState([""]);
  const [whatDescription, setWhatDescription] = useState("");
  const [whatPoints, setWhatPoints] = useState([""]);
  const [courseCurriculum, setCourseCurriculum] = useState([
    { dropdownTitle: "", content: "" },
  ]);
  const [instructors, setInstructors] = useState([
    { name: "", description: "", image: "" },
  ]);

  const [upcomingBatch, setUpcomingBatch] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [upcomingBatchInfo, setUpcomingBatchInfo] = useState("");

  // IMAGE STATES (now supports multiple images)
  const [images, setImages] = useState([]); // [{ file, preview }]
  const fileInputRef = useRef(null);

  // HANDLERS
  const handleAddStructure = () =>
    setCourseStructure([
      ...courseStructure,
      { cardName: "", cardDescription: "" },
    ]);
  const handleAddFeature = () => setCourseFeatures([...courseFeatures, ""]);
  const handleAddWhatPoint = () => setWhatPoints([...whatPoints, ""]);
  const handleAddCurriculum = () =>
    setCourseCurriculum([
      ...courseCurriculum,
      { dropdownTitle: "", content: "" },
    ]);
  const handleAddInstructor = () =>
    setInstructors([...instructors, { name: "", description: "", image: "" }]);

  // DELETE HANDLERS
  const handleDeleteStructure = (index) => {
    const arr = [...courseStructure];
    arr.splice(index, 1);
    setCourseStructure(arr);
  };

  const handleDeleteFeature = (index) => {
    const arr = [...courseFeatures];
    arr.splice(index, 1);
    setCourseFeatures(arr);
  };

  const handleDeletePoint = (index) => {
    const arr = [...whatPoints];
    arr.splice(index, 1);
    setWhatPoints(arr);
  };

  const handleDeleteCurriculum = (index) => {
    const arr = [...courseCurriculum];
    arr.splice(index, 1);
    setCourseCurriculum(arr);
  };

  const handleDeleteInstructor = (index) => {
    const arr = [...instructors];
    arr.splice(index, 1);
    setInstructors(arr);
  };

  // IMAGE CHANGE HANDLER (multiple images)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const mapped = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...mapped]);

    // allow selecting the same file again later
    e.target.value = "";
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const openFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title,
      duration,
      upcomingBatch,
      startDate,
      shortDescription,
      upcomingBatchInfo,
      status,
      fullDescription,
      buttons: { enroll: enrollButton, curriculum: curriculumButton },
      courseStructure,
      courseFeatures,
      whatWillYouLearn: { description: whatDescription, points: whatPoints },
      courseCurriculum,
      instructors,
    };

    try {
      const token = localStorage.getItem("token");

      // FORM DATA (updated to send multiple images as "images")
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      images.forEach(({ file }) => {
        formData.append("images", file);
      });

      await axios.post(`${BASE_URL_ADMIN}${CREATE_COURSE}`, formData, {
        headers: {
          Token: token,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Course created successfully!");
      navigate("/courses");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to create course!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <Sidebar />
        <div className="col-9 main-dash-left">
          <Breadcrumb className="cstm_bredcrumb mb-4">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/courses" }}>
              Course Management
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Create Course</Breadcrumb.Item>
          </Breadcrumb>

          <section>
            <div className="comn-back-white p-4">
              <h3
                className="heading-view-med mb-4"
                style={{ fontSize: "24px", fontWeight: "500" }}
              >
                Create New Course
              </h3>

              <form onSubmit={handleSubmit}>
                {/* BASIC DETAILS */}
                <Form.Group className="mb-5">
                  <Form.Label style={{ fontSize: "18px", fontWeight: "500" }}>
                    Course Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{ fontSize: "15px", height: "42px" }}
                  />
                </Form.Group>

                <Form.Group className="mb-5">
                  <Form.Label style={{ fontSize: "18px", fontWeight: "500" }}>
                    Duration
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g. 4 Weeks"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                    style={{ fontSize: "15px", height: "42px" }}
                  />
                </Form.Group>

                <Form.Group className="mb-5">
                  <Form.Label style={{ fontSize: "18px", fontWeight: "500" }}>
                    Short Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    required
                    style={{ fontSize: "15px" }}
                  />
                </Form.Group>

                <Form.Group className="mb-5">
                  <Form.Label style={{ fontSize: "18px", fontWeight: "500" }}>
                    Status
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enrollment Ongoing"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                    style={{ fontSize: "15px", height: "42px" }}
                  />
                </Form.Group>

                {/* UPCOMING BATCH */}
                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    label="Upcoming Batch"
                    checked={upcomingBatch}
                    onChange={(e) => setUpcomingBatch(e.target.checked)}
                    style={{ fontSize: "16px", fontWeight: "500" }}
                  />
                </Form.Group>

                {/* START DATE */}
                {upcomingBatch && (
                  <>
                    <Form.Group className="mb-5">
                      <Form.Label
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Start Date
                      </Form.Label>
                      <Form.Control
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        style={{ fontSize: "15px", height: "42px" }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-5">
                      <Form.Label
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Upcoming Batches
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={upcomingBatchInfo}
                        onChange={(e) => setUpcomingBatchInfo(e.target.value)}
                        style={{ fontSize: "15px" }}
                      />
                    </Form.Group>
                  </>
                )}

                <Form.Group className="mb-5">
                  <Form.Label style={{ fontSize: "18px", fontWeight: "500" }}>
                    Full Description
                  </Form.Label>
                  <ReactQuill
                    theme="snow"
                    value={fullDescription}
                    onChange={setFullDescription}
                  />
                </Form.Group>

                {/* BUTTON LABELS */}
                <Form.Group className="mb-5">
                  <Form.Label style={{ fontSize: "18px", fontWeight: "500" }}>
                    Enroll Button Text
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={enrollButton}
                    onChange={(e) => setEnrollButton(e.target.value)}
                    style={{ fontSize: "15px", height: "42px" }}
                  />
                </Form.Group>

                <Form.Group className="mb-5">
                  <Form.Label style={{ fontSize: "18px", fontWeight: "500" }}>
                    Curriculum Button Text
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={curriculumButton}
                    onChange={(e) => setCurriculumButton(e.target.value)}
                    style={{ fontSize: "15px", height: "42px" }}
                  />
                </Form.Group>

                {/* COURSE STRUCTURE */}
                <h5
                  className="mb-3"
                  style={{ fontSize: "18px", fontWeight: "500" }}
                >
                  Course Structure
                </h5>
                {courseStructure.map((item, i) => (
                  <div
                    key={i}
                    className="mb-3 border rounded p-3 position-relative"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="fs-3">Card {i + 1}</div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteStructure(i)}
                      >
                        🗑️
                      </Button>
                    </div>
                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="Card Name"
                      value={item.cardName}
                      onChange={(e) => {
                        const arr = [...courseStructure];
                        arr[i].cardName = e.target.value;
                        setCourseStructure(arr);
                      }}
                      style={{ fontSize: "15px", height: "42px" }}
                    />
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Card Description"
                      value={item.cardDescription}
                      onChange={(e) => {
                        const arr = [...courseStructure];
                        arr[i].cardDescription = e.target.value;
                        setCourseStructure(arr);
                      }}
                      style={{ fontSize: "15px" }}
                    />
                  </div>
                ))}
                <Button
                  type="button"
                  className="comn-btn-pair mb-5"
                  onClick={handleAddStructure}
                >
                  + Add Structure
                </Button>

                {/* FEATURES */}
                <h5
                  className="mb-3"
                  style={{ fontSize: "18px", fontWeight: "500" }}
                >
                  Course Features
                </h5>
                {courseFeatures.map((f, i) => (
                  <div key={i} className="mb-2 d-flex align-items-center gap-2">
                    <div className="flex-grow-1">
                      <div className="fs-3">Feature {i + 1}</div>
                      <Form.Control
                        type="text"
                        placeholder="Feature"
                        value={f}
                        onChange={(e) => {
                          const arr = [...courseFeatures];
                          arr[i] = e.target.value;
                          setCourseFeatures(arr);
                        }}
                        style={{ fontSize: "15px", height: "42px" }}
                      />
                    </div>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteFeature(i)}
                    >
                      🗑️
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  className="comn-btn-pair mb-5"
                  onClick={handleAddFeature}
                >
                  + Add Feature
                </Button>

                {/* WHAT WILL YOU LEARN */}
                <h5
                  className="mb-3"
                  style={{ fontSize: "18px", fontWeight: "500" }}
                >
                  What Will You Learn
                </h5>
                <Form.Control
                  as="textarea"
                  rows={2}
                  className="mb-2"
                  placeholder="Description"
                  value={whatDescription}
                  onChange={(e) => setWhatDescription(e.target.value)}
                  style={{ fontSize: "15px" }}
                />
                {whatPoints.map((p, i) => (
                  <div key={i} className="mb-2 position-relative">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="fs-3">Point {i + 1}</div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeletePoint(i)}
                      >
                        🗑️
                      </Button>
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Learning Point"
                      value={p}
                      onChange={(e) => {
                        const arr = [...whatPoints];
                        arr[i] = e.target.value;
                        setWhatPoints(arr);
                      }}
                      style={{ fontSize: "15px", height: "42px" }}
                    />
                  </div>
                ))}
                <Button
                  type="button"
                  className="comn-btn-pair mb-5"
                  onClick={handleAddWhatPoint}
                >
                  + Add Point
                </Button>

                {/* CURRICULUM */}
                <h5
                  className="mb-3"
                  style={{ fontSize: "18px", fontWeight: "500" }}
                >
                  Curriculum
                </h5>
                {courseCurriculum.map((c, i) => (
                  <div
                    key={i}
                    className="mb-3 border rounded p-3 position-relative"
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="fs-3">Section {i + 1}</div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteCurriculum(i)}
                      >
                        🗑️
                      </Button>
                    </div>
                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="Dropdown Title"
                      value={c.dropdownTitle}
                      onChange={(e) => {
                        const arr = [...courseCurriculum];
                        arr[i].dropdownTitle = e.target.value;
                        setCourseCurriculum(arr);
                      }}
                      style={{ fontSize: "15px", height: "42px" }}
                    />
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Content"
                      value={c.content}
                      onChange={(e) => {
                        const arr = [...courseCurriculum];
                        arr[i].content = e.target.value;
                        setCourseCurriculum(arr);
                      }}
                      style={{ fontSize: "15px" }}
                    />
                  </div>
                ))}
                <Button
                  type="button"
                  className="comn-btn-pair mb-5"
                  onClick={handleAddCurriculum}
                >
                  + Add Curriculum
                </Button>

                {/* INSTRUCTORS */}
                <h5
                  className="mb-2"
                  style={{ fontSize: "18px", fontWeight: "500" }}
                >
                  Instructors
                </h5>
                {instructors.map((inst, i) => (
                  <div
                    key={i}
                    className="mb-3 border rounded p-3 position-relative"
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="fs-3">Instructor {i + 1}</div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteInstructor(i)}
                      >
                        🗑️
                      </Button>
                    </div>
                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="Instructor Name"
                      value={inst.name}
                      onChange={(e) => {
                        const arr = [...instructors];
                        arr[i].name = e.target.value;
                        setInstructors(arr);
                      }}
                      style={{ fontSize: "15px", height: "42px" }}
                    />
                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="Instructor Description"
                      value={inst.description}
                      onChange={(e) => {
                        const arr = [...instructors];
                        arr[i].description = e.target.value;
                        setInstructors(arr);
                      }}
                      style={{ fontSize: "15px", height: "42px" }}
                    />
                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="Image URL (optional)"
                      value={inst.image}
                      onChange={(e) => {
                        const arr = [...instructors];
                        arr[i].image = e.target.value;
                        setInstructors(arr);
                      }}
                      style={{ fontSize: "15px", height: "42px" }}
                    />
                  </div>
                ))}

                <div className="d-flex flex-column gap-5">
                  <Button
                    type="button"
                    className="comn-btn-pair"
                    onClick={handleAddInstructor}
                  >
                    + Add Instructor
                  </Button>

                  <Button
                    type="submit"
                    className="comn-btn-pair"
                    style={{ backgroundColor: "green", color: "white" }}
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Course"}
                  </Button>
                </div>
              </form>

              {/* UPLOAD IMAGE */}
              <Form.Group className="comn-class-inputs mt-3">
                <Form.Label>Upload Image(s)</Form.Label>

                <div className="d-flex flex-wrap gap-3 align-items-start">
                  {/* image previews */}
                  {images.map((img, index) => (
                    <div
                      key={index}
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      <img
                        src={img.preview}
                        alt={`Preview ${index + 1}`}
                        style={{
                          width: "120px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "10px",
                          border: "1px solid #ddd",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        style={{
                          position: "absolute",
                          top: "-8px",
                          right: "-8px",
                          borderRadius: "50%",
                          border: "none",
                          width: "22px",
                          height: "22px",
                          cursor: "pointer",
                          fontSize: "14px",
                          lineHeight: "22px",
                          textAlign: "center",
                          background: "#ff4d4f",
                          color: "#fff",
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}

                  {/* "+" button to add more images */}
                  <Button
                    type="button"
                    className="comn-btn-pair"
                    onClick={openFilePicker}
                  >
                    + Add Image
                  </Button>
                </div>

                {/* hidden file input */}
                <Form.Control
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </Form.Group>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
