import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Container = ({ children, className, style, useMaxWidth }) => (
  <div
    className={classnames(
      `px-4 sm:px-6 lg:px-8 mx-auto ${
        useMaxWidth ? "max-w-7xl 2xl:max-w-screen-2xl" : ""
      }`,
      className
    )}
    style={style}
  >
    {children}
  </div>
);

Container.propTypes = {
  useMaxWidth: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]),
};
Container.defaultProps = {
  useMaxWidth: true,
};
export default Container;
