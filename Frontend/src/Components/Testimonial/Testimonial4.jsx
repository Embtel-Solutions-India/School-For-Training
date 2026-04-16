import Slider from "react-slick";
import data from '../../Data/testimonial3.json';

const Testimonial4 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true, 
        autoplay: true,
        autoplaySpeed: 4000,             
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 766,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };   

    return (
            <section className="testimonial-section space bg-theme2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="testi-content-wrap">
                            <div className="title-area twoT">
                                <div className="sub-title"><span><i className="asterisk"></i></span>TESTIMONIAL</div>
                                <h2 className="sec-title">Whats saying our <br/><span className="bold">customers about</span> <br/>bentol service</h2>
                            </div>
                            <div className="pb-30"><div className="border"></div></div>
                            <div className="testi-clutch">
                                <div className="review-card style-2">
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
                    <div className="col-lg-8">
                        <div className="testi-slider-4 swiper">
                            <div className="swiper-wrapper pb-50 md-pb-40 cs_slider_gap_301">

                            <Slider {...settings}>
                            {data.map((item, index)=>(
                                <div key={index} className="swiper-slide">
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
                            </Slider>

                            </div>
                            <div className="swiper-dot text-center">
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial4;