import { useState } from "react";

export function Checkbox() {
  const [termos, setTermos] = useState(false);
  const [cores, setCores] = useState([])

  function handleChange({ target }) {
    setTermos(target.checked);
  }

  function handleColors({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
    console.log(setCores);
  }

  function checkCor(cor) {
    return cores.includes(cor)
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={checkCor('azul')}
          onChange={handleColors}
        />
        Azul
      </label>

      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={checkCor('amarelo')}
          onChange={handleColors}
        />
        Amarelo
      </label>

      <label>
        <input
          type="checkbox"
          name="termos"
          id="termos"
          value="termos"
          checked={termos}
          onChange={handleChange}
        />
        Aceito os termos
      </label>
    </form>
  );
}
