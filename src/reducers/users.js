import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_USER
} from '../actions/actionType'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    case ADD_USER:
      return {
        // loading: false,
        newUser: action.payload,
        // error: ''
    }
    default: return state
  }
}

export default users