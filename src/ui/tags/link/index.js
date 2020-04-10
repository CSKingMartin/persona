import React from 'react';

export const Link = (props) => {
  const {
    href,
    className,
    children,
    ...rest
  } = props;

  const classes = ['link'];
  className && classes.push(className);

  return (
    <a className={classes.join(' ')} href={href} {...rest}>
      {children}
    </a>
  );
};

export default Link;
