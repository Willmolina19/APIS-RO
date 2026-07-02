import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="app-container" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '5rem', color: '#f87171', margin: 0 }}>404</h1>
      <h2>Página No Encontrada</h2>
      <p className="subtitle">El bloque o portal solicitado no existe en la dimensión actual.</p>
      <button onClick={() => navigate('/')} className="btn-update">Ir al Inicio</button>
    </div>
  );
};