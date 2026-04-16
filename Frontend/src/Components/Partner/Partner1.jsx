import Slider from "react-slick";
import data from '../../Data/prantner.json';

const Partner1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,       
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };      

    return (
        <div className="brands-section space-bottom bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sponsors-outer">
                            <div className="trusted-partners mt--15"><span className="bg-white pr-10">Our Trusted Partners</span></div>
                            <div className="brands-slider swiper">
                                <div className="swiper-wrapper">
                                    <Slider {...settings}>
                                    {data.map((item, index)=>(
                                    <div key={index} className="swiper-slide">
                                        <div className="brand-item">
                                            <a className="image" href="#">
                                                <img src={item.img} alt="Brand 01" />
                                            </a>
                                        </div>
                                    </div>
                                    ))}
                                    </Slider>
                                </div>
                            </div>
                            <div className="trusted-partners text-right mb--10"><span className="bg-white pl-10">Almost <span className="text-theme">3k+ Partners</span> we have</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner1;