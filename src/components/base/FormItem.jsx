import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export const FormItem = ({
  label,
  model,
  children,
  isSrOnly = false,
  required = false,
}) => {
  const htmlFor = label.toLowerCase().trim().replace(" ", "-");
  const inputWrapper = useRef(null);
  const [isWarning, setWarning] = useState(false)
  
  const renderLabel = () => {
    return (
      <>
        {label}
        {required && <span className="text-red-400"> *</span>}
      </>
    );
  };

  // This effect can be further improve by passing a prop 4 validation
  // with that, the value of the input targeted can be validated
  useEffect(() => {
    const { current } = inputWrapper
    const input = current.querySelector('input')
    
    const handleBlur = () => {
      setWarning(!Boolean(model))
    }

    input.addEventListener('blur', handleBlur)
    
    return () => {
      input.removeEventListener('blur', handleBlur)
    }
  }, [inputWrapper, isWarning, model])

  const renderHelperText = () => {
    return (
      isWarning && required && (
        <span className="text-red-400 text-sm">This field is required</span>
      )
    );
  };

  return (
    <div className="rounded-md -space-y-px">
      <label
        htmlFor={htmlFor}
        className={
          isSrOnly ? "sr-only" : "text-sm mb-1 inline-block text-gray-600"
        }
      >
        {renderLabel()}
      </label>
      <div className="pb-1" ref={inputWrapper}>
        {children}
        {renderHelperText()}
      </div>
    </div>
  );
};

FormItem.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  isSrOnly: PropTypes.bool,
  required: PropTypes.bool,
  model: PropTypes.any,
};
