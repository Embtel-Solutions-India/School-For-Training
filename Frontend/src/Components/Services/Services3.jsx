import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import data from '../../Data/services2.json';

const Services3 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,     
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
            }
          },{
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
        <section className="service-section style-3 bg-dark">
        <div className="container space">
            <div className="title-area three white text-center">
                <div className="sub-title"><span><i className="asterisk"></i></span>Our Solutions</div>
                <h2 className="sec-title">Providing the best <span className="bold text-theme2">solutions</span> <br/> for your business</h2>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="service-slide-wrapper">
                        <div className="service-slider-2 swiper">
                            <div className="swiper-wrapper pb-60 md-pb-40 cs_slider_gap_301">

                            <Slider ref={sliderRef} {...settings}>
                            {data.map((item, index)=>(
                                <div key={index} className="swiper-slide">
                                    <div className="service-single-box">
                                        <div className="inner-box">
                                            <div className="icon"><i className={item.icon}></i></div>
                                            <div className="border mt-50 xs-mt-40 mb-30"></div>
                                            <h4 className="title">{item.title}</h4>
                                            <p className="text">{item.desc}</p>
                                            <Link to={item.btnLink} className="theme-btn service-btn">
                                            <i className="bi bi-plus-lg"></i>
                                                <span className="link-text">{item.btnText}</span>
                                            </Link>
                                            <span className="serial">{item.number}</span>
                                            <div className="path__shape"></div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                </Slider>


                            </div>
                        </div>
                        <div className="service-btn-inner d-flex align-items-center">
                            <span className="line"></span>
                            <div className="array-button d-flex align-items-center justify-content-center gap-10">
                                <button onClick={previous} type="button" className="array-prev">
                                <i className="bi bi-arrow-left"></i>
                                </button>
                                <button onClick={next} type="button" className="array-next">
                                <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Services3;