import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
 
  const [theme, setTheme] = useState('app-theme-dark'); 


  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'app-theme-dark' ? 'app-theme-light' : 'app-theme-dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Tu contenedor original se queda exactamente igual */}
      <div className={`app-container ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}