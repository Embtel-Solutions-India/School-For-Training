import { Link } from "react-router-dom";
import { useBlogs } from "../../hooks/useBlogs";
import LoadingSpinner from "../UI/LoadingSpinner";
import ErrorMessage from "../UI/ErrorMessage";
import {BASE_URL_IMAGE} from "../../API"

const BlogGrid = () => {

    const { blogs, loading, error, refetch } = useBlogs();
    console.log(blogs)

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric'
        };
        return date.toLocaleDateString('en-US', options);
    };

    if (loading) {
        return (
            <section className="blog-section space bg-theme3">
                <div className="container">
                    <LoadingSpinner message="Loading blogs..." />
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="blog-section space bg-theme3">
                <div className="container">
                    <ErrorMessage message={`Error loading blogs: ${error}`} onRetry={refetch} />
                </div>
            </section>
        );
    }

    return (
        <section className="blog-section space bg-theme3">
            <div className="container">
                <div className="row gx-25 gy-25">
                    {blogs.map((blog, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={blog._id || blog.id || index}>
                            <article className="blog-single-box">
                                <div className="inner-box">
                                    <div className="blog-image">
                                        <img src={`${BASE_URL_IMAGE}${blog.image}`} alt="Blog Image" />
                                        <div className="category-tag">{blog.category || "category"}</div>
                                    </div>
                                    <div className="blog-content">
                                        <div style={{ fontSize: '14px'}}>
                                            {blog.createdAt && (
                                                <span>
                                                {formatDate(blog.createdAt)}
                                                </span>
                                        )}
                                    </div>
                                        <div className="pt-10 pb-10"><div className="border dark"></div></div>
                                        <h4 className="title mb-10">
                                            <Link to={`/blog/blog-details?id=${blog._id || blog.id}`}>{blog.title}</Link>
                                        </h4>
                                        <Link to={`/blog/blog-details?id=${blog._id || blog.id}`} className="continue-reading">Continue Reading</Link>
                                    </div>
                                </div>
                            </article> 
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;