import React from 'react'

interface ComponentProps{
    color: string;
  }

const MakerChecker:React.FC<ComponentProps> = ({color}) => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill={color}>
  <path d="M9.33334 1.3335H4.00001C3.26667 1.3335 2.67334 1.9335 2.67334 2.66683L2.66667 13.3335C2.66667 14.0668 3.26 14.6668 3.99334 14.6668H12C12.7333 14.6668 13.3333 14.0668 13.3333 13.3335V5.3335L9.33334 1.3335ZM7.29334 12.0002L4.93334 9.64016L5.87334 8.70016L7.28667 10.1135L10.1133 7.28683L11.0533 8.22683L7.29334 12.0002ZM8.66667 6.00016V2.3335L12.3333 6.00016H8.66667Z" fill={color}/>
</svg>
  )
}

export default MakerChecker
