import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Html } from '@react-three/drei'

import { useDimensions } from '../hooks/useConversion'

const Wrapper = styled.div`
    font-size: ${props => props.p(3)}px;
    opacity: ${props => props.visible ? '1' : '0'};
    transition: opacity 0.3s;

    img {
        max-height: ${props => props.p(4)}px;
        margin-right: ${props => props.p(1)}px;
        margin-left: ${props => props.p(2)}px;
    }
`

const Gui = () => {

    const { u, p } = useDimensions()
    const [visible, setVisible] = useState(true)

    const handleInput = () => {
        setTimeout(() => setVisible(false), 300)
    }

    useEffect(() => {
        window.addEventListener('mousedown', handleInput)
        window.addEventListener('contextmenu', handleInput)
        window.addEventListener('mousewheel', handleInput)
        window.addEventListener('ontouchmove', handleInput)

        return () => {
            window.removeEventListener('mousedown', handleInput)
            window.removeEventListener('contextmenu', handleInput)
            window.removeEventListener('mousewheel', handleInput)
            window.removeEventListener('ontouchmove', handleInput)
        }
    })



    return (
        <Html
        position={[0, -u(150), u(5)]}
        center
        >
        <Wrapper 
        p={p} 
        className='row center'
        visible={visible}
        >
            <img
            src={require('../assets/icons/leftclick.png')}
            alt='left click'
            />
            <span>Move</span>
            <img
            src={require('../assets/icons/rightclick.png')}
            alt='right click'
            />
            <span>Pan</span>
            <img
            src={require('../assets/icons/scroll.png')}
            alt='scroll'
            />
            <span>Zoom</span>
        </Wrapper>
        </Html>
    )
}

export default Gui