import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ChevronRightIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(className)}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

ChevronRightIcon.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

ChevronRightIcon.defaultProps = {
  className: "w-5 h-5",
};

export default ChevronRightIcon;
