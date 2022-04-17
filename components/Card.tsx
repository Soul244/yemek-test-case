import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
`;

function Card(props: any) {
  return <CardStyled {...props}></CardStyled>;
}

Card.propTypes = {};

export default Card;
