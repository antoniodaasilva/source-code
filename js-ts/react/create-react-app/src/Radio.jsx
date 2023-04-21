import { useState } from "react";

export function Radio() {
  const [value, setValue] = useState("")

  function handleChange({target}) {
    setValue(target.value)
  }

  return (
    <form>
      {value}
        <br />
      <label>
        <input
          type="radio"
          name="produtos"
          id="produtos"
          value="notebook"
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          name="produtos"
          id="produtos"
          value="tablet"
          onChange={handleChange}
        />
        Tablet
      </label>
    </form>
  );
}
