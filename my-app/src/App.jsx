import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { CompendioPage } from './pages/CompendioPage';
import { PartyPage } from './pages/PartyPage';
import { DetailPage } from './pages/DetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    // 1. Estado Global: Proveedor del Tema (Claro/Oscuro) envuelve toda la app
    <ThemeProvider>
      {/* 2. Enrutador principal de React Router */}
      <BrowserRouter>
        
        {/* Componente Navbar fijo y visible en todas las vistas */}
        <Navbar />
        
        {/* 3. Definición de las 4 rutas obligatorias por la rúbrica */}
        <Routes>
          {/* Ruta 1: Inicio / Compendio de Hechizos */}
          <Route path="/" element={<CompendioPage />} />
          
          {/* Ruta 2: Gestión de Personajes (CRUD + LocalStorage) */}
          <Route path="/portfolio" element={<PartyPage />} />
          
          {/* Ruta 3: Vista de Detalle Dinámica mediante el parámetro :id */}
          <Route path="/spell/:id" element={<DetailPage />} />
          
          {/* Ruta 4: Captura de errores 404 para cualquier ruta no definida */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;