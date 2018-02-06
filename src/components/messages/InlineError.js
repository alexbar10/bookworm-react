import React from "react";
import PropTypes from "prop-types";

const InlineError = ({ errorMessage }) => (
  <span
    style={{
      color: "#ae5856"
    }}
  >
    {errorMessage}
  </span>
);

InlineError.propTypes = {
  errorMessage: PropTypes.string.isRequired
};

export default InlineError;
