// src/components/ThemeToggle.tsx
import React from 'react';
import { Sun, Moon } from 'lucide-react'; // Import the icons
import { useTheme } from '../hooks/useTheme';
import './ThemeToggle.css'; // Keep the CSS file link

const ThemeToggle: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* If theme is light, show the crescent Moon */}
      {theme === 'light' ? (
        <Moon className="theme-icon moon-icon" size={18} strokeWidth={1.5} />
      ) : (
        /* If theme is dark, show the Sun */
        <Sun className="theme-icon sun-icon" size={18} strokeWidth={1.5} />
      )}
    </button>
  );
};

export default ThemeToggle;