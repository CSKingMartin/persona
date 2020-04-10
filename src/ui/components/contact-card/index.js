import React from 'react';

import Button from '@tags/button';
import Heading from '@tags/heading';
import Icon from '@tags/icon';
import Wrapper from '@layouts/wrapper';

export const ContactCard = (props) => {
  const {
    heading,
    href,
    cta,
    className,
    children,
    ...rest
  } = props;

  const classes = ['contact-card', 'has-rhythm'];
  className && classes.push(className);

  return (
    <Wrapper className={classes.join(' ')} {...rest}>
      <div className="contact-card__body has-rhythm--large">
        <Heading element="h3">
          {heading}
        </Heading>
        {cta && <Button href={href}>{cta}</Button>}
        {children}
      </div>
      <div className="contact-card__icon-canvas">
        <Icon className="contact-card__wave" name="wave" />
        <Icon className="contact-card__ship" name="new-ship" />
        <Icon className="contact-card__wave-reverse" name="wave" />
      </div>
    </Wrapper>
  );
};

export default ContactCard;
