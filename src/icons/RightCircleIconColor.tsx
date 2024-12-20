import { Box } from "@mui/material";
import React from "react";

interface props {
  isLoadingSave: boolean;
}

const RightCircleIconColor: React.FC<props> = ({ isLoadingSave }) => {
  return (
    <Box sx={{ opacity: isLoadingSave ? 0.1 : 1,  }}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='chevron_right'>
          <rect
            x='0.5'
            y='0.5'
            width='23'
            height='23'
            rx='11.5'
            fill='#0047AB'
          />
          <rect
            x='0.5'
            y='0.5'
            width='23'
            height='23'
            rx='11.5'
            stroke='#0047AB'
          />
          <path
            id='Vector'
            d='M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z'
            fill='white'
          />
        </g>
      </svg>
    </Box>
  );
};

export default RightCircleIconColor;
