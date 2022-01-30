import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import Tooltip from 'react-simple-tooltip'

import { useDimensions } from '../hooks/useConversion'
import theme from '../styles/theme'

import CubeFace from './CubeFace'

import { ReactComponent as ArrowRight } from '../assets/icons/arrow-right-solid.svg'
import { ReactComponent as CodeBranch } from '../assets/icons/code-branch-solid.svg'

const Wrapper = styled.div`
    #avatar {
        border-radius: 50%;
        height: ${props => props.p(20)}px;
        border: solid 2px ${theme.accent2};
    }

    #stats {
        width: ${props => props.p(50)}px;
        user-select: none;
    }

    #github {
        background-color: ${theme.dark};
        border: none;
        color: ${theme.light};
        margin: 0 1em;
        width: 100%;
        height: ${props => props.p(8)}px;
        border-radius: 0.5em;
        cursor: pointer;
        padding: 0 0.4em;
        transition: background-color 0.4s, box-shadow 0.3s;
        font-size: ${props => props.p(1.6)}px;
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

        span {
            margin: 0 2%;
        }
    }
`

const Github = ({ face }) => {

    const { p } = useDimensions()

    const iconProps = {
        maxHeight: p(2.8),
        margin: '0 0.3em',
        color: theme.light
    }

    return (
        <CubeFace face={face}>
            <Wrapper p={p}>
            <div className='row left'>
                <Tooltip
                content="Isn't he dreamy?"
                background={theme.dark}
                color={theme.light}
                radius={5}
                border={'transparent'}
                fadeEasing='ease-in-out'
                fadeDuration={200}
                >
                <img
                id='avatar'
                src={require('../assets/misc/github_profile.png')}
                alt='profile'
                />
                </Tooltip>
                <a
                id='github'
                href='https://www.github.com/givensuman' 
                className='row center'
                >
                    <CodeBranch style={iconProps} />
                    <span>Check out my GitHub</span>
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