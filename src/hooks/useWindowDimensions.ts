import React, { useState, useEffect } from "react"

const useWindowDimensions = () => {
    const [ dimensions, setDimensions ] = useState({
        height: window.innerHeight ?? 0,
        width: window.innerWidth ?? 0
    })

    const handleResize = () => {
        if (window) {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [!!window])

    return dimensions
}

export default useWindowDimensions