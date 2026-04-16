// import React from "react";

const FormTextarea = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    required = false,
    rows = 5,
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
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                rows={rows}
                className={`form-control ${error ? "is-invalid" : ""}`}
                style={{ backgroundColor: "var(--dark-color3)", color: "var(--white-color)" }}
                {...props}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default FormTextarea;
