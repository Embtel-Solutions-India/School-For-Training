import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  BASE_URL_ADMIN,
  GET_ALL_BLOGS,
  GET_BLOG_FROM_ID,
  DELETE_BLOG,
} from "../../API";
import ViewBlogModal from "./ViewBlogModal";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // ✅ Fetch all blogs
  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${BASE_URL_ADMIN}${GET_ALL_BLOGS}`, {
        headers: { Token: token },
      });
      setBlogs(res.data?.data || []);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to load blogs!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ✅ View blog details
  const handleView = async (id) => {
    try {
      setIsModalLoading(true);
      setShow(true);
      const res = await axios.get(`${BASE_URL_ADMIN}${GET_BLOG_FROM_ID(id)}`, {
        headers: { Token: token },
      });
      setSelectedBlog(res.data?.data || null);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch blog!");
      setShow(false);
    } finally {
      setIsModalLoading(false);
    }
  };

  // ✅ Delete a blog
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      setIsLoading(true);
      await axios.delete(`${BASE_URL_ADMIN}${DELETE_BLOG(id)}`, {
        headers: { Token: token },
      });
      toast.success("Blog deleted successfully!");
      fetchBlogs();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete blog!");
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Search filter
  const filtered = blogs.filter(
    (b) =>
      b.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author?.toLowerCase().includes(searchQuery.toLowerCase())
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
                  <h6>Blogs</h6>
                  <div className="dropdowns-inner-list d-flex">
                    <div className="icon-search-main">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Search Blog..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <button
                      className="ms-2 add-notification-btn"
                      onClick={() => navigate("/create-blog")}
                    >
                      + Create Blog
                    </button>
                  </div>
                </div>

                <div className="notification-table pt-0">
                  <Table bordered hover responsive>
                    <thead>
                      <tr className="head-class-td">
                        <th>Sr. No.</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.length > 0 ? (
                        filtered.map((blog, idx) => (
                          <tr key={blog._id}>
                            <td>{idx + 1}</td>
                            <td>{blog.title}</td>
                            <td>{blog.author || "-"}</td>
                            <td>{blog.category || "-"}</td>
                            <td>
                              <div className="d-flex gap-2">
                                <Button
                                  variant="info"
                                  size="sm"
                                  onClick={() => handleView(blog._id)}
                                >
                                  View
                                </Button>
                                <Button
                                  variant="primary"
                                  size="sm"
                                  onClick={() =>
                                    navigate(`/edit-blog/${blog._id}`)
                                  }
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  onClick={() => handleDelete(blog._id)}
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="text-center">
                            No Blogs Found
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

        <ViewBlogModal
          show={show}
          loading={isModalLoading}
          blog={selectedBlog}
          onHide={() => {
            setShow(false);
            setSelectedBlog(null);
          }}
        />
      </div>
    </>
  );
}

export default BlogList;
