import React, { forwardRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/20/solid";
import { useFloating, autoUpdate } from "@floating-ui/react";
import classNames from "classnames";

const baseClassName =
  "inline-flex items-center justify-center w-full px-4 py-2 font-medium rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-green-cm";

const baseWideClassName =
  "inline-flex items-center justify-center w-full px-8 py-3 font-semibold rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-green-cm";

const determineButtonClass = (wide) => {
  return wide ? baseWideClassName : baseClassName;
};

const DropdownMenuButton = forwardRef(function DropdownMenuButton(
  { label, expanded, isDark, isWide, dropDownButtonWidth },
  ref,
) {
  return (
    <Menu.Button
      ref={ref}
      className={classNames(determineButtonClass(isWide), {
        "bg-white": !isDark,
        "text-gray-300": isDark,
        "text-gray-700": !isDark,
        "border-gray-300": !isDark,
        border: !isDark,
        p,
      })}
      aria-haspopup="true"
      aria-expanded={expanded}
    >
      <span className={dropDownButtonWidth}>{label}</span>
      <ChevronDownIcon className="-mr-1 ml-2 h-4 w-4" />
    </Menu.Button>
  );
});

const DropdownMenuIconButton = forwardRef(function DropdownMenuIconButton(
  { className },
  ref,
) {
  return (
    <Menu.Button
      ref={ref}
      className={classNames(
        "flex items-center rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100",
        className,
      )}
    >
      <span className="sr-only">Open options</span>
      <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
    </Menu.Button>
  );
});

const DropdownRenderButton = forwardRef(function DropdownRenderButton(
  { button },
  ref,
) {
  return <Menu.Button ref={ref}>{button}</Menu.Button>;
});

const DropdownMenu = ({
  title,
  button,
  children,
  isDark,
  isWide,
  menuClosed,
  useIcon,
  dropDownButtonWidth,
}) => {
  const { refs, floatingStyles, update } = useFloating({
    placement: "bottom-end",
    whileElementsMounted: autoUpdate,
  });
  return (
    <Menu>
      {({ open }) => {
        if (!open && menuClosed) menuClosed();
        return (
          <>
            {button && (
              <DropdownRenderButton button={button} ref={refs.setReference} />
            )}
            {useIcon && !button && (
              <DropdownMenuIconButton ref={refs.setReference} />
            )}
            {!useIcon && !button && (
              <DropdownMenuButton
                label={title}
                expanded={open}
                isDark={isDark}
                isWide={isWide}
                dropDownButtonWidth={dropDownButtonWidth}
                ref={refs.setReference}
              />
            )}
            <div
              ref={refs.setFloating}
              style={{ ...floatingStyles, zIndex: 10000 }}
            >
              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                beforeEnter={() => update()}
                beforeLeave={() => update()}
              >
                <Menu.Items
                  static
                  className="z-10 mt-2 rounded-md bg-white text-left shadow-lg outline-none ring-black"
                >
                  <div
                    className="dropdown z-10 py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {children}
                  </div>
                </Menu.Items>
              </Transition>
            </div>
          </>
        );
      }}
    </Menu>
  );
};

export default DropdownMenu;
