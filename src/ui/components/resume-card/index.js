import React from 'react';

export const ResumeCard = (props) => {
  const {
    variant,
    bkg,
    href,
    className,
    children,
    ...rest
  } = props;

  const classes = ['resume-card'];
  className && classes.push(className);
  variant && classes.push(`resume-card--${variant}`);

  return (
    <a href={href} style={{ backgroundImage: `url(${bkg})` }} className={classes.join(' ')} {...rest}>
      {children}
    </a>
  );
};

export default ResumeCard;
