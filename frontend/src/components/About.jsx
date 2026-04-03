import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Planificación deportiva",
      description: "Entrenamiento adaptado al contexto de vida real de cada persona."
    },
    {
      icon: TrendingUp,
      title: "Sistematización de hábitos",
      description: "Aplicación práctica para ordenar tu vida a través del deporte."
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Entorno de personas con objetivos alineados."
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
                fontSize: '1.1rem',
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
              Programa de entrenamiento resistencia
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <p className="body-medium" style={{
                color: 'var(--text-secondary)'
              }}>
                que transforma los beneficios del deporte en herramientas para estructurar tu vida personal.
              </p>

              <p className="body-medium" style={{
                color: 'var(--text-secondary)'
              }}>
                Está basado en el método <strong style={{ color: 'var(--text-primary)' }}>HUB LAB</strong>, un sistema que integra la planificación deportiva con la ejecución de hábitos que sostienen el rendimiento en el largo plazo.
              </p>

              <p className="body-medium" style={{
                color: 'var(--text-secondary)'
              }}>
                Fundado por Fernando Broto y Javier Palacios, <strong style={{ color: 'var(--text-primary)' }}>HUB</strong> surge de una visión analítica del entrenamiento y el propósito de usar el deporte como medio de crecimiento personal.
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
