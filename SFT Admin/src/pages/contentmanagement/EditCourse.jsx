//public\src\pages\contentmanagement\EditCourse.jsx
import { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import axios from "axios";
import { BASE_URL_ADMIN, BASE_URL_IMAGE } from "../../API";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    title: "",
    duration: "",
    upcomingBatch: false,
    startDate: "",
    upcomingBatchInfo: "",
    shortDescription: "",
    status: "",
    fullDescription: "",
    buttons: { enroll: "", curriculum: "" },
    courseStructure: [],
    features: [],
    whatWillYouLearn: { description: "", points: [] },
    curriculum: [],
    instructors: [],
    image: "",
    images: [], // existing images paths
  });

  const [loading, setLoading] = useState(false);
  const [newImages, setNewImages] = useState([]); // newly added local files with preview
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${BASE_URL_ADMIN}/course/${id}`, {
          headers: { Token: localStorage.getItem("token") },
        });

        const data = res.data?.data || {};

        const imageField = data.image || data.courseImage || data.img || "";

        const imagesArray = Array.isArray(data.images)
          ? data.images
          : imageField
          ? [imageField]
          : [];

        setCourseData({
          title: data.title || "",
          duration: data.duration || "",
          upcomingBatch: data.upcomingBatch || false,
          startDate: data.startDate || "",
          upcomingBatchInfo: data.upcomingBatchInfo || "",
          shortDescription: data.shortDescription || "",
          status: data.status || "",
          fullDescription: data.fullDescription || "",
          buttons: data.buttons || { enroll: "", curriculum: "" },
          courseStructure: Array.isArray(data.courseStructure)
            ? data.courseStructure
            : [],
          features: Array.isArray(data.courseFeatures)
            ? data.courseFeatures
            : [],
          whatWillYouLearn: data.whatWillYouLearn || {
            description: "",
            points: [],
          },
          curriculum: Array.isArray(data.courseCurriculum)
            ? data.courseCurriculum
            : [],
          instructors: Array.isArray(data.instructors) ? data.instructors : [],
          image: imageField,
          images: imagesArray,
        });
      } catch (err) {
        console.error("Error fetching course:", err);
        toast.error("Failed to load course!");
      }
    };

    if (id) fetchCourse();
  }, [id]);

  // IMAGE HANDLERS
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const mapped = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setNewImages((prev) => [...prev, ...mapped]);
    e.target.value = "";
  };

  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleRemoveExistingImage = (index) => {
    setCourseData((prev) => {
      const updated = Array.isArray(prev.images) ? [...prev.images] : [];
      updated.splice(index, 1);
      return { ...prev, images: updated };
    });
  };

  const handleRemoveNewImage = (index) => {
    setNewImages((prev) => prev.filter((_, i) => i !== index));
  };

  // BASIC FIELD CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  // NESTED OBJECT CHANGE
  const handleNestedChange = (section, key, value) => {
    setCourseData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }));
  };

  // ARRAY OF OBJECTS
  const handleArrayChange = (section, index, key, value) => {
    const updated = [...(courseData[section] || [])];
    updated[index] = { ...updated[index], [key]: value };
    setCourseData((prev) => ({ ...prev, [section]: updated }));
  };

  // SIMPLE ARRAY
  const handleSimpleArrayChange = (section, index, value) => {
    const updated = [...(courseData[section] || [])];
    updated[index] = value;
    setCourseData((prev) => ({ ...prev, [section]: updated }));
  };

  // ADD / DELETE ITEMS
  const addItem = (section, newItem) => {
    setCourseData((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), newItem],
    }));
  };

  const deleteItem = (section, index) => {
    const updated = [...(courseData[section] || [])];
    updated.splice(index, 1);
    setCourseData((prev) => ({ ...prev, [section]: updated }));
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("data", JSON.stringify(courseData));

      newImages.forEach(({ file }) => {
        formData.append("images", file);
      });

      await axios.patch(`${BASE_URL_ADMIN}/course/${id}`, formData, {
        headers: { Token: localStorage.getItem("token") },
      });

      toast.success("Course updated successfully!");
      navigate("/courses");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update course!");
    } finally {
      setLoading(false);
    }
  };

  const existingImages = Array.isArray(courseData.images)
    ? courseData.images
    : courseData.image
    ? [courseData.image]
    : [];

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
            <Breadcrumb.Item active>Edit Course</Breadcrumb.Item>
          </Breadcrumb>

          <section>
            <div className="comn-back-white p-4">
              <h3
                className="heading-view-med mb-4"
                style={{ fontSize: "24px", fontWeight: "500" }}
              >
                Edit Course
              </h3>

              <form onSubmit={handleSubmit}>
                {/* BASIC DETAILS */}
                <Form.Group className="mb-5">
                  <Form.Label style={{ fontSize: "18px", fontWeight: "500" }}>
                    Course Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={courseData.title}
                    onChange={handleChange}
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
                    name="duration"
                    placeholder="e.g. 4 Weeks"
                    value={courseData.duration}
                    onChange={handleChange}
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
                    name="shortDescription"
                    value={courseData.shortDescription}
                    onChange={handleChange}
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
                    name="status"
                    placeholder="Enrollment Ongoing"
                    value={courseData.status}
                    onChange={handleChange}
                    required
                    style={{ fontSize: "15px", height: "42px" }}
                  />
                </Form.Group>

                {/* UPCOMING BATCH */}
                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    label="Upcoming Batch"
                    checked={courseData.upcomingBatch}
                    onChange={(e) =>
                      setCourseData((prev) => ({
                        ...prev,
                        upcomingBatch: e.target.checked,
                      }))
                    }
                    style={{ fontSize: "16px", fontWeight: "500" }}
                  />
                </Form.Group>

                {/* START DATE */}
                {courseData.upcomingBatch && (
                  <>
                    <Form.Group className="mb-5">
                      <Form.Label
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Start Date
                      </Form.Label>
                      <Form.Control
                        type="date"
                        value={courseData.startDate}
                        onChange={(e) =>
                          setCourseData((prev) => ({
                            ...prev,
                            startDate: e.target.value,
                          }))
                        }
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
                        value={courseData.upcomingBatchInfo}
                        onChange={(e) =>
                          setCourseData((prev) => ({
                            ...prev,
                            upcomingBatchInfo: e.target.value,
                          }))
                        }
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
                    value={courseData.fullDescription}
                    onChange={(v) =>
                      setCourseData((prev) => ({ ...prev, fullDescription: v }))
                    }
                  />
                </Form.Group>

                {/* BUTTON LABELS */}
                <Form.Group className="mb-5">
                  <Form.Label style={{ fontSize: "18px", fontWeight: "500" }}>
                    Enroll Button Text
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={courseData.buttons.enroll}
                    onChange={(e) =>
                      handleNestedChange("buttons", "enroll", e.target.value)
                    }
                    style={{ fontSize: "15px", height: "42px" }}
                  />
                </Form.Group>

                <Form.Group className="mb-5">
                  <Form.Label style={{ fontSize: "18px", fontWeight: "500" }}>
                    Curriculum Button Text
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={courseData.buttons.curriculum}
                    onChange={(e) =>
                      handleNestedChange(
                        "buttons",
                        "curriculum",
                        e.target.value,
                      )
                    }
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
                {courseData.courseStructure.map((item, i) => (
                  <div
                    key={i}
                    className="mb-3 border rounded p-3 position-relative"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="fs-3">Card {i + 1}</div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteItem("courseStructure", i)}
                      >
                        🗑️
                      </Button>
                    </div>

                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="Card Name"
                      value={item.cardName}
                      onChange={(e) =>
                        handleArrayChange(
                          "courseStructure",
                          i,
                          "cardName",
                          e.target.value,
                        )
                      }
                      style={{ fontSize: "15px", height: "42px" }}
                    />

                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Card Description"
                      value={item.cardDescription}
                      onChange={(e) =>
                        handleArrayChange(
                          "courseStructure",
                          i,
                          "cardDescription",
                          e.target.value,
                        )
                      }
                      style={{ fontSize: "15px" }}
                    />
                  </div>
                ))}

                <Button
                  type="button"
                  className="comn-btn-pair mb-5"
                  onClick={() =>
                    addItem("courseStructure", {
                      cardName: "",
                      cardDescription: "",
                    })
                  }
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
                {courseData.features.map((f, i) => (
                  <div key={i} className="mb-2 d-flex align-items-center gap-2">
                    <div className="flex-grow-1">
                      <div className="fs-3">Feature {i + 1}</div>
                      <Form.Control
                        type="text"
                        placeholder="Feature"
                        value={f}
                        onChange={(e) =>
                          handleSimpleArrayChange("features", i, e.target.value)
                        }
                        style={{ fontSize: "15px", height: "42px" }}
                      />
                    </div>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteItem("features", i)}
                    >
                      🗑️
                    </Button>
                  </div>
                ))}

                <Button
                  type="button"
                  className="comn-btn-pair mb-5"
                  onClick={() => addItem("features", "")}
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
                  value={courseData.whatWillYouLearn.description}
                  onChange={(e) =>
                    handleNestedChange(
                      "whatWillYouLearn",
                      "description",
                      e.target.value,
                    )
                  }
                  style={{ fontSize: "15px" }}
                />

                {courseData.whatWillYouLearn.points.map((p, i) => (
                  <div key={i} className="mb-2 position-relative">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="fs-3">Point {i + 1}</div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          const arr = [
                            ...(courseData.whatWillYouLearn.points || []),
                          ];
                          arr.splice(i, 1);
                          handleNestedChange("whatWillYouLearn", "points", arr);
                        }}
                      >
                        🗑️
                      </Button>
                    </div>

                    <Form.Control
                      type="text"
                      placeholder="Learning Point"
                      value={p}
                      onChange={(e) => {
                        const arr = [
                          ...(courseData.whatWillYouLearn.points || []),
                        ];
                        arr[i] = e.target.value;
                        handleNestedChange("whatWillYouLearn", "points", arr);
                      }}
                      style={{ fontSize: "15px", height: "42px" }}
                    />
                  </div>
                ))}

                <Button
                  type="button"
                  className="comn-btn-pair mb-5"
                  onClick={() =>
                    handleNestedChange("whatWillYouLearn", "points", [
                      ...(courseData.whatWillYouLearn.points || []),
                      "",
                    ])
                  }
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
                {courseData.curriculum.map((c, i) => (
                  <div
                    key={i}
                    className="mb-3 border rounded p-3 position-relative"
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="fs-3">Section {i + 1}</div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteItem("curriculum", i)}
                      >
                        🗑️
                      </Button>
                    </div>

                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="Dropdown Title"
                      value={c.dropdownTitle}
                      onChange={(e) =>
                        handleArrayChange(
                          "curriculum",
                          i,
                          "dropdownTitle",
                          e.target.value,
                        )
                      }
                      style={{ fontSize: "15px", height: "42px" }}
                    />

                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Content"
                      value={c.content}
                      onChange={(e) =>
                        handleArrayChange(
                          "curriculum",
                          i,
                          "content",
                          e.target.value,
                        )
                      }
                      style={{ fontSize: "15px" }}
                    />
                  </div>
                ))}

                <Button
                  type="button"
                  className="comn-btn-pair mb-5"
                  onClick={() =>
                    addItem("curriculum", { dropdownTitle: "", content: "" })
                  }
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
                {courseData.instructors.map((inst, i) => (
                  <div
                    key={i}
                    className="mb-3 border rounded p-3 position-relative"
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="fs-3">Instructor {i + 1}</div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteItem("instructors", i)}
                      >
                        🗑️
                      </Button>
                    </div>

                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="Instructor Name"
                      value={inst.name}
                      onChange={(e) =>
                        handleArrayChange(
                          "instructors",
                          i,
                          "name",
                          e.target.value,
                        )
                      }
                      style={{ fontSize: "15px", height: "42px" }}
                    />

                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="Instructor Description"
                      value={inst.description}
                      onChange={(e) =>
                        handleArrayChange(
                          "instructors",
                          i,
                          "description",
                          e.target.value,
                        )
                      }
                      style={{ fontSize: "15px", height: "42px" }}
                    />

                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="Image URL (optional)"
                      value={inst.image || ""}
                      onChange={(e) =>
                        handleArrayChange(
                          "instructors",
                          i,
                          "image",
                          e.target.value,
                        )
                      }
                      style={{ fontSize: "15px", height: "42px" }}
                    />
                  </div>
                ))}

                <div className="d-flex flex-column gap-5">
                  <Button
                    type="button"
                    className="comn-btn-pair"
                    onClick={() =>
                      addItem("instructors", {
                        name: "",
                        description: "",
                        image: "",
                      })
                    }
                  >
                    + Add Instructor
                  </Button>

                  <Button
                    type="submit"
                    className="comn-btn-pair"
                    style={{ backgroundColor: "green", color: "white" }}
                    disabled={loading}
                  >
                    {loading ? "Updating..." : "Update Course"}
                  </Button>
                </div>
              </form>

              {/* UPLOAD IMAGE (Blog Logic Only) */}
              <Form.Group className="comn-class-inputs mt-3">
                <Form.Label>Upload Image(s)</Form.Label>

                <div className="d-flex flex-wrap gap-3 align-items-start">
                  {/* existing image previews */}
                  {existingImages.map((img, index) => (
                    <div
                      key={index}
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <img
                        src={`${BASE_URL_IMAGE}/${String(img).replace(
                          /^\/+/,
                          "",
                        )}`}
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
                        onClick={() => handleRemoveExistingImage(index)}
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

                  {/* new images previews */}
                  {newImages.map((img, index) => (
                    <div
                      key={`new-${index}`}
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <img
                        src={img.preview}
                        alt={`New ${index + 1}`}
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
                        onClick={() => handleRemoveNewImage(index)}
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

                  <Button
                    type="button"
                    className="comn-btn-pair"
                    onClick={openFilePicker}
                  >
                    + Add Image
                  </Button>
                </div>

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

export default EditCourse;
