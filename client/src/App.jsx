import React, { useState } from 'react'
import SideBar from './Components/SideBar'
import Hero from './Components/Hero'
import Calendar from './Components/Calendar'

const App = () => {

  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className='flex min-h-screen bg-[#0f172a] text-white'>

      {/* Sidebar */}
      <div className='w-[260px] bg-[#020617] border-r border-gray-800'>
        <SideBar />
      </div>

      {/* Main */}
      <div className='flex-1 p-6 space-y-6'>
        <Hero selectedDate={selectedDate} />
        <Calendar setSelectedDate={setSelectedDate} />

      </div>

    </div>
  )
}

export default App