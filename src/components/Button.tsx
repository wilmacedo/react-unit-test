import React from "react";

export type IButton = {
  label: string;
  disabled?: boolean;
  onClick?(): void;
};

const Button: React.FC<IButton> = ({ label, disabled, onClick }) => {
  return (
    <button
      disabled={disabled ? disabled : false}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {label}
    </button>
  );
};

export default Button;
