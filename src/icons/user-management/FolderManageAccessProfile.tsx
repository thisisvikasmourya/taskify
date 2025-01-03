import React from "react";

interface AccountTreeProps {}

const FolderManageAccessProfile: React.FC<AccountTreeProps> = ({}) => {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7 7C8.93375 7 10.5 5.43375 10.5 3.5C10.5 1.56625 8.93375 0 7 0C5.06625 0 3.5 1.56625 3.5 3.5C3.5 5.43375 5.06625 7 7 7ZM7 8.75C4.66375 8.75 0 9.9225 0 12.25V14H14V12.25C14 9.9225 9.33625 8.75 7 8.75Z'
        fill='#0047AB'
      />
    </svg>
  );
};

export default FolderManageAccessProfile;
