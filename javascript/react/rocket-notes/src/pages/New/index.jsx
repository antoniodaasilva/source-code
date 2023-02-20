import { Container, Form } from "./styles";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Link } from "react-router-dom";


export function New() {
  return(
    <Container>
      <Header />
        <main>
          <Form>
            <header>
              <h1>Criar nota</h1>
              <Link to="/">Voltar</Link>
            </header>

            <Input placeholder="Título" />

            <Textarea placeholder="Observações" />
            <Section>
              <NoteItem 
                value="https://www.rocketseat.com.br/"
              />
              <NoteItem
                isNew
                value="https://www.rocketseat.com.br/"
              />
            </Section>

            <Section title="Marcadores">
              <div className="tags">
                <NoteItem value="React" />
                <NoteItem isNew value="Nova tag"/>
              </div>
            </Section>

            <Button title="Salvar" />
          </Form>
        </main>
    </Container>
  )
}