
import React from 'react';
import "./IconButton.css";

interface IconButtonProps {
  icon: string;
  title:string | null; 
  width:number; //px
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, title, width, onClick }) => {
  return (
    <button {...(title ? { title } : {})}  className="icon-button" onClick={onClick}>
      <img src={icon} style={{width:width}} alt="path"/>
    </button>
  );
}

export default IconButton;