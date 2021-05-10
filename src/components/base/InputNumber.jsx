import { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as ArrowDownIcon } from "../../assets/arrow-down-outline.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/arrow-up-outline.svg";

export const InputNumber = ({
  max,
  min = 0,
  inputId,
  inputName,
  inputValue,
  handleOnChange,
  disabled = false,
  controls = false,
}) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    // If we don't do this, the reference to the html input will be lost
    e.persist();
    const v = handleInputChange(e.target.value);
    setValue(v);
    handleOnChange(v);
  };

  const isValidInput = (v) => {
    return v !== "" && !isNaN(Number(v));
  };

  const handleInputChange = (v) => {
    let result = v;

    if (isValidInput(v)) {
      let formattedValue = String(v);
      if (formattedValue.length > 1 && formattedValue[0] === "0") {
        let values = [...formattedValue];
        formattedValue = values.splice(1, values.length - 1).join("");
        result = formattedValue;
      }
      return result;
    }

    if (v === "") result = 0;
    else result = inputValue;

    return result;
  };

  const renderControls = () => {
    return (
      <div className="absolute overflow-hidden inset-y-0 right-0 flex-col w-10 bg-white border-t border-b border-r border-gray-300 justify-items-center z-20">
        <div
          className="flex-0 h-3/6 w-10 bg-gray-100 hover:bg-gray-200"
          role="button"
        >
          <ArrowUpIcon className="h-4" />
        </div>
        <div
          className="flex-0 h-3/6 w-10 bg-gray-100 hover:bg-gray-200"
          role="button"
        >
          <ArrowDownIcon className="h-4" />
        </div>
      </div>
    );
  };

  return (
    <div className="relative input_container">
      <input
        data-testid="input_element"
        id={inputId}
        name={inputName}
        type="text"
        value={value}
        min={min}
        max={max}
        disabled={disabled}
        onChange={handleChange}
        className="input_element appearance-none relative block w-full px-3 py-2 border border-gray-300 hover:border-gray-400 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
      {controls && renderControls()}
    </div>
  );
};

InputNumber.propTypes = {
  controls: PropTypes.bool,
  disabled: PropTypes.bool,
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
  inputValue: (props, propsName, componentName) => {
    const propType = typeof props[propsName];
    if (
      propType !== "number" &&
      propType !== "string" &&
      propType !== "bigint"
    ) {
      return new Error(
        `Component <${componentName} /> expected prop ${propsName} to be typeof: [number, string, bigint]; and got: ${[
          propType,
        ]}. Invalid prop type`
      );
    }
  },
};
