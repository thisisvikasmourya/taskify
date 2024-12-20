import React from 'react'

interface DashBoardprops{
  color:string
}

const DashBoard:React.FC<DashBoardprops> = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill={color}><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Z"/></svg>
  )
}

export default DashBoard