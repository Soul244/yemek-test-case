import React from 'react';
import styled from 'styled-components';

const ListGroupItemStyled = styled.div`
  padding: 1rem;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
`;

function ListGroupItem(props: any) {
  return <ListGroupItemStyled {...props}></ListGroupItemStyled>;
}

ListGroupItem.propTypes = {};

export default ListGroupItem;
