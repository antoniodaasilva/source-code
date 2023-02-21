import { InputContainer } from "./styles";

export function Input({name, placeholder, onChange, type}) {
  return(
    <InputContainer
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  )
}