// public/src/pages/contentmanagement/CreateBlog.jsx
import { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import axios from "axios";
import { BASE_URL_ADMIN, CREATE_BLOG } from "../../API";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateBlog = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [blog, setBlog] = useState({
    title: "",
    subTitle: "",
    shortDescription: "",
    description: "",
    author: "",
    category: "",
  });

  // multiple images support (same as Courses) - store local file + preview
  const [images, setImages] = useState([]); // [{ file, preview }]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  // add images (multiple)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const mapped = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...mapped]);
    e.target.value = "";
  };

  const handleRemoveNewImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!blog.title || !blog.description) {
      toast.error("Title and Description are required!");
      return;
    }

    setLoading(true);
    try {
      // Build the blog data object (fields remain unchanged)
      const data = {
        title: blog.title,
        subTitle: blog.subTitle,
        shortDescription: blog.shortDescription,
        description: blog.description,
        author: blog.author,
        category: blog.category,
        // NOTE: we do NOT add images here — images are sent as files
        // Backend will set blogData.images & blogData.image
      };

      const formData = new FormData();
      formData.append("data", JSON.stringify(data));

      // Append new image files under key "images" (same as Courses)
      images.forEach(({ file }) => {
        formData.append("images", file);
      });

      await axios.post(`${BASE_URL_ADMIN}${CREATE_BLOG}`, formData, {
        headers: {
          Token: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Blog created successfully!");
      navigate("/blogs");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to create blog!");
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
          <Breadcrumb className="cstm_bredcrumb">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/blogs" }}>
              Blog Management
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Create Blog</Breadcrumb.Item>
          </Breadcrumb>

          <section>
            <div className="comn-back-white p-4">
              <h3
                className="heading-view-med"
                style={{ fontSize: "24px", fontWeight: 500 }}
              >
                Create Blog
              </h3>

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Title */}
                <Form.Group className="comn-class-inputs mb-4">
                  <Form.Label
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={blog.title}
                    onChange={handleChange}
                    placeholder="Enter blog title"
                    required
                    style={{ fontSize: "15px", height: "42px", color: "black" }}
                  />
                </Form.Group>

                {/* Sub Title */}
                <Form.Group className="comn-class-inputs mb-4">
                  <Form.Label
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Sub Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="subTitle"
                    value={blog.subTitle}
                    onChange={handleChange}
                    placeholder="Enter sub title"
                    style={{ fontSize: "15px", height: "42px", color: "black" }}
                  />
                </Form.Group>

                {/* Short Description */}
                <Form.Group className="comn-class-inputs mb-4">
                  <Form.Label
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Short Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="shortDescription"
                    value={blog.shortDescription}
                    onChange={handleChange}
                    placeholder="Enter a short summary"
                    required
                    style={{ fontSize: "15px", height: "42px", color: "black" }}
                  />
                </Form.Group>

                {/* Author */}
                <Form.Group className="comn-class-inputs mb-4">
                  <Form.Label
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Author
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="author"
                    value={blog.author}
                    onChange={handleChange}
                    placeholder="Enter author name"
                    style={{ fontSize: "15px", height: "42px", color: "black" }}
                  />
                </Form.Group>

                {/* Category */}
                <Form.Group className="comn-class-inputs mb-4">
                  <Form.Label
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Category
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    value={blog.category}
                    onChange={handleChange}
                    placeholder="e.g. Technology, Business, AI"
                    style={{ fontSize: "15px", height: "42px", color: "black" }}
                  />
                </Form.Group>

                {/* Full Description (ReactQuill) */}
                <Form.Group className="comn-class-inputs mb-4">
                  <Form.Label
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Full Description
                  </Form.Label>
                  <ReactQuill
                    theme="snow"
                    value={blog.description}
                    onChange={(val) =>
                      setBlog((prev) => ({ ...prev, description: val }))
                    }
                    placeholder="Write your full blog content here..."
                  />
                </Form.Group>

                {/* Upload Images (Course-like) */}
                <Form.Group className="comn-class-inputs mt-3">
                  <Form.Label
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Upload Image(s)
                  </Form.Label>

                  <div className="d-flex flex-wrap gap-3 align-items-start mb-3">
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
                            borderRadius: 10,
                            border: "1px solid #ddd",
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveNewImage(index)}
                          style={{
                            position: "absolute",
                            top: -8,
                            right: -8,
                            borderRadius: "50%",
                            border: "none",
                            width: 22,
                            height: 22,
                            cursor: "pointer",
                            fontSize: 14,
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

                {/* Buttons */}
                <div className="d-flex gap-2 mt-4">
                  <Button
                    type="submit"
                    className="comn-btn-pair"
                    disabled={loading}
                    style={{ backgroundColor: "green", color: "#fff" }}
                  >
                    {loading ? "Creating..." : "Create Blog"}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/blogs")}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
