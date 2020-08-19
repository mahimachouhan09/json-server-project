import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getAlbum} from '../actions/index'
import AlbumContainer from '../containers/AlbumContainer'

export class Album extends Component {
  componentDidMount(){
    this.props.getAlbum();
  }
  render() {
    return (
      <div>
        <h2>Album</h2>
        <AlbumContainer />
      </div>
    )
  }
}

export default connect(null , { getAlbum })(Album)
