import React from 'react';
import PropTypes from 'prop-types';

import Heading from '@tags/heading';
import Icon from '@tags/icon';
import Wrapper from '@layouts/wrapper';

export const MagicHeader = (props) => {
  const {
    heading,
    prefix,
    variable,
    middle,
    suffix,
    className,
    children,
    ...rest
  } = props;

  const classes = ['magic-header'];

  className && classes.push(className);

  return (
    <Wrapper hasRhythm className={classes.join(' ')} {...rest}>
      <div className="magic-header__body has-rhythm">
        <Heading>
          {heading}
        </Heading>
        <Heading element="h2">
          {middle}
        </Heading>
        {children}
      </div>
    </Wrapper>
  );
};

MagicHeader.propTypes = {
  variable: PropTypes.array
};

export default MagicHeader;
