
import React from 'react';
import "./IconButton.css";

interface IconButtonProps {
  icon: string;
  title:string | null; 
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, title, onClick }) => {
  return (
    <button {...(title ? { title } : {})} className="icon-button" onClick={onClick}>
      <img src={icon} alt="path"/>
    </button>
  );
}

export default IconButton;