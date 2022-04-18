import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  @media (min-width: 576px) {
    width: 85%;
  }
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 992px) {
    width: 70%;
  }
`;

function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  return <ContainerStyled {...props}></ContainerStyled>;
}

Container.propTypes = {};

export default Container;
