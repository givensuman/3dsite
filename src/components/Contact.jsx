import React from 'react'
import styled from '@emotion/styled'

import { useDimensions } from '../hooks/useConversion'
import theme from '../styles/theme'

import CubeFace from './CubeFace'

const Wrapper = styled.div`
    height: 100%;

    h1 {
        font-size: ${props => props.p(5)}px;
        user-select: none;
    }

    #contact-me {
        width: ${props => props.p(20)}px;
        height: ${props => props.p(10)}px;
        border: none;
        color: ${theme.accent5};
        font-size: ${props => props.p(3)}px;
        cursor: pointer;
        transition: box-shadow 0.4s, background-position 0.5s ease-out;
        border-radius: 0.2em;
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

export const ContactFlat = ({ p }) => {

    return (
        <Wrapper p={p} className='col center'>
            <h1>Get In Touch</h1>
            <a id='contact-me' className='row center' href='mailto:givensuman@gmail.com'>Say Hello</a>
        </Wrapper>
)
}

const Contact = ({ face }) => {

    const { p } = useDimensions()

    return (
        <CubeFace face={face}><ContactFlat p={p} /></CubeFace>
    )
}

export default Contact