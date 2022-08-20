import React from 'react'
import styled from '@emotion/styled'
import Tooltip from 'react-simple-tooltip'

import { useDimensions } from '../hooks/useConversion'
import theme from '../styles/theme'

import CubeFace from '../components/CubeFace'

import { ReactComponent as Javascript } from '../assets/logos/javascript.svg'
import { ReactComponent as Typescript } from '../assets/logos/typescript.svg'
import { ReactComponent as ReactSVG } from '../assets/logos/react.svg'
import { ReactComponent as Vue } from '../assets/logos/vue.svg'
import { ReactComponent as Node } from '../assets/logos/node.svg'
import { ReactComponent as Sass } from '../assets/logos/sass.svg'
import { ReactComponent as Bootstrap } from '../assets/logos/bootstrap.svg'
import { ReactComponent as Figma } from '../assets/logos/figma.svg'
import { ReactComponent as Python } from '../assets/logos/python.svg'
import { ReactComponent as StackOverflow } from '../assets/logos/stackoverflow.svg'

const Wrapper = styled.div`
    h1 {
        user-select: none;
        font-size: ${props => props.p(5)}px;

        img {
            max-height: ${props => props.p(5)}px;
            margin-right: 0.2em;
        }
    }

    p {
        margin: 0;
        padding: 0;
    }

    svg {
        max-height: ${props => props.p(10)}px;
    }
`

const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; 
`

const LogoWrapper = styled.div`
    width: ${props => props.p(12)}px;
    height: auto;
    margin: ${props => props.p(1)}px;
    display: flex;
    justify-content: center;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5%);
    }
`

const skillsArray=[
    {
        name: 'Javascript',
        component: <Javascript />
    },
    {
        name: 'Typescript',
        component: <Typescript />
    },
    {
        name: 'React',
        component: <ReactSVG />
    },
    // {
    //     name: 'Vue',
    //     component: <Vue />
    // },
    {
        name: 'Node',
        component: <Node />
    },
    {
        name: 'Sass',
        component: <Sass />
    },
    {
        name: 'UI',
        component: <Bootstrap />
    },
    // {
    //     name: 'Figma',
    //     component: <Figma />
    // },
    // {
    //     name: 'Python',
    //     component: <Python />
    // },
    {
        name: ';^)',
        component: <StackOverflow />
    },
]

export const SkillsFlat = ({ p }) => {

    return (
        <Wrapper className='col center' p={p}>
        <h1 className='row center'>
            <img 
            src={require('../assets/misc/hackercat.png')}
            alt='skills' 
            />
            My Skills
        </h1>
        <SkillsWrapper>
        {skillsArray.map((item, index) =>
            <div key={index}>
            <Tooltip
            content={item.name}
            background={theme.dark}
            color={theme.light}
            radius={5}
            border={'transparent'}
            fadeEasing='ease-in-out'
            fadeDuration={200}
            >
                <LogoWrapper p={p}>
                { React.cloneElement(item.component) }
                </LogoWrapper>
            </Tooltip>
            </div>
        )}
        </SkillsWrapper>
        </Wrapper>
    )
}

const Skills = ({ face }) => {
    
    const { p } = useDimensions()

    return (
        <CubeFace face={face}><SkillsFlat p={p} /></CubeFace>
    )
}

export default Skills