import React from 'react';

export const Grid = (props) => {
  const {
    col,
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = ['grid'];
  classes.push(`grid--${col}-col`);

  variant && classes.push(`grid--${variant}`);

  return (
    <div className={classes.join(' ')} {...rest}>
      {children}
    </div>
  );
};

Grid.defaultProps = {
  col: '2'
};

export default Grid;
