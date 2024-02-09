import React, { Fragment, forwardRef } from "react";
import PropTypes from "prop-types";
import { Menu, Transition } from "@headlessui/react";
import { getClassName } from "utils/ui/classes";
import ChevronDownIcon from "components/icons/ChevronDownIcon";
import DotsVerticalIcon from "components/icons/DotsVerticalIcon";
import { useFloating, autoUpdate } from "@floating-ui/react";

const DropdownMenuButton = forwardRef(function DropdownMenuButton(
  { label, testDataId },
  ref
) {
  return (
    <div data-testid={testDataId || "dropdown-button-wrapper"} ref={ref}>
      <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        {label}
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </Menu.Button>
    </div>
  );
});

const DropdownMenuIconButton = forwardRef(function DropdownMenuIconButton(
  { testDataId },
  ref
) {
  return (
    <div data-testid={testDataId || "dropdown-button-wrapper"} ref={ref}>
      <Menu.Button className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        <span className="sr-only">Open options</span>
        <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
      </Menu.Button>
    </div>
  );
});

export default function Dropdown({ label, useIcon, children, testDataId }) {
  const { refs, floatingStyles, update } = useFloating({
    strategy: "fixed",
    placement: "bottom-end",
    whileElementsMounted: autoUpdate,
  });
  return (
    <Menu as="div" className="text-left">
      {useIcon && (
        <DropdownMenuIconButton
          testDataId={testDataId}
          ref={refs.setReference}
        />
      )}
      {!useIcon && (
        <DropdownMenuButton
          label={label}
          testDataId={testDataId}
          ref={refs.setReference}
        />
      )}

      <div ref={refs.setFloating} style={{ ...floatingStyles, zIndex: 10000 }}>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          beforeEnter={() => update()}
          afterLeave={() => update()}
        >
          <Menu.Items className="z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">{children}</div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  useIcon: PropTypes.bool,
  children: PropTypes.any,
};

Dropdown.defaultProps = {
  label: "Actions",
  useIcon: false,
};

Dropdown.Button = function DropdownButton({
  type,
  onClick,
  children,
  disabled,
  dataTestId,
}) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          type={type}
          onClick={onClick}
          className={getClassName("block px-4 py-2 text-sm w-full text-left", {
            "bg-gray-100 text-gray-900": active,
            "text-gray-700": !active,
            disabled: disabled,
          })}
          disabled={disabled}
          data-testid={dataTestId || "dropdown-option"}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
};

Dropdown.Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  children: PropTypes.any,
  disabled: PropTypes.bool,
};

Dropdown.Button.defaultProps = {
  type: "button",
};

Dropdown.Item = function DropdownItem({
  url,
  label,
  children,
  target,
  disabled,
}) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={url}
          target={target}
          className={getClassName("block px-4 py-2 text-sm text-left", {
            "bg-gray-100 text-gray-900": active,
            "text-gray-700": !active,
            "pointer-events-none": disabled,
            disabled: disabled,
          })}
        >
          {children || label}
        </a>
      )}
    </Menu.Item>
  );
};

Dropdown.Item.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.any,
  target: PropTypes.string,
  disabled: PropTypes.bool,
};
