import { useCourses } from "../../hooks/useCourses";
import LoadingSpinner from "../UI/LoadingSpinner";
import ErrorMessage from "../UI/ErrorMessage";
import CourseCard from "./CourseCard";

const Services4 = () => {
    const { courses, loading, error, refetch } = useCourses();

    if (loading) {
        return (
            <section className="service-section style-3 bg-white">
                <div className="container space">
                    <LoadingSpinner message="Loading courses..." />
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="service-section style-3 bg-white">
                <div className="container space">
                    <ErrorMessage message={`Error loading courses: ${error}`} onRetry={refetch} />
                </div>
            </section>
        );
    }

    return (
        <section className="service-section style-3 bg-white">
            <div className="container space">
                <div className="title-area three text-center">
                    <div className="sub-title"><span><i className="asterisk"></i></span>OUR SOLUTIONS</div>
                    <h2 className="sec-title">Providing the best <span className="bold">solutions</span> <br/> for your business</h2>
                </div>
                <div className="row gy-30">
                    {courses.map((course, index) => (
                        <div key={course._id || course.id || index} className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft">
                            <CourseCard course={course} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services4;