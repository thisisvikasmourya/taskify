import React from 'react'

interface CancelProps{
    color:string;
}

const Cancel:React.FC<CancelProps> = ({color}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="cancel">
    <mask id="mask0_96_25058" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
    <rect id="Bounding box" width="32" height="32" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_96_25058)">
    <path id="cancel_2" d="M11.067 22.4888L16.0003 17.5555L20.9337 22.4888L22.4893 20.9332L17.556 15.9998L22.4893 11.0665L20.9337 9.51084L16.0003 14.4442L11.067 9.51084L9.51133 11.0665L14.4447 15.9998L9.51133 20.9332L11.067 22.4888ZM16.0003 29.3332C14.1708 29.3332 12.4449 28.9832 10.8227 28.2832C9.20044 27.5832 7.78555 26.6295 6.57799 25.4222C5.37066 24.2146 4.41699 22.7997 3.71699 21.1775C3.01699 19.5553 2.66699 17.8294 2.66699 15.9998C2.66699 14.1554 3.01699 12.4221 3.71699 10.7998C4.41699 9.17762 5.37066 7.7665 6.57799 6.5665C7.78555 5.3665 9.20044 4.4165 10.8227 3.7165C12.4449 3.0165 14.1708 2.6665 16.0003 2.6665C17.8448 2.6665 19.5781 3.0165 21.2003 3.7165C22.8225 4.4165 24.2337 5.3665 25.4337 6.5665C26.6337 7.7665 27.5837 9.17762 28.2837 10.7998C28.9837 12.4221 29.3337 14.1554 29.3337 15.9998C29.3337 17.8294 28.9837 19.5553 28.2837 21.1775C27.5837 22.7997 26.6337 24.2146 25.4337 25.4222C24.2337 26.6295 22.8225 27.5832 21.2003 28.2832C19.5781 28.9832 17.8448 29.3332 16.0003 29.3332ZM16.0003 27.1108C19.0965 27.1108 21.7224 26.0294 23.878 23.8665C26.0336 21.7036 27.1113 19.0814 27.1113 15.9998C27.1113 12.9036 26.0336 10.2777 23.878 8.12217C21.7224 5.96661 19.0965 4.88884 16.0003 4.88884C12.9188 4.88884 10.2965 5.96661 8.13366 8.12217C5.97077 10.2777 4.88933 12.9036 4.88933 15.9998C4.88933 19.0814 5.97077 21.7036 8.13366 23.8665C10.2965 26.0294 12.9188 27.1108 16.0003 27.1108Z" fill={color}/>
    </g>
    </g>
    </svg>
    
  )
}

export default Cancel