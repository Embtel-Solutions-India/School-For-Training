// import React from "react";

const ConsultingBox = ({ phone = "+880 123 (4567) 890", email = "courses@example.com" }) => {
    return (
        <div className="widget-box consulting-box">
            <div className="inner-box">
                <h4 className="title">
                    Need help with <br />
                    Course Selection?
                </h4>
                <p className="text">Feel free to contact us for guidance</p>
                <div className="pt-25 mb-50">
                    <div className="border"></div>
                </div>
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="icon">
                            <i className="icon-phone-circle-small"></i>
                        </div>
                        <div className="content">
                            <p>Call Us Now</p>
                            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon">
                            <i className="bi bi-envelope-fill"></i>
                        </div>
                        <div className="content">
                            <p>Send E-Mail</p>
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultingBox;
