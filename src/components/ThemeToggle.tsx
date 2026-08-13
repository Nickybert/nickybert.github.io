// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../hooks/useTheme'; 
import './ThemeToggle.css'; 

const ThemeToggle: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="theme-toggle-wrapper">
      <label className="theme-toggle-switch" htmlFor="theme-checkbox">
        <input
          type="checkbox"
          id="theme-checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          aria-label="Toggle theme" 
        />
        <span className="toggle-slider round"></span>
      </label>
      {/* Theme Toggle */}
      <span className="toggle-text">
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </span>
    </div>
  );
};

export default ThemeToggle;
