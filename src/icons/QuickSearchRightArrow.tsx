import React from "react";

interface RecentlyProps {}

const QuickSearchRightArrow: React.FC<RecentlyProps> = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <rect x='0.5' y='0.5' width='15' height='15' rx='7.5' fill='#0047AB' />
      <rect x='0.5' y='0.5' width='15' height='15' rx='7.5' stroke='#0047AB' />
      <path
        d='M6.46979 4L5.52979 4.94L8.58312 8L5.52979 11.06L6.46979 12L10.4698 8L6.46979 4Z'
        fill='white'
      />
    </svg>
  );
};

export default QuickSearchRightArrow;
