import React, { useState, useEffect, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from './views/Cube'
import Keyboard from './components/ModelKeyboard'

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

  return (
    <Canvas
    style={{ 
      background: '#171717',
      height: dimensions.height,
      width: dimensions.width
     }}
    camera={{ position: [0, 0, 15], fov: 50 }}
    >
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <ambientLight intensity={2} />
      <pointLight position={[0, 60, -100]} intensity={5} />
      <pointLight position={[-50, 0, -50]} intensity={2} />
      <pointLight position={[10, 10, 10]} intensity={10} />
      <Cube />
    </Canvas>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
)
