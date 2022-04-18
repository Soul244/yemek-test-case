import React from 'react';
import styled from 'styled-components';

const CardBodyStyled = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
  height: 100%;
`;

function CardBody(props: React.HTMLAttributes<HTMLDivElement>) {
  return <CardBodyStyled {...props}></CardBodyStyled>;
}

CardBody.propTypes = {};

export default CardBody;
