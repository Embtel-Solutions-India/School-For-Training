// import React from "react";

const FormSelect = ({
    label,
    name,
    value,
    onChange,
    options = [],
    placeholder = "Select an option",
    required = false,
    className = "",
    error,
    ...props
}) => {
    return (
        <div className={`form-group ${className}`}>
            {label && (
                <label htmlFor={name} className="mb-2">
                    {label} {required && "*"}
                </label>
            )}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className={`form-control custom-select ${error ? "is-invalid" : ""}`}
                style={{ backgroundColor: "var(--dark-color3)", color: "var(--white-color)" }}
                {...props}
            >
                <option value="">{placeholder}</option>
                {options.map((option, index) => (
                    <option key={option.value || index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default FormSelect;
