import React from 'react';

export const ResumeCard = (props) => {
  const {
    variant,
    bkg,
    className,
    children,
    ...rest
  } = props;

  const classes = ['resume-card'];
  className && classes.push(className);
  variant && classes.push(`resume-card--${variant}`);

  return (
    <div style={{ backgroundImage: `url(${bkg})` }} className={classes.join(' ')} {...rest}>
      {children}
    </div>
  );
};

export default ResumeCard;
