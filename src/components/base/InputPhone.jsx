import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const InputPhone = ({ handleOnChange, inputValue }) => {
  const [phone, setPhone] = useState('')

  useEffect(() => {
    setPhone(inputValue);
  }, [inputValue]);

  const handleChange = (v) => {
    setPhone(v)
    handleOnChange(v)
  }

  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={phone}
      onChange={handleChange}
      withCountryCallingCode={true}
    />
  );
}

InputPhone.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
}