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
    <Wrapper size="large" hasRhythm className={classes.join(' ')} {...rest}>
      <div className="magic-header__body">
        <div className="magic-header__body-left has-rhythm">
          <Heading>
            {heading}
          </Heading>
          <Heading element="h2">
            {middle}
          </Heading>
        </div>
        <div className="magic-header__body-right has-rhythm">
          {children}
        </div>
      </div>
    </Wrapper>
  );
};

MagicHeader.propTypes = {
  variable: PropTypes.array
};

export default MagicHeader;
