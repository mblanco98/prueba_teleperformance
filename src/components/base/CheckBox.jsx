import { useState } from 'react'
import PropTypes from 'prop-types'

export const CheckBox = ({
  inputName,
  inputValue,
  children,
  label,
  handleOnChange,
}) => {
  const htmlFor = label.toLowerCase().trim().replace(" ", "-");
  const [value, setValue] = useState(false);

  const handleChange = () => {
    let newValue = !value
    setValue(newValue);
    handleOnChange(newValue);
  };

  return (
    <div className="relative input_container flex items-start">
      <div className="flex items-center h-5">
        <input
          id={htmlFor}
          value={value}
          type="checkbox"
          name={inputName}
          onChange={handleChange}
          className="focus:ring-indigo-500 form-item h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={htmlFor} className="font-medium text-gray-700">
          {children}
        </label>
      </div>
    </div>
  );
};

CheckBox.propTypes = {
  children: PropTypes.node,
  inputValue: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};