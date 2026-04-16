// import React from "react";

const WhatYouLearn = ({ whatYouLearn }) => {
    if (!whatYouLearn) return null;

    return (
        <div className="mb-35">
            <h3 className="title">What You Will Learn</h3>
            <p className="mb-20">{whatYouLearn.description}</p>
            <div className="featured-list">
                <ul className="list-style-1">
                    {whatYouLearn.points?.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WhatYouLearn;
