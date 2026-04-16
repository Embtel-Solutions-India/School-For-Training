import ContactForm from "./ContactForm";

const ContactInfo3 = () => {
    return (
        <div>
        <section className="contact-section style-2 space bg-theme3">
        <div className="container">
            <div className="row gy-30">
                <div className="col-lg-5">
                    <div className="contact-content-wrap">
                        <div className="title-area twoT">
                            <div className="sub-title"><span><i className="asterisk"></i></span>CONTACT US</div>
                            <h2 className="sec-title">Get in touch with us <br/> <span className="bold">contact</span> information</h2>
                            <p className="sec-text text-gray">We’re always ready to helps you. Let’s connect</p>
                        </div>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="icon">
                                <i className="bi bi-geo-alt-fill"></i>
                                </div>
                                <div className="info">
                                    <h4 className="title">Our Address</h4>
                                    <p>3690 New Market Rd #309, Brodil, <br/> San Fransisko - USA</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                <i className="bi bi-telephone-fill"></i>
                                </div>
                                <div className="info">
                                    <h4 className="title">Call us Anytime</h4>
                                    <div className="content">
                                        Consulting: <a href="tel:+8801234567890">+880 123 (4567) 890</a><br/>
                                        Corporate: <a href="tel:+995644356000">+99 564 (4356) 000</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                <i className="bi bi-envelope-fill"></i>
                                </div>
                                <div className="info">
                                    <h4 className="title">Send E-Mail</h4>
                                    <div className="content">
                                        <a href="mailto:help.example@gmail.com">help.example@gmail.com</a><br/>
                                        <a href="mailto:support.example@gmail.com">support.example@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="#">
                                <span className="link-effect">
                                    <span className="effect-1">Facebook</span>
                                    <span className="effect-1">Facebook</span>
                                </span>
                            </a>
                            <a href="#">
                                <span className="link-effect">
                                    <span className="effect-1">Twitter/X</span>
                                    <span className="effect-1">Twitter/X</span>
                                </span>
                            </a>
                            <a href="#">
                                <span className="link-effect">
                                    <span className="effect-1">LinkedIn</span>
                                    <span className="effect-1">LinkedIn</span>
                                </span>
                            </a>
                            <a href="#">
                                <span className="link-effect">
                                    <span className="effect-1">Instagram</span>
                                    <span className="effect-1">Instagram</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>

    <div className="contact-map">
        <div className="container-fluid p-0">
            <div className="row">

                <div className="map-box">
                        <iframe className="map-canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2266377107035!2d90.38657937589684!3d23.73929618920158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c71927841%3A0xde102c300beb3f0c!2sWebCode%20Institute!5e0!3m2!1sen!2sbd!4v1727077475625!5m2!1sen!2sbd"  loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>

</div>


    );
};

export default ContactInfo3;