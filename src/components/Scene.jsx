import React, { Suspense } from 'react'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'

import { useDimensions } from '../hooks/useConversion'
import theme from '../styles/theme'

import woodTextureMap from '../assets/misc/wood_texture.jpg'

import { Model as Coffee } from '../models/Coffee'
import { Model as Monitor } from '../models/Monitor'
import { Model as Keyboard } from '../models/Keyboard'
import { Model as Mouse } from '../models/Mouse'
import { Model as Plant } from '../models/Plant'
import { Model as RubberDuck } from '../models/RubberDuck'
import { Model as RubiksCube } from '../models/RubiksCube'
import { Model as TallPlant } from '../models/TallPlant'
import { Model as Mousepad } from '../models/Mousepad'
import { Model as Coaster } from '../models/Coaster'
 
const Models = () => {
    const { u, side } = useDimensions()

    return (
        <Suspense fallback={null}>
            {/* <Keyboard
                position={[-u(15), 0, -u(50)]}
                scale={[side / 16200, side / 29500, side / 16200]}
            /> */}
            <Coffee
                occlude
                position={[u(80), u(98), -u(90)]}
                scale={[side / 1500, side / 1500, side / 1500]}
            />
            <Monitor 
                position={[u(7), u(135.5), -u(115)]}
                scale={[side / 600, side / 600, side / 600]} 
                rotation={[0, Math.PI*3/2 + 0.1, 0]}
            />
            <Keyboard
                position={[-u(40), u(102), u(-55)]}
                scale={[side/7000, side/7000, side/7000]}
                rotation={[0, Math.PI*3/2 + 0.05, 0]}
            />
            <Mouse 
                position={[u(50), u(99), u(-45)]}
                scale={[side/100, side/100, side/100]}
                rotation={[0, Math.PI*3/2 - 0.25, 0]}
            />
            <Plant 
                scale={[side/100, side/100, side/100]}
                position={[u(-80), u(100), u(-130)]}
            />
            <RubiksCube 
                position={[u(65), u(99.5), u(-115)]}
                scale={[side/8000, side/8000, side/8000]}
                rotation={[0, -5, 0]} 
            />
            <RubberDuck 
                position={[u(-55), u(99), u(-110)]}
                scale={[side/700, side/700, side/700]}
                rotation={[0, 0.5, 0]}
            />
            <TallPlant
                position={[u(-40), u(99), u(-170)]}
                scale={[side/300, side/300, side/300]}
            />
            <Mousepad
                position={[u(27), u(-31.5), u(7)]}
                scale={[side/600, side/600, side/500]}
                rotation={[0, Math.PI/2, 0]}
            />
            <Coaster 
                scale={[side/60, side/150, side/60]}
                position={[u(77), u(99), u(-90)]}
            />
        </Suspense>
    )
}

const TopFace = () => {
    // Note that when using u, the percentages need to be doubled as I decided to make the cube face half the { side } length. Doubling numbers here is easier than fixing relative css in each component
    // Scaling still uses essentially arbitrary "fix" factors as models come in different sizes
    const { u } = useDimensions()

    const woodTexture = useLoader(THREE.TextureLoader, woodTextureMap)

    return (
        <Suspense fallback={null}>
            <Models />
            <group>
                {/* Cube */}
                <mesh
                    position={[0, 0, -u(200 / 2)]}
                >
                    <boxBufferGeometry attach='geometry' args={
                        [u(199), u(199), u(199)]
                    } />
                    <meshBasicMaterial
                        attach='material'
                        // map={woodTexture}
                        color={theme.accent5}
                        side={THREE.DoubleSide}
                    />
                </mesh>
                {/* Desk */}
                <mesh
                    position={[0, u(99.1), -u(100)]}
                >
                    <boxBufferGeometry
                        attach='geometry'
                        args={[u(198), u(1), u(198)]}
                    />
                    <meshBasicMaterial
                        attach='material'
                        map={woodTexture}
                        side={THREE.DoubleSide}
                    />
                </mesh>
                {/* Mousepad */}
                {/* <mesh
                    position={[0, u(100), -u(50)]}
                >
                    <boxBufferGeometry
                        attach='geometry'
                        args={[u(120), 0.01, u(75)]}
                    />
                    <meshStandardMaterial
                        attach='material'
                        color={theme.accent5}
                    />
                </mesh> */}
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
        </Suspense>
    )
}

export default TopFace