import React, { Component } from 'react'
import { getNewSongs} from '../../server'
export default class NewSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true
    };
  }
  componentDidMount() {
    getNewSongs().then(({data}) => {
      console.log(data)
      setTimeout(() => {
        this.setState({
          data: data,
          loading: false
        })
      }, 3000);
    })
  }
  
  render() {
    return (
      <div>
        新歌,{
          this.state.loading ? "loading" : JSON.stringify(this.state.data)
        }
      </div>
    )
  }
}
