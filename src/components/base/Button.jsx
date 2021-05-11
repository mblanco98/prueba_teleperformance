import PropTypes from 'prop-types'

export const Button = ({ btnType = "button", type = "regular", title, handleClick }) => {
  const classesPerType = {
    regular:
      "group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-500 bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200",
    primary:
      "group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
  };

  return (
    <button type={btnType} className={classesPerType[type]} onClick={handleClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  btnType: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
}
