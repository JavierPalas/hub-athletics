import React from 'react';
import { mockData } from '../mock';
import { Quote } from 'lucide-react';
import transformationImage from '../assets/runner-outdoor.png';

const Transformacion = () => {
  return (
    <section id="transformacion" className="section section-darker">
      <div className="container">
        {/* Section Header */}
        <div style={{
          marginBottom: '4rem'
        }}>
          <span style={{
            color: 'var(--accent-primary)',
            fontWeight: 600,
            fontSize: '0.875rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            Casos Reales
          </span>

          <h2 className="heading-1" style={{
            marginTop: '1rem',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)'
          }}>
            Transformación que va más allá del gimnasio
          </h2>

          <p className="body-large" style={{
            maxWidth: '700px',
            color: 'var(--text-secondary)'
          }}>
            Resultados reales de personas que aplicaron el método Hub Athletics en su vida profesional y personal.
          </p>
        </div>

        {/* Hero Image */}
        <div style={{
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '4rem',
          height: '500px'
        }}>
          <img
            src={transformationImage}
            alt="Atleta Hub Athletics"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, transparent 60%)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '3rem',
            left: '3rem',
            right: '3rem',
            maxWidth: '600px'
          }}>
            <h3 className="heading-2" style={{
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Comunidad comprometida con el progreso
            </h3>
            <p className="body-medium" style={{
              color: 'var(--text-secondary)'
            }}>
              Únete a personas que comparten tu ambición y mentalidad de crecimiento constante.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {mockData.testimonials.map((testimonial) => (
            <div key={testimonial.id} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
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
                width: '40px',
                height: '40px',
                background: 'var(--accent-primary)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Quote size={22} color="#ffffff" />
              </div>

              <p className="body-medium" style={{
                color: 'var(--text-primary)',
                lineHeight: 1.7,
                flex: 1
              }}>
                {testimonial.quote}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--accent-primary)'
                  }}
                />
                <div>
                  <div style={{
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformacion;
