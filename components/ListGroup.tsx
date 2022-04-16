import React from 'react';
import styled from 'styled-components';

const ListGroupStyled = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
`;

function ListGroup(props: any) {
  return <ListGroupStyled {...props}></ListGroupStyled>;
}

ListGroup.propTypes = {};

export default ListGroup;
