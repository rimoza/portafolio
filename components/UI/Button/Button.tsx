import React from "react";

import classes from "./Button.module.css";

const Button = ({
  children,
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`${classes.btn} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
