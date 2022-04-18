import React from 'react';
import styled from 'styled-components';

const CardFooterStyled = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  background-color: #fafafa;
`;

function CardFooter(props: React.HTMLAttributes<HTMLDivElement>) {
  return <CardFooterStyled {...props}></CardFooterStyled>;
}

CardFooter.propTypes = {};

export default CardFooter;
