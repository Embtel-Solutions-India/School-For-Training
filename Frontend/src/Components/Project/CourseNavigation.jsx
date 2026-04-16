// import React from "react";
import { Link } from "react-router-dom";

const CourseNavigation = ({ courses, currentCourse, onNavigate }) => {
    return (
        <div className="sidebar-widget mb-30">
            <div className="widget-box project-details-box">
                <h4 className="title">All Courses</h4>
                <div className="content">
                    <ul className="course-list" style={{ listStyle: "none", padding: 0 }}>
                        {courses.map((course, index) => (
                            <li
                                key={course._id || course.id || index}
                                style={{
                                    marginBottom: "10px",
                                    borderLeft:
                                        (currentCourse?._id || currentCourse?.id) === (course._id || course.id)
                                            ? "3px solid #000"
                                            : "3px solid transparent",
                                    paddingLeft: "10px",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <Link
                                    to={`/project/project-details?id=${course._id || course.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onNavigate(course._id || course.id);
                                    }}
                                    style={{
                                        textDecoration: "none",
                                        color:
                                            (currentCourse?._id || currentCourse?.id) === (course._id || course.id)
                                                ? "#000"
                                                : "#666",
                                        fontWeight:
                                            (currentCourse?._id || currentCourse?.id) === (course._id || course.id)
                                                ? "bold"
                                                : "normal",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    }}
                                >
                                    <span style={{ fontSize: "14px", opacity: 0.7 }}>
                                        {course.number || `${(index + 1).toString().padStart(2, "0")}.`}
                                    </span>
                                    <span>{course.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CourseNavigation;
