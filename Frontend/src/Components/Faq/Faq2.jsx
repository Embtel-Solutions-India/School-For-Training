import { useEffect, useRef, useState } from "react";
import data from '../../Data/faq.json';

const Faq2 = () => {

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
<section className="faq-section style-2 space bg-white">
            <div className="shape-mockup sm-d-none" data-top="12%" data-left="13%"><img src="/assets/images/faq/circle-shape.png" alt="shape" /></div>
            <div className="shape-mockup sm-d-none" data-top="12%" data-right="15%"><img src="/assets/images/faq/what.png" alt="shape" /></div>
            <div className="container">
                <div className="title-area three text-center">
                    <div className="sub-title"><span><i className="asterisk"></i></span>FAQ</div>
                    <h2 className="sec-title">Frequently Asked <span className="bold">Questions</span></h2>
                    <p className="sec-text text-gray">Collaboratively supply bricks-and-clicks metrics for maintainable users <br/> reinvent unique value for just in time consult.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="faq-column col-lg-8">
                        <div className="inner-column mt-15 md-mt-0">
                            <ul className="accordion-box style-2">

                            {data.map((item, index)=>(
                                <li key={index} className={`accordion ${index === openItemIndex ? "active" : "" }`} >
                                    <div onClick={() => handleItemClick(index)} className="acc-btn active">{item.title}
                                        <div className="icon"><i className="bi bi-chevron-down"></i></div>
                                    </div>
                                    <div ref={accordionContentRef} className="acc-content">
                                        <div className="content">
                                            <div className="text">{item.desc}</div>
                                        </div>
                                    </div>
                                </li>
                                ))}


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq2;