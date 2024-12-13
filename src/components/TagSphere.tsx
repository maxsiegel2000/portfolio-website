"use client"

import { useState, useRef, useEffect } from "react"

interface TagSphereProps {
  texts: string[]
  options?: {
    radius?: number
    maxSpeed?: number
    initSpeed?: number
    direction?: number
  }
}

export function TagSphere({ texts, options = {} }: TagSphereProps) {
  const {
    radius = 120,
    maxSpeed = 0.5,
    initSpeed = 0.2,
    direction = 135
  } = options

  const containerRef = useRef<HTMLDivElement>(null)
  const [items, setItems] = useState<HTMLSpanElement[]>([])
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()
  const [isMouseInteracting, setIsMouseInteracting] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = texts.map((text) => {
      const element = document.createElement('span')
      element.textContent = text
      element.style.position = 'absolute'
      element.style.userSelect = 'none'
      element.style.whiteSpace = 'nowrap'
      element.style.fontSize = '24px'
      element.className = 'font-semibold gradient1 text-transparent bg-clip-text'
      container.appendChild(element)
      return element
    })

    setItems(elements)

    elements.forEach((element, index) => {
      const phi = Math.acos(-1 + (2 * (index + 1) - 1) / elements.length)
      const theta = Math.sqrt(elements.length * Math.PI) * phi

      const x = (radius / 2) * Math.cos(theta) * Math.sin(phi)
      const y = (radius / 2) * Math.sin(theta) * Math.sin(phi)
      const z = (radius / 2) * Math.cos(phi)

      element.dataset.x = String(x)
      element.dataset.y = String(y)
      element.dataset.z = String(z)
    })

    return () => {
      elements.forEach(element => element.remove())
    }
  }, [texts, radius])

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current

      if (items.length === 0) return

      const speed = isMouseInteracting ? maxSpeed : initSpeed
      const a = -(Math.min(Math.max(-mouseY, -radius), radius) / radius) * speed
      const b = (Math.min(Math.max(-mouseX, -radius), radius) / radius) * speed

      items.forEach(element => {
        const x = parseFloat(element.dataset.x || '0')
        const y = parseFloat(element.dataset.y || '0')
        const z = parseFloat(element.dataset.z || '0')

        const l = Math.PI / 180
        const sina = Math.sin(a * l)
        const cosa = Math.cos(a * l)
        const sinb = Math.sin(b * l)
        const cosb = Math.cos(b * l)

        const ry1 = y * cosa + z * -sina
        const rz1 = y * sina + z * cosa
        const rx2 = x * cosb + rz1 * sinb
        const rz2 = rz1 * cosb - x * sinb

        element.dataset.x = String(rx2)
        element.dataset.y = String(ry1)
        element.dataset.z = String(rz2)

        const scale = (radius * 2 + rz2) / (radius * 3)
        const opacity = (rz2 + radius) / (radius * 2)
        const transform = `translate(-50%, -50%) translate3d(${rx2}px, ${ry1}px, ${rz2}px) scale(${scale})`

        element.style.transform = transform
        element.style.opacity = String(opacity)
        element.style.zIndex = Math.floor(opacity * 100).toString()
      })

      // Automatic rotation
      if (!isMouseInteracting) {
        setMouseX(prev => prev + initSpeed * Math.sin(direction * (Math.PI / 180)))
        setMouseY(prev => prev - initSpeed * Math.cos(direction * (Math.PI / 180)))
      }
    }

    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [items, mouseX, mouseY, isMouseInteracting])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    
    setMouseX((e.clientX - (rect.left + rect.width / 2)) * 0.5)
    setMouseY((e.clientY - (rect.top + rect.height / 2)) * 0.5)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseInteracting(true)}
      onMouseLeave={() => setIsMouseInteracting(false)}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: '1000px' }}
    />
  )
}

