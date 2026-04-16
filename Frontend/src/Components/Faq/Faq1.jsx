import { useEffect, useRef, useState } from "react";
import data from '../../Data/faq.json';
import { Link } from "react-router-dom";

const Faq1 = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };
    useEffect(() => {
      if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);

    return (
        <section className="faq-section space bg-white">
        <div className="bg-path__shape"></div>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5 col-md-6">
                    <div className="contact-content-wrap">
                        <div className="title-area">
                            <div className="sub-title"><span><i className="asterisk"></i></span>FAQ&apos;S</div>
                            <h2 className="sec-title">Have any talks let&apos;s get <br/> free <span className="bold">consultation</span></h2>
                        </div>
                        <div className="contact-img br-10 overlay-anim1">
                            <img className="hover-reveal-item" src="/assets/images/faq/01.jpg" alt="Contact" />
                            <a href="+126083456789" className="contact-info">
                                <div className="icon"><i className="icon-phone-circle"></i></div>
                                <div className="number">+12 608 (3456) 789</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 lg-d-none"></div>
                <div className="faq-column col-lg-6 col-md-6">
                    <div className="inner-column mt-15 md-mt-0">
                        <ul className="accordion-box">

                        {data.map((item, index)=>(
                            <li key={index}  className={`accordion ${index === openItemIndex ? "active" : "" }`}>
                                <div onClick={() => handleItemClick(index)} className="acc-btn">{item.title}
                                    <div className="icon"></div>
                                </div>
                                <div className="acc-content" ref={accordionContentRef}>
                                    <div className="content">
                                        <div className="text">{item.desc}</div>
                                    </div>
                                </div>
                            </li>
                            ))}

                           
                        </ul>
                        <Link to="/about" className="theme-btn bg-dark mt-50">
                            <span className="link-effect">
                                <span className="effect-1">See Work Process</span>
                                <span className="effect-1">See Work Process</span>
                            </span><i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Faq1;