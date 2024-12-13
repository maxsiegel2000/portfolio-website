"use client"
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import {portfolioProjects} from "@/lib/data"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card"
import { motion} from "motion/react";
import { useSectionInView } from "@/lib/hooks";
import { ArrowUpRightIcon } from "lucide-react";



export const ProjectsSection = () => {
  const {ref} = useSectionInView("Projects", 0.5)
  return (
    <motion.section className="pb-16 lg:py-24 scroll-mt-28"
    initial={{ y: 100,opacity:0}} 
    animate={{ y:0, opacity:1}}
    id="projects"
    ref={ref}
    >
      <div className="container">
        <SectionHeader 
          title="My coding experience" 
          eyebrow="Private Projects" description="See how i transformed concepts into engaging digital experiences."/>
        <div 
        className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card 
              key={project.title} 
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{
                top: `calc(84px + ${projectIndex * 40}px)`
              }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                <div className="gradient1 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 dark:border-white/5 border-black/5 mt-4"/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map(result =>(
                      <li 
                        key={project.title}
                        className="flex gap-2 text-sm md:text-base dark:text-white/50 text-black/50">
                        <CheckCircleIcon className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.title !== "PowerUp"?
                    <a href={project.link}>
                    <button className="bg-white text-slate-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View on GitHub</span>
                      <ArrowUpRightIcon  className="size-4"/>
                    </button>
                  </a> : ""
                  }
                </div>
                <div className="relative">
                  {project.title === "PowerUp"?
                    <Image 
                    src={project.image} 
                    alt={project.title} 
                    className="mt-12 scale-150 -mb-10 md:-mb-40 md:mt-20 lg:mt-0 lg:mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none md:scale-120"/>
                  : project.title === "NextAuth"?
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    className="mt-8 -mb-20 md:scale-75 md:-mt-20 lg:mt-0 lg:absolute lg:scale-100 rounded-3xl"/>
                  :<Image 
                  src={project.image} 
                  alt={project.title} 
                  className="mt-12 scale-150 -mb-20 md:-mb-40 md:mt-20 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>}
                 </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  )
};
