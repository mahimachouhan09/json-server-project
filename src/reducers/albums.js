import { GETALL_ALBUM_REQUEST, GETALL_ALBUM_SUCCESS, GETALL_ALBUM_FAILURE 
} from '../actions/actionType';

const initialState = {
  loading: false,
  albums: [],
  error: ''
}

const albums = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_ALBUM_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GETALL_ALBUM_SUCCESS:
      return {
        loading: false,
        albums: action.payload,
        error: ''
      }
    case GETALL_ALBUM_FAILURE:
      return {
        loading: false,
        albums: [],
        error: action.payload
      }
    default: return state
  }
}

export default albums