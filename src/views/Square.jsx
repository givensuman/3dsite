import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Fade } from 'react-awesome-reveal'
import { useNavigate } from 'react-router-dom'

import theme from '../styles/theme'

import { HelloFlat } from '../components/Hello'
import { GithubFlat } from '../components/Github'
import { ProjectsFlat } from '../components/Projects'
import { SkillsFlat } from '../components/Skills'
import { ContactFlat } from '../components/Contact'

const Body = styled.div`
    width: 100%;
    overflow-x: hidden;
    margin-top: 5%;
    margin-bottom: 10%;
`

const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
`

const Component = styled.div`
    margin: 5% 0;
`

const Button = styled.button`
    position: absolute;
    top: 1%;
    right: 2%;
    background-color: transparent;
    border: 2px solid ${theme.light};
    border-radius: 0.25em;
    color: ${theme.light};
    padding: 0.5em;
    font-size: 0.8em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    z-index: 10;

    &:hover {
        background-color: ${theme.accent5};
    }
`

const Square = () => {

    const getLength = () => {
        if (window.innerHeight < window.innerWidth) return window.innerHeight
        else return window.innerWidth
    }

    const [length, setLength] = useState(getLength())

    useEffect(() => {
        const l = () => setLength(getLength)
        window.addEventListener('resize', l)
        return () => window.removeEventListener('resize', l)
    }, [])

    const p = percentage => 1.5 * length * (percentage/100)

    const navigate = useNavigate()

    const components = [
        <HelloFlat flat={true} />,
        <GithubFlat />,
        <ProjectsFlat />,
        <SkillsFlat />,
        <ContactFlat />
    ]

    return (
        <Body>
            <Wrapper className='col center'>
                <div style={{ height: 'fit-content', width: 'fit-content' }}>
                <Button onClick={() => navigate('/')}>View In 3D</Button>
                </div>
                {components.map((item, index) => 
                    <Fade direction={index%2 ? 'right' : 'left'}>
                        <Component>
                        {React.cloneElement(item, {
                            p: p
                        })}
                        </Component>
                    </Fade>
                    )}
            </Wrapper>
        </Body>
    )
}

export default Square