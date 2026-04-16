import { useState, useEffect } from "react";
import { courseAPI } from "../API";

/**
 * Custom hook to fetch all courses
 * @returns {Object} { courses, loading, error, refetch }
 */
export const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCourses = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await courseAPI.getAll();
            setCourses(data);
        } catch (err) {
            console.error("Error fetching courses:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return {
        courses,
        loading,
        error,
        refetch: fetchCourses,
    };
};

/**
 * Custom hook to fetch a single course by ID
 * @param {string} courseId - The ID of the course to fetch
 * @returns {Object} { course, loading, error, refetch }
 */
export const useCourseDetails = (courseId) => {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCourse = async () => {
        if (!courseId) {
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const data = await courseAPI.getById(courseId);
            setCourse(data);
        } catch (err) {
            console.error("Error fetching course details:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourse();
    }, [courseId]);

    return {
        course,
        loading,
        error,
        refetch: fetchCourse,
    };
};
