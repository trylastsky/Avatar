
import React from 'react';
import "./IconButton.css";

interface IconButtonProps {
  icon: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      <img src={icon} alt="path" />
    </button>
  );
}

export default IconButton;