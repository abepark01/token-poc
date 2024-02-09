import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const DotsVerticalIcon = ({ className, type }) => {
  if (type === "solid") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(className)}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      />
    </svg>
  );
};

DotsVerticalIcon.propTypes = {
  type: PropTypes.oneOf(["solid", "outline"]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

DotsVerticalIcon.defaultProps = {
  type: "solid",
  className: "w-6 h-6",
};

export default DotsVerticalIcon;
