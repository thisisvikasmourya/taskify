// ContextMenu.tsx
import React, { MouseEvent } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface ContextMenuProps {
  contextMenu: { mouseX: number; mouseY: number } | null;
  handleClose: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ contextMenu, handleClose }) => {
  return (
    <Menu
      open={contextMenu !== null}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenu !== null
          ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
          : undefined
      }
    >
      <MenuItem onClick={handleClose}>Option 1</MenuItem>
      <MenuItem onClick={handleClose}>Option 2</MenuItem>
      <MenuItem onClick={handleClose}>Option 3</MenuItem>
    </Menu>
  );
};

export default ContextMenu;
