import { ActionTypes } from "../contants/actions-types"

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  }
}

export const newUser = (user) => {
  return {
    type: ActionTypes.NEW_USER,
    payload: user,
  }
}

export const deleteUser = (user) => {
  return {
    type: ActionTypes.DELETE_USER,
    payload: user,
  }
}

export const updateUser = (user) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: user,
  }
}