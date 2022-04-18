import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'success' | 'error' | 'warning';
}

const AlertStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  ${(props: AlertProps) => {
    switch (props.type) {
      case 'success':
        return css`
          color: #0f5132;
          background-color: #d1e7dd;
          border-color: #badbcc;
        `;
      case 'error':
        return css`
          color: #842029;
          background-color: #f8d7da;
          border-color: #f5c2c7;
        `;
      default:
        return css`
          color: #664d03;
          background-color: #fff3cd;
          border-color: #ffecb5;
        `;
    }
  }}
`;

function Alert({ type, children, ...rest }: AlertProps) {
  const Icon = () => {
    switch (type) {
      case 'success':
        return <FontAwesomeIcon icon='check' color='#0f5132' style={{ marginRight: "0.5rem" }}/>;
      case 'error':
        return <FontAwesomeIcon icon='times' color='#842029' style={{ marginRight: "0.5rem" }}/>;
      default:
        return <FontAwesomeIcon icon='exclamation-triangle' color='#664d03' style={{ marginRight: "0.5rem" }}/>;
    }
  };
  return (
    <AlertStyled type={type} {...rest}>
      <Icon />
      {children}
    </AlertStyled>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning']),
  children: PropTypes.node,
};

export default Alert;
