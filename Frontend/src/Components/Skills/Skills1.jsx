import React, { useState, useEffect } from 'react';

const Skills1 = ({ title, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="skill-item">
      <div className="skill-header">
        <div className="skill-title">{title}</div>
      </div>
      <div className="skill-bar">
        <div className="bar-inner">
          <div
            className="bar progress-line"
            style={{ width: `${width}%`, transition: 'width 3s ease' }}
          >
            <div className="skill-percentage">
              <span>{percentage}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills1;
