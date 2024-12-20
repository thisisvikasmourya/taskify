import React from 'react'

interface BasicProps{
    color:string
}

const BasicFolderSmallestIcon:React.FC<BasicProps> = ({color}) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#666666" xmlns="http://www.w3.org/2000/svg">
    <g id="folder">
    <path id="Vector" d="M6.66666 2.66666H2.66666C1.93333 2.66666 1.33999 3.26666 1.33999 3.99999L1.33333 12C1.33333 12.7333 1.93333 13.3333 2.66666 13.3333H13.3333C14.0667 13.3333 14.6667 12.7333 14.6667 12V5.33332C14.6667 4.59999 14.0667 3.99999 13.3333 3.99999H8L6.66666 2.66666Z" fill={color}/>
    </g>
    </svg>
    
  )
}

export default BasicFolderSmallestIcon