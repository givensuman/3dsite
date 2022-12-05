import React, { useState, useEffect, useRef, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useProgress, Stars } from '@react-three/drei'

import theme from './styles/theme'

import Cube from './views/Cube'
import Loading from './views/Loading'

const Button = styled.button`
    position: absolute;
    top: 1%;
    right: 2%;
    background-color: transparent;
    border: 2px solid ${theme.light};
    border-radius: 0.25em;
    color: ${theme.light};
    padding: 0.5em;
    font-size: 0.8em;
    font-weight: bold;
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
        if (!mobile && !active) setTimeout(() => setLoading(false), 1500)
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
        background: 'rgb(41,38,91)',
        backgroundImage: 'radial-gradient(circle, rgba(41,38,91,1) 0%, rgba(29,15,42,1) 50%, rgba(17,8,29,1) 100%)',
        height: loading ? '0px' : dimensions.height,
        width: loading ? '0px' : dimensions.width
        }}
        camera={{
        position: [0, 8, 30], 
        fov: 50 
        }}
        >
        <OrbitControls enablePan enableZoom enableRotate enableDamping />
        <ambientLight intensity={0.25} />
        <pointLight position={[0, 60, -100]} intensity={0.1} />
        <pointLight position={[-50, 0, -50]} intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.7} />
        <Suspense fallback={() => navigate('/2d')}>
            <Stars radius={100} depth={50} count={5000} factor={6} saturation={100} fade speed={2} />
            <Cube />
        </Suspense>
        </Canvas>
        {!loading && <Button onClick={() => navigate('2d')}>View In 2D</Button>}
        </>
    )
}

export default App