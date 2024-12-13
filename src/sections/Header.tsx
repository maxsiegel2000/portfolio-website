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
        className="flex gap-1 p-2 border border-black/15 dark:border-white/15 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur" 
        initial={{ y: -100,opacity:0}} 
        animate={{ y:0, opacity:1}}>
      {links.map((link, index) =>
          <ul key={index} className={cslx("nav-item relative",{"dark:text-white text-black": activeSection === link.name})}>
            <Link
              key={index}
              onClick={() => {
                setActiveSection(link.name)
                setTimeOfLastClick(Date.now())
              }}
              href={link.hash}>
              {link.name}
              {link.name === activeSection &&(
                <motion.span
                  key={index}
                  className="dark:bg-white/15 bg-black/15 rounded-full absolute inset-0 -z-10" 
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
