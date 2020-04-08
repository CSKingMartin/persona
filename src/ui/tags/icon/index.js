import React from 'react';

export const Icon = (props) => {
  const {
    name,
    id,
    title,
    description,
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = ['icon'];
  className && classes.push(className);
  variant && classes.push(`icon--${variant}`);

  const ariaLabel = description ? `${id}-title ${id}-desc` : `${id}-title`;

  return (
    <div className={classes.join(' ')} {...rest}>
      <svg aria-labelledby={ariaLabel} {...rest}>
        {title && <title id={`${id}-title`}>{title}</title>}
        {description && <description id={`${id}-desc`}>{description}</description>}
        {name && <use xlinkHref={`#icon-${name}`} />}
        {children}
      </svg>
    </div>
  );
};

export default Icon;
