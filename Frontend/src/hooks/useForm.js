import { useState } from "react";

/**
 * Custom hook for form state management
 * @param {Object} initialValues - Initial form values
 * @returns {Object} { formData, handleChange, handleSubmit, resetForm, setFormData }
 */
export const useForm = (initialValues = {}) => {
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const resetForm = () => {
        setFormData(initialValues);
    };

    const handleSubmit = (callback) => async (e) => {
        e.preventDefault();
        if (callback) {
            await callback(formData);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        resetForm,
        setFormData,
    };
};
