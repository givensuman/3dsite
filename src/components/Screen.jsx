import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { Html } from '@react-three/drei'
import Typed from 'typed.js'

import { useDimensions } from '../views/Cube'
import theme from '../styles/theme'

import { ReactComponent as Close } from '../assets/icons/close.svg'

const Wrapper = styled.div`
    height: ${props => props.side/4.2}px;
    width: ${props => props.side/2.8}px;
    border-radius: 0.5em;
    overflow: hidden;

    .typed-cursor {
        visibility: hidden;
    }
`

const Editor = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${theme.dark};
    display: ${props => props.visible ? 'block' : 'none'};
`

const Navbar = styled.div`
    background-color: ${theme.accent5};
    width: 100%;
    height: 5%;
    margin-bottom: auto;
    display: flex;
    justify-content: right;
    align-items: center;

    svg {
        max-height: 90%;
        margin-right: 2%;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
            color: red;
        }
    }
`

const Code = styled.pre`
    font-size: ${props => props.side/120}px;
    padding-left: 5px;
`

const Desktop = styled.div`
    background-color: blue;
    height: 100%;
    width: 100%;
    display: ${props => props.visible ? 'block' : 'none'};

    img {
        max-height: 100%;
        z-index: -1;
    }

    div {
        background-color: blue;
    }
`

const Screen = () => {

    const side = useDimensions()
    const typeRef = useRef()

    useEffect(() => {
        const typed = new Typed(typeRef.current, {
            strings: [
`
import * as THREE from 'three' ^500

// Create plane mesh ^1000
const planeGeometry = new THREE.PlaneGeometry(100, 100, 10, 10)
const planeMaterial = new THREE.MeshStandardMaterial({
  map: planeTexture,
  side: THREE.DoubleSide
})
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
planeMesh.receiveShadow = true
scene.add(planeMesh)

// Create ball ^1000
const ballGeometry = new THREE.SphereGeometry()
const ballMaterial = new THREE.MeshStandardMaterial({
  map: ballTexture
})
const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial)
ballMesh.castShadow = true
ballMesh.position.z += 0.4
scene.add(ballMesh)
`
        ],
        typeSpeed: 30,
        backSpeed: 10,
        backDelay: 10
        })
        return () => typed.destroy()
    }, [])

    const [showDesktop, setShowDesktop] = useState(false)
    const [time, setTime] = useState('0:00')
    useEffect(() => {
        const getTime = () => {
            let time = new Date()
            setTime(time.getHours() + ':' + time.getMinutes())
        }
        getTime()
        const timeInterval = setInterval(getTime, 60000)
        return () => clearInterval(timeInterval)
    }, [])

    return (
        <Html 
        transform 
        occlude
        position={[0, side/91, -side/131]}
        rotation={[-0.2, 0, 0]}
        >
            <Wrapper side={side}>
                <Editor visible={!showDesktop}>
                    <Navbar>
                        <Close onClick={() => setShowDesktop(true)} />
                    </Navbar>
                    <Code side={side} ref={typeRef}></Code>
                </Editor>
            <Desktop visible={showDesktop}>
                <img src={require('../assets/misc/desktopbackground.png')} alt='background' />
                <div>{time}</div>
            </Desktop>
            </Wrapper>
        </Html>
    )
}

export default Screen