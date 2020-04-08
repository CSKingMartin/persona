import React from 'react';

export const Pageshell = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classes = ['pageshell', 'has-rhythm--page'];
  className && classes.push(className);

  return (
    <div className={classes.join(' ')} {...rest}>
      {children}
    </div>
  );
};

export default Pageshell;
