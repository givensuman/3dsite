import React, { useState, useEffect } from "react"

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const handlePointerMove = (e: PointerEvent) => {
    const { clientX, clientY } = e

    setMousePosition({
      x: clientX,
      y: clientY,
    })
  }

  useEffect(() => {
    document.addEventListener("pointermove", handlePointerMove)

    return () => document.removeEventListener("pointermove", handlePointerMove)
  }, [])

  return mousePosition
}

export default useMousePosition
