import React from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'sky' | 'red';
  children: any;
}

const Button = ({ children, variant, ...props }: Props) => {
  const basicProperties =
    'py-3 px-10 text-2xl text-white transition rounded-md font-semibold';

  if (variant === 'red') {
    return (
      <button
        className={`bg-rose-600 hover:bg-rose-700 ${basicProperties}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`bg-sky-500 hover:bg-cyan-600 ${basicProperties}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
