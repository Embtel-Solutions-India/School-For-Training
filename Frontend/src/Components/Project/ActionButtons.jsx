// import React from "react";
import Button from "../UI/Button";

const ActionButtons = ({ course, onEnroll, onDownload }) => {
    return (
        <div
            className="course-action-buttons mb-30"
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
            }}
        >
            <Button
                onClick={onEnroll}
                variant="outline"
                style={{
                    backgroundColor: "var(--white-color)",
                    color: "var(--dark-color)",
                    border: "2px solid var(--dark-color)",
                    flex: 1,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--orange-color)";
                    e.currentTarget.style.color = "var(--white-color)";
                    e.currentTarget.style.borderColor = "var(--orange-color)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--white-color)";
                    e.currentTarget.style.color = "var(--dark-color)";
                    e.currentTarget.style.borderColor = "var(--dark-color)";
                }}
            >
                {course?.buttons?.enroll || "Join Now"}
            </Button>

            <Button
                onClick={onDownload}
                variant="dark"
                icon="bi bi-download"
                style={{ flex: 1 }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--orange-color)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--dark-color)";
                }}
            >
                {course?.buttons?.curriculum || "View Curriculum"}
            </Button>
        </div>
    );
};

export default ActionButtons;
