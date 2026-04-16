import { useRef } from "react";
import Slider from "react-slick";
import data from '../../Data/testimonial2.json';

const Testimonial2 = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };



  return (
    <section className="testimonial-section style-2 space bg-white">
      <div className="p-top-right wow slideInRight"><img src="/assets/images/testimonial/shape01.png" alt="Choose shape" /></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="testi-thumb">
              <img className="wow img-custom-anim-left" src="/assets/images/testimonial/testimonial01.jpg" alt="Testimonial Image" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="testi-content-wrapper">
              <div className="title-area two">
                <div className="sub-title"><span><i className="asterisk"></i></span>TESTIMONIALS</div>
                <h2 className="sec-title">What’s our satisfied clients <br /><span className="bold">feedback</span> about bentol</h2>
              </div>
              <div className="testi-slider-2 swiper">
                <div className="swiper-wrapper">
                  <Slider ref={sliderRef} {...settings}>
                    {data.map((item, index) => (
                      <div key={index} className="swiper-slide">
                        <div className="testimonial-card style-2">
                          <div className="inner-box">
                            <div className="content">
                              <div className="quote-icon">
                                <i className="bi bi-quote"></i>
                              </div>
                              <div>
                                <p className="text">{item.desc}</p>
                                <div className="rating">
                                  <i className="bi bi-star-fill"></i>
                                  <i className="bi bi-star-fill"></i>
                                  <i className="bi bi-star-fill"></i>
                                  <i className="bi bi-star-fill"></i>
                                  <i className="bi bi-star-half"></i>
                                </div>
                              </div>
                            </div>
                            <div className="user-info">
                              <img src={item.img} alt="User Image" className="user-image" />
                              <div>
                                <h5 className="user-name">{item.title}</h5>
                                <p className="user-title">{item.subTitle}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>


                </div>
                <div className="array-button">
                  <button onClick={previous} className="array-prev"><i className="bi bi-arrow-left"></i></button>
                  <button onClick={next} className="array-next active"><i className="bi bi-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial2;