import React from "react"
import clsx from "clsx"

const Waves: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx(className)} {...props}>
      <div
        className="relative"
        style={{
          top: "10vw",
        }}
      >
        <div className="absolute bottom-0 w-full -z-10 md:-bottom-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#273036"
              fill-opacity="1"
              d="M0,64L40,74.7C80,85,160,107,240,101.3C320,96,400,64,480,69.3C560,75,640,117,720,133.3C800,149,880,139,960,154.7C1040,171,1120,213,1200,208C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-4 md:bottom-10 w-full -z-20 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#37444D"
              fill-opacity="1"
              d="M0,192L40,186.7C80,181,160,171,240,160C320,149,400,139,480,144C560,149,640,171,720,165.3C800,160,880,128,960,138.7C1040,149,1120,203,1200,202.7C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-8 md:bottom-20 w-full -z-30">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#4D5F6B"
              fill-opacity="1"
              d="M0,96L40,122.7C80,149,160,203,240,208C320,213,400,171,480,138.7C560,107,640,85,720,90.7C800,96,880,128,960,138.7C1040,149,1120,139,1200,160C1280,181,1360,235,1400,261.3L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Waves
