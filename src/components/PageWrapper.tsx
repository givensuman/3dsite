import React from "react"
import { motion } from "framer-motion"
import clsx from 'clsx';

const PageWrapper: React.FC<React.HTMLAttributes<React.AnimationEventHandler<HTMLDivElement>> & {
    animationKey: React.Key
}> = React.forwardRef(({
    animationKey,
    children,
    className,
    ...props
}) => {
    return (
        <motion.div
            key={animationKey}
            initial={{ x: 3000 }}
            animate={{ x: 0 }}
            exit={{ x: -3000 }}
            className={clsx(
                "relative w-screen min-h-screen flex flex-col",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    )
})

export default PageWrapper