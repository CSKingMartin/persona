import React from 'react';

export const ColorSwatch = (props) => {
  const {
    className,
    hex,
    name,
    children,
    ...rest
  } = props;

  return (
    <div className="color-swatch" {...rest}>
      <div className="color-swatch__chip" style={{ 'backgroundColor': `${hex}` }}/>
      <div className="color-swatch__caption">
        <p>{name}</p>
        <p>{hex}</p>
      </div>
    </div>
  );
};

export default ColorSwatch;
