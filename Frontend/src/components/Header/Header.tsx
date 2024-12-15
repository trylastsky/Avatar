import React, { useEffect, useState } from 'react';
import LoginContainer from './LoginContainer/LoginContainer';
import './Header.css';

interface AuthModal {
  isModalAuthOpen: boolean;
  setModalAuthOpen: (status: boolean) => void;
}

const Header: React.FC<AuthModal> = ({ isModalAuthOpen, setModalAuthOpen }) => {
  const [statusLogin, setStatusLogin] = useState<boolean>(false);
  
  const username = localStorage.getItem('username');

  useEffect(() => {
    
  }, [username]);

  return (
    <header className="header">
      <div className="logo"><a href="#"><p>Avatar</p></a></div>
      {username ? (
        <>
          <p><a href="profile">{username}</a></p>
        </>
      ) : (
    
        <>
          {isModalAuthOpen ? (
            // Если модальное окно открыто, возможно, вы захотите что-то другое
            <p>Авторизация...</p>
          ) : (
            <LoginContainer 
              statusLogin={statusLogin} 
              setStatusLogin={setStatusLogin}  
              isModalAuthOpen={isModalAuthOpen} 
              setModalAuthOpen={setModalAuthOpen} 
            />
          )}
        </>
      )}
    </header>
  );
}

export default Header;
