import React from 'react'
import styled from '@emotion/styled'

import { useDimensions } from '../hooks/useConversion'

import CubeFace from './CubeFace'
import Name from './Name'

const Wrapper = styled.div`
    user-select: none;
    padding: 0 1em;

    h1 {
        font-size: ${props => props.p(6)}px;
    }

    h2 {
        font-size: ${props => props.p(3)}px;
    }

    h3 {
        font-size: ${props => props.p(1.5)}px;
    }

    p {
        font-size: ${props => props.p(2)}px;
    }
`

const Hello = ({ face }) => {

    const { p } = useDimensions()

    return (
        <CubeFace face={face}>
            <Wrapper p={p}>   
            <h1>Hi! I'm <Name>Given.</Name></h1>
            <h2>I build things on the web.</h2>
            <h3>(Like this... cube thing)</h3>
            <p>I'm a chemist turned web developer - reactions to React.</p>
            <p>Take a look around and tell me what you think!</p>
            </Wrapper>
        </CubeFace>
)
}

export default Hello