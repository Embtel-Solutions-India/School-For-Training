import data from '../../Data/team2.json';

const Team3 = () => {
    return (
        <section className="team-section style-2 space bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="team-title-wrap mb-60 md-mb-40">
                            <div className="title-area mb-0">
                                <div className="sub-title"><span><i className="asterisk"></i></span>MEET The Team</div>
                                <h2 className="sec-title mb-0">Introducing our dedicated <br/> expert <span className="bold">consultants</span></h2>
                            </div>
                            <div className="member-stats-box d-flex align-items-center">
                                <span className="count"><span className="count-number odometer" data-count="35">35</span>+</span>
                                <div className="borderY ml-20 mr-25"></div>
                                <p className="text">PROFFESSIONAL <br/> MEMBERS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gy-30">
                    {data.map((item, index)=>(
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6">
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

                </div>
            </div>
        </section>
    );
};

export default Team3;