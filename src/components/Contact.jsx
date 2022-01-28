import React from 'react'
import styled from '@emotion/styled'

import { useDimensions } from '../views/Cube'
import theme from '../styles/theme'

import CubeFace from './CubeFace'

const Wrapper = styled.div`
    height: 100%;

    h1 {
        font-size: ${props => props.side/15}px;
        user-select: none;
    }

    a {
        width: 50%;
        height: 20%;
        border: none;
        color: ${theme.accent5};
        font-size: ${props => props.side/35}px;
        cursor: pointer;
        transition: box-shadow 0.4s, background-position 0.5s ease-out;
        border-radius: 0.5em;
        background-color: ${theme.accent2};
        background-size: 200% 200%;
        background-position: right;
        text-decoration: none;
        &:hover {
            background-image: linear-gradient(90deg,
                ${theme.accent1}, 
                ${theme.accent3},
                ${theme.accent4},
                ${theme.accent2}
            );
            box-shadow: -4px 4px 10px ${theme.dark};
            background-position: left;
        }
    }
`

const BottomFace = ({ face }) => {

    const side = useDimensions()

    return (
        <CubeFace face={face}>
            <Wrapper side={side} className='col center'>
                <h1>Get In Touch</h1>
                <a className='row center' href='mailto:givensuman@gmail.com'>Say Hello</a>
            </Wrapper>
        </CubeFace>
    )
}

export default BottomFace