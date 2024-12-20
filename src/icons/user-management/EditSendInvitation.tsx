import React from "react";

interface AccountTreeProps {}

const EditSendInvitation: React.FC<AccountTreeProps> = ({}) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='0.5' y='0.5' width='31' height='31' rx='15.5' stroke='#B3B3B3' />
      <mask
        id='mask0_1_7083'
        // style='mask-type:alpha'
        maskUnits='userSpaceOnUse'
        x='9'
        y='9'
        width='14'
        height='14'
      >
        <rect x='9' y='9' width='14' height='14' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_1_7083)'>
        <path
          d='M10.75 21.25V18.7708L18.45 11.0854C18.5667 10.9785 18.6955 10.8958 18.8365 10.8375C18.9774 10.7792 19.1257 10.75 19.2812 10.75C19.4368 10.75 19.5875 10.7792 19.7333 10.8375C19.8792 10.8958 20.0056 10.9833 20.1125 11.1L20.9146 11.9167C21.0312 12.0236 21.1163 12.15 21.1698 12.2958C21.2233 12.4417 21.25 12.5875 21.25 12.7333C21.25 12.8889 21.2233 13.0372 21.1698 13.1781C21.1163 13.3191 21.0312 13.4479 20.9146 13.5646L13.2292 21.25H10.75ZM19.2667 13.55L20.0833 12.7333L19.2667 11.9167L18.45 12.7333L19.2667 13.55Z'
          fill='#666666'
        />
      </g>
    </svg>
  );
};

export default EditSendInvitation;
