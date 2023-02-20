import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;

  background: ${({theme}) => theme.COLORS.BACKGROUND_900};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_300};;
  }
`;
