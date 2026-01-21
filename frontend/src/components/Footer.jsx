import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';
import { mockData } from '../mock';
import logoHub from '../assets/logo.png';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '4rem 2rem 2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Column */}
          <div>
            <div style={{
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              <img
                src={logoHub}
                alt="Hub Athletics"
                style={{
                  height: '40px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              Transformación personal a través del deporte, la disciplina y los hábitos sostenibles.
            </p>
            <div style={{
              fontWeight: 600,
              color: 'var(--accent-primary)',
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Obsessed with progress
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontWeight: 700,
              marginBottom: '1rem',
              fontSize: '1rem',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Navegación
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {[
                { name: 'Inicio', href: '#hero' },
                { name: 'Nosotros', href: '#about' },
                { name: 'HUB LAB', href: '#hublab' },
                { name: 'Transformación', href: '#transformacion' },
                { name: 'Únete', href: '#unete' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{
              fontWeight: 700,
              marginBottom: '1rem',
              fontSize: '1rem',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Síguenos
            </h4>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a
                href={mockData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-primary)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <Instagram size={20} />
              </a>

              <a
                href={mockData.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-primary)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <Youtube size={20} />
              </a>

              <a
                href={mockData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-primary)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.875rem',
            margin: 0
          }}>
            © {new Date().getFullYear()} Hub Athletics. Todos los derechos reservados.
          </p>

          <div style={{
            display: 'flex',
            gap: '2rem'
          }}>
            <a
              href="#"
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:last-child {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
