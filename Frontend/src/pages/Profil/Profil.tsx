import React from 'react';
import './Profil.css';


const Profile: React.FC = () => {

  // Получаем данные пользователя из localStorage
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const phoneNumber = localStorage.getItem('phoneNumber'); // Предполагаем, что номер телефона хранится в localStorage

  const handleLogout = () => {
    // Сброс информации о пользователе
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('phoneNumber');

    // Выход из аккаунта и перенаправление на страницу входа или на главную
  };

  return (<>
  

    <div className="profile">
      <h2>Личный кабинет</h2>
      <div className="profile-info">
        <p><strong>Имя пользователя:</strong> {username}</p>
        <p><strong>Электронная почта:</strong> {email}</p>
        <p><strong>Номер телефона:</strong> {phoneNumber}</p>
      </div>
      <button onClick={handleLogout} className="logout-button" ><a href="/">Выйти</a></button>
    </div>
    </>
  );
};

export default Profile;
