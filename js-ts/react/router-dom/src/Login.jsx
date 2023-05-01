import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate()

  function handleClick() {
    console.log('Login efetuado');
    navigate("/")
  }

  return (
    <div>
      <h1>Faça login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
