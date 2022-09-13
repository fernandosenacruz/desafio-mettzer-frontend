import { Routes, Route } from 'react-router-dom';
import './App.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
