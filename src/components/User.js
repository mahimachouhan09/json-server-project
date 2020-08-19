import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser, deleteUser, updateUser} from '../actions/index'
import UserContainer from '../containers/UserContainer';

class User extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  // handleEdit(users){
  //   this.props.updateUser(users);
  // }

  handleDelete(users){ 
    this.props.deleteUser(users);
  }

  render() {
    if(this.props.isLoding){
      return ( <p>Loading....</p>)
    }
    else if(this.props.error){
      return(
        <div role ='alert'>
          {this.props.error.message}
        </div>
      )
    }
    else {
      return (
        <div>
          <UserContainer
            // updateUser = {this.handleEdit.bind(this)}
            deleteUser = {this.handleDelete.bind(this)}
          />
        </div>
      )
    }
  }
}

export default connect(null , { fetchUser ,deleteUser ,updateUser })(User)
