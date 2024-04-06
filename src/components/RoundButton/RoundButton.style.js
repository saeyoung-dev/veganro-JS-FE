import styled from 'styled-components';

export const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: solid 1px ${(props) => props.theme.color.gray[300]};
  background: ${(props) => props.theme.color.white};
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
  transition: all 0.2s ease-in;
  box-sizing: border-box;
  outline: none;
  &:hover,
  &:focus {
    border: none;
    background: ${(props) => props.theme.color.green[500]};
    box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.2);
  }
`;
