import { ActionTypes } from "../contants/actions-types";

const initialState = {
  user: []
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return {user: payload}
    case ActionTypes.NEW_USER:
      let id = state.user.length + 1
      let newUser = 
        [{
          id: id,
          name: payload
        }]
      let newArray = state.user.concat(newUser)
      return {user: newArray}
    case ActionTypes.DELETE_USER:
      let deleteArray = state.user.filter((el) => {return el.id !== Number(payload)})
      return {user: deleteArray}
    case ActionTypes.UPDATE_USER:
      return state
    default:
      return state;
  }
}