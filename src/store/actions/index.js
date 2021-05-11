import * as types from '../actionTypes'
import { checkNIT, registerUser } from '../../services'

export const registerRequest = payload => {
  return async dispatch => {
    await registerUser(payload)
    dispatch({
      type: types.REGISTER_USER,
      payload,
    });
  }
}

export const loginRequest = payload => {
  return async dispatch => {
    const { message, code } = await checkNIT(payload)
    
    dispatch(toggleNotification({
      title: code,
      visible: true,
      description: message,
      type: code === '' ? 'info' : 'error',
    }))

    return !!code
  }
}

export const toggleNotification = payload => {
  return {
    type: types.TOGGLE_NOTIFICATION,
    payload,
  }
}