import NewSong from '../views/new-song/newsong'
import Rank from '../views/rank/rank'
import Singer from '../views/singer/singer'

// 导航区域的配置
export let navConfig = [
  {
    path: '/',
    title: '新歌',
    component: NewSong
  },
  {
    path: '/rank',
    title: '排行',
    component: Rank
  },
  {
    path: '/singer',
    title: '新歌',
    component: Singer
  }
]
