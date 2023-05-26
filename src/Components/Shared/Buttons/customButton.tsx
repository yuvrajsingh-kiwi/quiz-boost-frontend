import React from 'react';

const CustomButton = (props: { buttonText: string; onclick: () => void, className: string }) => {
  const { buttonText, onclick, className } = props;
  return (
    <div
      className={className}
      onClick={() => onclick()}
    >
      {buttonText}
    </div>
  );
};

export default CustomButton;
