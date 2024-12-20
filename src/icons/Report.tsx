import React from 'react'

interface ReportProps{
  color:string
}

const Report:React.FC<ReportProps> = ({color}) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
    <g id="monitoring_FILL1_wght400_GRAD0_opsz24 1">
    <path id="Vector" d="M2 14V12.6667L3.33333 11.3333V14H2ZM4.66667 14V10L6 8.66667V14H4.66667ZM7.33333 14V8.66667L8.66667 10.0167V14H7.33333ZM10 14V10.0167L11.3333 8.68333V14H10ZM12.6667 14V7.33333L14 6V14H12.6667ZM2 10.55V8.66667L6.66667 4L9.33333 6.66667L14 2V3.88333L9.33333 8.55L6.66667 5.88333L2 10.55Z" fill={color}/>
    </g>
    </svg>
    
  )
}

export default Report