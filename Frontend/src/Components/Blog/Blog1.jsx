import { Link } from "react-router-dom";
import data from '../../Data/blog1.json';

const Blog1 = () => {
    return (
        <section className="blog-section space bg-theme3">
            <div className="container">
                <div className="title-area three text-center">
                    <div className="sub-title"><span><i className="asterisk"></i></span>LATEST BLOG</div>
                    <h2 className="sec-title">Read our latest <span className="bold">blog posts</span></h2>
                </div>
                <div className="row gy-30">
                    {data.map((blog, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                            <article className="blog-single-box">
                                <div className="inner-box">
                                    <div className="blog-image">
                                        <img src={blog.img} alt="Blog Image" />
                                        <div className="category-tag">{blog.category}</div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="author">
                                            <img src={blog['social-img']} alt="Author Image" />
                                            <span className="name"><span>By</span> {blog.name}</span>
                                        </div>
                                        <div className="pt-25 pb-20"><div className="border dark"></div></div>
                                        <h4 className="title">
                                            <Link to="/blog/blog-details">{blog.title}</Link>
                                        </h4>
                                        <p className="text">{blog.desc}</p>
                                        <Link to="/blog/blog-details" className="continue-reading">{blog['btn-title']}</Link>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog1;
