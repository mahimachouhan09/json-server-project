import { GETALL_TODO_REQUEST, GETALL_TODO_SUCCESS, GETALL_TODO_FAILURE 
} from '../actions/actionType';

const initialState = {
  loading: false,
  todos: [],
  error: ''
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_TODO_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GETALL_TODO_SUCCESS:
      return {
        loading: false,
        todos: action.payload,
        error: ''
      }
    case GETALL_TODO_FAILURE:
      return {
        loading: false,
        todos: [],
        error: action.payload
      }
    default: return state
  }
}

export default todos