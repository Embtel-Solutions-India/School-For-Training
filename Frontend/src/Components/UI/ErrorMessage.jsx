// import React from "react";

const ErrorMessage = ({ message, onRetry }) => {
    return (
        <div className="alert alert-danger text-center py-4" role="alert">
            <h4 className="alert-heading">Oops! Something went wrong</h4>
            <p className="mb-3">{message}</p>
            {onRetry && (
                <button onClick={onRetry} className="btn btn-primary">
                    Try Again
                </button>
            )}
        </div>
    );
};

export default ErrorMessage;
