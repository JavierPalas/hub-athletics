import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoHub from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <div style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
        }}
          onClick={() => scrollToSection('hero')}>
          <img
            src={logoHub}
            alt="Hub Athletics"
            style={{
              height: '50px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center'
        }}
          className="desktop-nav">
          <button onClick={() => scrollToSection('about')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontWeight: 500,
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
            onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
            Nosotros
          </button>
          <button onClick={() => scrollToSection('hublab')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontWeight: 500,
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
            onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
            HUB LAB
          </button>
          <button onClick={() => scrollToSection('transformacion')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontWeight: 500,
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
            onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
            Transformación
          </button>
          <button onClick={() => scrollToSection('unete')} className="btn-primary" style={{
            padding: '0.75rem 1.5rem',
            fontSize: '0.9rem'
          }}>
            Únete
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          display: 'none',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
          background: 'var(--bg-secondary)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}
          className="mobile-menu">
          <button onClick={() => scrollToSection('about')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontWeight: 500,
            fontSize: '1.1rem',
            padding: '1rem',
            cursor: 'pointer',
            textAlign: 'left'
          }}>
            Nosotros
          </button>
          <button onClick={() => scrollToSection('hublab')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontWeight: 500,
            fontSize: '1.1rem',
            padding: '1rem',
            cursor: 'pointer',
            textAlign: 'left'
          }}>
            HUB LAB
          </button>
          <button onClick={() => scrollToSection('transformacion')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontWeight: 500,
            fontSize: '1.1rem',
            padding: '1rem',
            cursor: 'pointer',
            textAlign: 'left'
          }}>
            Transformación
          </button>
          <button onClick={() => scrollToSection('unete')} className="btn-primary">
            Únete
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
