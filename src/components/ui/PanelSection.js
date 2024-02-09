import React from "react";
import classnames from "classnames";

const baseClassName = "px-4 py-5 sm:px-6";

export default function PanelSection({ children, className }) {
  return <div className={classnames(baseClassName, className)}>{children}</div>;
}
