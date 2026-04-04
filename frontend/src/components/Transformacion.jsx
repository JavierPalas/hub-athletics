import React from 'react';
import { mockData } from '../mock';
import { Quote } from 'lucide-react';
import transformationImage from '../assets/runner-outdoor.png';

const Transformacion = () => {
  return (
    <section id="transformacion" className="section section-darker">
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            color: 'var(--accent-primary)',
            fontWeight: 600,
            fontSize: '1.32rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            Donde el método se convierte en resultados
          </span>
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
                    fontSize: '1.05rem',
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
