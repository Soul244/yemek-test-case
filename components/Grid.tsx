import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

type GridProps = {
  columnGap?: string;
  rowGap?: string;
  children?: any;
  gridTemplateColumns: string[];
};

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: ${(props: GridProps) => props.gridTemplateColumns[0]};
  column-gap: ${(props: GridProps) => props.columnGap};
  row-gap: ${(props: GridProps) => props.rowGap};
  @media (min-width: 576px) {
    grid-template-columns: ${(props: GridProps) => props.gridTemplateColumns[1]};
  }
  @media (min-width: 768px) {
    grid-template-columns: ${(props: GridProps) => props.gridTemplateColumns[2]};
  }
  @media (min-width: 992px) {
    grid-template-columns: ${(props: GridProps) => props.gridTemplateColumns[3]};
  }
`;

function Grid({ columnGap, rowGap, gridTemplateColumns, children, ...rest }: GridProps) {
  return <GridStyled columnGap={columnGap} rowGap={rowGap} gridTemplateColumns={gridTemplateColumns} {...rest}>{children}</GridStyled>;
}

Grid.defaultProps = {
  columnGap: '1rem',
  rowGap: '1rem',
}

Grid.propTypes = {
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  children: PropTypes.node,
  gridTemplateColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Grid;
