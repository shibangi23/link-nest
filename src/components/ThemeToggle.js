import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  // Apply theme styles + background image
  const applyTheme = (theme) => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'light') {
            body.style.backgroundImage = "url('/images/light-bg.jpg')";

      root.style.setProperty('--bg-color', '#e7b4b4');
      root.style.setProperty('--text-color', '#222222');
      root.style.setProperty('--link-bg', '#4a90e2');
      root.style.setProperty('--link-hover-bg', '#357ABD');
    } else {
      root.style.setProperty('--bg-color', '#121212');
      root.style.setProperty('--text-color', '#eeeeee');
      root.style.setProperty('--link-bg', '#bb86fc');
      root.style.setProperty('--link-hover-bg', '#9f6ff2');
      body.style.backgroundImage = "url('/images/dark-bg.jpg')";
    }
  };

  // On first load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
    applyTheme(storedTheme);
  }, []);

  // Toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
