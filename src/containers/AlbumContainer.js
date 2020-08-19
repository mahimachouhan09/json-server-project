import { connect } from 'react-redux';
import { getAlbum } from '../actions/index';
import PrintAlbum from '../components/PrintAlbum';

const mapStateToProps = (state) =>({
  albums : state.albums
})

const mapDispatchToProps = dispatch => ({
  getAlbum : () => dispatch(getAlbum()),
})

export default connect( mapStateToProps, mapDispatchToProps )(PrintAlbum)