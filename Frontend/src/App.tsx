import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ConstructorPage from './pages/ConstructorPage';
import './App.css';

function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<ConstructorPage />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
