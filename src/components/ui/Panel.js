import React from "react";
import classnames from "classnames";

const baseClassName =
  "overflow-hidden rounded-lg bg-white shadow flex flex-col justify-between";

export default function Panel({ children, className }) {
  return (
    <section className={classnames(baseClassName, className)}>
      {children}
    </section>
  );
}
