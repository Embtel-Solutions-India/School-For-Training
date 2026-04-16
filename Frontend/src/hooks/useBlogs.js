import { useState, useEffect } from "react";
import { blogAPI } from "./../API";

/**
 * Custom hook to fetch all blogs
 * @returns {Object} { blogs, loading, error, refetch }
 */
export const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await blogAPI.getAll();
            setBlogs(data);
        } catch (err) {
            console.error("Error fetching blogs:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return {
        blogs,
        loading,
        error,
        refetch: fetchBlogs,
    };
};

/**
 * Custom hook to fetch a single blog by ID
 * @param {string} blogId - The ID of the blog to fetch
 * @returns {Object} { blog, loading, error, refetch }
 */
export const useBlogDetails = (blogId) => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBlog = async () => {
        if (!blogId) {
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const data = await blogAPI.getById(blogId);
            setBlog(data);
        } catch (err) {
            console.error("Error fetching blog details:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlog();
    }, [blogId]);

    return {
        blog,
        loading,
        error,
        refetch: fetchBlog,
    };
};