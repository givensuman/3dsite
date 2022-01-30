import React, { createContext, useContext, useState, useEffect } from 'react'

// Okay future Given, or whatever poor sap is reading this, this is the worst file in this whole project. 
// Basically, three.js units are arbitrary, and because we want to 
// render DOM stuff we need a way to consistently convert units into 
// pixels and vice versa for model rendering. Based on the components 
// I've made, a conversion of about 155px = 1 unit works well, for whatever 
// reason. Initially, I was sending the side length of the cube to 
// every component and then just fiddling with numbers to get things 
// into place based on that length so that they would resize in the 
// same 3D spot. Obviously, that was a bad plan. Now, this context 
// exports { u, p } which are functions to convert between the two.
// These exports use PERCENTAGES of the side length. Use p in
// DOM components, such that p(100) would be a full side worth of
// pixels, like height: 100%. Use u in models, such that a
// position in +x space of u(50) is half the cube face in the x axis

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

const Geometry = createContext(createSquare())
export const useDimensions = () => useContext(Geometry)

export default function GeometryProvider({ children }) {

    const [sideLength, setSideLength] = useState(createSquare())

    useEffect(() => {    

        const handleResize = () => 
            setSideLength(createSquare())
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener(handleResize)
    }, [])

    const [conversion] = useState({
        side: sideLength,
        u: percentage => (percentage/100) * (sideLength/155),
        p: percentage =>  (percentage/100) * (sideLength)
    })

    return (
        <Geometry.Provider value={conversion}>
            {children}
        </Geometry.Provider>
    )
}