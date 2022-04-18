import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 0.25rem;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  font-size: 1rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:not(:disabled) {
    cursor: pointer;
  }
  &:hover{
    background-color: ${props => props.theme.colors.primaryHover};
    border-color: ${props => props.theme.colors.primaryHover};
  }
`;

function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return <ButtonStyled {...props}></ButtonStyled>;
}

Button.propTypes = {};

export default Button;
