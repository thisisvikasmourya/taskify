import React from "react";

interface Props {
  text: string;
  color: string;
}

const LargeActiveIcon: React.FC<Props> = ({ text, color }) => {
  return (
    <svg
      width="48"
      height="64"
      viewBox="0 0 48 64"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Vrstva_x0020_1_15_">
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.35547 0H29.8136L48 18.9026V55.6682C48 60.2739 44.2633 64 39.6605 64H8.35547C3.73671 64 1.31989e-09 60.2739 1.31989e-09 55.6682V8.33181C-8.10922e-05 3.72612 3.73663 0 8.35547 0Z"
            fill={color}
          />
          <g id="Group_2">
            <path
              id="Vector_2"
              opacity="0.302"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.7988 0V18.7586H48.0013L29.7988 0Z"
              fill="white"
            />
            <text
              x="50%"
              y="70%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontFamily="Arial, sans-serif"
              fontWeight={700}
            >
              {text}
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LargeActiveIcon;
