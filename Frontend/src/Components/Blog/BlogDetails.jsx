import { BASE_URL_IMAGE } from "../../API";
import { useSearchParams } from "react-router-dom";
import { useBlogDetails } from "../../hooks/useBlogs";
import BlogContent from "./BlogContent";
import BlogSidebar from "./BlogSidebar";
import LoadingSpinner from "../UI/LoadingSpinner";
import ErrorMessage from "../UI/ErrorMessage";

const BlogDetails = () => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const [searchParams] = useSearchParams();
  const blogId = searchParams.get("id");

  const { blog, loading, error, refetch } = useBlogDetails(blogId);

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // Implement search functionality
  };

  if (loading) {
    return (
      <section className="blog-details-section space bg-white">
        <div className="container">
          <LoadingSpinner message="Loading blog details..." />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="blog-details-section space bg-white">
        <div className="container">
          <ErrorMessage
            message={`Error loading blog: ${error}`}
            onRetry={refetch}
          />
        </div>
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="blog-details-section space bg-white">
        <div className="container">
          <ErrorMessage message="Blog not found" />
        </div>
      </section>
    );
  }

  // Map API data to the expected blogData structure
 
  const blogData = {
    title: blog.title || "Untitled",
    category: blog.category || "GENERAL",
    authorImage:
      blog.authorImage ||
      blog.socialImg ||
      "/assets/images/blog/social-pr01.jpg",
    date: formatDate(blog.createdAt),
    image: blog.image
      ? `${BASE_URL_IMAGE}${blog.image}`
      : blog.img
        ? `${BASE_URL_IMAGE}${blog.img}`
        : blog.thumbnail
          ? `${BASE_URL_IMAGE}${blog.thumbnail}`
          : "/assets/images/blog/blog-thumb01.jpg",
    tags: blog.tags || [blog.category || "GENERAL"],
    content: blog.content || blog.description || "",
  };

  return (
    <section className="blog-details-section space bg-white">
      <div className="container">
        <div className="row gy-30 flex-column-reverse flex-lg-row">
          <div className="col-xl-8 col-lg-8">
            <div className="blog-details-left">
              <BlogContent blog={blogData} />
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <BlogSidebar onSearch={handleSearch} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
