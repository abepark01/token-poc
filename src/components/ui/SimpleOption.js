import PropTypes from "prop-types";
import classnames from "classnames";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function SimpleOption({ name, selected, active, disabled }) {
  return (
    <>
      <span
        className={classnames("block truncate", {
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
