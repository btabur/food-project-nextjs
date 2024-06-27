import React from 'react';

const Input = ({ name, type, placeholder, value, onChange, onBlur, error, touched }) => {
  return (
    <article className='w-full'>
      <label className='relative block cursor-text'>
        <input
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          required
          className='w-full h-14 border border-primary outline-none px-4 peer pt-2'
        />
        <span className='absolute top-0 left-0 px-4 text-sm h-full flex items-center peer-focus:h-7 peer-focus:text-xs peer-focus:text-gray-500 peer-valid:h-7 peer-valid:text-xs peer-valid:text-gray-500 transition-all'>
          {placeholder}
        </span>
      </label>
      {touched && error ? (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      ) : null}
    </article>
  );
};

export default Input;
