import { combineReducers } from 'redux';
import users from './users'
import todos from './todos'
import albums from './albums'

export default combineReducers({
  users,
  todos,
  albums
});