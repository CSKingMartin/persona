import React, { useState } from 'react';
import zenscroll from 'zenscroll'

import Icon from '@tags/icon';
import Wrapper from '@layouts/wrapper';

export const GlobalHeader = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classes = ['global-header'];
  className && classes.push(className);
  const animationClass = [];

  const onArrowClick = () => {
    document.querySelector('.pageshell').scrollTo(0, 0);
  }

  const onHandClick = () => {
    animate(true);

    setTimeout(() => {
      animate(false);
    }, 2000);
  }

  const [animation, animate] = useState(false);

  const animationClasses = ['global-header__hand'];
  animation && animationClasses.push('animate');

  return (
    <div className={classes.join(' ')} {...rest}>
      <Wrapper className="global-header__wrapper">
        <Icon onClick={onHandClick} className={animationClasses.join(' ')} name="hand" />
        <Icon onClick={onArrowClick} className="global-header__arrow" name="arrow" />
      </Wrapper>
    </div>
  );
};

export default GlobalHeader;
