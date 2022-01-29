import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'

import { useDimensions } from '../views/Cube'
import theme from '../styles/theme'

import Keyboard from '../models/Keyboard'
import Monitor from '../models/Monitor'
import Coffee from '../models/Coffee'
import Plant from '../models/Plant'

const TopFace = () => {
    const side = useDimensions()
    const keyboardRef = useRef()
    // There are a lot of magic numbers here based on side value
    // They should work across window resizings
    // But there's no real logic to it, just trial and error
    return (
        <>
        <Suspense fallback={null}>
        <Keyboard
        ref={keyboardRef}
        position={[-side/1200, -side/193, -side/250]}
        scale={[side/16200, side/16200, side/16200]}
        />
        <Monitor 
        position={[0, side/152, -side/120]}
        scale={[side/70000, side/70000, side/70000]}
        />
        <Coffee 
        position={[side/200, side/155, -side/100]}
        scale={[side/1500, side/1500, side/1500]}
        />
        <Plant 
        position={[-side/200, side/115, -side/105]}
        scale={[side/15000, side/15000, side/15000]}
        />
        </Suspense>
        {/* Cube */}
        <mesh 
        position={[0, 0.1, -side/155]}
        >
            <boxBufferGeometry attach='geometry' args={
                [side/78, side/78, side/78]
                } />
            <meshBasicMaterial attach='material' color={theme.background} side={THREE.DoubleSide} />
        </mesh>
        {/* Mousepad */}
        <mesh
        position={[0, side/154, -side/250]}
        >
            <boxBufferGeometry attach='geometry' args={[side/120, side/10000, side/250]} />
            <meshStandardMaterial attach='material' color={theme.dark}/>
        </mesh>
        {/* Coffee */}
        <mesh
        position={[side/208, side/140, -side/100]}
        >
            <sphereBufferGeometry attach='geometry' args={[0.588, 10, 10]} />
            <meshStandardMaterial color={'darkbrown'} />
        </mesh>
        </>
    )
}

export default TopFace