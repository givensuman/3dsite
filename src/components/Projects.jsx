import React from 'react'
import styled from '@emotion/styled'

import { useDimensions } from '../hooks/useConversion'
import theme from '../styles/theme'

import CubeFace from './CubeFace'

const Wrapper = styled.div`
    h1 {
        margin: 2% 0;
        font-size: ${props => props.p(4)}px;
    }
`

const Project = styled.img`
    max-width: ${props => props.p(20)}px;
    max-height: ${props => props.p(14)}px;
    position: relative;
    margin: ${props => props.p(0.2)}px;
    border-radius: 0.5em;
    background: none;
    border: solid 0.15em;
    border-color: transparent;
    cursor: pointer;
    transition: background 0.4s;
    ${props => {
        if (props.orientation === 'left') {
            return `right: 45%;`
        } else {
            return `left: 45%;`
        }
    }}
    &:hover {
        border-color: transparent;    
        background: linear-gradient(to right, 
            ${theme.accent3}, 
            ${theme.accent1}, 
            ${theme.accent4}
        );
    }
`

const Description = styled.span`
    position: absolute;
    top: 30%;
    background-color: ${theme.accent5};
    padding: 0.4em;
    border-radius: 0.5em;
    box-shadow: -4px 4px 10px ${theme.dark};
    width: ${props => props.p(27)}px;
    font-size: ${props => props.p(2)}px;
    ${props => {
        if (props.orientation === 'left') {
            return `left: 20%;`
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
    // {
    //     name: 'moot',
    //     src: require('../assets/misc/moot.png'),
    //     description: 'Color-blind friendly syntax highlighting for VSCode',
    //     href: 'https://moottheme.netlify.app'
    // }
    // {
    //     name: 'gitglance',
    //     src: require('../assets/misc/gitglance.png'),
    //     description: 'An app for quick looks at a GitHub profile',
    //     href: 'https://gitglance.netlify.app'
    // }
    {
        name: 'colorblindtheme',
        src: require('../assets/misc/colorblindtheme.png'),
        description: 'Color-blind friendly syntax highlighting for VSCode',
        href: 'https://colorblind-theme.netlify.app/'
    }
]

export const ProjectsFlat = ({ p }) => {

    return (
        <Wrapper p={p} className='col center'>
            <h1>Popular Projects</h1>
            <div className='col'>
                {projectsArray.map((item, index) => 
                <div key={index} style={{ position: 'relative' }}>
                    <a href={item.href}>
                    <Project
                    p={p}
                    orientation={index%2 === 0 ? 'right' : 'left'}
                    src={item.src}
                    alt={item.name}
                    />
                    </a>
                    <Description
                    p={p}
                    orientation={index%2 === 0 ? 'right' : 'left'}
                    >
                        {item.description}
                    </Description>
                </div>
                )}
            </div>
        </Wrapper>
    )
}

const Projects = ({ face }) => {

    const { p } = useDimensions()
    
    return (
        <CubeFace face={face}><ProjectsFlat p={p} /></CubeFace>
    )
}

export default Projects