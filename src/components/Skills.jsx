import React from 'react'
import styled from '@emotion/styled'
import ReactTooltip from 'react-tooltip'

import { useDimensions } from '../views/Cube'
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
        font-size: ${props => props.side/20}px;

        img {
            max-height: ${props => props.side/20}px;
            margin-right: 0.2em;
        }
    }

    p {
        margin: 0;
        padding: 0;
    }

    svg {
        max-height: ${props => props.side/10}px;
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
    max-width: ${props => props.side/10}px;
    height: auto;
    margin: ${props => props.side/100}px;
    display: flex;
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
    {
        name: 'Vue',
        component: <Vue />
    },
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
    {
        name: 'Figma',
        component: <Figma />
    },
    {
        name: 'Python',
        component: <Python />
    },
    {
        name: ';^)',
        component: <StackOverflow />
    },
]

const Skills = ({ face }) => {

    const side = useDimensions()

    return (
        <CubeFace face={face}>
            <Wrapper className='col center' side={side}>
            <h1 className='row center'>
                <img 
                src={require('../assets/misc/hackercat.png')}
                alt='skills' 
                />
                My Skills
            </h1>
            <SkillsWrapper onLoad={() => ReactTooltip.reload()}>
            {skillsArray.map((item, index) =>
                <div key={index}>
                    <LogoWrapper
                    data-tip={item.name}
                    side={side}
                    >
                    { React.cloneElement(item.component) }
                    </LogoWrapper>
                    <ReactTooltip                 
                    backgroundColor={theme.dark}
                    textColor={theme.light}
                    style={{
                        zIndex: 2
                    }}
                    />
                </div>
            )}
            </SkillsWrapper>
            </Wrapper>
        </CubeFace>
    )
}

export default Skills