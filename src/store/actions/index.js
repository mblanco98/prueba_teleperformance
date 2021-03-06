import * as types from '../actionTypes'
import { checkNIT, registerUser } from '../../services'

export const registerRequest = payload => {
  return async dispatch => {
    try {
      const res = await registerUser(payload);
      
      if (res) {
        dispatch({
          type: types.REGISTER_USER,
          payload,
        });

        dispatch(
          toggleNotification({
            title: 'Success!',
            type: 'success',
            visible: true,
            description: 'The data has been registered correctly.',
          })
        );
      }
    } catch (err) {
      dispatch(toggleNotification({
        type: 'error',
        visible: true,
        description: '',
        title: 'Something went wrong',
      }))
    }
  }
}

export const loginRequest = payload => {
  return async dispatch => {
    try {
      const { message, code } = await checkNIT(payload)
      
      dispatch(toggleNotification({
        title: code,
        visible: true,
        description: message,
        type: code === '' ? 'info' : 'error',
      }))

      return code
    } catch (err) {
      dispatch(
        toggleNotification({
          type: "error",
          visible: true,
          title: 'Something went wrong ...',
          description: "We couldn't connect with the server",
        })
      );
      return false
    }
    
  }
}

export const toggleNotification = payload => {
  return {
    type: types.TOGGLE_NOTIFICATION,
    payload,
  }
}