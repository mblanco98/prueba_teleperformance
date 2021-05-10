import PropTypes from 'prop-types'

export const FormItem = ({ label, children, isSrOnly = false, required = false }) => {
  const htmlFor = label.toLowerCase().trim().replace(' ', '-')
  
  const renderLabel = () => {
    return (
      <>
        { label }
        {required && <span className="text-red-400"> *</span>}
      </>
    )
  }

  return (
    <div className="rounded-md -space-y-px">
      <label htmlFor={htmlFor} className={isSrOnly ? "sr-only" : "text-sm mb-1 inline-block text-gray-600"}>
        { renderLabel() }
      </label>
      <div className="pb-1">
        { children }
      </div>
    </div>
  );
}

FormItem.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  isSrOnly: PropTypes.bool,
  required: PropTypes.bool,
}