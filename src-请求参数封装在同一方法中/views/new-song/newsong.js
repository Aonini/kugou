import React, { Component } from 'react'
import { getDataComponent} from '../../components/getDataComponent'

 class NewSong extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        新歌
      </div>
    )
  }
}

export default getDataComponent('getNewSongs')(NewSong)