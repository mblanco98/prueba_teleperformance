import { connect } from 'react-redux'
import { RegisterCard } from '../components/Register'
import { registerRequest } from '../store/actions'

const mapDispatchToProps = {
  registerRequest,
}

export const Register = connect(null, mapDispatchToProps)(RegisterCard);