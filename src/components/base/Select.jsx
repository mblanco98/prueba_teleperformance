import PropTypes from 'prop-types'
import { useState } from 'react';
import ISelect from 'react-select'

export const Select = ({ options, inputValue, handleOnChange }) => {
  const [selected, setSelected] = useState(null)
  const handleChange = (data) => {
    setSelected(data)
    handleOnChange(data.value)
  }

  return (
    <ISelect
      placeholder=""
      value={selected}
      options={options}
      onChange={handleChange}
    />
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};