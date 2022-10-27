import React from 'react'
import styled from '@emotion/styled'

import { useDimensions } from '../hooks/useConversion'

import CubeFace from './CubeFace'
import Name from './Name'

const Wrapper = styled.div`
    user-select: none;
    padding: 0 ${props => props.p(3)}px;
    margin: auto;

    h1 {
        font-size: ${props => props.p(6)}px;
    }

    h2 {
        font-size: ${props => props.p(3)}px;
    }

    h3 {
        font-size: ${props => props.p(1.5)}px;

        span {
            opacity: ${props => props.flat ? '0.2' : '1'};
        }
    }

    p {
        font-size: ${props => props.p(2)}px;
    }
`

export const HelloFlat = ({ p, flat }) => {

    return (
        <Wrapper p={p} flat={flat}>   
        <h1>Hi! I'm <Name p={p}>Given.</Name></h1>
        <h2>I build things on the web.</h2>
        <h3>(Like this... <span>cube</span> thing)</h3>
        <p>I'm a chemist turned web developer - reactions to React.</p>
        <p>Take a look around and tell me what you think!</p>
        </Wrapper>
    )
}

const Hello = ({ face }) => {

    const { p } = useDimensions()

    return (
        <CubeFace face={face}><HelloFlat p={p} flat={false} /></CubeFace>
    )
}

export default Hello