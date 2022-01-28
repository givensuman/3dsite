import React from 'react'
import styled from '@emotion/styled'

import { useDimensions } from '../views/Cube'
import theme from '../styles/theme'

import CubeFace from './CubeFace'

const Wrapper = styled.div`
    h1 {
        margin-bottom: 5%;
        font-size: ${props => props.side/30}px;
    }
`

const Project = styled.img`
    max-width: ${props => props.side/6}px;
    position: relative;
    margin: 0.2em;
    border-radius: 0.5em;
    background: linear-gradient(to right, 
        ${theme.accent3}, 
        ${theme.accent1}, 
        ${theme.accent4}
    );
    border: solid 2px;
    border-color: ${theme.accent2};
    cursor: pointer;
    transition: border-color 0.4s;
    ${props => {
        if (props.orientation === 'left') {
            return `right: 45%;`
        } else {
            return `left: 45%;`
        }
    }}
    &:hover {
        border-color: transparent;
    }
`

const Description = styled.span`
    position: absolute;
    top: 30%;
    background-color: ${theme.accent5};
    padding: 0.4em;
    border-radius: 0.5em;
    box-shadow: -4px 4px 10px ${theme.dark};
    width: ${props => props.side/4.5}px;
    font-size: ${props => props.side/60}px;
    ${props => {
        if (props.orientation === 'left') {
            return `left: 50%;`
        } else {
            return `right: 20%;`
        }
    }}
`

const projectsArray = [
    {
        name: 'johnmulapi',
        src: require('../assets/misc/johnmulapi.png'),
        description: 'A RESTful API for John Mulaney quotes',
        href: 'https://johnmulapi.com/'
    },
    {
        name: 'girlfriendeats',
        src: require('../assets/misc/girlfriendeats.png'),
        description: 'An app for helping my girlfriend pick a restaurant',
        href: 'https://girlfriendeats.herokuapp.com/'
    },
    {
        name: 'moot',
        src: require('../assets/misc/moot.png'),
        description: 'Color-blind friendly syntax highlighting for VSCode',
        href: 'https://moottheme.netlify.app'
    }
]

const Projects = ({ face }) => {

    const side = useDimensions()

    return (
        <CubeFace face={face}>
            <Wrapper side={side} className='col center'>
                <h1>Popular Projects</h1>
                <div className='col'>
                    {projectsArray.map((item, index) => 
                    <div key={index} style={{ position: 'relative' }}>
                        <a href={item.href}>
                        <Project
                        side={side}
                        orientation={index%2 === 0 ? 'right' : 'left'}
                        src={item.src}
                        alt={item.name}
                        />
                        </a>
                        <Description
                        side={side}
                        orientation={index%2 === 0 ? 'right' : 'left'}
                        >
                            {item.description}
                        </Description>
                    </div>
                    )}
                </div>
            </Wrapper>
        </CubeFace>
    )
}

export default Projects