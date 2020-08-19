import axios from 'axios'
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
  DELETE_USERS_SUCCESS, DELETE_USERS_REQUEST, DELETE_USERS_FAILURE,
  GETALL_TODO_REQUEST, GETALL_TODO_SUCCESS, GETALL_TODO_FAILURE,
  GETALL_ALBUM_REQUEST, GETALL_ALBUM_SUCCESS, GETALL_ALBUM_FAILURE,
} from './actionType'

//********************** */GET ALL USER FROM JSON ***************************
export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    // axios.get('https://jsonplaceholder.typicode.com/users')
      axios({
        url :'http://localhost:3005/users' ,
        method :'GET',
      })
      .then(response => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

  //********************* */Delete particular User **************************
  export const deleteUser = (userId) => {
    return (dispatch) => {
      dispatch(deleteUsersRequest())
        axios({
          url :`http://localhost:3005/users/${userId}/` ,
          method :'DELETE',
          // data: {
          //   id: userId.id,
          //   name: userId.name
          // }
        })
        .then(response => {
          const users = response.data
          dispatch(deleteUsersSuccess(users))
        })
        .catch(error => {
          dispatch(deleteUsersFailure(error.message))
        })
    }
  }

export const deleteUsersRequest = (users) => {
  return {
    type : DELETE_USERS_REQUEST,
    payload :users
  }
}

export const deleteUsersSuccess = users => {
  return {
    type: DELETE_USERS_SUCCESS,
    payload: users
  }
}

export const deleteUsersFailure = error => {
  return {
    type: DELETE_USERS_FAILURE,
    payload: error
  }
}

//******************** */ ADD USER   ****************************************

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))

//********************* */ ADD USER   ******************************* */

export const addUser = (newUser) => {
  return (dispatch) => {
    axios({
      url :`http://localhost:3005/users/`,
      method :'POST',
      data : JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response)    
    // .then(json => 
    //   console.log('adduser',json))
    // .catch(error => {error})   
  }
}

//******************** */ Update particular User *****************************

export const updateUser = (newUser,id) => {
  return (dispatch) => {
    axios({
      url :`http://localhost:3005/users/${id}`,
      method :'PUT',
      data : JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response)    
  }
}

//********************* */ Get all Todo from the json*************************

export const getAllTodo = () => {
  return (dispatch) => {
    dispatch(getAllTodoRequest())
      axios({
        url :`http://localhost:3005/todos` ,
        method :'GET',
      })
      .then(response => {
        const todos = response.data
        dispatch(getAllTodoSuccess(todos))
      })
      .catch(error => {
        dispatch(getAllTodoFailure(error.message))
      })
  }
}

export const getAllTodoRequest = () => {
  return {
    type: GETALL_TODO_REQUEST
  }
}

export const getAllTodoSuccess = todos => {
  return {
    type: GETALL_TODO_SUCCESS,
    payload: todos
  }
}

export const getAllTodoFailure = error => {
  return {
    type: GETALL_TODO_FAILURE,
    payload: error
  }
}
 //********************* */ GET ALL ALBUM FROM JSON ***************************

 export const getAlbum = () => {
  return (dispatch) => {
    dispatch(getAlbumRequest())
      axios({
        url :'http://localhost:3005/albums' ,
        method :'GET',
      })
      .then(response => {
        const albums = response.data
        dispatch(getAlbumSuccess(albums))
      })
      .catch(error => {
        dispatch(getAlbumFailure(error.message))
      })
  }
}

export const getAlbumRequest = () => {
  return {
    type: GETALL_ALBUM_REQUEST
  }
}

export const getAlbumSuccess = albums => {
  return {
    type: GETALL_ALBUM_SUCCESS,
    payload: albums
  }
}

export const getAlbumFailure = error => {
  return {
    type: GETALL_ALBUM_FAILURE,
    payload: error
  }
}

//********************* */ GET ALL POSTS FROM JSON ******************************
//********************* */ GET ALL COMMENTS FROM JSON ***************************