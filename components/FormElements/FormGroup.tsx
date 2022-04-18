import React from 'react';
import styled from 'styled-components';

const FormGroupStyled = styled.div`
  display: block;
  margin-bottom: 0.5rem;
`;

function FormGroup(props: React.HTMLAttributes<HTMLDivElement>) {
  return <FormGroupStyled {...props}></FormGroupStyled>;
}

FormGroup.propTypes = {};

export default FormGroup;
