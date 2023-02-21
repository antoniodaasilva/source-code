import styled from "styled-components";

export const ButtonContainer = styled.button`
    color: #fff;
    font-size: 20px;
    border: 30px;
    background: #6a6a6a;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;

    ${props => props.disabled === false && `
      &:hover {
        background: #fff;
        color: #6a6a6a;
      }
    `} 

    ${props => props.disabled && `
    opacity: 0.7
  `}
`