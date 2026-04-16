// import React from "react";
import Button from "../UI/Button";

const BrochureDownload = ({ onDownload }) => {
    return (
        <div className="brochure-download-section mb-40 text-center p-5 bg-light rounded">
            <h3 className="title mb-3">Download Course Brochure</h3>
            <p className="mb-4">
                Get detailed information about the course curriculum, duration, fees, and more.
            </p>
            <Button onClick={onDownload} variant="dark" icon="bi bi-download">
                Download Brochure
            </Button>
        </div>
    );
};

export default BrochureDownload;