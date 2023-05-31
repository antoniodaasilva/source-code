import { styled } from "../../styles";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

const Button = styled("button", {
  backgroundColor: "$green500",
});

export default function Product() {
  <ProductContainer>
    <ImageContainer>

    </ImageContainer>

    <ProductDetails>
      <h1>Camiseta</h1>
      <span>R$ 79,98</span>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam omnis maxime, obcaecati nobis autem perspiciatis quod totam laboriosam unde recusandae. Consequatur vero cum ipsum totam eum cumque illum saepe?
      </p>

      <button>
        Compra agora
      </button>

    </ProductDetails>
  </ProductContainer>
}
