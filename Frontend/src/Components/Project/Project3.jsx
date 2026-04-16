import { useState } from "react";
import data from '../../Data/project3.json';
import { Link } from "react-router-dom";

const Project3 = () => {

    const categoryMenu = [
        {
          title: 'Finance',
          category: 'Finance',
        },
        {
          title: 'Marketing',
          category: 'Marketing',
        },
        {
          title: 'Business',
          category: 'Business',
        },
      ];

      const [active, setActive] = useState('all');

    return (
            <section className="case-studies-section style-3 space bg-white">
            <div className="container">
                <div className="title-area threeT text-center mb-0">
                    <div className="sub-title"><span><i className="asterisk"></i></span>FEATURED WORKS</div>
                    <h2 className="sec-title fw-bold">Selected Case Studies</h2>
                    <p className="sec-text text-gray">Collaboratively disintermediate one to one functionalities and long term impact niche</p>
                </div>
              
                <div className="case-filter-buttons mb-40 mt-35">
                    <ul className="menu-filtering">
                        <li  className={active === 'all' ? 'active' : ''} onClick={() => setActive('all')} > All Case </li>
                        {categoryMenu.map((item, index) => (
                        <li onClick={() => setActive(item.category)} className={active === item.category ? 'active' : ''} key={index} > {item.title} </li>
                    ))}
                    </ul>
                </div>

                <div className="row gy-40 image_load">
                {data.map((item, index)=>(
                    <div className={`col-lg-4 col-md-6 col-sm-6 grid-item  ${ active === 'all' ? '' : !(active === item.category) ? 'd-none' : '' }`} key={index} >
                        <div className="case-single-item overlay-anim1">
                            <img className="img" src={item.img} alt="Business Development" />
                            <div className="case-info">
                                <h4 className="title"><Link to="/project/project-details">{item.title}</Link></h4>
                                <div className="case-badge">
                                    <span>{item.category}</span>
                                    <span>{item.category2}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                   ))}


                </div>
            </div>
        </section>
    );
};

export default Project3;