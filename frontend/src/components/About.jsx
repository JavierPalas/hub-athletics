import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Disciplina",
      description: "La base de cualquier transformación real. Sin atajos, sin excusas."
    },
    {
      icon: TrendingUp,
      title: "Progreso Medible",
      description: "Resultados tangibles en cada sesión. Datos sobre emociones."
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Rodearte de personas que comparten tu ambición y mentalidad."
    }
  ];

  return (
    <section id="about" className="section section-darker">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Left Column - Main Content */}
          <div style={{
            gridColumn: 'span 1'
          }}>
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <span style={{
                color: 'var(--accent-primary)',
                fontWeight: 600,
                fontSize: '0.875rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}>
                Quiénes Somos
              </span>
            </div>

            <h2 className="heading-1" style={{
              marginBottom: '2rem',
              color: 'var(--text-primary)'
            }}>
              Más que un gimnasio
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <p className="body-medium" style={{
                color: 'var(--text-secondary)'
              }}>
                Hub Athletics nació de una convicción: <strong style={{ color: 'var(--text-primary)' }}>el progreso sostenible requiere método, no motivación pasajera</strong>.
              </p>

              <p className="body-medium" style={{
                color: 'var(--text-secondary)'
              }}>
                Trabajamos con personas ambiciosas que entienden que la transformación física es solo el principio. Construimos un sistema completo que optimiza tu cuerpo, mente y hábitos diarios.
              </p>

              <p className="body-medium" style={{
                color: 'var(--text-secondary)'
              }}>
                No vendemos inspiración vacía. Ofrecemos estructura, accountability y resultados medibles que se traducen en todas las áreas de tu vida.
              </p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div style={{
            gridColumn: 'span 1',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '2rem',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--accent-primary)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <Icon size={24} color="#ffffff" />
                  </div>

                  <h3 className="heading-3" style={{
                    marginBottom: '1rem',
                    fontSize: '1.5rem'
                  }}>
                    {value.title}
                  </h3>

                  <p className="body-small" style={{
                    color: 'var(--text-secondary)'
                  }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
