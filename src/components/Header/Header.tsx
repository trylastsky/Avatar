import React from 'react';
import LoginContainer from './LoginContainer/LoginContainer';
import './Header.css'; 

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo"><a href="#"><p>Avatar</p></a></div>
        <LoginContainer/>
    </header>
  );
}

export default Header;
