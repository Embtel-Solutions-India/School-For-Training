// import React from "react";

const CourseDetailsCard = ({ course }) => {
  return (
    <div className="sidebar-widget">
      <div className="widget-box project-details-box">
        <h4 className="title">Course Details</h4>
        <div className="content">
          <ul>
            <li>
              <strong>Course Name:</strong> {course.title}
            </li>
            <li>
              <strong>Duration:</strong> {course.duration}
            </li>
            <li>
              <strong>Short Description:</strong>{" "}
              {course.shortDescription}
            </li>
            <li>
              <strong>Status:</strong> {course.status || "Active"}
            </li>
            <li>
              <strong>Category:</strong>{" "}
              {course.category || "Professional Development"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
