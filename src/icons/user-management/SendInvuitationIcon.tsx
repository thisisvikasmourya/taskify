import React from "react";

interface AccountTreeProps {}

const SendInvuitationIcon: React.FC<AccountTreeProps> = ({}) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='0.5' y='0.5' width='31' height='31' rx='15.5' stroke='#B3B3B3' />
      <g clip-path='url(#clip0_1_6923)'>
        <path
          d='M16.9476 23.952L22.5997 9.81455L8.46229 15.4667L11.7574 18.7712L19.7713 12.643L13.643 20.6569L16.9476 23.952Z'
          fill='#666666'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_6923'>
          <rect
            width='16'
            height='16'
            fill='white'
            transform='translate(6.10059 15) rotate(-45)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SendInvuitationIcon;
