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
    <div>
      <a href={href} style={{ backgroundImage: `url(${bkg})` }} className={classes.join(' ')} {...rest}>
        <p style={{ textAlign: 'center', }}>{children}</p>
      </a>
    </div>
  );
};

export default ResumeCard;
