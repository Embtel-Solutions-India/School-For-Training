import { useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/project1.json';

const Project1 = () => {

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
        <section className="case-studies-section bg-white">
        <div className="outer-box space-top bg-theme3">
            <div className="container-fluid p-0 md-px-12">
                <div className="title-area threeT text-center mb-0">
                    <div className="sub-title"><span><i className="asterisk"></i></span>FEATURED WORKS</div>
                    <h2 className="sec-title fw-bold">Selected Case Studies</h2>
                    <p className="sec-text text-gray">Collaboratively disintermediate one to one functionalities and long term impact niche</p>
                </div>
                
                <div className="case-filter-buttons mb-40 mt-35">
                    <ul className="menu-filtering">
                        <li className={active === 'all' ? 'active' : ''} onClick={() => setActive('all')} > All Case </li>
                        {categoryMenu.map((item, index) => (
                        <li onClick={() => setActive(item.category)} className={active === item.category ? 'active' : ''} key={index} > {item.title} </li>
                    ))}
                    </ul>
                </div>

                
                <div className="row gx-0 gx-25 gy-25 image_load">
                    
                {data.map((item, index)=>(
                    <div className={`col-lg-3 col-md-6 col-sm-6 grid-item  ${ active === 'all' ? '' : !(active === item.category) ? 'd-none' : '' }`} key={index} >
                        <div className="case-single-item overlay-anim1">
                            <img className="img" src={item.img} alt="Business Development" />
                            <div className="case-info">
                                <div className="case-badge">
                                    <span>{item.category}</span>
                                    <span>{item.category2}</span>
                                </div>
                                <h4 className="title">{item.title}</h4>
                                <Link to="/project/project-details" className="case-btn">
                                     <i className="bi bi-plus"></i>
                                    <span className="link-effect">
                                        <span className="effect-1">View Details</span>
                                        <span className="effect-1">View Details</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}
                    

                
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="case-wrapper py-70">
                            <div className="text">
                                <div className="icon"><i className="icon-arrow-up-right"></i></div>
                                <p className="mt--5 mb-0">Completely restore extensive materials before interactive solutions. <br/> Progressively myocardinate viral paradigms</p>
                            </div>
                            <a href="service" className="theme-btn bg-transparent">
                                <span className="link-effect">
                                    <span className="effect-1">View All Cases</span>
                                    <span className="effect-1">View All Cases</span>
                                </span><i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Project1;