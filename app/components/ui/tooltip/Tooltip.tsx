'use client'

import React, { ReactElement, useState } from 'react';
import classes from './Tooltip.module.scss';

type PropsType = {
  children: ReactElement;
  text: string;
};

const Tooltip: React.FC<PropsType> = ({ children, text }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };

  return (
    <div className={classes.container} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {children}
      {<div className={classes.tooltip + " " + (showToolTip && classes.tooltipVisible)}>{text}</div>}
    </div>
  );
};

export default Tooltip;