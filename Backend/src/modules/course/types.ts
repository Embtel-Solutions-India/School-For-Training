// ================== Course Types ==================
interface createCourse { 
    title: string;
    duration: string;
    shortDescription: string;
    status: string;
    fullDescription: string;
    buttons?: { 
        enroll?: string;
        curriculum?: string;
    };
    courseStructure?: { 
        cardName: string; 
        cardDescription: string; 
    }[];
    features?: string[];
    whatWillYouLearn?: { 
        description: string; 
        points: string[]; 
    };
    curriculum?: { 
        dropdownTitle: string; 
        content: string; 
    }[];
    instructors?: { 
        name: string; 
        description: string; 
        image?: string; 
    }[];

    image?: string;      // main image
    images?: string[];   // ⭐ NEW: multiple images
}

interface updateCourse extends Partial<createCourse> {
    id: string;
}

export {
    createCourse,
    updateCourse
};
