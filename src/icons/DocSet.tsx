import React from 'react'

interface ComponentProps{
  color: string;
}

const DocSet:React.FC<ComponentProps> = ({color}) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="fi_2576507" clip-path="url(#clip0_300_2657)">
    <g id="Group">
    <g id="Group_2">
    <g id="Group_3">
    <path id="Vector" d="M12.6875 13.6562V15.7253L14.7566 13.6562H12.6875ZM6.59375 3.75V16H11.75V12.7188H15.0312V3.75H6.59375ZM13.1562 11.3125H8.46875V10.375H13.1562V11.3125ZM13.1562 9.4375H8.46875V8.5H13.1562V9.4375ZM13.1562 7.5625H8.46875V6.625H13.1562V7.5625Z" fill={color}/>
    </g>
    </g>
    <g id="Group_4">
    <path id="Vector_2" d="M12.2188 1.875V2.8125H5.65625V14.125H3.78125V1.875H12.2188Z" fill={color}/>
    </g>
    <g id="Group_5">
    <path id="Vector_3" d="M9.40625 0V0.9375H2.84375V12.25H0.96875V0H9.40625Z" fill={color}/>
    </g>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_300_2657">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
  )
}

export default DocSet