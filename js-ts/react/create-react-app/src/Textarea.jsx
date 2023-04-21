import { useState } from "react";

export function Textarea() {
  const [textarea, setTextarea] = useState("");
  return (
    <div>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
      />
    </div>
  );
}
