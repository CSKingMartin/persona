import React from 'react';

export const Wrapper = (props) => {
  const {
    size,
    hasRhythm,
    className,
    children,
    ...rest
  } = props;

  const classes = ['wrapper'];
  const innerClasses = ['wrapper__inner'];

  size && classes.push(`wrapper--${size}`);
  hasRhythm && innerClasses.push('has-rhythm--large');

  return (
    <div className={classes.join(' ')} {...rest}>
      <div className={innerClasses.join(' ')}>
        {children}
      </div>
    </div>
  );
};

Wrapper.defaultProps = {
  size: 'medium'
}

export default Wrapper;
