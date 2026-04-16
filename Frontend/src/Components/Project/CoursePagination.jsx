// import React from "react";

const CoursePagination = ({ onPrevious, onNext }) => {
    return (
        <>
            <div className="py-40">
                <div className="border"></div>
            </div>
            <div className="details__pagination-box">
                <ul className="details__pagination">
                    <li className="previous">
                        <button
                            onClick={onPrevious}
                            aria-label="Previous"
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "0",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <i className="bi bi-arrow-left"></i>
                            <span>Previous Course</span>
                        </button>
                    </li>
                    <li className="next">
                        <button
                            onClick={onNext}
                            aria-label="Next"
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "0",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <span>Next Course</span>
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default CoursePagination;
