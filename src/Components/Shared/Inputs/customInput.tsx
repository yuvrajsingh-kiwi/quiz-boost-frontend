import React from 'react';

interface InputBox {
  type: string;
  className?: string;
  placeholder: string;
}

const CustomInput = (props: InputBox) => {
  const { type, className, placeholder } = props;
  return (
    <input
      className={`form-control mt-2 ${className ? className : ''}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
