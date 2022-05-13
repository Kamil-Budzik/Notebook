import React from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'sky' | 'red';
  children: any;
}

const Button = ({ children, variant, ...props }: Props) => {
  return (
    <button
      className={`rounded-md py-3 px-10 text-2xl font-semibold text-white transition ${
        variant === 'red'
          ? 'bg-rose-600 hover:bg-rose-700'
          : 'bg-sky-500 hover:bg-cyan-600'
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
