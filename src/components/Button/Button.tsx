import React from 'react';

interface Props {
  variant?: 'sky' | 'red';
  children: any;
}

const Button = ({ children, variant }: Props) => {
  const basicProperties = 'py-3 px-6 text-lg text-white transition';

  if (variant === 'red') {
    return (
      <button className={`bg-rose-600 hover:bg-rose-700 ${basicProperties}`}>
        {children}
      </button>
    );
  }

  return (
    <button className={`bg-sky-500 hover:bg-cyan-600 ${basicProperties}`}>
      {children}
    </button>
  );
};

export default Button;