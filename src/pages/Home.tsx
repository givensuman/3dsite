import React, { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars, Html } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

import PageWrapper from '../components/PageWrapper'
import Link from '../components/Link'
import Model from '../components/Model'
import useEventListener from '../hooks/useEventListener'
import useTextEffect from '../hooks/useTextEffect';



const Home = () => {

    const [ dimensions, setDimensions ] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEventListener("resize", () => {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        })
    })

    const [ about, refreshAbout ] = useTextEffect("About")

    const navigate = useNavigate()

    return (
        <PageWrapper
            animationKey="home"
            className="h-screen"
            style={{
                background: "radial-gradient(at 50% 120%, #873740 0%, #272730 50%, #171720 80%, #070710 100%)"
            }}
        >
            <div className="absolute w-full h-1/3 flex justify-center items-center">
                <h1 className="text-8xl font-bold font-body text-orange-300 relative left-4 bottom-1 drop-shadow-2xl">given.rocks</h1>
            </div>
            <Canvas 
                linear 
                shadows
                className="w-full h-full relative"
                style={{
                    height: dimensions.height,
                    width: dimensions.width
                }}
            >
                <Html 
                    as="div"
                    center
                    distanceFactor={15}
                    position={[0, -10, 0]}
                >
                    <div className="flex space-x-12">
                        <button       
                            className="bg-orange-200/50 p-8 rounded-lg  text-5xl hover:bg-orange-400 transition-colors cursor-pointer"
                            onClick={() => navigate("/about")}
                            onPointerEnter={refreshAbout}
                        >
                            About
                        </button>
                        <h1
                            className="bg-orange-200/50 p-8 rounded-lg   hover:bg-orange-400 transition-colors cursor-pointer"
                        >
                            Projects
                        </h1>
                        <h1
                            className="bg-orange-200/50 p-8 rounded-lg   hover:bg-orange-400 transition-colors cursor-pointer"
                        >
                            Contact
                        </h1>
                    </div>
                </Html>
                <fog attach="fog" args={['#272730', 16, 30]} />
                <ambientLight intensity={0.75} />
                <PerspectiveCamera 
                    makeDefault 
                    position={[0, 0, 16]} 
                    fov={75}
                >
                <pointLight 
                    intensity={1} 
                    position={[-10, -25, -10]} 
                />
                <spotLight 
                    castShadow 
                    intensity={2.25} 
                    angle={0.2} 
                    penumbra={1} 
                    position={[-25, 20, -15]} 
                    shadow-mapSize={[1024, 1024]} 
                    shadow-bias={-0.0001} 
                />
                </PerspectiveCamera>
                <Suspense fallback={null}>
                    <Model url="/scene.glb" />
                </Suspense>
                <OrbitControls 
                    autoRotate 
                    enablePan={false} 
                    enableZoom={false} 
                    maxPolarAngle={Math.PI / 2} 
                    minPolarAngle={Math.PI / 2} 
                />
                <Stars 
                    radius={500} 
                    depth={50} 
                    count={1000} 
                    factor={10} 
                />
            </Canvas>
        </PageWrapper>
    )
}

export default Home