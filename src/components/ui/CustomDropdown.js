/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { useFloating, autoUpdate } from "@floating-ui/react";

export function SimpleOption({ name, selected, active, disabled }) {
  return (
    <>
      <span
        className={classnames("block truncte", {
          "font-semibold": selected,
          "font-normal": !selected,
        })}
      >
        {name}
      </span>

      {selected ? (
        <span
          className={classnames(
            "absolute inset-y-0 right-0 flex items-center pr-4",
            {
              "text-white": active,
              "text-green-600": !active,
              "opacity-75": disabled,
            }
          )}
        >
          <CheckIcon className="h-5 w-5" aria-hidden="true" />
        </span>
      ) : null}
    </>
  );
}

SimpleOption.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

SimpleOption.defaultProps = {
  selected: false,
  active: false,
  disabled: false,
};

const buttonBaseClassName =
  "w-full relative cursor-default rounded-md border py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 sm:text-sm";
export default function CustomDropdown({
  className,
  label,
  value,
  options,
  onChange,
  multiple,
  renderSelected,
  nameKey,
  valueKey,
  disabled,
  error,
}) {
  const { refs, floatingStyles, update } = useFloating({
    strategy: "fixed",
    placement: "bottom-end",
    whileElementsMounted: autoUpdate,
  });
  let selectedItems;

  if (multiple) {
    selectedItems = value || [];
  }

  function handleSelect(option) {
    onChange(option);
  }
  function renderDefaultOption(option, { selected, active, disabled }) {
    return (
      <SimpleOption
        name={option[nameKey]}
        selected={selected}
        active={active}
        disabled={disabled}
      />
    );
  }

  function renderOption(option) {
    return function ({ selected, active, disabled }) {
      selected = value?.name === option?.name;
      if (option.render) {
        return option.render(option, { selected, active, disabled });
      }
      return renderDefaultOption(option, { selected, active, disabled });
    };
  }

  function renderSelection({ open, error }) {
    if (renderSelected) {
      renderSelected(selected, error);
    }

    let selectedText;
    if (multiple) {
      selectedText = selectedItems.map((item) => item[nameKey]).join(", ");
    } else {
      selectedText = (value || {})[nameKey];
    }
    return (
      <>
        <span className="block truncate">{selectedText || "Select"}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          {open ? (
            <ChevronUpIcon
              className={classnames("h-5 w-5", {
                "text-gray-400": !error,
                "text-red-400": error,
              })}
              aria-hidden="true"
            />
          ) : (
            <ChevronDownIcon
              className={classnames("h-5 w-5", {
                "text-gray-400": !error,
                "text-red-400": error,
              })}
              aria-hidden="true"
            />
          )}
        </span>
      </>
    );
  }
  return (
    <div className={classnames(className)}>
      <Listbox
        disabled={disabled}
        value={value}
        onChange={handleSelect}
        multiple={multiple}
        by={valueKey}
      >
        {({ open }) => (
          <>
            {label && (
              <Listbox.Label
                className={classnames(
                  "block text-sm font-medium leading-6 mb-1",
                  { "text-gray-900": !error, "text-red-700": error }
                )}
              >
                {label}
              </Listbox.Label>
            )}
            <Listbox.Button
              ref={refs.setReference}
              className={classnames(buttonBaseClassName, {
                "bg-gray-100": disabled,
                "bg-white": !disabled,
                "border-gray-300": !error,
                "text-gray-700": !error,
                "focus:border-green-500": !error,
                "focus:ring-green-500": !error,
                "border-red-300": error,
                "focus:border-red-500": error,
                "focus:ring-red-500": error,
                "text-red-700": error,
              })}
              open={open}
            >
              {disabled}
              {renderSelection({ open, error })}
            </Listbox.Button>

            <div
              style={{ ...floatingStyles, zIndex: 10000 }}
              ref={refs.setFloating}
            >
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                beforeEnter={() => update()}
                beforeLeave={() => update()}
              >
                <Listbox.Options
                  className="z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  static
                >
                  {options.map((option) => (
                    <Listbox.Option
                      key={option[valueKey]}
                      value={option}
                      disabled={option.disabled}
                      className={({ active }) =>
                        classnames(
                          "relative cursor-default select-none py-2 pl-3 pr-9",
                          {
                            "text-white": active,
                            "bg-green-600": active,
                            "text-gray-900": !active && !option.disabled,
                            "text-gray-300": option.disabled,
                          }
                        )
                      }
                    >
                      {renderOption(option)}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

CustomDropdown.propTypes = {
  disabled: PropTypes.bool,
  disabledKey: PropTypes.string,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  nameKey: PropTypes.string,
  valueKey: PropTypes.string,
};

CustomDropdown.defaultProps = {
  disabled: false,
  disabledKey: "disabled",
  multiple: false,
  nameKey: "name",
  valueKey: "id",
};
