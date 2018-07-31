import React, { Component } from 'react'
import servers from '../server'
export let getDataComponent = function (serverName) {
  return function (Component) {
    return class componentName extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data:{},
          loading: true
        };
      }
      componentDidMount() {
        // 找到请求的方法
        let method = servers[serverName];
        if (!method){
          throw new Error('请求的方法不存在，请检测传入的参数')
        }

        servers[serverName]().then(({data}) => {
          setTimeout(() => {
            this.setState({
              data,
              loading: false
            })
          }, 2000);
        })
      }
      render() {
        return (
          
          this.state.loading 
          ? <p>loading....</p> 
          : <Component data={this.state.data} {...this.props}/>
        )
      }
    }
  }
}

/* export default getDataComponent('getNewSongs')(NewSong)
export default getDataComponent('getRanklist')(Rank) */




