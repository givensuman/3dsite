import React from "react"
import { motion } from "framer-motion"
import clsx from 'clsx';

const PageWrapper: React.FC<React.HTMLAttributes<HTMLDivElement> & {
    animationKey: React.Key
}> = ({
    animationKey,
    children,
    className,
    ...props
}) => {
    return (
        <motion.div
            key={animationKey}
            initial={{ x:"100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
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