import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const baseClassName =
  "text-left block px-4 py-2 text-sm text-gray-700 no-underline hover:no-underline group hover:text-gray-900 hover:bg-gray-100 z-10";

const DropdownItem = ({
  children,
  disabled,
  href,
  onClick,
  className,
  target,
  dataTestId,
}) => {
  function handleClick(e) {
    if (!disabled && onClick) {
      onClick(e);
    }
  }

  return (
    <a
      href={href}
      target={target}
      onClick={handleClick}
      className={classNames(baseClassName, { disabled }, className)}
      role="menuitem"
      data-testid={dataTestId}
    >
      {children}
    </a>
  );
};

DropdownItem.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  target: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
DropdownItem.defaultProps = {
  target: "_self",
};
export default DropdownItem;
