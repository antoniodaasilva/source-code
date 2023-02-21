import { ButtonContainer } from "./styles";

export function Button({type, text, onClick, disabled}) {
  return(
    <ButtonContainer 
      type={type}
      text={text}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonContainer>
  )
}