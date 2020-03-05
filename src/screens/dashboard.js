import React from 'react'
import BottomToolbar from '../components/bottomToolbar/index'
import TopToolbar from '../components/topToolbar/index'
import Videos from '../components/videos/index'

function Dashboard({ history }) {
  return (
    <div className='dashboard'>
      <TopToolbar />
      <Videos history={history} />
      <BottomToolbar />
    </div>
  )
}

export default Dashboard
