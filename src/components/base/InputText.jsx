import { useState } from "react";
import { validateEmail } from "../../helpers/validateEmail";
import PropTypes from 'prop-types'

export const InputText = ({
  inputId,
  inputName,
  inputValue,
  handleOnChange,
  inputPlaceholder,
  inputType = "text",
}) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    // If we don't do this, the reference to the html input will be lost
    e.persist();
    setValue(e.target.value);
    handleInputChange(e.target.value);
  };

  const handleInputChange = (v) => {
    const validate = {
      email: (s) => validateEmail(s),
      text: (s) => /^[A-Za-z\s]+$/.test(s),
    };

    // If doesn't contain numbers
    if (validate[inputType](v)) handleOnChange(v);
    else {
      // Else remove those numbers and send the formattedString
      const formattedValue = v.replace(/[0-9]/g, "");
      handleOnChange(formattedValue);
      setValue(formattedValue);
    }
  };

  return (
    <div className="relative input_container">
      <input
        id={inputId}
        name={inputName}
        type={inputType}
        value={value}
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        onChange={handleChange}
        placeholder={inputPlaceholder}
      />
    </div>
  );
};

InputText.propTypes = {
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
  inputType: (props, propName, componentName) => {
    const allowedInputTypes = ["text", "email"];
    if (!allowedInputTypes.includes(props[propName])) {
      return new Error(
        `Component <${componentName} /> only allows the following inputTypes: ${allowedInputTypes.join(
          ","
        )}. Validation failed: ${props[propName]}`
      );
    }
  },

}