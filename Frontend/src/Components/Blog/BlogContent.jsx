// import React from "react";

const BlogContent = ({ blog }) => {
    return (
        <div className="blog-list-card style-2">
            <div className="image overlay-anim1">
                <img
                    src={blog?.image || "/assets/images/blog/blog-thumb01.jpg"}
                    alt={blog?.title || "Blog Image"}
                />
            </div>
            <div className="card-content">
                <span className="category">{blog?.category || "BUSINESS"}</span>
                <h3 className="title">{blog?.title || "Quickly reconceptualize strategic e-tailers"}</h3>
                <div className="author-info">
                    {/* <div className="author">
                        <img
                            src={blog?.authorImage || "/assets/images/blog/social-pr01.jpg"}
                            alt={blog?.author || "Author"}
                        />
                        <span className="name">
                            <span>By</span> {blog?.author || "Robert Aguilar"}
                        </span>
                    </div> */}
                    {/* <span className="date"> */}
                    <span>
                        <i className="icon-calender"></i> {blog?.date || "August 09, 2024"}
                    </span>
                </div>
                <div className="pt-20 pb-25">
                    <div className="border dark"></div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: blog?.content || "" }} />

                {/* Tags and Share */}
                <div className="blog-details__bottom">
                    {/* <div className="blog-details__tags">
                        <span>Tags:</span>
                        <ul className="blog-details__tags">
                            {blog?.tags?.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            )) || (
                                <>
                                    <li>BUSINESS</li>
                                    <li>FINANCE</li>
                                </>
                            )}
                        </ul>
                    </div> */}
                    <div className="blog-details__social-list">
                        <span>Share:</span>
                        <a href="https://www.facebook.com/">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://x.com/">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="https://www.pinterest.com/">
                            <i className="fa-brands fa-pinterest-p"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogContent;