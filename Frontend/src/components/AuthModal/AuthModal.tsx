import React, { useState } from 'react';
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

                </div>
             <div className="logo"><a href="#"><p>Avatar</p></a></div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
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
                <button className="close-button" onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default AuthModal;
