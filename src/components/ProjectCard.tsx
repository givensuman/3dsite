import clsx from "clsx"
import React from "react"

const ProjectCard: React.FC<React.HTMLAttributes<HTMLDivElement> & {
   name: string,
   description: string,
   screenshot: string,
   href: string,
   git: string
}> = ({   
   name,
   description,
   screenshot,
   href,
   git,

   children,
   className,
   ...props
}) => {
   return (
      <div 
         className={clsx(
            "mx-auto w-fit",
            className
         )}
         {...props}
      >
         <img
            src={screenshot}
            alt={name}
            className="h-64 w-96 object-fill rounded-md cursor-pointer"
         />
         {children}
      </div>
   )
}

export default ProjectCard