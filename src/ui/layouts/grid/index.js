import React from 'react';

export const Grid = (props) => {
  const {
    col,
    className,
    children,
    ...rest
  } = props;

  const classVariants = className ? `grid--${col}-col ${className}` : `grid--${col}-col`;

  return (
    <div className={`grid ${classVariants}`} {...rest}>
      {children}
    </div>
  );
};

Grid.defaultProps = {
  col: '2'
};

export default Grid;
