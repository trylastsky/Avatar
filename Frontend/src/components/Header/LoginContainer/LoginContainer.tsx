import React, { useEffect } from 'react';
import {userGet} from "../../../services/api";
import './LoginContainer.css'; 

export interface AuthModal {
  statusLogin: boolean;
  setStatusLogin: (status: boolean) => void;
  isModalAuthOpen: boolean;
  setModalAuthOpen: (status: boolean) => void;
}

const LoginContainer: React.FC<AuthModal> = ({statusLogin, isModalAuthOpen, setModalAuthOpen}) => {

  useEffect(() => {
    userGet().then(data => console.log("Юзер дата" + data));
  }, [isModalAuthOpen]);

  return (
    <>
      <div className='login-container'>
        {!statusLogin ? (
          <>
            <button className='login-button' onClick={() => setModalAuthOpen(true)}>Вход</button>
            <p>или</p>
            <button className='login-button' onClick={() => setModalAuthOpen(true)}>Регистрация</button>
          </>
        ) : (
          <p>Вы успешно вошли в систему!</p> 
        )}
      </div>
    </>
  );
}

export default LoginContainer;
