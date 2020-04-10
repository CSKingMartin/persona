import React from 'react';

export const GlobalFooter = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classes = ['global-footer'];
  className && classes.push(className);

  return (
    <div className={classes.join(' ')} {...rest}>
      {children}
    </div>
  );
};

export default GlobalFooter;
