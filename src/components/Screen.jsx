import React from 'react'
import styled from '@emotion/styled'
import { Html } from '@react-three/drei'

import { useDimensions } from '../hooks/useConversion'

import wallpaperSrc from '../assets/misc/wallpaper.png'

const Wrapper = styled.div`
    height: ${props => props.p(23)}px;
    width: ${props => props.p(35)}px;
    border-radius: 0.2em;
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
        position={[0, u(170), -u(119)]}
        rotation={[-0.2, 0, 0]}
        >
        <Wrapper p={p}>
            <Wallpaper
            alt="Wallpaper"
            src={wallpaperSrc}
            />
        </Wrapper>
        </Html>
    )
}

export default Screen