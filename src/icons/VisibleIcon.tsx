import React from "react";

const VisibleIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
    >
      <rect x='0.5' y='0.5' width='31' height='31' rx='15.5' stroke='#B3B3B3' />
      <mask
        id='mask0_245_36257'
        maskUnits='userSpaceOnUse'
        x='9'
        y='9'
        width='14'
        height='14'
      >
        <rect x='9' y='9' width='14' height='14' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_245_36257)'>
        <path
          d='M15.9999 18.3334C16.7291 18.3334 17.3489 18.0782 17.8593 17.5677C18.3697 17.0573 18.6249 16.4375 18.6249 15.7084C18.6249 14.9792 18.3697 14.3594 17.8593 13.849C17.3489 13.3386 16.7291 13.0834 15.9999 13.0834C15.2708 13.0834 14.651 13.3386 14.1405 13.849C13.6301 14.3594 13.3749 14.9792 13.3749 15.7084C13.3749 16.4375 13.6301 17.0573 14.1405 17.5677C14.651 18.0782 15.2708 18.3334 15.9999 18.3334ZM15.9999 17.2834C15.5624 17.2834 15.1905 17.1302 14.8843 16.824C14.578 16.5177 14.4249 16.1459 14.4249 15.7084C14.4249 15.2709 14.578 14.899 14.8843 14.5927C15.1905 14.2865 15.5624 14.1334 15.9999 14.1334C16.4374 14.1334 16.8093 14.2865 17.1155 14.5927C17.4218 14.899 17.5749 15.2709 17.5749 15.7084C17.5749 16.1459 17.4218 16.5177 17.1155 16.824C16.8093 17.1302 16.4374 17.2834 15.9999 17.2834ZM15.9999 20.0834C14.5805 20.0834 13.2874 19.6872 12.1208 18.8948C10.9541 18.1025 10.1083 17.0403 9.58325 15.7084C10.1083 14.3764 10.9541 13.3143 12.1208 12.5219C13.2874 11.7296 14.5805 11.3334 15.9999 11.3334C17.4194 11.3334 18.7124 11.7296 19.8791 12.5219C21.0458 13.3143 21.8916 14.3764 22.4166 15.7084C21.8916 17.0403 21.0458 18.1025 19.8791 18.8948C18.7124 19.6872 17.4194 20.0834 15.9999 20.0834Z'
          fill='#666666'
        />
      </g>
    </svg>
  );
};

export default VisibleIcon;