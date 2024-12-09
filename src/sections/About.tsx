"use client"
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import mapImage from "@/assets/images/map.png"
import Image from "next/image"
import memoji from "@/assets/images/memoji.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import Marquee from "@/components/ui/marquee"
import { motion } from "motion/react"
import { useRef } from "react";

const hobbies = [
  {
    title: 'Fitness',
    emoji: '🏋',
    left: '5%',
    top: '5%'
  },
  {
    title: 'Swimming',
    emoji: '🏊‍♂️',
    left: '50%',
    top: '5%'
  },
  {
    title: 'Riding',
    emoji: '🚴',
    left: '35%',
    top: '35%'
  },
  {
    title: 'Jogging',
    emoji: '🏃',
    left: '45%',
    top: '70%'
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '70%',
    top: '45%'
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '-5%',
    top: '50%'
  }
]
const values = [
  {
    title: 'value1',
    emoji: '',
    left: '',
    top: ''
  },
  {
    title: 'value2',
    emoji: '',
    left: '60%',
    top: ''
  },
  {
    title: 'value3',
    emoji: '',
    left: '',
    top: '35%'
  },
  {
    title: 'value4',
    emoji: '',
    left: '60%',
    top: '35%'
  },
  {
    title: 'value5',
    emoji: '',
    left: '',
    top: '70%'
  },
  {
    title: 'value6',
    emoji: '',
    left: '60%',
    top: '70%'
  },
]

export const AboutSection = () => {
  const constrainRef = useRef(null)
  return(
    <div className="py-16 lg:py-28"> 
      <div className="container">
        <SectionHeader 
          eyebrow="About Me" 
          title="A Glimpse Into My World" 
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] flex flex-col md:col-span-2 lg:col-span-1">
              <CardHeader 
                title="My Values" 
                description="Explore the values that shaping my personality."
              />
               {/* <div className="relative flex-1 w-[400px] md:w-[260px] lg:w-[430px]">
                {values.map(values =>(
                  <div 
                    key={values.title} 
                    className="inline-flex items-center gap-2 px-6 gradient1 rounded-full py-1.5 absolute"
                    style={{
                      left: values.left,
                      top: values.top
                    }}>
                    <span className="font-medium text-slate-950">{values.title}</span>
                    <span>{values.emoji}</span>
                  </div>
                ))}
              </div> */}
            </Card>
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1 size-20 rounded-full gradient1 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offsett-2 after:rounded-full after:outline-slate-950/30">
                  <Image 
                    src={memoji} 
                    alt="memoji"
                    className="size-20"/>
                  </div> */}
             
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="My Toolbox" 
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                />
              <Marquee>
                <ToolboxItems />
              </Marquee>
              <Marquee reverse>
                <ToolboxItems />
              </Marquee>
            </Card>
          </div>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader 
                  title="Beyond the Code" 
                  description="Explore my interests and hobbies beyond the digital realm."
                />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map(hobby =>(
                  <motion.div 
                    key={hobby.title} 
                    className="inline-flex items-center gap-2 px-6 gradient1 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top
                    }}drag
                      dragConstraints={constrainRef}>
                    <span className="font-medium text-slate-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image 
                src={mapImage} 
                alt="map"
                className="h-full w-full object-cover"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full gradient1 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offsett-2 after:rounded-full after:outline-slate-950/30">
                <Image
                  src={memoji} 
                  alt="memoji"
                  className="size-13"/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
};
