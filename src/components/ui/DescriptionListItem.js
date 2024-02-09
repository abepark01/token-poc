import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const DescriptionListItem = ({ label, children, className, darkMode }) => (
  <div className={classNames(className)}>
    <dt
      className={classNames("my-0 text-sm font-medium leading-6 text-left", {
        "text-gray-900": !darkMode,
        "text-gray-200": darkMode,
      })}
    >
      {label}
    </dt>
    <div
      className={classNames("break-words mt-1 text-sm text-left", {
        "text-gray-700": !darkMode,
        "text-white": darkMode,
      })}
    >
      {children}
    </div>
  </div>
);

DescriptionListItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  darkMode: PropTypes.bool,
};

DescriptionListItem.defaultProps = {
  darkMode: false,
};

export default DescriptionListItem;
