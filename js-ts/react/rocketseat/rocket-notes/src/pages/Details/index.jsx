import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { Container, Links } from "./styles";

export function Details() {
  return(
    <Container>
      <Header/>

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Links>
          <Tags title="React"/>
          <Tags title="Express" />
        </Links>
      </Section>

      <Button 
        title="Voltar"
        loading
      />
    </Container>
  )
}