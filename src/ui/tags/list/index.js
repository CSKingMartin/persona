import React from 'react';

export const ListItem = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classes = ['list-item'];
  className && classes.push(className);

  return (
    <li className={classes.join(' ')} {...rest}>{children}</li>
  );
};

export const List = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = ['list has-rhythm'];
  className && classes.push(className);
  classes.push(`list--${variant}`);

  if (variant === 'grid') {
    classes.push('grid grid--2-col');
  }

  const El = variant === 'grid' ? 'ul' : variant;

  return (
    <El className={classes.join(' ')} {...rest}>{children}</El>
  );
};

List.defaultProps = {
  variant: 'ul'
};

List.Item = ListItem;

export default List;
