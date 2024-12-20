import React from 'react'

interface Props{
  color: string
}

const Left:React.FC<Props> = ({color}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="upload_2_FILL1_wght400_GRAD0_opsz24">
        <path
          id="Vector"
          d="M15.1663 13.3335H13.833V2.66683H15.1663V13.3335ZM12.4997 10.0002H7.83301V12.6668L1.83301 8.00016L7.83301 3.3335V6.00016L12.4997 6.00016V10.0002Z"
          fill={color}
        />
      </g>
    </svg>
  );
}

export default Left