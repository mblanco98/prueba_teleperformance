import PropTypes from "prop-types";

export const Card = ({ title = "", children }) => {
  return (
    <div className="max-w-md lg:max-w-lg xl:max-w-xl w-full space-y-8">
      <header className="card_header">
        <img
          className="card_header-logo mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt=""
        />
        <h2
          data-testid="card_header-title"
          className="card_title mt-6 text-center font-semibold text-1xl text-gray-900"
        >
          {title}
        </h2>
      </header>
      <div className="card_body">{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}