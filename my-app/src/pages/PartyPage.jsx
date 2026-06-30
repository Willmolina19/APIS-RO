import { useLocalStorage } from '../hooks/useLocalStorage';
import { CharacterForm } from '../components/CharacterForm';
import { CharacterCard } from '../components/CharacterCard';

export const PartyPage = () => {
  const [party, setParty] = useLocalStorage('dnd-party', []);

  const handleAddCharacter = (newChar) => {
    setParty((prev) => [...prev, newChar]); // Operación sobre array: Agregar
  };

  const handleDeleteCharacter = (id) => {
    setParty((prev) => prev.filter(char => char.id !== id)); // Operación sobre array: Eliminar
  };

  return (
    <div className="app-container">
      <h2>🛡️ Gestión de Grupo (Party)</h2>
      <p className="subtitle">Crea y administra tus fichas de personaje guardadas en tu navegador.</p>

      <CharacterForm onAddCharacter={handleAddCharacter} />

      <h3 style={{ marginTop: '30px' }}>Miembros actuales: {party.length}</h3>
      <div className="cards-grid">
        {party.length === 0 ? (
          <p style={{ color: '#64748b' }}>Tu taberna está vacía. ¡Recluta algunos aventureros!</p>
        ) : (
          party.map(char => (
            <CharacterCard key={char.id} character={char} onDelete={handleDeleteCharacter} />
          ))
        )}
      </div>
    </div>
  );
};