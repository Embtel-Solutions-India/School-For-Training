// public/src/pages/contentmanagement/EditBlog.jsx
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

const EditBlog = () => {
  const { id } = useParams();
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
    image: "", // legacy single image
    images: [], // existing images array
  });

  // new images (local files) with preview
  const [newImages, setNewImages] = useState([]); // [{ file, preview }]

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${BASE_URL_ADMIN}/blog/${id}`, {
          headers: { Token: localStorage.getItem("token") },
        });

        const data = res.data?.data || {};

        const imageField = data.image || "";
        const imagesArray = Array.isArray(data.images)
          ? data.images
          : imageField
          ? [imageField]
          : [];

        setBlog({
          title: data.title || "",
          subTitle: data.subTitle || "",
          shortDescription: data.shortDescription || "",
          description: data.description || "",
          author: data.author || "",
          category: data.category || "",
          image: imageField,
          images: imagesArray,
        });
      } catch (err) {
        console.error(err);
        toast.error("Failed to load blog details!");
      }
    };

    if (id) fetchBlog();
  }, [id]);

  // handle basic inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  // add new images
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

  // remove existing image (client-side). This will update blog.images
  const handleRemoveExistingImage = (index) => {
    setBlog((prev) => {
      const updated = Array.isArray(prev.images) ? [...prev.images] : [];
      updated.splice(index, 1);
      return { ...prev, images: updated };
    });
  };

  // remove newly added image (local)
  const handleRemoveNewImage = (index) => {
    setNewImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        title: blog.title,
        subTitle: blog.subTitle,
        shortDescription: blog.shortDescription,
        description: blog.description,
        author: blog.author,
        category: blog.category,
        // important: pass `images` array (the final kept existing image paths)
        images: blog.images || [],
        // maintain legacy single image (primary) — backend will set image = images[0] if present
      };

      const formData = new FormData();
      formData.append("data", JSON.stringify(data));

      // attach newly selected files as "images" (same key Course uses)
      newImages.forEach(({ file }) => {
        formData.append("images", file);
      });

      await axios.put(`${BASE_URL_ADMIN}/edit-blog/${id}`, formData, {
        headers: {
          Token: localStorage.getItem("token"),
          // Content-Type will be set automatically by browser for FormData
        },
      });

      toast.success("Blog updated successfully!");
      navigate("/blogs");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to update blog!");
    } finally {
      setLoading(false);
    }
  };

  const existingImages = Array.isArray(blog.images)
    ? blog.images
    : blog.image
    ? [blog.image]
    : [];

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
            <Breadcrumb.Item active>Edit Blog</Breadcrumb.Item>
          </Breadcrumb>

          <section>
            <div className="comn-back-white p-4">
              <h3
                className="heading-view-med"
                style={{ fontSize: "24px", fontWeight: 500 }}
              >
                Edit Blog
              </h3>

              <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                    required
                    style={{ fontSize: "15px", height: "42px", color: "black" }}
                  />
                </Form.Group>

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
                    style={{ fontSize: "15px", height: "42px", color: "black" }}
                  />
                </Form.Group>

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
                    style={{ fontSize: "15px", height: "42px", color: "black" }}
                  />
                </Form.Group>

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
                    style={{ fontSize: "15px", height: "42px" }}
                  />
                </Form.Group>

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
                    style={{ fontSize: "15px", height: "42px", color: "black" }}
                  />
                </Form.Group>

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
                  />
                </Form.Group>

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
                    {/* existing image previews */}
                    {existingImages.map((img, index) => (
                      <div
                        key={`existing-${index}`}
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <img
                          src={`${BASE_URL_IMAGE}/${String(img).replace(
                            /^\/+/,
                            ""
                          )}`}
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
                          onClick={() => handleRemoveExistingImage(index)}
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

                    {/* new images previews */}
                    {newImages.map((img, index) => (
                      <div
                        key={`new-${index}`}
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <img
                          src={img.preview}
                          alt={`New ${index + 1}`}
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

                <div className="d-flex gap-2 mt-4">
                  <Button
                    type="submit"
                    className="comn-btn-pair"
                    disabled={loading}
                    style={{ backgroundColor: "green", color: "#fff" }}
                  >
                    {loading ? "Updating..." : "Update Blog"}
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

export default EditBlog;
