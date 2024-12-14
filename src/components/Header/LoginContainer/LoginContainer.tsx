import React from 'react';
import './LoginContainer.css'; 

const LoginContainer: React.FC = () => {
  return (
    <div className='login-container'>
        <button className='login-button'>Вход</button>
        <p>или</p>
        <button className='login-button'>Регистрация</button>
    </div>
  );
}

export default LoginContainer;
