import React, { useState, useEffect } from "react"

const useEventListener = <T extends HTMLElement | MediaQueryList>(
  type: keyof DocumentEventMap,
  callback: () => void,
  ref?: React.RefObject<T>
) => {
  const [isTargetingRef, setIsTargetingRef] = useState(false)

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener(type, callback)
      setIsTargetingRef(true)
    } else {
      window.addEventListener(type, callback)
      setIsTargetingRef(false)
    }

    return () => {
      if (isTargetingRef && ref && ref.current) {
        ref.current.removeEventListener(type, callback)
      } else if (!isTargetingRef) {
        window.removeEventListener(type, callback)
      } else {
        console.error(
          "Invalid event listener stack. useEventListener() may be leaking out of your application state!"
        )
      }
    }
  }, [type, callback, ref])
}

export default useEventListener
