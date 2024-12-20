import React from "react";

interface DashBoardprops {}

const CollapseAllIcon: React.FC<DashBoardprops> = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <path
        d='M8 5.53027L4 9.53027L4.94 10.4703L8 7.41694L11.06 10.4703L12 9.53027L8 5.53027Z'
        fill='#666666'
      />
    </svg>
  );
};

export default CollapseAllIcon;
