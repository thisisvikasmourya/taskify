import React from 'react'

interface Props{
  color:string
}

const Download = ({ color }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <g clip-path="url(#clip0_33_12987)">
        <path
          d="M11.25 5.25V0H3.75C2.50725 0 1.5 1.00725 1.5 2.25V18H16.5V5.25H11.25ZM10.0545 14.5627C9.7635 14.8538 9.38175 14.9985 9 14.9985C8.61825 14.9985 8.23575 14.8538 7.9455 14.5627L5.47125 12.0885L6.53175 11.028L8.25 12.7463V8.2485H9.75V12.7545L11.4683 11.028L12.5287 12.0885L10.0545 14.5627ZM16.0605 3.75H12.75V0.4395L16.0605 3.75Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_33_12987">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Download