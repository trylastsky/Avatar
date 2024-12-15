import React, { useEffect, useState } from 'react';
import { registrationPost, loginPost } from '../../services/api';
import x_icon from "../../assets/icons/svg/X.svg";
import './AuthModal.css';

interface AuthModalProps {
    isOpen: boolean;         
    onClose: () => void;     
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [emailOrPhone, setEmailOrPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [phoneNumber, setPhone] = useState<string>(''); // Не забудьте добавить телефон в состояние

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if(isRegister) registrationPost(username, email, phoneNumber,password).then(status => console.log(status));
        else if (!isRegister) loginPost(emailOrPhone, password).then(status => console.log(status));
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('phoneNumber', phoneNumber);
        e.preventDefault();
        resetForm(); // Сбрасываем форму после отправки
        onClose(); // Закрываем модал
    };






    const resetForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setPhone(''); // Сброс телефона
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
                    <button className='close-button' onClick={onClose}>
                        <img src={x_icon} alt="Закрыть" />
                    </button>
                </div>
                <div className="logo"><p>Avatar</p></div>
                <form onSubmit={handleSubmit}>
                    {isRegister && (
                        <>
                            <h3>Имя пользователя</h3>
                            <input
                                type="text"
                                placeholder="Введите ваше имя"
                                value={username}

                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <h3>Телефон</h3>
                            <input
                                type="text"
                                placeholder="Введите ваш номер телефона"
                                value={phoneNumber}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                    <h3>Почта</h3>
                    <input
                        type="email"
                        placeholder="Введите вашу почту"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                        </>
                    )}
                    {!isRegister && (<>
                        <h3>Телефон или Почта</h3>
                    <input
                        type="text"
                        placeholder="Введите логин"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        required
                    />
                    </>)}
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