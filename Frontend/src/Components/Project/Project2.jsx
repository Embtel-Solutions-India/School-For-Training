import Slider from 'react-slick';
import data from '../../Data/project2.json';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Project2 = () => {


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
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
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
        <section className="case-studies-section style-2 space bg-dark">
            <div className="container">
                <div className="title-area three white text-center">
                    <div className="sub-title"><span><i className="asterisk"></i></span>FEATURED WORKS</div>
                    <h2 className="sec-title">Selected latest case <span className="bold text-theme2">studies</span> <br/> browse recent works</h2>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="case-slider swiper">
                            <div className="swiper-wrapper pb-60 md-pb-40 cs_slider_gap_301">
                            <Slider ref={sliderRef} {...settings}>
                            {data.map((item, index)=>(
                                <div key={index} className="swiper-slide">
                                    <div className="case-single-item">
                                        <div className="image-box overlay-anim1">
                                            <img src={item.img} alt="Two people discussing image" />
                                            <div className="overlay-btn">
                                                <Link to="/project/project-details" className="case-btn"><i className="bi bi-arrow-up-right"></i></Link>
                                            </div>
                                        </div>
                                        <div className="info-content">
                                            <div className="icon-box">
                                                <i className={item.icon}></i>
                                            </div>
                                            <div className="border"></div>
                                            <div className="info">
                                                <div className="category">{item.category}</div>
                                                <a href="/project/project-details"><h5 className="title">{item.title}</h5></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                </Slider>

                            </div>
                            <div className="case-btn-inner d-flex align-items-center">
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

export default Project2;