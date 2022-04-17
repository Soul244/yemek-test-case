import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

type ContainerProps = {
  children?: any;
};

const ContainerStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  @media (min-width: 576px) {
    width: 85%;
    padding: 0;
  }
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 992px) {
    width: 70%;
  }
`;

function Container({ children, ...rest }: ContainerProps) {
  return <ContainerStyled {...rest}>{children}</ContainerStyled>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
