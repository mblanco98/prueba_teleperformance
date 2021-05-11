import { connect } from 'react-redux'
import { useLocation } from 'react-router'
import { RegisterCard } from '../components/Register'
import { registerRequest } from '../store/actions'
import { useEffect } from 'react'

const mapDispatchToProps = {
  registerRequest,
}

const RegisterWrapper = ({ history, registerRequest }) => {
  const location = useLocation();
  useEffect(() => {
    if (location.search.length <= 3) {
      history.replace('/')
    }
  }, [location.search, history])
  return <RegisterCard history={history} registerRequest={registerRequest} />
}


export const Register = connect(null, mapDispatchToProps)(RegisterWrapper);