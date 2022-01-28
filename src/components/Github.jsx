import React from 'react'
import styled from '@emotion/styled'
import ReactTooltip from 'react-tooltip'

import { useDimensions } from '../views/Cube'
import theme from '../styles/theme'

import CubeFace from './CubeFace'

import { ReactComponent as ArrowRight } from '../assets/icons/arrow-right-solid.svg'
import { ReactComponent as CodeBranch } from '../assets/icons/code-branch-solid.svg'

const Wrapper = styled.div`
    #avatar {
        border-radius: 50%;
        height: ${props => props.side/5}px;
        border: solid 2px ${theme.accent2};
    }

    #stats {
        width: ${props => props.side/2}px;=
        user-select: none;
    }

    #github {
        background-color: ${theme.dark};
        border: none;
        color: ${theme.light};
        margin: 0 1em;
        width: 100%;
        height: ${props => props.side/10}px;
        border-radius: 0.5em;
        cursor: pointer;
        padding: 0 0.4em;
        transition: background-color 0.4s, box-shadow 0.3s;
        font-size: ${props => props.side/58}px;
        text-decoration: none;
        background-position: left;
        background-size: 200% 200%;
        transition: box-shadow 0.4s, background-position 0.5s ease-out;

        &:hover {
            background-image: linear-gradient(90deg,
                ${theme.dark},
                ${theme.dark},
                ${theme.accent5}
            );
            background-position: right;
            box-shadow: 2px 2px 10px ${theme.dark};
        }
    }
`

const Github = ({ face }) => {

    const side = useDimensions()

    const iconProps = {
        maxHeight: side/40,
        margin: '0 0.3em',
        color: theme.light
    }

    return (
        <CubeFace face={face}>
            <Wrapper side={side}>
            <div className='row left'>
                <img
                id='avatar'
                src={require('../assets/misc/github_profile.png')}
                alt='profile'
                data-for='avatar-tooltip'
                onLoad={() => ReactTooltip.rebuild()}
                />
                <ReactTooltip
                id='avatar-tooltip'
                solid
                backgroundColor={theme.dark}
                textColor={theme.light}
                style={{
                    zIndex: 2
                }}
                >Isn't he dreamy?</ReactTooltip>
                <a
                id='github'
                href='https://www.github.com/givensuman' 
                className='row center'
                >
                    <CodeBranch style={iconProps} />
                    Check out my GitHub
                    <ArrowRight style={iconProps} />
                </a>
            </div>
            <img
            id='stats'
            src={require('../assets/misc/language_stats.png')}
            alt='language stats'
            />
            </Wrapper>
        </CubeFace>
    )
}

export default Github