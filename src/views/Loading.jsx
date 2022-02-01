import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'

import theme from '../styles/theme'
import { useStore } from '@react-three/fiber'

import Name from '../components/Name'

const randomBackground = () => {
    const options = [
        theme.accent1,
        theme.accent3,
        theme.accent6
    ]

    return options[Math.floor(Math.random() * options.length)]
}
const Wrapper = styled(motion.div)`
    background-color: ${props => props.color};
    color: ${theme.accent5};
    height: 100vh;
    width: 100%;
    font-size: 3rem;
    font-weight: bold;
    z-index: 2;
`

const LoaderHolder = styled.div`
    border: solid 3px ${theme.accent5};
    width: 100%;
    height: 0.5em;
    margin: 0.3em;
    border-radius: 0.2em;
`

const LoaderBar = styled.div`
    background-color: ${theme.background};
    width: ${props => props.progress}%;
    height: 100%;
    transition: width 0.7s;
`

const Warning = styled.div`
    font-size: 1.5rem;
    max-width: 80%;
    padding: 0 15px 0;

    button {
        margin-top: 5%;
        padding: 1em;
        border-radius: 0.5em;
        border: none;
        background-color: ${theme.background};
        color: ${theme.light};
        font-size: 75%;
        transition: opacity 0.3s;
        transition-delay: 0.5s;

        &:disabled {
            opacity: 0.3;
        }

        &:nth-child(2) {
            background-color: ${theme.dark};
        }
    }
`

const Loading = ({ progress, loading, mobile, setLoading }) => {
    const [color, setColor] = useState(theme.accent1)
    useEffect(() => {
        setColor(randomBackground())
    }, [])

    return (
    <AnimatePresence>
        {loading && <Wrapper 
        className='col center' 
        color={color}
        key='Loading-component'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            <div className='col center'>
            <Name>Loading</Name>
            <LoaderHolder>
                <LoaderBar progress={progress} />
            </LoaderHolder>
            </div>
            {mobile && 
            <Warning className='col center'>
                It looks like you're on a mobile device.
                This webpage renders in 3D, and mobile users may experience poor performance.
                <button
                disabled={progress < 100}
                onClick={() => setLoading(false)}
                >
                    Continue
                    {/* Continue in 3D */}
                </button>
                {/* <button>
                    Go to mobile-friendly version
                </button> */}
            </Warning>
            }
        </Wrapper>
        }
    </AnimatePresence>
    )
}

export default Loading