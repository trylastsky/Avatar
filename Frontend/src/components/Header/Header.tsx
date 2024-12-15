import React from 'react';
import LoginContainer from './LoginContainer/LoginContainer';
import { AuthModal } from '../../interfaces';
import './Header.css'; 


const Header: React.FC<AuthModal> = ({isModalAuthOpen, setModalAuthOpen}) => {
  return (
    <header className="header">
      <div className="logo"><a href="#"><p>Avatar</p></a></div>
      {isModalAuthOpen ? (<>
      </>) : (<><LoginContainer   isModalAuthOpen={isModalAuthOpen} setModalAuthOpen={setModalAuthOpen}/></>)}
   
    </header>
  );
}

export default Header;
