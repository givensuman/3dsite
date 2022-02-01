import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useProgress } from '@react-three/drei'

import Cube from './views/Cube'
import Loading from './views/Loading'

import spaceBackground from './assets/misc/space.jpg'

const App = () => { 
    
    const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
    })

    useEffect(() => {
        const handleResize = () => {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        })
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const canvasRef = useRef()
    const [loading, setLoading] = useState(true)
    const { active, progress } = useProgress()

    const isMobile = () => {
        return ('ontouchstart' in document.documentElement)
    }

    useEffect(() => {
        let mobile = isMobile()
        if (!mobile && !active) setTimeout(() => setLoading(false), 500)
    }, [active])

    return (
        <>
        <Loading 
        setLoading={setLoading} 
        mobile={isMobile()} 
        loading={loading} 
        progress={progress} 
        />
        <Canvas
        ref={canvasRef}
        style={{ 
        backgroundImage: `url(${spaceBackground})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'norepeat',
        height: dimensions.height,
        width: dimensions.width,
        position: 'absolute'
        }}
        camera={{
        position: [0, 8, 24], 
        fov: 50 
        }}
        >
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 60, -100]} intensity={0.1} />
        <pointLight position={[-50, 0, -50]} intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.7} />
        <Suspense fallback={null}>
            <Cube />
        </Suspense>
        </Canvas>
        </>
    )
}

export default App