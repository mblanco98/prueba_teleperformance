import PropTypes from 'prop-types'

export const Form = ({ children, handleOnSubmit }) => {
  const onSubmit = e => {
    e.preventDefault()
    handleOnSubmit()
  }
  return <form className="p-4 pt-6 rounded-md bg-white text-base" onSubmit={onSubmit}>{children}</form>;
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
}