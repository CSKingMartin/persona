import React from 'react';
import PropTypes from 'prop-types';
import Heading from '@tags/heading';
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

  const classes = ['magic-header', 'has-rhythm'];

  className && classes.push(className);

  return (
    <Wrapper className={classes.join(' ')} {...rest}>
      <Heading>
        {heading}
      </Heading>
      <Heading element="h2">
        {prefix} {middle} {suffix}
      </Heading>
      {children}
    </Wrapper>
  );
};

MagicHeader.propTypes = {
  variable: PropTypes.array
};

export default MagicHeader;
