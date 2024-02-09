import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { colors } from "@/constants/colors";

const sizes = {
  small: "small",
  large: "large",
};

const Badge = ({
  color,
  size,
  withRemove,
  rounded,
  text,
  children,
  onClick,
  onRemove,
  id,
  className,
  style,
  active,
}) => {
  function handleClick() {
    if (onClick) {
      onClick();
    }
  }
  return (
    <div className={classnames("flex-none", className)}>
      <div
        style={style}
        className={getBadgeClassName({
          color,
          size,
          withRemove,
          rounded,
          active,
          onClick,
        })}
        onClick={handleClick}
      >
        {getBadgeBody(text, children)}
        {withRemove && onRemove && (
          <button
            id={id}
            type="button"
            onClick={onRemove}
            className={getRemoveButtonClass(color)}
          >
            <svg
              className="h-2 w-2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 8 8"
            >
              <path
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M1 1l6 6m0-6L1 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

Badge.propTypes = {
  color: PropTypes.oneOf(Object.values(colors)),
  text: PropTypes.string,
  size: PropTypes.oneOf(Object.values(sizes)),
  active: PropTypes.bool,
  withRemove: PropTypes.bool,
  rounded: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

Badge.defaultProps = {
  color: colors.gray,
  active: false,
  size: sizes.small,
  withRemove: false,
  rounded: false,
};

export default Badge;

function getBadgeColorClassName({ color, active }) {
  const ringClasses = { "ring-offset-2": active, "ring-2": active };
  switch (color) {
    case colors.red:
      return [
        { "bg-red-100": !active, "ring-red-500": active, "bg-red-200": active },
        "text-red-800",
        "hover:bg-red-200",
        ringClasses,
      ];
    case colors.yellow:
      return [
        {
          "bg-yellow-100": !active,
          "bg-yellow-200": active,
          "ring-yellow-500": active,
        },
        "text-yellow-800",
        "hover:bg-yellow-200",
        ringClasses,
      ];
    case "brand":
      return [
        {
          "bg-green": !active,
          "bg-green-500": active,
          "ring-green-500": active,
        },
        "text-white",
        "hover:bg-green-500",
        ringClasses,
      ];
    case colors.green:
      return [
        {
          "bg-green-100": !active,
          "bg-green-200": active,
          "ring-green-500": active,
        },
        "text-green-800",
        "hover:bg-green-200",
        ringClasses,
      ];
    case colors.blue:
      return [
        {
          "bg-blue-100": !active,
          "bg-blue-200": active,
          "ring-blue-500": active,
        },
        "text-blue-800",
        "hover:bg-blue-200",
        ringClasses,
      ];
    case "purple":
      return [
        {
          "bg-purple-100": !active,
          "bg-purple-200": active,
          "ring-purple-500": active,
        },
        "text-purple-800",
        "hover:bg-purple-200",
        ringClasses,
      ];
    case colors.indigo:
      return [
        {
          "bg-indigo-100": !active,
          "bg-indigo-200": active,
          "ring-indigo-500": active,
        },
        "text-indigo-800",
        "hover:bg-indigo-200",
        ringClasses,
      ];
    case colors.pink:
      return [
        {
          "bg-pink-100": !active,
          "bg-pink-200": active,
          "ring-pink-500": active,
        },
        "text-pink-800",
        "hover:bg-pink-200",
        ringClasses,
      ];
    default:
      return [
        {
          "bg-gray-200": !active,
          "bg-gray-300": active,
          "ring-gray-500": active,
        },
        "text-gray-800",
        "hover:bg-gray-300",
        ringClasses,
      ];
  }
}

function getHorizontalPadding(size = sizes.small, withRemove = false) {
  if (size === sizes.small && withRemove) {
    return "px-2";
  }

  if (size === sizes.large && !withRemove) {
    return "px-3";
  }

  return "px-2.5";
}

function getTextClass(size = sizes.small) {
  if (size === sizes.large) {
    return "text-sm";
  }
  return "text-xs";
}

function getBadgeClassName({
  color,
  size = sizes.small,
  withRemove = false,
  rounded = false,
  onClick,
  active,
}) {
  return classnames(
    "inline-flex",
    "items-center",
    "py-0.5",
    "font-bold",
    getTextClass(size),
    getHorizontalPadding(size, withRemove),
    ...getBadgeColorClassName({ color, active }),
    {
      rounded: rounded,
      "rounded-full": !rounded,
      "cursor-pointer": !!onClick,
    },
  );
}

const buttonClass = [
  "flex-shrink-0",
  "ml-0.5",
  "h-4",
  "w-4",
  "rounded-full",
  "inline-flex",
  "items-center",
  "justify-center",
  "focus:outline-none",
  "focus:text-white",
];

function getRemoveButtonColorClass(color) {
  switch (color) {
    case colors.yellow:
      return [
        "focus:bg-yellow-500",
        "hover:text-yellow-500",
        "hover:bg-yellow-200",
        "text-yellow-400",
      ];
    case "brand":
      return ["focus:bg-green", "hover:bg-green-500", "text-green-50"];
    case colors.green:
      return [
        "focus:bg-green-500",
        "hover:text-green-500",
        "hover:bg-green-200",
        "text-green-400",
      ];
    case colors.blue:
      return [
        "focus:bg-blue-500",
        "hover:text-blue-500",
        "hover:bg-blue-200",
        "text-blue-400",
      ];
    case colors.red:
      return [
        "focus:bg-red-500",
        "hover:text-red-500",
        "hover:bg-red-200",
        "text-red-400",
      ];
    case colors.indigo:
      return [
        "focus:bg-indigo-500",
        "hover:text-indigo-500",
        "hover:bg-indigo-200",
        "text-indigo-400",
      ];
    case colors.purple:
      return [
        "focus:bg-purple-500",
        "hover:text-purple-500",
        "hover:bg-purple-200",
        "text-purple-400",
      ];
    case colors.pink:
      return [
        "focus:bg-pink-500",
        "hover:text-pink-500",
        "hover:bg-pink-200",
        "text-pink-400",
      ];
    default:
      return [
        "focus:bg-gray-500",
        "hover:text-gray-500",
        "hover:bg-gray-200",
        "text-gray-400",
      ];
  }
}

function getRemoveButtonClass(color) {
  return classnames(buttonClass, getRemoveButtonColorClass(color));
}

function getBadgeBody(text, children) {
  if (text) {
    return text;
  }
  return children;
}
