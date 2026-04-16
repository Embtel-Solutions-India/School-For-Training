// import React from "react";
import { Link } from "react-router-dom";

const BlogCategories = ({ categories }) => {
    const defaultCategories = [
        { name: "Finance Consulting", count: 5 },
        { name: "Business Consulting", count: 3 },
        { name: "Marketing", count: 6 },
        { name: "Technology", count: 4 },
        { name: "IT Solutions", count: 2 },
        { name: "Artificial Intelligence", count: 3 },
    ];

    const categoryList = categories || defaultCategories;

    return (
        <div className="sidebar-category-list">
            <h4 className="sidebar-title">Category</h4>
            <div className="widget-box">
                <ul className="categories">
                    {categoryList.map((category, index) => (
                        <li key={index}>
                            <Link to={`/blog?category=${category.name}`}>
                                {category.name} <span>({category.count})</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogCategories;