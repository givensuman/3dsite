import React, { useState, useEffect, useRef } from "react"

const characters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "\\", "<", ">", "?", "/",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]

const randomChar = () => {
    return characters[Math.floor(Math.random() * characters.length)]
}

const useTextEffect = (inputText: string) => {
    const [ text, setText ] = useState(inputText)
    const [ iterations, setIterations ] = useState(0)
    const [ speed, setSpeed ] = useState(1/3)

    const intervalRef = useRef<number | null>(null)

    const handleShuffleString = () => {
        const output = inputText.split("").map((char, index) => {
            if (index < iterations) {
                return char
            } else {
                return randomChar()
            }
        }).join("")

        setText(output.toUpperCase())
        setIterations(state => state + speed)
    }

    const resetShuffle = () => {
        setIterations(0)
        setSpeed(2)
    }

    useEffect(() => {
        intervalRef.current = setInterval(handleShuffleString, 50)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    })

    return [ text, resetShuffle ] as const
}

export default useTextEffect