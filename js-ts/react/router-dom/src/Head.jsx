import { useEffect } from "react";

export function Head(props) {
  useEffect(() => {
    console.log(props);
    document.title = 'Dogs | ' + props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);
  }, []);

  return <></>;
}
