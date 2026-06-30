import { useState, useMemo, useCallback } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useDebounce } from '../hooks/useDebounce';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const CompendioPage = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  
  const { data, loading, error } = useFetch('https://www.dnd5eapi.co/api/spells');
  const debouncedSearch = useDebounce(search, 400);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredSpells = useMemo(() => {
    if (!data || !data.results) return [];
    return data.results.filter(spell => 
      spell.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [data, debouncedSearch]);

  return (
    <div className="app-container">
      <h2>📜 Compendio de Hechizos (D&D 5e)</h2>
      <p className="subtitle">Consulta los misterios arcanos consumiendo la API oficial.</p>

      <div className="controls-layout">
        <div className="form-group" style={{ flex: 1 }}>
          <label>Buscar Conjuro</label>
          <input type="text" placeholder="Ej: Fireball, Wish, Bless..." value={search} onChange={handleSearch} />
        </div>
      </div>

      {loading && <LoadingSpinner />}
      {error && <div className="state-error">⚠️ Error arcano: {error}</div>}

      {!loading && !error && (
        <div className="spells-grid">
          {filteredSpells.map(spell => (
            <div 
              key={spell.index} 
              className="spell-item"
              onClick={() => navigate(`/spell/${spell.index}`)}
            >
              <span>✨ {spell.name}</span>
              <span className="spell-link">Ver detalles →</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};