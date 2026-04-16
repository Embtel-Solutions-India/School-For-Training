import { Link } from "react-router-dom";

const ContactList = () => {
    return (
        <div className="contact-wrapper space-bottom bg-theme3">
            <div className="contact-option">
                <i className="bi bi-envelope"></i>
                <span>Looking for help?</span>
                <Link to="/contact" className="contact-link">Contact us Today</Link>
            </div>
            <div className="social-option">
                <i className="bi bi-hand-thumbs-up"></i>
                <span>Keep in touch</span>
                <a href="https://www.facebook.com/" className="social-link" target="_blank"  rel="noopener noreferrer">
                    Like us on Facebook
                </a>
            </div>
        </div>
    );
};

export default ContactList;
