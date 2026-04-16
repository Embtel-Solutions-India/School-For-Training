// import React from "react";

const FormInput = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
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
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`form-control ${error ? "is-invalid" : ""}`}
                style={{ backgroundColor: "var(--dark-color3)", color: "var(--white-color)" }}
                {...props}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default FormInput;
