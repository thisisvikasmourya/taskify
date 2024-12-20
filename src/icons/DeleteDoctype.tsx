import React from "react";

const DeleteDoctype = ({ disabled = false }) => {
  const disabledStyle = disabled ? { opacity: 0.5, cursor: "not-allowed" } : {};

  return (
    <div style={disabledStyle}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        style={{ pointerEvents: disabled ? "none" : "auto" }}
      >
        <rect
          x='0.5'
          y='0.5'
          width='31'
          height='31'
          rx='15.5'
          stroke='#B3B3B3'
        />
        <mask
          id='mask0_245_36238'
          maskUnits='userSpaceOnUse'
          x='9'
          y='9'
          width='14'
          height='14'
        >
          <rect x='9' y='9' width='14' height='14' fill='#D9D9D9' />
        </mask>
        <g mask='url(#mask0_245_36238)'>
          <path
            d='M13.0833 21.25C12.7624 21.25 12.4878 21.1358 12.2593 20.9073C12.0308 20.6788 11.9166 20.4042 11.9166 20.0833V12.5H11.3333V11.3333H14.2499V10.75H17.7499V11.3333H20.6666V12.5H20.0833V20.0833C20.0833 20.4042 19.969 20.6788 19.7405 20.9073C19.5121 21.1358 19.2374 21.25 18.9166 21.25H13.0833ZM14.2499 18.9167H15.4166V13.6667H14.2499V18.9167ZM16.5833 18.9167H17.7499V13.6667H16.5833V18.9167Z'
            fill='#666666'
          />
        </g>
      </svg>
    </div>
  );
};

export default DeleteDoctype;
