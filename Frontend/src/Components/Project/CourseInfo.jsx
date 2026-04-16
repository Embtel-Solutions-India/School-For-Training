// import React from "react";

const CourseInfo = ({ course }) => {
    return (
        <>
            <div className="details-image br-10 overflow-hidden mb-30 overlay-fade">
                <img src="/assets/images/project/details01.jpg" alt={course.title} />
            </div>

            <h3 className="title">{course.title}</h3>
            <p className="mb-15">
                <strong>{course.shortDescription || "Become a Data-Driven Professional"}</strong>
            </p>
            <p className="mb-15">{course.desc || course.description}</p>

            {course.fullDescription && (
                <div className="mb-25">
                    <h3 className="title">About This Course</h3>
                    <p>{course.fullDescription}</p>
                </div>
            )}
        </>
    );
};

export default CourseInfo;
