import React from 'react';

export const Heading = (props) => {
  const {
    element,
    variant,
    weight,
    className,
    children,
    ...rest
  } = props;

  const classes = [
    'heading',
    `heading--${element}`,
    `heading--${variant}`
  ];

  weight && classes.push(`heading--${weight}`);

  const El = element;

  return (
    <El className={classes.join(' ')} {...rest}>
      {children}
    </El>
  );
};

Heading.defaultProps = {
  element: 'h1'
};

export default Heading;
