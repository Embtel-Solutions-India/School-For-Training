// import React from "react";

/**
 * Reusable Tab Navigation Component
 * @param {Array} tabs - Array of tab objects with { id, label, content }
 * @param {number} activeTab - Currently active tab index
 * @param {Function} onTabChange - Callback when tab changes
 */
const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="tab-navigation">
            {/* Tab Headers */}
            <div className="curriculum-tabs mb-3">
                <ul className="nav nav-tabs" role="tablist">
                    {tabs.map((tab, index) => (
                        <li className="nav-item" key={tab.id || index}>
                            <button
                                className={`nav-link ${activeTab === index ? "active" : ""}`}
                                onClick={() => onTabChange(index)}
                                type="button"
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tab Content */}
            <div className="tab-content p-4 border rounded">
                {tabs.map((tab, index) => (
                    <div
                        key={tab.id || index}
                        className={`tab-pane ${activeTab === index ? "active show" : ""}`}
                        style={{ display: activeTab === index ? "block" : "none" }}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabNavigation;
