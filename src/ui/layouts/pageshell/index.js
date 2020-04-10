import React, { useState } from 'react';

import GlobalHeader from '@components/global-header';

export const Pageshell = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const [isScrolled, updateScroll] = useState(false);

  const onScroll = (e) => {
    if (e.target.scrollTop > 570) {
      updateScroll(true);
    } else {
      updateScroll(false);
    }
  }

  const classes = ['pageshell', 'has-rhythm--page'];
  className && classes.push(className);
  isScrolled === true && classes.push('is-scrolled');

  return (
    <div onScroll={onScroll} className={classes.join(' ')} {...rest}>
      <GlobalHeader />
      {children}
    </div>
  );
};

export default Pageshell;
