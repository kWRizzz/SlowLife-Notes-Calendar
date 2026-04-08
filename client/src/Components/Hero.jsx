import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative w-full h-[160px] md:h-[180px] overflow-hidden rounded-2xl">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        className="w-full h-full object-cover scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] tracking-[0.3em] text-gray-300 uppercase"
        >
          January 2024
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-3xl font-medium mt-2"
        >
          Slow Living Perspective
        </motion.h1>

      </div>

    </div>
  )
}

export default Hero