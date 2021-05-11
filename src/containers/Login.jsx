import { connect } from 'react-redux'
import { Login as LoginCard } from '../components/Login'
import { loginRequest } from '../store/actions'

const mapDispatchToProps = {
  loginRequest,
}

export const Login = connect(null, mapDispatchToProps)(LoginCard)