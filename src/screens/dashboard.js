import React from 'react'
import BottomToolbar from '../components/bottomToolbar/index'
import TopToolbar from '../components/topToolbar/index'
import Videos from '../components/videos/index'

function Dashboard() {
  return (
    <div className='dashboard'>
      <TopToolbar />
      <Videos />
      <BottomToolbar />
    </div>
  )
}

export default Dashboard
