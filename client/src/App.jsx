import React from 'react'
import SideBar from './Components/SideBar'
import Hero from './Components/Hero'
import Calendar from './Components/Calendar'

const App = () => {
  return (
    <div className='flex min-h-screen bg-[#0f172a] text-white'>

      {/* Sidebar */}
      <div className='w-[260px] bg-[#020617] border-r border-gray-800'>
        <SideBar />
      </div>

      {/* Main */}
      <div className='flex-1 p-6 space-y-6'>
        <Hero />
        <Calendar/>
        <div className='text-gray-400'>main (calendar coming 🔥)</div>
      </div>

    </div>
  )
}

export default App