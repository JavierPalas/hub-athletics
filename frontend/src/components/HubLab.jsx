import React from 'react';
import { mockData } from '../mock';
import { CheckCircle2 } from 'lucide-react';
import hubLabImage from '../assets/hublab.jpg';

const HubLab = () => {
  return (
    <section id="hublab" className="section section-dark" style={{
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '5rem'
        }}>
          <span style={{
            color: 'var(--accent-primary)',
            fontWeight: 600,
            fontSize: '0.875rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            Nuestro Programa
          </span>

          <h2 className="heading-1" style={{
            marginTop: '1rem',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)'
          }}>
            HUB LAB
          </h2>

          <p className="body-large" style={{
            maxWidth: '700px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            El sistema completo que transforma tu cuerpo y mentalidad. Entrenamiento estructurado, hábitos optimizados y progreso continuo.
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Featured Image */}
          <div style={{
            gridColumn: window.innerWidth > 768 ? 'span 2' : 'span 1',
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            minHeight: '500px'
          }}>
            <img
              src={hubLabImage}
              alt="HUB LAB Training"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem',
              background: 'rgba(10, 10, 10, 0.9)',
              backdropFilter: 'blur(10px)',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid var(--border-subtle)'
            }}>
              <h3 className="heading-3" style={{
                marginBottom: '0.5rem'
              }}>
                Metodología Probada
              </h3>
              <p className="body-small">
                Sistema estructurado que combina entrenamiento físico de alto rendimiento con desarrollo de hábitos y mentalidad ganadora.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div style={{
            gridColumn: window.innerWidth > 768 ? 'span 1' : 'span 1',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {mockData.hubLabBenefits.slice(0, 2).map((benefit) => (
              <div key={benefit.id} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '2rem',
                transition: 'border-color 0.3s ease'
              }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--accent-primary)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <CheckCircle2 size={22} color="#ffffff" />
                </div>
                <h4 className="heading-3" style={{
                  fontSize: '1.25rem',
                  marginBottom: '0.75rem'
                }}>
                  {benefit.title}
                </h4>
                <p className="body-small">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {mockData.hubLabBenefits.slice(2).map((benefit) => (
            <div key={benefit.id} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              padding: '2rem',
              transition: 'border-color 0.3s ease'
            }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'var(--accent-primary)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <CheckCircle2 size={22} color="#ffffff" />
              </div>
              <h4 className="heading-3" style={{
                fontSize: '1.25rem',
                marginBottom: '0.75rem'
              }}>
                {benefit.title}
              </h4>
              <p className="body-small">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubLab;
