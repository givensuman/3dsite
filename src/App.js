import React, { useState, useEffect, useRef, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useProgress } from '@react-three/drei'

import theme from './styles/theme'

import Cube from './views/Cube'
import Loading from './views/Loading'

import spaceBackground from './assets/misc/space.jpg'

const Button = styled.button`
    position: absolute;
    top: 1%;
    right: 2%;
    background-color: transparent;
    border: 1px solid ${theme.light};
    border-radius: 0.2em;
    color: ${theme.light};
    padding: 0.5em;
    font-size: 0.9em;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${theme.accent5};
    }
`

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

    const navigate = useNavigate()

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
        position: [0, 8, 30], 
        fov: 50 
        }}
        >
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 60, -100]} intensity={0.1} />
        <pointLight position={[-50, 0, -50]} intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.7} />
        <Suspense fallback={() => navigate('/2d')}>
            <Cube />
        </Suspense>
        </Canvas>
        {!loading && <Button onClick={() => navigate('2d')}>View In 2D</Button>}
        </>
    )
}

export default App