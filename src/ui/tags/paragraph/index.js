import React from 'react';

export const Paragraph = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = [
    'paragraph'
  ];

  return (
    <p className={classes.join(' ')} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
