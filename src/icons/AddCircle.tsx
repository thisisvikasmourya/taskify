import React from 'react'

interface AddCircleProps{
  color:string;
  stroke:string;
}

const AddCircle:React.FC<AddCircleProps> = ({color,stroke}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="AddFilled">
    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke={stroke}/>
    <path id="Vector" d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill={color}/>
    </g>
    </svg>
    
  )
}

export default AddCircle
