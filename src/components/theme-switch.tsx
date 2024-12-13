"use client"

import { Sun, Moon } from 'lucide-react'
import React, { useEffect, useState } from "react"

type Theme = "light" | "dark"

// This script will run immediately on page load
const themeScript = `
  (function() {
    function getTheme() {
      return localStorage.getItem('theme') || 'dark';
    }
    
    document.documentElement.classList.add(getTheme());
  })()
`;

export const ThemeSwitch = () => {
  const [theme, setTheme] = React.useState<Theme>("dark")

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    window.localStorage.setItem("theme", newTheme)
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null

    if (localTheme) {
      setTheme(localTheme)
    } else {
      // Default to dark mode if no theme is set
      setTheme("dark")
      window.localStorage.setItem("theme", "dark")
    }
  }, [])

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <button 
        className="fixed bottom-5 right-5 w-[2.5rem] h-[2.5rem] border dark:border-white/15 border-black/15 rounded-full dark:bg-white/10 bg-black/10 backdrop-blur flex items-center justify-center dark:hover:border-white hover:border-black dark:hover:bg-white/15 hover:bg-black/15 hover:scale-[1.15] active:scale-105 transition-all"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </>
  )
}

