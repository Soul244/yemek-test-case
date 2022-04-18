import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Loading(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <LoadingContainer {...props}>
      <FontAwesomeIcon icon='spinner' size='5x' spin />
    </LoadingContainer>
  );
}

Loading.propTypes = {};

export default Loading;
