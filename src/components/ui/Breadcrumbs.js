import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Link from "next/link";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const homeTextBaseClass =
  "text-sm font-medium text-gray-500 hover:text-gray-700";

export default function Breadcrumbs({
  breadcrumbs: { pages, homeUrl, homeTitle },
  className,
}) {
  const showHomeText = (homeTitle || "").length > 0;
  return (
    <nav className={classnames("mb-8 flex", className)} aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link
              data-testid="breadcrumbHome"
              href={homeUrl || "/"}
              className="text-gray-400 hover:text-gray-500"
            >
              <div className="flex items-center space-x-1">
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                {showHomeText && (
                  <span className={homeTextBaseClass}>{homeTitle}</span>
                )}
              </div>
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              {page.render && (
                <div className={classnames(homeTextBaseClass, "ml-4")}>
                  {page.render()}
                </div>
              )}
              {!page.render && page.current && (
                <span
                  data-testid="breadcrumbLinkCurrent"
                  className={classnames(homeTextBaseClass, "ml-4")}
                >
                  {page.name}
                </span>
              )}
              {!page.render && !page.current && (
                <Link
                  data-testid="breadcrumbLink"
                  href={page.href}
                  className={classnames(homeTextBaseClass, "ml-4")}
                  aria-current={page.current ? "page" : undefined}
                >
                  {page.name}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

Breadcrumbs.propTypes = {
  homeTitle: PropTypes.string,
  homeUrl: PropTypes.string,
  pages: PropTypes.array,
};

Breadcrumbs.defaultProps = {
  homeUrl: "/",
  homeTitle: "",
  pages: [],
};
