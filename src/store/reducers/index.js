import { initialState } from "../initialState";
import * as types from '../actionTypes'

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REGISTER_USER:
      return {
        ...state,
        user: payload,
      }
    case types.TOGGLE_NOTIFICATION:
      return {
        ...state,
        notification: payload,
      }
    default:
      return state;
  }
};
