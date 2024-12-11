"use client"
import { motion } from "motion/react"
import { links } from "@/lib/data"
import Link from "next/link";
import cslx from "clsx"
import { useActiveSectionContext } from "@/context/active-section-context";

export const Header = () => {
  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <motion.nav 
        className="flex gap-1 p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur" 
        initial={{ y: -100,opacity:0}} 
        animate={{ y:0, opacity:1}}>
      {links.map(link =>
          <ul key={link.hash} className={cslx("nav-item relative",{"text-white": activeSection === link.name})}>
            <Link 
              onClick={() => {
                setActiveSection(link.name)
                setTimeOfLastClick(Date.now())
              }}
              href={link.hash}>
              {link.name}
              {link.name === activeSection &&(
                <motion.span className="bg-white/15 rounded-full absolute inset-0 -z-10" 
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30
                  }}></motion.span>
              )}
            </Link>
          </ul>
        )}
      </motion.nav>
    </div>
  )  
};
