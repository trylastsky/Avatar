import React from 'react';
import { AuthModal } from '../../../interfaces';
import './LoginContainer.css'; 


const LoginContainer: React.FC<AuthModal> = ({setModalAuthOpen}) => {


  return (
    <div className='login-container'>
        <button className='login-button' onClick={() => setModalAuthOpen(true)}>Вход</button>
        <p>или</p>
        <button className='login-button' onClick={() => setModalAuthOpen(true)}>Регистрация</button>
    </div>
  );
}

export default LoginContainer;
