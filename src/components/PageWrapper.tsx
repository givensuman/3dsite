import React from "react"
import { motion } from "framer-motion"
import clsx from 'clsx';

const PageWrapper: React.FC<React.HTMLAttributes<HTMLDivElement> & {
    animationKey: React.Key,
    animate?: boolean
}> = ({
    animationKey,
    children,
    className,
    animate = true,
    ...props
}) => {
    return (
        <motion.div
            key={animationKey}
            initial={animate && { y:"100vh" }}
            animate={animate && { y: 0 }}
            exit={{ y: "-100vh" }}
        >
            <div
                className={clsx(
                    "relative w-screen min-h-screen flex flex-col",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </motion.div>
    )
}

export default PageWrapper