import React from 'react';
import Header from './components/Header';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './Background.css'; // Make sure the path is correct


function App() {
   const links = [
    { label: 'My Portfolio', url: 'https://your-portfolio.com' },
    { label: 'GitHub', url: 'https://github.com/shibangi23' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shibangi23/' },
    { label: 'Blog', url: 'https://yourblog.com' },
  ];

  return (
    <div className="app">
    <ThemeToggle />
    <Header />
    <div className="links">
      {links.map((link, index) => (
        <LinkButton key={index} label={link.label} url={link.url} />
      ))}
    </div>
    <Footer />
    </div>
  );
}

export default App;
