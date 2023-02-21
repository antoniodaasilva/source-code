import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignUp() {
  return(
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>
          Aplicação para salvar e gerenciar seus links úteis.
        </p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />

        <Input
          placeholder="E-mail"
          type="password"
          icon={FiLock}
        />

        <Button 
          title="Cadastrar"
        />

        <a href="#">
          Voltar pra o login
        </a>
      </Form>

    </Container>
  )
}