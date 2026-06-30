import React from 'react';

export const CharacterCard = React.memo(({ character, onDelete }) => {
  return (
    <div className="char-card">
      <div className="char-avatar">🛡️</div>
      <h3>{character.name}</h3>
      <p className="char-meta">Clase: {character.charClass} | Nivel: {character.level}</p>
      <button onClick={() => onDelete(character.id)} className="btn-delete">Retirar del Grupo</button>
    </div>
  );
});

CharacterCard.displayName = 'CharacterCard';