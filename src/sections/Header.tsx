"use client"
import { motion } from "motion/react"
import { links } from "@/lib/data"
import Link from "next/link";


export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <motion.nav className="flex gap-1 p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur" initial={{ y: -100,opacity:0}} animate={{ y:0, opacity:1}}>
      {
        links.map(link =>
          link.hash==="#contact"?
          <ul key={link.hash} className="nav-item bg-white text-slate-900 hover:bg-white/70 hover:text-slate-900">
            <Link href={link.hash}>{link.name}</Link>
          </ul>:
          <ul key={link.hash} className="nav-item">
            <Link href={link.hash}>{link.name}</Link>
          </ul>
        )}
      </motion.nav>
    </div>
  )  
};
