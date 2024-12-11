"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface TimelineItem {
  date: string
  title: string
  location: string
  description: string
  icon: React.ReactNode
}

interface TimelineItemProps extends TimelineItem {
  isLeft: boolean
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, location, description, icon, isLeft }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  return (
    <div className="relative flex items-center justify-center md:justify-between">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: isLeft ? -50 : 50 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex w-full md:w-[calc(50%-2rem)] items-center ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
      >
        <div className={`w-full md:w-auto bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border-white/20${isLeft ? 'md:text-right' : 'md:text-left'}`}>
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <p className="text-white/80 mb-2">{location}</p>
          <p className="text-white/60 text-sm mb-2">{description}</p>
          <p className="text-white/80 text-sm md:hidden">{date}</p>
        </div>
      </motion.div>
      <div className="absolute -left-12 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-12 h-12 rounded-full flex items-center justify-center border-4 border-white bg-slate-900">
          {icon}
        </motion.div>
      </div>
      <div className={`hidden md:block absolute ${isLeft ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 text-white/80 w-[calc(50%-2rem)] ${isLeft ? 'text-left' : 'text-right'}`}>
        {date}
      </div>
    </div>
  )
}

interface VerticalTimelineProps {
  items: TimelineItem[]
}

export const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ items }) => {
  return (
    <div className="relative py-8 pl-6 md:pl-0">
      <div 
        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 origin-top md:-translate-x-1/2"
        style={{
          background: 'linear-gradient(to bottom, #6ee7b7, #38bdf8)'
        }}
      />
      <div className="space-y-24">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  )
}

