import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const DetailPage = () => {
  const { id } = useParams(); // Obtiene el parámetro de la URL
  const navigate = useNavigate();
  const { data: spell, loading, error } = useFetch(`https://www.dnd5eapi.co/api/spells/${id}`);

  if (loading) return <div className="app-container"><LoadingSpinner /></div>;
  if (error) return <div className="app-container"><div className="state-error">Error: {error}</div></div>;

  return (
    <div className="app-container">
      <button onClick={() => navigate(-1)} className="btn-update" style={{ marginBottom: '20px' }}>⬅ Volver al Grimorio</button>
      
      <div className="spell-detail-header">
        <h2>{spell.name}</h2>
        <p className="spell-level">Nivel: {spell.level} | Escuela: {spell.school?.name}</p>
      </div>

      <div className="controls-layout" style={{ flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        <div><strong>Tiempo de Lanzamiento:</strong> {spell.casting_time}</div>
        <div><strong>Rango:</strong> {spell.range}</div>
        <div><strong>Componentes:</strong> {spell.components?.join(', ')}</div>
        <div><strong>Duración:</strong> {spell.duration}</div>
      </div>

      <h3 style={{ marginTop: '20px' }}>Descripción del Conjuro</h3>
      <div className="spell-desc">
        {spell.desc?.map((paragraph, index) => (
          <p key={index} style={{ lineHeight: '1.6', color: 'var(--text-sub)' }}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};