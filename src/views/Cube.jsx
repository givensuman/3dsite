import React, { createContext, Suspense, useContext, useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

import Hello from '../components/Hello'
import Github from '../components/Github'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Scene from '../components/Scene'
import Screen from '../components/Screen'
import Contact from '../components/Contact'

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

const Cube = () => {
    const groupRef = useRef()
    // useFrame((state, delta) => {
    //     groupRef.current.rotation.x += 0.001
    //     groupRef.current.rotation.y += 0.001
    //     groupRef.current.rotation.z += 0.001
    // })

    const [sideLength, setSideLength] = useState(createSquare())
    const [occlusion, setOcclusion] = useState(true)
    // const [eventTracker, setEventTracker] = useState({
    //     w: null,
    //     a: null,
    //     s: null,
    //     d: null
    // })
    useEffect(() => {
        const handleResize = () => setSideLength(createSquare())
        // const handleControls = e => {
        //     if (eventTracker[e.key] !== null) return
        //     setEventTracker(state => ({
        //         ...state,
        //         [e.key]: setInterval(() => {
        //             rotate(groupRef, e.key)
        //         }, 10)
        //     }))
        // }
        // const clearControls = e => setEventTracker(state => ({
        //     ...state,
        //     [e.key]: null
        // }))
        window.addEventListener('resize', handleResize)
        // window.addEventListener('keydown', e => handleControls(e))
        // window.addEventListener('keyup', e => clearControls(e))
        return () => {
            window.removeEventListener('resize', handleResize)
            // window.removeEventListener('keydown')
            // window.removeEventListener('keyup')
        }
    }, [])

    return (
        <Geometry.Provider value={sideLength}>
            <Hello face={'front'} />
            <Github face={'right'} />
            <Projects face={'back'} />
            <Skills face={'left'} />
            <Scene face={'top'} />
            <Screen />
            <Contact face={'bottom'} />
        </Geometry.Provider>
    )
}

// Control functions
// const rotate = (ref, dir) => {
//     switch (dir) {
//         case 'w':
//             ref.current.rotation.z += 0.01
//             break
//         case 'a':
//             ref.current.rotation.x -= 0.01
//             break
//         case 's':
//             ref.current.rotation.z -= 0.01
//             break
//         case 'd':
//             ref.current.rotation.x += 0.01
//             break
//         default:
//             break
//     }
// }
export default Cube