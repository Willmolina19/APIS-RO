import { useState } from 'react';

export const CharacterForm = ({ onAddCharacter }) => {
  const [name, setName] = useState('');
  const [charClass, setCharClass] = useState('Guerrero');
  const [level, setLevel] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    onAddCharacter({
      id: Date.now().toString(),
      name,
      charClass,
      level: parseInt(level)
    });

    setName('');
    setCharClass('Guerrero');
    setLevel(1);
  };

  return (
    <form onSubmit={handleSubmit} className="controls-layout">
      <div className="form-group">
        <label>Nombre del personaje</label>
        <input type="text" placeholder="Ej: Aragorn, Jester..." value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Clase</label>
        <select value={charClass} onChange={(e) => setCharClass(e.target.value)} className="custom-select">
          <option value="Guerrero">Guerrero</option>
          <option value="Mago">Mago</option>
          <option value="Pícaro">Pícaro</option>
          <option value="Clérigo">Clérigo</option>
          <option value="Bárbaro">Bárbaro</option>
        </select>
      </div>
      <div className="form-group">
        <label>Nivel inicial</label>
        <input type="number" min="1" max="20" value={level} onChange={(e) => setLevel(e.target.value)} required />
      </div>
      <button type="submit" className="btn-update">Reclutar</button>
    </form>
  );
};