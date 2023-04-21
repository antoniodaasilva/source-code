import { useState } from "react";

export function Select() {
  const [value, setValue] = useState('')

  return (
    <form>
      <select
        id="produtos"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      >
        <option value="" disabled></option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
    </form>
  );
}