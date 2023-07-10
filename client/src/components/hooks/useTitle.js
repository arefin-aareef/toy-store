import { useEffect } from "react"

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Pyrates Toy | ${title}`; 
  }, [title])
}

export default useTitle;