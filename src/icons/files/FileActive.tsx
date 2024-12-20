import React from "react";

interface FileActiveProps {
  color: string;
  text: string;
}

const FileActive: React.FC<FileActiveProps> = ({ color, text }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="40"
      viewBox="0 0 30 40"
      fill="none"
    >
      <path
        d="M5.24504 0H18.6287L29.9579 11.8199V34.7965C29.9579 37.6706 27.6285 40 24.7544 40H5.24504C2.37094 40 0.0415039 37.6705 0.0415039 34.7965V5.20354C0.0415039 2.32948 2.37094 0 5.24504 0Z"
        fill={color}
      />
      <path
        opacity="0.302"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.6133 0V11.7228H29.9587L18.6133 0Z"
        fill="white"
      />
      <text
        x="50%"
        y="70%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
              fontSize="10"
              fontWeight={600}
      >
        {text}
      </text>
    </svg>
  );
};

export default FileActive;
