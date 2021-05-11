import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { getFullAddress } from "../../services/index";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

export const InputAddress = ({ handleOnChange, inputValue }) => {
  const [isOptionsVisible, setOptionsVisibility] = useState("");
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const addressField = useRef(null);

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  const handleChange = async (e) => {
    e.persist();
    setValue(e.target.value);
    
    const results = await getFullAddress(e.target.value);
    setResults(results);
    setOptionsVisibility(true);
  };

  const handleAddressClick = ({ place_name, ...item }) => {
    setValue(place_name);
    setOptionsVisibility(false);
    handleOnChange({ place_name, ...item });
  };

  const clearInput = () => {
    setValue("");
    setResults([]);
    handleOnChange(false);
  };

  const renderClearIcon = () => {
    if (!results.length) return null
    return (
      results.length && (
        <b
          className="absolute top-3 right-2 text-sm w-4 h-12 cursor-pointer"
          onClick={() => clearInput()}
        >
          <CloseIcon />
        </b>
      )
    );
  };

  const renderOptions = () => {
    if (!results.length) return null
    return (
      isOptionsVisible && (
        <div
          className="absolute top-11 left-0 w-full bg-white z-10 shadow-md p-2 h-42 overflow-y-auto"
          role="list"
        >
          {results.map((item) => {
            return (
              <div
                className="p-1 hover:bg-gray-100 text-gray-700 cursor-pointer rounded-md text-sm"
                role="listitem"
                key={item.id}
                onClick={() => handleAddressClick(item)}
              >
                {item.place_name}
              </div>
            );
          })}
        </div>
      )
    );
  };

  return (
    <div className="relative input_container">
      <input
        ref={addressField}
        id="input_ad"
        name="input_ad"
        autoComplete="off"
        value={value}
        type="text"
        className="appearance-none block w-full px-3 py-2 border border-gray-300 hover:border-gray-400 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        onChange={handleChange}
        onFocus={() => {
          if (results.length) {
            setOptionsVisibility(true);
          }
        }}
      />
      {renderClearIcon()}
      {renderOptions()}
    </div>
  );
};

InputAddress.propTypes = {
  inputValue: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
};
