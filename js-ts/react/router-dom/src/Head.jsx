import { useEffect } from "react"

export function Head(props) {
  useEffect(() => {
    console.log(props);
    document.title = props.title
  }, [props])

  return <></>
}