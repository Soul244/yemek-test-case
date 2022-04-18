import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hasShadowAnimation?: boolean;
}

const CardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  ${(props: CardProps) => {
    if (props.hasShadowAnimation) {
      return css`
        &:hover {
          box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
          transition: box-shadow 0.3s ease-in-out;
        }
      `;
    }
  }};
`;
function Card({ hasShadowAnimation, ...props }: CardProps) {
  return (
    <CardStyled hasShadowAnimation={hasShadowAnimation} {...props}></CardStyled>
  );
}

Card.defaultProps = {
  hasShadowAnimation: false,
};

Card.propTypes = {
  hasShadowAnimation: PropTypes.bool,
};

export default Card;
