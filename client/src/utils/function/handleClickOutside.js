export const ClickOutSide = (ref, useEffect, func) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref[0].current && !ref[0].current.contains(event.target)) {
        if (ref.length === 2) {
          if (!ref[1].current.contains(event.target)) {
            func()
          }
        } else {
          func()
        }
        
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref[0]]);
} 