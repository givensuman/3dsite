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

    const navigate = useNavigate()

    const scale = Math.min(7, window.innerWidth/40)

    return (
        <PageWrapper
            animationKey="home"
            className="h-screen"
            style={{
                background: "radial-gradient(#272730 50%, #171720 80%, #070710 100%)"
            }}
        >
            <div className="fixed w-full h-1/4 flex justify-center items-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-body text-orange-400 relative bottom-1 drop-shadow-2xl">
                    given
                    <span className="text-orange-200/50">
                        .rocks
                    </span>
                </h1>
            </div>
            <div className="h-1/2">
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
                        <div className="flex space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
                            <NavButton      onClick={() => navigate("/about")}
                            >
                                About
                            </NavButton>
                            <NavButton      onClick={() => navigate("/projects")}
                            >
                                Projects
                            </NavButton>
                            <NavButton      onClick={() => navigate("/contact")}
                            >
                                Contact
                            </NavButton>
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
                        <Model 
                            url="/scene.glb" 
                            scale={[scale, scale, scale]}
                            position={[0, -scale,0]}
                        />
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
            </div>
        </PageWrapper>
    )
}

const NavButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button 
            className="bg-orange-200/50 px-5 py-3 text-3xl sm:px-6 sm:py-4 sm:text-4xl md:text-5xl md:px-8 md:py-6 hover:bg-orange-400 transition-colors cursor-pointer rounded-lg"
            {...props}
        >
            {props.children}
        </button>
    )
}

export default Home