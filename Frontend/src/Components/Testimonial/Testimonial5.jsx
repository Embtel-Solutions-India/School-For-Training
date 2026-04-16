import data from '../../Data/testimonial4.json';

const Testimonial5 = () => {
    return (
<section className="testimonial-section style-3 space bg-theme2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="testi-title-wrap mb-60 md-mb-40">
                            <div className="title-area mb-0">
                                <div className="sub-title"><span><i className="asterisk"></i></span>Testimonial</div>
                                <h2 className="sec-title mb-0">What’s our satisfied clients <br/><span className="bold">feedback</span> about bentol</h2>
                            </div>
                            <div className="review-card">
                                <div className="review-content">
                                    <p className="text">REVIEWED ON</p>
                                    <div className="clutch"><img src="/assets/images/testimonial/clutch1.png" alt="" /></div>
                                </div>
                                <div className="rating-inner">
                                    <span className="stars">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="rating-text">4.9 RATINGS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gy-30" id="testimonials-container">

                {data.map((item, index)=>(
                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                        <div className="testimonial-card style-3">
                            <div className="content-inner">
                                <div className="card-header">
                                    <img src={item.img} alt="User image" className="user-image" />
                                    <div className="user-details">
                                    <h5 className="user-name">{item.subTitle}</h5>
                                    <p className="user-title">{item.title}</p>
                                    </div>
                                </div>
                                <p className="user-review">
                                {item.desc}
                                </p>
                            </div>
                            <div className="rating-inner">
                                <span className="stars">
                                <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </span>
                                <span className="rating-text">(4.9)</span>
                            </div>
                        </div>
                    </div>

                    ))}


                </div>
              
            </div>
        </section>
    );
};

export default Testimonial5;