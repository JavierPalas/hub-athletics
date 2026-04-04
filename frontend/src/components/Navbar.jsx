import React, { useState } from 'react';
import { Menu, X, Instagram, Youtube } from 'lucide-react';
import logoHub from '../assets/logo.png';
import { mockData } from '../mock';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout = null;

    const controlNavbar = () => {
      if (isOpen) {
        setIsVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isOpen]);

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
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.3s ease-in-out'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
        }}
          onClick={() => scrollToSection('hero')}>
          <img src={logoHub} alt="Hub Athletics" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
        </div>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
          <button onClick={() => scrollToSection('about')} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', fontWeight: 500, fontSize: '1.20rem', cursor: 'pointer', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
            Nosotros
          </button>
          <button onClick={() => scrollToSection('hublab')} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', fontWeight: 500, fontSize: '1.20rem', cursor: 'pointer', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
            Programa
          </button>
          <button onClick={() => scrollToSection('transformacion')} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', fontWeight: 500, fontSize: '1.20rem', cursor: 'pointer', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
            Resultados
          </button>
          <button onClick={() => scrollToSection('unete')} className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1.08rem' }}>
            Unete
          </button>
          <div style={{ display: 'flex', gap: '0.75rem', marginLeft: '0.5rem', paddingLeft: '1.5rem', borderLeft: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <a href={mockData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ width: '44px', height: '44px', background: 'rgba(237, 0, 140, 0.1)', border: '1px solid var(--accent-primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', boxShadow: '0 4px 15px rgba(237, 0, 140, 0.1)' }}>
              <Instagram size={22} />
            </a>
            <a href={mockData.socialLinks.youtube} target="_blank" rel="noopener noreferrer" style={{ width: '44px', height: '44px', background: 'rgba(237, 0, 140, 0.1)', border: '1px solid var(--accent-primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', boxShadow: '0 4px 15px rgba(237, 0, 140, 0.1)' }}>
              <Youtube size={22} />
            </a>
          </div>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }} className="mobile-menu-btn">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div style={{ display: 'none', flexDirection: 'column', gap: '1rem', padding: '2rem', background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }} className="mobile-menu">
          <button onClick={() => scrollToSection('about')} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', fontWeight: 500, fontSize: '1.32rem', padding: '1rem', cursor: 'pointer', textAlign: 'left' }}>Nosotros</button>
          <button onClick={() => scrollToSection('hublab')} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', fontWeight: 500, fontSize: '1.32rem', padding: '1rem', cursor: 'pointer', textAlign: 'left' }}>Programa</button>
          <button onClick={() => scrollToSection('transformacion')} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', fontWeight: 500, fontSize: '1.32rem', padding: '1rem', cursor: 'pointer', textAlign: 'left' }}>Resultados</button>
          <button onClick={() => scrollToSection('unete')} className="btn-primary">Unete</button>
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
