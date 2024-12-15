import React, { useState } from 'react';
import IconButton from '../IconButton/IconButton';
import x_icon from "../../assets/icons/svg/X.svg";

import './AuthModal.css'; // Необходимо создать файл CSS для стилей модального окна

const AuthModal:React.FC = ({ isOpen, onClose }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Здесь будет логика обработки регистрации/входа
        console.log(isRegister ? 'Registering' : 'Logging in', { email, password });
        // После успешной операции, возможно, нужно будет сбросить поля и закрыть модал
        resetForm();
        onClose();
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const toggleForm = () => {
        setIsRegister((prev) => !prev);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className='space-beetwen'>
                <h2>{isRegister ? 'Регистрация' : 'Авторизация'}</h2>
                <button className='close-button' onClick={onClose}><img src={x_icon} alt="X" /></button>
                </div>
             <div className="logo"><p>Avatar</p></div>
                <form onSubmit={handleSubmit}>
                    {isRegister && (<> 
                        <h3>Имя пользователя</h3>
                    <input
                        type="username"
                        placeholder="Введите ваше имя"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /></>)}
                    <h3>Телефон или почта</h3>
                    <input
                        type="email"
                        placeholder="Введите вашу почту"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                      <h3>Пароль</h3>
                    <input
                        type="password"
                        placeholder="Введите ваш пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">{isRegister ? 'Зарегистрироваться' : 'Войти'}</button>
                </form>
                <p>
                    {isRegister ? 'Уже есть аккаунт? ' : "Еще нет аккаунта? "}
                    <span onClick={toggleForm} className="toggle-form">
                        {isRegister ? 'Войти' : 'Зарегистрироваться'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AuthModal;
