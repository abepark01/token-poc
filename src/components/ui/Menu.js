import React from 'react';
import PropTypes from 'prop-types';
import { getClassName } from 'utils/ui/classes';

const baseClasses = [
  'absolute',
  'left-0',
  'bg-white',
  'shadow-lg',
  'top-10',
  'rounded-md',
  'ring-1',
  'ring-black',
  'ring-opacity-5',
];

export function renderMenu(items, style) {
  const finalStyle = Object.assign({}, style, {
    zIndex: 100000,
  });
  return (
    <div className={getClassName(baseClasses)} style={finalStyle}>
      {items}
    </div>
  );
}

const Menu = ({ children, style, className }) => {
  const containerClassName = getClassName(baseClasses, className);
  const finalStyle = Object.assign({}, style, {
    zIndex: 100000,
  });

  return (
    <div className={containerClassName} style={finalStyle}>
      {children}
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.any,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  style: PropTypes.object,
};

Menu.defaultProps = {
  style: {},
};

export default Menu;
