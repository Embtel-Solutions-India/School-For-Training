import { useState } from "react";
import TabNavigation from "../UI/TabNavigation";

const CourseCurriculum = ({ courseStructure }) => {
    const [activeTab, setActiveTab] = useState(0);

    if (!courseStructure || courseStructure.length === 0) return null;

    const tabs = courseStructure.map((module, index) => ({
        id: module._id || index,
        label: module.cardName,
        content: (
            <>
                <h4 className="mb-3">{module.cardName}</h4>
                <p>{module.cardDescription}</p>
            </>
        ),
    }));

    return (
        <div className="curriculum-section mb-40">
            <h3 className="title mb-20">Curriculum Overview</h3>
            <p className="mb-20">
                Our comprehensive curriculum is designed to take you from fundamentals to advanced expertise:
            </p>
            <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
    );
};

export default CourseCurriculum;
