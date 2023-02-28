import React from "react"
import { Link as RouterLink } from "react-router-dom"
import clsx from "clsx"

import useTextEffect from '../hooks/useTextEffect';

const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: string,
    href: string,
    active?: boolean,
}> = ({
    children,
    href,
    active,
    className,
    ...props
}) => {

    const [ text, shuffle ] = useTextEffect(children)

    return (
        <RouterLink 
            to={href}
            className={clsx(
                "text-white text-4xl my-2 hover:text-yellow-500",
                {
                    'text-blue-500 pointer-events-none': active
                },
                className
            )}
            onPointerEnter={shuffle}
            {...props}
        >
            {text}
        </RouterLink>
    )
}

export default Link