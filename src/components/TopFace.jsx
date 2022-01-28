import React, { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'

import { useDimensions } from '../views/Cube'

import Keyboard from './ModelKeyboard'

const convertGeometryUnits = length =>
    length/150.5

const TopFace = ({ face }) => {
    const side = convertGeometryUnits(useDimensions())
    useEffect(() => console.log('loaded keyboard', Keyboard))
    return (
        <group>  
        <mesh position={[0, side, -side]}>
            <boxGeometry args={[2 * side, 0.001, 2 * side]} />
            <meshBasicMaterial color='orange' />
        </mesh>
        <Suspense fallback={null}>
        <Keyboard 
        position={[0, -5.3, -2.3]}
        scale={[0.05, 0.05, 0.05]}
        frustumCulled={false}
        />
        </Suspense>
        </group>
    )
}

export default TopFace