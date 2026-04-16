// import React from "react";

/**
 * Reusable Button Component
 */
const Button = ({
    children,
    onClick,
    variant = "primary", // primary, dark, transparent, outline
    icon,
    iconPosition = "right", // left or right
    className = "",
    type = "button",
    disabled = false,
    style = {},
}) => {
    const variantClasses = {
        primary: "theme-btn",
        dark: "theme-btn bg-dark",
        transparent: "theme-btn bg-transparent",
        outline: "theme-btn outline",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${variantClasses[variant]} ${className}`}
            style={style}
        >
            <span className="link-effect">
                <span className="effect-1">
                    {iconPosition === "left" && icon && <i className={`${icon} me-2`}></i>}
                    {children}
                    {iconPosition === "right" && icon && <i className={`${icon} ms-2`}></i>}
                </span>
                <span className="effect-1">
                    {iconPosition === "left" && icon && <i className={`${icon} me-2`}></i>}
                    {children}
                    {iconPosition === "right" && icon && <i className={`${icon} ms-2`}></i>}
                </span>
            </span>
        </button>
    );
};

export default Button;
