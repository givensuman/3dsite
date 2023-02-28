import React, { useRef } from "react"
import clsx from "clsx"

import useMousePosition from "../hooks/useMousePosition"
import useEventListener from "../hooks/useEventListener"

const MouseFollow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    ...props
}) => {

    const mousePosition = useMousePosition()

    const cursorRef = useRef<HTMLDivElement>(null)

    useEventListener("pointermove", () => {
        if (cursorRef && cursorRef.current) {
            cursorRef.current.animate({
                top: `${mousePosition.y}px`,
                left: `${mousePosition.x}px`
            }, {
                duration: 3000,
                fill: "forwards"
            })
        }
    })

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div
                className={clsx(
                    "bg-white absolute aspect-square rounded-full bg-gradient-to-r from-cyan-900 to-blue-900 animate-swell h-1/4",
                    className
                )}
                style={{
                    translate: "-50% -50%",
                    top: mousePosition.y,
                    left: mousePosition.x
                }}
                ref={cursorRef}
                {...props}
            />
            <div className="w-full h-full backdrop-blur-3xl" />
        </div>
    )
}

export default MouseFollow