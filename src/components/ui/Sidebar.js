import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Disclosure } from "@headlessui/react";

import {
  ChartPieIcon,
  HomeIcon,
  HeartIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Tooltip from "components/ui/Tooltip";
import Link from "next/link";
import { useGroups } from "hooks/unifiedview/useReports";

const favorites = [
  {
    name: "Report #1",
    href: "/unifiedview/reports/1",
    icon: ChartPieIcon,
    current: false,
  },
  {
    name: "Report #2",
    href: "/unifiedview/reports/2",
    icon: ChartPieIcon,
    current: false,
  },
  {
    name: "Report #3",
    href: "/unifiedview/reports/3",
    icon: ChartPieIcon,
    current: false,
  },
  {
    name: "Report #4",
    href: "/unifiedvew/reports/4",
    icon: ChartPieIcon,
    current: false,
  },
  {
    name: "Report #5",
    href: "/unifiedview/reportes/5",
    icon: ChartPieIcon,
    current: false,
  },
];

const containerClassName =
  "fixed inset-y-0 lg:z-50 lg:flex lg:flex-col overflow-y-auto";
export default function Sidebar({ onToggle, activeTab, groupId }) {
  const { data } = useGroups();
  const mappedGroupId = groupId ? parseInt(groupId, 10) : null;

  const mappedGroups = (data || []).map((item) => {
    return {
      ...item,
      current: item.id === mappedGroupId,
      children: (item.children || []).map((subItem) => {
        return {
          ...subItem,
          current: subItem.id === mappedGroupId && activeTab === "groups",
        };
      }),
    };
  });

  const navigation = [
    {
      name: "Favorites",
      href: "/unifiedview/favorites",
      icon: HeartIcon,
      current: activeTab === "favorites",
    },
    {
      name: "All Reports",
      href: "/unifiedview/reports",
      icon: ChartPieIcon,
      current: activeTab === "all-reports",
    },
    {
      name: "My Reports",
      href: "/unifiedview/my-reports",
      icon: ChartPieIcon,
      current: activeTab === "my-reports",
    },
    {
      name: "Explore",
      href: "/unifiedview/explore",
      icon: HomeIcon,
      current: activeTab === "explore",
    },
  ];

  const [hideNavText, setHideNavText] = useState(false);
  function handleHideNavText() {
    setHideNavText(!hideNavText);

    if (onToggle) {
      onToggle(hideNavText ? "expanded" : "collapsed");
    }
  }

  return (
    <div
      className={classnames(containerClassName, { "lg:w-72": !hideNavText })}
    >
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex h-full grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 py-5 pb-4 sm:py-6">
        <nav className="flex flex-1 flex-col">
          <div className="flex justify-end">
            <a
              href="#"
              className="hidden text-gray-500 hover:bg-gray-50 hover:text-green-600 lg:block"
              onClick={handleHideNavText}
            >
              {hideNavText ? (
                <ChevronDoubleRightIcon className="h-6 w-6 shrink-0" />
              ) : (
                <ChevronDoubleLeftIcon className="h-6 w-6 shrink-0" />
              )}

              <span className="sr-only">
                {hideNavText ? "Expand" : "Collapse"}
              </span>
            </a>
          </div>
          {children}

          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Tooltip content={item.name}>
                      <a
                        href={item.href}
                        className={classnames(
                          {
                            "bg-gray-50 text-green-600": item.current,
                            "text-gray-700 hover:bg-gray-50 hover:text-green-600":
                              !item.current,
                          },
                          "group flex w-full gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                        )}
                      >
                        <item.icon
                          className={classnames(
                            item.current
                              ? "text-green-600"
                              : "text-gray-400 group-hover:text-green-600",
                            "h-6 w-6 shrink-0",
                          )}
                          aria-hidden="true"
                        />
                        {!hideNavText && (
                          <span className="hidden lg:block">{item.name}</span>
                        )}
                      </a>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  activeTab: PropTypes.string,
  groupId: PropTypes.number,
};

Sidebar.defaultProps = {
  activeTab: "groups",
};
