import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}
const Button = ({ children, className, ...res }: ButtonProps) => {
  return (
    <button
      {...res}
      className={`py-2 px-4 bg-golden-yellow front-popins front-medium text-[18px] text-mystic-purple outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
