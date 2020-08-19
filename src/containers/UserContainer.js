import { connect } from 'react-redux';
import { fetchUser ,deleteUser } from '../actions/index';
import PrintUser from '../components/PrintUser';

const mapStateToProps = (state) =>({
  users : state.users
})

const mapDispatchToProps = dispatch => ({
  fetchUser : () => dispatch(fetchUser()),
  deleteUser:(userId) => dispatch(deleteUser(userId)),
  // updateUser :(users) => dispatch(updateUser(users)),
})

export default connect( mapStateToProps,mapDispatchToProps )(PrintUser)