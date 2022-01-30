import React, { useState, useRef, useEffect } from "react"
import styled from '@emotion/styled'
import { useInterval } from "../hooks/useInterval"

import theme from '../styles/theme'

import { ReactComponent as Close } from '../assets/icons/close.svg'

const Wrapper = styled.div`
    border-top: 5px ${theme.accent6};
    background-color: ${theme.background};
    position: relative;
    left: 30%;
    top: 20%;
    width: ${props => props.width};
    height: ${props => props.height};

    &:focus {
        outline: none;
    }

    #game-over {
        font-size: 3%;
        position: absolute;
        top: 40%;
        width: 100%;
    }
`

const Title = styled.div`
    font-size: 7px;
    background-color: ${theme.dark};
    position: absolute;
    top: -7.5%;
    height: 5%;
    border-radius: 0.2em 0.2em 0 0;
    padding: 2px;
    width: 97.5%;

    svg {
        max-height: 90%;
        margin-right: 2%;
        margin-left: auto;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
            color: red;
        }
    }
`

const Canvas = styled.canvas`
    background-color: ${theme.background};
    z-index: 2;
    max-height: 100%;
    max-width: 100%;
`

const CANVAS_SIZE = [150, 150]
const SNAKE_START = [
  [8, 7],
  [8, 8]
]
const APPLE_START = [8, 3]
const SCALE = 10
const SPEED = 100
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
}

const Snake = ({ close }) => {
  const canvasRef = useRef()
  const [snake, setSnake] = useState(SNAKE_START)
  const [apple, setApple] = useState(APPLE_START)
  const [dir, setDir] = useState([0, -1])
  const [speed, setSpeed] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  useInterval(() => gameLoop(), speed)

  const endGame = () => {
    setSpeed(null)
    setGameOver(true)
  }

  const moveSnake = ({ keyCode }) => {
    if (gameOver === false) {
        keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode])
    }
    else {
        startGame()
    }
  }
  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)))

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true
    }
    return false
  }

  const checkAppleCollision = newSnake => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple()
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple()
      }
      setApple(newApple)
      return true
    }
    return false
  }

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake))
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]]
    snakeCopy.unshift(newSnakeHead)
    if (checkCollision(newSnakeHead)) endGame()
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop()
    setSnake(snakeCopy)
  }

  const startGame = () => {
    setSnake(SNAKE_START)
    setApple(APPLE_START)
    setDir([0, -1])
    setSpeed(SPEED)
    setGameOver(false)
  }

  useEffect(() => {
    const context = canvasRef.current.getContext("2d")
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0)
    context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    context.fillStyle = theme.accent2
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1))
    context.fillStyle = theme.accent1
    context.fillRect(apple[0], apple[1], 1, 1)
  }, [snake, apple, gameOver])

  useEffect(() => {
      startGame()
      canvasRef.current.autoFocus = true
  }, [])

  return (
      <Wrapper 
      role="button" 
      tabIndex="0" 
      onKeyDown={e => moveSnake(e)}
      width={`${CANVAS_SIZE[0]}px`}
      height={`${CANVAS_SIZE[1]}px`}
      >
        <Title className='row center'>
          Snake
          <Close onClick={() => close()} />
        </Title>
      <Canvas
        ref={canvasRef}
        autoFocus
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && 
        <div id='game-over' className='col center'>
            <h3>Game Over!</h3>
            <span
            style={{ textIndent: '0.2em' }}
            >Press any key to continue...</span>
        </div>}
      </Wrapper>
  )
}

export default Snake