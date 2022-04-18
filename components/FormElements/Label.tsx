import React from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  display: block;
  margin-bottom: 0.25rem;
`;

function Label(props: React.HTMLAttributes<HTMLLabelElement>) {
  return <LabelStyled {...props}></LabelStyled>;
}

Label.propTypes = {};

export default Label;
