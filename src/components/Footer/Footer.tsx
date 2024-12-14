// src/components/Footer.tsx
import React from 'react';
import './Footer.css'; // Импортируем стили

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div><a href="#"><p className="footer-logo">Avatar</p></a></div>
        <div className="footer-links">
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
          <a href="#policy">Политика конфиденциальности</a>
          <a href="#info">Помощь</a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Bug Busters продукт Avatar.
      </div>
    </footer>
  );
}

export default Footer;
