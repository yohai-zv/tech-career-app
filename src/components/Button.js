import React from 'react';
import styled from 'styled-components';
import '../index.css';

export const GeneralButton = styled.button`
  padding: 10px 45px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  /* box-shadow: 1px 1px 15px lightgray; */
  background-color: ${(props) => props.color};
  transition: opacity 0.3s, transform 0.3s;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
    transform: scale(0.9);
  }
`;
const Button = ({ children, color }) => {
  return <GeneralButton color={color}>{children}</GeneralButton>;
};

export default Button;
