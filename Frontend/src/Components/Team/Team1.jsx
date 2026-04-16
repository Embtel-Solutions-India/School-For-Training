import { useRef } from 'react';
import data from '../../Data/team1.json';
import Slider from 'react-slick';

const Team1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true, 
        autoplay: true,
        autoplaySpeed: 4000,             
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
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
        <section className="team-section space">
        <div className="p-top-left wow slideInLeft"><img src="/assets/images/team/shape01.png" alt="Team shape" /></div>
        <div className="p-top-right wow slideInRight"><img src="/assets/images/team/shape02.png" alt="Team shape" /></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="team-title-wrap mb-50 md-mb-40 sm-mb-35">
                        <div className="title-area white mb-0">
                            <div className="sub-title"><span><i className="asterisk"></i></span>MEET The Team</div>
                            <h2 className="sec-title mb-0">Introducing our dedicated <br/> expert <span className="bold text-theme2">consultants</span></h2>
                        </div>
                        <div className="member-stats-box d-flex align-items-center">
                            <span className="count"><span className="count-number odometer" data-count="35">35</span>+</span>
                            <div className="borderY ml-20 mr-25"></div>
                            <p className="text">PROFFESSIONAL <br/> MEMBERS</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="team-slide-wrapper">
                        <div className="team-slider swiper">
                            <div className="swiper-wrapper cs_slider_gap_301">
                            <Slider ref={sliderRef} {...settings}>
                            {data.map((item, index)=>(
                                <div key={index} className="swiper-slide">
                                    <div className="team-single-box">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <div className="image"><img src={item.img} alt="Sandra D. Rainey" /></div>
                                                <div className="share-btn-wrap">
                                                    <ul className="social-link">
                                                        <li><a href={item.linkedin}><i className="bi bi-linkedin"></i></a></li>
                                                        <li><a href={item.twitter}><i className="bi bi-twitter"></i></a></li>
                                                        <li><a href={item.facebook}><i className="bi bi-facebook"></i></a></li>
                                                    </ul>
                                                    <div className="share-icon">
                                                        <span className="fa-solid fa-share-nodes"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="profile-info">
                                                <h4 className="name">{item.title}</h4>
                                                <p className="position">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                </Slider>

                            </div>
                        </div>
                        <div className="team-slide-btn">
                            <div className="array-button">
                                <button onClick={previous} className="array-prev"><i className="icon-angel-left"></i></button>
                                <button onClick={next} className="array-next active"><i className="icon-angel-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Team1;