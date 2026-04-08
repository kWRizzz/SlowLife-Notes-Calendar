import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Calendar = ({ setSelectedDate }) => {

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const [currentDate, setCurrentDate] = useState(new Date())
  const [range, setRange] = useState({ start: null, end: null })

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const totalDays = new Date(year, month + 1, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()

  const today = new Date()

  const handleClick = (day) => {

    const selected = new Date(year, month, day)
    setSelectedDate(selected)

    if (!range.start || (range.start && range.end)) {
      setRange({ start: day, end: null })
    } else {
      if (day > range.start) {
        setRange({ ...range, end: day })
      } else {
        setRange({ start: day, end: null })
      }
    }
  }

  const isInRange = (day) => {
    if (range.start && range.end) {
      return day > range.start && day < range.end
    }
    return false
  }

  const changeMonth = (dir) => {
    setCurrentDate(new Date(year, month + dir, 1))
    setRange({ start: null, end: null })
  }

  return (
    <div className='bg-[#020617] border border-gray-800 rounded-2xl p-5 w-fit mx-auto'>

      {/* Header */}
      <div className='flex justify-between items-center mb-4'>

        <button
          onClick={() => changeMonth(-1)}
          className='px-3 py-1 bg-gray-800 rounded-lg hover:bg-gray-700 transition'
        >
          ◀
        </button>

        <h2 className='text-lg font-semibold text-gray-200'>
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>

        <button
          onClick={() => changeMonth(1)}
          className='px-3 py-1 bg-gray-800 rounded-lg hover:bg-gray-700 transition'
        >
          ▶
        </button>

      </div>

      {/* Days */}
      <div className='grid grid-cols-7 text-center text-gray-400 text-sm mb-2'>
        {days.map((d) => (
          <p key={d}>{d}</p>
        ))}
      </div>

      {/* Dates */}
      <div className='grid grid-cols-7 gap-3 justify-items-center'>

        {/* Empty spaces */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={"empty" + i}></div>
        ))}

        {/* Days */}
        {Array.from({ length: totalDays }, (_, i) => {
          const day = i + 1

          const isStart = day === range.start
          const isEnd = day === range.end
          const inRange = isInRange(day)

          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()

          return (
            <motion.div
              key={day}
              onClick={() => handleClick(day)}
              whileTap={{ scale: 0.85 }}
              className={`w-12 h-12 flex items-center justify-center text-sm cursor-pointer transition-all duration-200

                ${isStart || isEnd
                  ? "bg-indigo-600 text-white rounded-full shadow-md"
                  : inRange
                    ? "bg-indigo-500/30 text-white rounded-full"
                    : isToday
                      ? "border border-indigo-400 text-indigo-300 rounded-full"
                      : "bg-[#0f172a] text-gray-300 hover:bg-gray-700 rounded-full"
                }
              `}
            >
              {day}
            </motion.div>
          )
        })}

      </div>

    </div>
  )
}

export default Calendar