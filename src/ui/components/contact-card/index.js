import React from 'react';

import Button from '@tags/button';
import Heading from '@tags/heading';

export const ContactCard = (props) => {
  const {
    heading,
    cta,
    className,
    children,
    ...rest
  } = props;

  const classes = ['contact-card', 'has-rhythm'];
  className && classes.push(className);

  return (
    <div className={classes.join(' ')} {...rest}>
      <Heading element="h3">
        {heading}
      </Heading>
      {cta && <Button>{cta}</Button>}
      {children}
    </div>
  );
};

export default ContactCard;
