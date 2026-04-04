import React from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';
import { mockData } from '../mock';
import logoHub from '../assets/logo.png';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', padding: '4rem 2rem 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <img src={logoHub} alt="Hub Athletics" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.14rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Transformacion personal a traves del deporte, la disciplina y los habitos sostenibles.
            </p>
            <div style={{ fontWeight: 600, color: 'var(--accent-primary)', fontSize: '1.05rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Para atletas de resistencia
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1.20rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navegacion
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Nosotros', href: '#about' },
                { name: 'Programa', href: '#hublab' },
                { name: 'Resultados', href: '#transformacion' },
                { name: 'Unete', href: '#unete' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1.14rem' }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1.20rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contacto
            </h4>
            <a href="mailto:hubathletics1@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1.14rem' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(237, 0, 140, 0.1)', border: '1px solid var(--accent-primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                <Mail size={20} />
              </div>
              <span>hubathletics1@gmail.com</span>
            </a>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1.20rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Siguenos
            </h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={mockData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ width: '56px', height: '56px', background: 'rgba(237, 0, 140, 0.1)', border: '1px solid var(--accent-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                <Instagram size={28} />
              </a>
              <a href={mockData.socialLinks.youtube} target="_blank" rel="noopener noreferrer" style={{ width: '56px', height: '56px', background: 'rgba(237, 0, 140, 0.1)', border: '1px solid var(--accent-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                <Youtube size={28} />
              </a>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0 }}>
            Copyright {new Date().getFullYear()} Hub Athletics. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
