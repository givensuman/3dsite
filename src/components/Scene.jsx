import React, { Suspense, useEffect } from 'react'
import * as THREE from 'three'

import { useDimensions } from '../hooks/useConversion'
import theme from '../styles/theme'

import Keyboard from '../models/Keyboard'
import Monitor from '../models/Monitor'
import Coffee from '../models/Coffee'

const Models = () => {
    const { u, side } = useDimensions()

    return (
        <Suspense fallback={null}>
        <Keyboard
        position={[-u(15), 0, -u(50)]}
        scale={[side/16200, side/29500, side/16200]}
        />
        <Monitor 
        position={[0, u(100), -u(130)]}
        scale={[side/70000, side/70000, side/70000]}
        />        
        <Coffee 
        position={[u(80), u(100), -u(90)]}
        scale={[side/1500, side/1500, side/1500]}
        />
        </Suspense>
    )
}

const TopFace = () => {
    // Note that when using u, the percentages need to be doubled as I decided to make the cube face half the { side } length. Doubling numbers here is easier than fixing relative css in each component
    // Scaling still uses essentially arbitrary "fix" factors as models come in different sizes
    const { u, side } = useDimensions()

    return (
        <>
        <Models />
        <group>
        {/* Cube */}
        <mesh 
        position={[0, 0, -u(199/2) - 0.03]}
        >
            <boxBufferGeometry attach='geometry' args={
                [u(199), u(199), u(199)]
                } />
            <meshToonMaterial 
            attach='material'
            color={theme.background} 
            side={THREE.DoubleSide} 
            />
        </mesh>
        {/* Mousepad */}
        <mesh
        position={[0, u(100), -u(50)]}
        >
            <boxBufferGeometry 
            attach='geometry' 
            args={[u(120), 0.01, u(75)]} 
            />
            <meshStandardMaterial 
            attach='material' 
            color={theme.dark}
            />
        </mesh>
        {/* Coffee */}
        <mesh
        position={[u(77), u(110), -u(90)]}
        >
            <sphereBufferGeometry 
            attach='geometry' 
            args={[u(9), 10, 10]} 
            />
            <meshStandardMaterial 
            attach='material'
            color={'rgb(150,75,0)'} 
            />
        </mesh>
        </group>
        </>
    )
}

export default TopFace