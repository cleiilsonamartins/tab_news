import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MeuApp</a>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu} aria-label="Abrir menu">
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </button>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="/sobre" onClick={() => setIsOpen(false)}>Sobre</a></li>
        <li><a href="/servicos" onClick={() => setIsOpen(false)}>Serviços</a></li>
        <li><a href="/contato" onClick={() => setIsOpen(false)}>Contato</a></li>
      </ul>
    </nav>
  );
}
