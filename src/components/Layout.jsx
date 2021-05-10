import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <div
      className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
