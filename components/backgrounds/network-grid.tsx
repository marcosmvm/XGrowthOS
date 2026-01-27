'use client'

import { useEffect, useRef } from 'react'

interface NetworkGridProps {
  intensity?: 'high' | 'medium' | 'low'
  animated?: boolean
}

const intensityConfig = {
  high: { nodeOpacity: 0.4, lineOpacity: 0.15, nodeCount: 50 },
  medium: { nodeOpacity: 0.3, lineOpacity: 0.1, nodeCount: 35 },
  low: { nodeOpacity: 0.2, lineOpacity: 0.06, nodeCount: 20 },
}

export function NetworkGrid({ intensity = 'medium', animated = true }: NetworkGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { nodeOpacity, lineOpacity, nodeCount } = intensityConfig[intensity]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    const initNodes = () => {
      nodes = []
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
        })
      }
    }

    const getColor = () => {
      // Use emerald green - the primary color
      return {
        node: `rgba(5, 150, 105, ${nodeOpacity})`,
        line: `rgba(5, 150, 105, ${lineOpacity})`,
        glow: `rgba(5, 150, 105, 0.6)`,
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const colors = getColor()

      // Draw connections
      ctx.strokeStyle = colors.line
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const opacity = (1 - distance / 200) * lineOpacity
            ctx.strokeStyle = `rgba(5, 150, 105, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        // Glow effect
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 4
        )
        gradient.addColorStop(0, colors.glow)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2)
        ctx.fill()

        // Node
        ctx.fillStyle = colors.node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Update positions if animated
      if (animated) {
        for (const node of nodes) {
          node.x += node.vx
          node.y += node.vy

          if (node.x < 0 || node.x > canvas.width) node.vx *= -1
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [animated, nodeOpacity, lineOpacity, nodeCount])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
}
