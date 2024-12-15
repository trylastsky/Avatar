import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ConstructorPage from './pages/ConstructorPage';
import AuthModal from './components/AuthModal/AuthModal';
import Profile from './pages/Profil/Profil';

import './App.css';

function App() {

  const [isModalAuthOpen, setModalAuthOpen] = useState<boolean>(false);



    
  return (
    <Router>
        <Header isModalAuthOpen={isModalAuthOpen} setModalAuthOpen={setModalAuthOpen}/>
        <AuthModal isOpen={isModalAuthOpen} onClose={() => setModalAuthOpen(false)} />
      <Routes>
        <Route path="/" element={<ConstructorPage />} />
        <Route path="/profile" element={<Profile></Profile>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
