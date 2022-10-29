import React from 'react'
import styled from '@emotion/styled'
import { Html } from '@react-three/drei'

import { useDimensions } from '../hooks/useConversion'

import screenshotSrc from '../assets/misc/screenshot.png'

const Wrapper = styled.div`
    height: ${props => props.p(12.75)}px;
    width: ${props => props.p(22.80)}px;
    border-radius: 20em;
`

const Wallpaper = styled.img`
    height: 100%;
    width: 100%;
`

const Screen = () => {

    const { u, p } = useDimensions()

    return (
        <Html 
        transform
        occlude
        position={[u(7.35), u(135.5), -u(112)]}
        rotation={[-0, 0.1, 0]}
        >
        <Wrapper p={p}>
            <Wallpaper
            alt="Wallpaper"
            src={screenshotSrc}
            />
        </Wrapper>
        </Html>
    )
}

export default Screen