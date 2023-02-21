import { useState } from "react";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Container, Form } from "./styles";
import { validarEmail, validarSenha } from "../../Utils/validadores";
import { UserServices } from "../../Services/UserService";
import { NavLink, useNavigate } from "react-router-dom";

const userServices = new UserServices;

export function Login() {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      const response = await userServices.login(form)
      if (response === true) {
        alert('Logado com sucesso')
        navigate('/home')
      }
      setLoading(false)
    } catch (error) {
      alert('Algo deu errado' + error)
    }
  }

  function handleChange (event){
    setForm({...form, [event.target.name]: event.target.value})
  }

  const handleInput = () => {
    return validarEmail(form.email) && validarSenha(form.password)
  }

  return (
    <Container>
      <Form>
        <h1>Faça o sue login</h1>
        <Input 
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={handleChange}
          type="email"
        />
        <Input 
          name="password"
          placeholder="Digite a sua senha"
          onChange={handleChange}
          type="password"
        />
        <Button 
          type="submit"
          text="Entrar"
          onClick={handleSubmit}
          disabled={loading === true || !handleInput() }
        />
        <div>
          <p>Não possui conta ?</p>
          <a href="#">Cadastrar</a>
        </div>
      </Form>
    </Container>
  )
}
