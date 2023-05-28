import React from 'react';

const CustomButton = (props: { buttonText: string; onclick: () => void, className: string }) => {
  const { buttonText, onclick, className } = props;
  return (
    <span
      className={className}
      onClick={() => onclick()}
    >
      {buttonText}
    </span>
  );
};

export default CustomButton;
