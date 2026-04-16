import { useState } from "react";

const CourseInstructors = ({ instructors }) => {
    const [activeInstructorTab, setActiveInstructorTab] = useState(0);

    if (!instructors || instructors.length === 0) return null;

    return (
        <div className="course-instructor-section-tabs mb-40">
            <h3 className="title mb-30 text-center">COURSE INSTRUCTOR</h3>

            <div className="row">
                {/* Sidebar with instructor tabs */}
                <div className="col-md-3">
                    <div
                        className="instructor-tabs-vertical"
                        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
                    >
                        {instructors.map((instructor, index) => (
                            <button
                                key={instructor._id || index}
                                className={`instructor-tab-btn ${activeInstructorTab === index ? "active" : ""}`}
                                onClick={() => setActiveInstructorTab(index)}
                                style={{
                                    padding: "15px 20px",
                                    backgroundColor:
                                        activeInstructorTab === index ? "var(--dark-color)" : "var(--light-color)",
                                    color:
                                        activeInstructorTab === index ? "var(--white-color)" : "var(--dark-color)",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    textAlign: "left",
                                    fontWeight: activeInstructorTab === index ? "bold" : "normal",
                                    fontSize: "16px",
                                    transition: "all 0.3s ease",
                                    borderLeft:
                                        activeInstructorTab === index
                                            ? "4px solid var(--orange-color)"
                                            : "4px solid transparent",
                                }}
                                onMouseEnter={(e) => {
                                    if (activeInstructorTab !== index) {
                                        e.target.style.backgroundColor = "var(--theme-color3)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeInstructorTab !== index) {
                                        e.target.style.backgroundColor = "var(--light-color)";
                                    }
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            border:
                                                "2px solid " +
                                                (activeInstructorTab === index
                                                    ? "var(--orange-color)"
                                                    : "var(--gray-color2)"),
                                        }}
                                    >
                                        <img
                                            src={instructor.image || "/assets/images/team/team01.jpg"}
                                            alt={instructor.name}
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            onError={(e) => {
                                                e.target.src = "/assets/images/team/team01.jpg";
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                                            {instructor.name}
                                        </div>
                                        <div style={{ fontSize: "12px", opacity: 0.7 }}>Instructor</div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Instructor content panel */}
                <div className="col-md-9">
                    <div
                        className="instructor-content p-4 rounded"
                        style={{
                            backgroundColor: "var(--dark-color)",
                            color: "var(--white-color)",
                            minHeight: "300px",
                        }}
                    >
                        {instructors.map((instructor, index) => (
                            <div
                                key={instructor._id || index}
                                style={{ display: activeInstructorTab === index ? "block" : "none" }}
                            >
                                <div className="row align-items-center mb-4">
                                    <div className="col-md-4 text-center mb-3 mb-md-0">
                                        <div
                                            className="instructor-image"
                                            style={{
                                                width: "180px",
                                                height: "180px",
                                                margin: "0 auto",
                                                borderRadius: "50%",
                                                overflow: "hidden",
                                                border: "5px solid var(--orange-color)",
                                                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                                            }}
                                        >
                                            <img
                                                src={instructor.image || "/assets/images/team/team01.jpg"}
                                                alt={instructor.name}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                onError={(e) => {
                                                    e.target.src = "/assets/images/team/team01.jpg";
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h3
                                            className="mb-2"
                                            style={{
                                                color: "var(--white-color)",
                                                fontSize: "32px",
                                                fontWeight: "bold",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {instructor.name}
                                        </h3>
                                        <p
                                            className="mb-0"
                                            style={{
                                                color: "var(--orange-color)",
                                                fontSize: "18px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            Instructor
                                        </p>
                                    </div>
                                </div>
                                <div className="instructor-bio">
                                    <p
                                        style={{
                                            color: "var(--gray-color2)",
                                            lineHeight: "1.8",
                                            fontSize: "16px",
                                        }}
                                    >
                                        {instructor.description || instructor.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseInstructors;
