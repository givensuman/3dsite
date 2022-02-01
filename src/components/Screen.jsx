import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Html } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'

import { useDimensions } from '../hooks/useConversion'
import { useInterval } from '../hooks/useInterval'
import theme from '../styles/theme'

import { ReactComponent as Close } from '../assets/icons/close.svg'
import desktopBackground from '../assets/misc/desktopbackground.png'

import Typing from './Typing'
import Snake from './Snake'

const Wrapper = styled.div`
    height: ${props => props.p(23)}px;
    width: ${props => props.p(35)}px;
    border-radius: 0.2em;
    overflow: hidden;
`

const Editor = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${theme.dark};
`

const Navbar = styled.div`
    background-color: ${theme.accent5};
    width: 100%;
    height: 5%;
    margin-bottom: auto;
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 0.2em 0;

    span {
        margin-right: auto;
        font-size: 50%;
        margin-left: 2%;
        opacity: 0.8;
    }

    svg {
        max-height: 90%;
        margin-right: 2%;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
            color: red;
        }
    }
`

const Desktop = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    background-image: url(${desktopBackground});
    object-fit: cover;
    overflow: hidden;

    img {
        max-height: 15px;
        padding: 3px;
        position: absolute;
        left: 5px;
        transition: background-color 0.2s;
        &:hover {
            background-color: ${theme.accent6};
            opacity: 0.9;
        }
    }

    #vscode {
        top: 10px;
    }

    #snake {
        top: 35px;
    }

    #time {
        background-color: ${theme.dark};
        font-size: ${props => props.p(2)}px;
        display: flex;
        justify-content: flex-end;
        position: fixed;
        bottom: 0;
        width: 100%;
        
        span {
            margin-right: 2%;
        }
    }

    #todo {
        background-color: ${theme.light};
        opacity: 0.8;
        color: ${theme.dark};
        height: 35%;
        width: 25%;
        font-size: 5%;
        display: flex;
        justify-content: flex-start;
        border-top: 5px solid ${theme.dark};
        position: absolute;
        bottom: 30%;
        right: 20%;
        border-radius: 0.5em;
        padding: 0 2px 5px;
        overflow: hidden;

        h3 {
            padding: 2%;
        }
    }
`

const List = styled.ul`
    padding: 2%;
    list-style-type: none;
    font-size: inherit;

    li {
        margin-bottom: 3em;
    }
`

const Screen = () => {

    const { u, p } = useDimensions()
    const [showDesktop, setShowDesktop] = useState(false)
    const [showSnake, setShowSnake] = useState(false)
    const [time, setTime] = useState('0:00')
    
    const getTime = () => {
        let time = new Date().toTimeString().substr(0, 5)
        setTime(time)
    }
    useEffect(() => getTime(), [])
    useInterval(getTime, 60000)

    return (
        <Html 
        transform 
        occlude
        position={[0, u(170), -u(119)]}
        rotation={[-0.2, 0, 0]}
        >
        <Wrapper p={p}> 
            <AnimatePresence>
                {!showDesktop && 
                <motion.div
                key='Editor-component'
                style={{ height: '100%' }}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ opacity: 0 }}
                >
                <Editor visible={!showDesktop}>
                    <Navbar>
                        <span>App.js</span>
                        <Close onClick={() => setShowDesktop(true)} />
                    </Navbar>
                    <Typing />
                </Editor>
                </motion.div>}     
            </AnimatePresence>
            <AnimatePresence>
            {showDesktop && 
            <motion.div
            key='Desktop-component'
            style={{ height: '100%' }}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            >
            <Desktop p={p}>
                <div id='time' className='row'>
                    <span>{time}</span>
                </div>
                <div id='todo' className='col'>
                    <h3>TODO:</h3>
                    <List p={p}>
                        <li>Put vanilla pudding in mayo jar. Eat in public.</li>
                        <li>Hire two private investigators. Task them to follow each other.</li>
                        <li>Ask someone what year it is, then yell out "It worked!"</li>
                    </List>
                </div>
                <img 
                id='vscode'
                onDoubleClick={() => {
                    setShowDesktop(false)
                    setShowSnake(false)
                }}
                src={require('../assets/icons/vscode.png')} alt='vscode' 
                />
                <img 
                id='snake'
                onDoubleClick={() => setShowSnake(true)}
                src={require('../assets/icons/snake.png')}
                alt='snake' 
                />
                <AnimatePresence>
                {showSnake && 
                <motion.div      
                key='Snake-component'      
                style={{ height: '100%' }}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                >
                    <Snake close={() => setShowSnake(false)} />
                </motion.div>
                }
                </AnimatePresence>
            </Desktop>
            </motion.div>}
            </AnimatePresence>
        </Wrapper>
        </Html>
    )
}

export default Screen