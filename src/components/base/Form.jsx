import PropTypes from 'prop-types'

export const Form = ({ children, handleOnSubmit }) => {
  const onSubmit = e => {
    e.preventDefault()
    handleOnSubmit()
  }
  return <form className="p-2 bg-white text-base" onSubmit={onSubmit}>{children}</form>;
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
}