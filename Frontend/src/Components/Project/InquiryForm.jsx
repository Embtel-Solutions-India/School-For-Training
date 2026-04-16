// import React from "react";
import FormInput from "../Forms/FormInput";
import FormTextarea from "../Forms/FormTextarea";
import FormSelect from "../Forms/FormSelect";
import Button from "../UI/Button";
import { useForm } from "../../hooks/useForm";
import { courseAPI } from "../../API";

const InquiryForm = ({ courses }) => {
    const { formData, handleChange, handleSubmit, resetForm } = useForm({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
    });

    const onSubmit = async (data) => {
        try {
            await courseAPI.createInquiry(data);
            alert("Your inquiry has been submitted successfully!");
            resetForm();
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    const courseOptions = courses.map((course) => ({
        value: course.title,
        label: course.title,
    }));

    return (
        <div className="inquiry-form-section mb-40">
            <h3 className="title mb-3">Inquire About This Course</h3>
            <p className="mb-4">
                Have questions? Fill out the form below and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
                <div className="row gy-3">
                    <div className="col-md-6">
                        <FormInput
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <FormSelect
                            label="Course Selected"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            options={courseOptions}
                            placeholder="Select a course"
                            required
                        />
                    </div>

                    <div className="col-12">
                        <FormTextarea
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here..."
                            rows={5}
                        />
                    </div>

                    <div className="col-12">
                        <Button type="submit" variant="dark" icon="bi bi-arrow-right">
                            Submit Inquiry
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InquiryForm;
