import React from 'react';

export const Button = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = ['button'];

  variant && classes.push(`button--${variant}`);

  return (
    <button className={classes.join(' ')} {...rest}>{children}</button>
  );
};

Button.defaultProps = {
  variant: 'default'
};

export default Button;
