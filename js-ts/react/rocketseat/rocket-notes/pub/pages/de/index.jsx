import { Container, Links, Content } from "./styles"
import { Tag } from "../../../components/Tag";
import { Button } from '../../../components/Button';
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { ButtonText } from '../../../components/ButtonText';


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h2>Introdução ao React</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat dignissimos iure omnis deserunt, illo officiis et fuga magni laboriosam sapiente blanditiis eum adipisci obcaecati temporibus rerum veniam nisi voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore vel sequi. Voluptatum in doloribus, ab dolorem velit asperiores minus ea error dolores, eum alias dignissimos rem perferendis ipsam expedita?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}