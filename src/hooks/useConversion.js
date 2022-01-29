import React, { createContext, useContext, useState, useEffect } from 'react'

const Geometry = createContext(createSquare())
export const useDimensions = () => useContext(Geometry)

export default function GeometryProvider({ children }) {

    const createSquare = () => {
        let height = window.innerHeight
        let width = window.innerWidth
        if (height > width) {
            return width
        } else if (width > height) {
            return height
        } else {
            return width
        }
    }

    const [sideLength, setSideLength] = useState(createSquare())

    useEffect(() => {
        const handleResize = () => 
            setSideLength(createSquare())
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener(handleResize)
    }, [])

    const [conversion] = useState({
        u: percentage => percentage * sideLength/155,
        p: pixels =>  percentage * sideLength
    })

    return (
        <Geometry.Provider value={conversion}>
            {children}
        </Geometry.Provider>
    )
}