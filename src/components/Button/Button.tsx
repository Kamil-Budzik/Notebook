import React from 'react';

interface Props {
  variant?: 'sky' | 'red' | 'yellow';
  children: any;
  small?: boolean;
  submit?: boolean;
}

const Button = ({ children, variant, small, submit }: Props) => {
  let basicStyles = 'rounded-md font-semibold text-white transition ';

  if (small) {
    basicStyles += 'py-2 px-6 text-lg ';
  } else {
    basicStyles += 'py-3 px-10 text-2xl ';
  }
  if (variant === 'red') {
    basicStyles += 'bg-rose-600 hover:bg-rose-700';
  } else if (variant === 'yellow') {
    basicStyles += 'bg-yellow-300 hover:bg-yellow-400';
  } else {
    basicStyles += 'bg-sky-500 hover:bg-cyan-600';
  }

  return (
    <button className={basicStyles} type={submit ? 'submit' : 'button'}>
      {children}
    </button>
  );
};

export default Button;
