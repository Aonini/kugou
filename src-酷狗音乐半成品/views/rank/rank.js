import React, { Component } from 'react'
import { getRankList } from '../../server'
import { getDataComponent } from '../../components/getDataComponent'
 class Rank extends Component {
  
  render() {
    console.log(this.props.data)
    return (
      <div>
        排行
      </div>
    )
  }
}
export default getDataComponent('getRankList')(Rank)