import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="nav-logo">⚔️ Taberna de Aventureros</div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Compendio</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active-link' : ''}>Mi Grupo</NavLink>
      </div>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        {theme === 'dark' ? '☀️ Modo Pergamino' : '🌙 Modo Taberna'}
      </button>
    </nav>
  );
};