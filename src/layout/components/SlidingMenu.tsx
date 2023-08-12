import React, { ReactElement, useState } from "react";
import "./layout.css";

interface SlidingMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
  onMenuItemClick: () => void;
}

const SlidingMenu: React.FC<SlidingMenuProps> = ({
  isOpen,
  onClose,
  children,
  onMenuItemClick,
}) => {
  const handleClose = () => {
    onClose();
    onMenuItemClick();
  };
  return (
    <div className={`sliding-menu ${isOpen ? "open" : ""}`}>
      <div className="overlay" onClick={handleClose} />
      <div className="menu-content">{children}</div>
    </div>
  );
};

export default SlidingMenu;
