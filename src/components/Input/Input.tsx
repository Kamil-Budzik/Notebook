import React, { useState } from 'react';

const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      className="mb-5 w-full rounded border-2 border-gray-600 p-1 shadow-sm outline-sky-500"
    />
  );
};

export default Input;
