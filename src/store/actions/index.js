import * as types from '../actionTypes'
import { registerUser } from '../../services'

export const registerRequest = payload => {
  return async dispatch => {
    const res = await registerUser(payload)
    console.log(res)
    dispatch({
      type: types.REGISTER_USER,
      payload,
    });
  }
}