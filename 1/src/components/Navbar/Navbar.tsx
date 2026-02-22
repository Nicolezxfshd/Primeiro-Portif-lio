import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">Seu Nome</Link>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/#sobre" onClick={() => setIsOpen(false)}>Sobre</Link>
          <Link to="/#projetos" onClick={() => setIsOpen(false)}>Projetos</Link>
          <Link to="/#habilidades" onClick={() => setIsOpen(false)}>Habilidades</Link>
          <Link to="/#contato" onClick={() => setIsOpen(false)} className="contact-btn">Contato</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
