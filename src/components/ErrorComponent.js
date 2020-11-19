import React from "react";
import PropTypes from "prop-types";

const ErrorComponent = ({ error, resetErrorBoundary }) => {
  return (
    <div className="cards-container">
      <div role="alert">
        <figure className="card">
          <div className="card__emoji">🐞</div>

          <div className="card__title-box">
            <h2 className="card__title">ERROR!</h2>
          </div>

          <div className="card__details">
            <div className="card__detail-box">
              <h6 className="card__detail card__detail--organic">
                Something is wrong!
              </h6>
            </div>

            <div className="card__detail-box">
              <h6 className="card__detail">{`${error.message} 😭`}</h6>
            </div>
          </div>

          <a
            onClick={() => resetErrorBoundary(false)}
            className="card__link"
            href="#"
          >
            <span>
              Fix it <i className="emoji-right">✔</i>
            </span>
          </a>

          <a
            onClick={() => resetErrorBoundary(true)}
            className="card__link__primary"
            href="#"
          >
            <span>
              Try again <i className="emoji-right">🐱‍🚀</i>
            </span>
          </a>
        </figure>
      </div>
    </div>
  );
};

ErrorComponent.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    resetErrorBoundary: PropTypes.func
  }).isRequired
};

export default ErrorComponent;
