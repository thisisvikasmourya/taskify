import React from 'react'


interface AccountTreeProps{
  color:string
}

const AccountTree:React.FC<AccountTreeProps> = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill={color}><path d="M600-120v-120H440v-400h-80v120H80v-320h280v120h240v-120h280v320H600v-120h-80v320h80v-120h280v320H600Z"/></svg>
  )
}

export default AccountTree