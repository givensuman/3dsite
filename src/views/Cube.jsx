import React, { useRef, Suspense } from 'react'
import GeometryProvider from '../hooks/useConversion'

import Hello from '../components/Hello'
import Github from '../components/Github'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Scene from '../components/Scene'
import Screen from '../components/Screen'
import Contact from '../components/Contact'
import Gui from '../components/Gui'

const Cube = () => {

    const cubeRef = useRef(null)

    return (
        <GeometryProvider>
            <Suspense fallback={null}>
                <group ref={cubeRef}>
                    <Hello face={'front'} />
                    <Github face={'right'} />
                    <Projects face={'back'} />
                    <Skills face={'left'} />
                    <Scene />
                    <Screen />
                    <Contact face={'bottom'} />
                    <Gui />
                </group>
            </Suspense>
        </GeometryProvider>
    )
}

export default Cube