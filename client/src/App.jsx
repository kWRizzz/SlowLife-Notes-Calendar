
import React, { useState, useRef } from 'react'
import SideBar from './Components/SideBar'
import Hero from './Components/Hero'
import Calendar from './Components/Calendar'

const App = () => {

  const [notesByDate, setNotesByDate] = useState({})
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [theme, setTheme] = useState("dark")

  const glowRef = useRef(null)
  let frame

  const handleMouseMove = (e) => {
    if (!glowRef.current) return

    cancelAnimationFrame(frame)

    frame = requestAnimationFrame(() => {
      glowRef.current.style.transform =
        `translate(${e.clientX - 120}px, ${e.clientY - 120}px)`
    })
  }

  const bgClass = theme === "dark"
    ? "bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617]"
    : "bg-gradient-to-br from-[#0b0f2a] via-[#3b1e8a] to-[#a78bfa]"

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen transition-all duration-500 text-white ${bgClass}`}
    >

      {/* Smooth Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed w-64 h-64 rounded-full blur-3xl opacity-30 will-change-transform"
        style={{
          background: theme === "dark"
            ? "rgba(99,102,241,0.25)"
            : "rgba(168,85,247,0.35)"
        }}
      />

      <div className='flex flex-col md:flex-row min-h-screen'>

        {/* Sidebar */}
        <div className='w-full md:w-[260px] border-b md:border-b-0 md:border-r border-gray-800'>
          <SideBar
            selectedDate={selectedDate}
            notesByDate={notesByDate}
            setNotesByDate={setNotesByDate}
            theme={theme}
          />
        </div>

        {/* Main */}
        <div className='flex-1 p-4 md:p-6 space-y-4 md:space-y-6'>
          <Hero selectedDate={selectedDate} theme={theme} />
          <Calendar
            setSelectedDate={setSelectedDate}
            notesByDate={notesByDate}
            theme={theme}
            setTheme={setTheme}
          />
        </div>

      </div>

    </div>
  )
}

export default App