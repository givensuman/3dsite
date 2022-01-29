import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

import theme from '../styles/theme'

import { useDimensions } from '../views/Cube'

const Wrapper = styled.div`
height: ${props => props.side/2}px;
width: ${props => props.side/2}px;
background-color: ${theme.background};
padding: 0.5em;
overflow: hidden;
`

const CubeFace = ({ children, face, occlusion }) => {
    const side = useDimensions()
    const meshRef = useRef()
    const { position, rotation } = arrangeGeometry(face, side)
    return (
            <Html 
            transform
            occlude
            position={position}
            distanceFactor={10}
            rotation-x={rotation.x}
            rotation-y={rotation.y}
            rotation-z={rotation.z}
            >
                <Wrapper side={side}>
                    {children}
                </Wrapper>
            </Html>
    )
}

const arrangeGeometry = (face, side) => {
    let u = side/155
    switch (face) {
        case 'front':
            return {
                position: [0, 0, 0],
                rotation: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            }
        case 'right':
            return {
                position: new THREE.Vector3(u, 0, -u),
                rotation: {
                    x: 0,
                    y: Math.PI/2,
                    z: 0
                }
            }
        case 'back':
            return {
                position: new THREE.Vector3(0, 0, -2 * u),
                rotation: {
                    x: 0,
                    y: Math.PI,
                    z: 0
                }
            }
        case 'left': 
            return {
                position: new THREE.Vector3(-u, 0, -u),
                rotation: {
                    x: 0,
                    y: -Math.PI/2,
                    z: 0
                }
            }
        case 'top':
            return {
                position: new THREE.Vector3(0, u, -u),
                rotation: {
                    x: Math.PI/2,
                    y: Math.PI,
                    z: 0
                }
            }
        case 'bottom': 
            return {
                position: new THREE.Vector3(0, -u, -u),
                rotation: {
                    x: Math.PI/2,
                    y: 0,
                    z: 0
                }
            }
        default:
            return {
                position: [0, 0, 0],
                rotation: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            }
    }
}

export default CubeFace