import React from 'react';

export const Button = (props) => {
  const {
    variant,
    href,
    className,
    children,
    ...rest
  } = props;

  const classes = ['button'];

  const Element = href ? 'a' : 'button';

  variant && classes.push(`button--${variant}`);

  return (
    <Element
      className={classes.join(' ')}
      href={href}
      {...rest}
    >
      {children}
    </Element>
  );
};

Button.defaultProps = {
  variant: 'default'
};

export default Button;
