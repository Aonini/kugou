import React, { Component } from 'react'
import { getRankList } from '../../server'
export default class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{}
    };
  }
  componentDidMount() {
    getRankList().then(({data}) => {
      this.setState({
        data:data
      })
    })
  }
  render() {
    return (
      <div>
        排行,{
          JSON.stringify(this.state.data)
        }
      </div>
    )
  }
}
