import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { CompendioPage } from './pages/CompendioPage';
import { PartyPage } from './pages/PartyPage';
import { DetailPage } from './pages/DetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Ruta raíz redirige automáticamente al Compendio */}
          <Route path="/" element={<CompendioPage />} />
          <Route path="/portfolio" element={<PartyPage />} />
          <Route path="/spell/:id" element={<DetailPage />} />
          {/* Cualquier otra ruta vieja o extraña se va a la página 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;