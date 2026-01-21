import React, { useEffect, useState, useRef } from 'react';
import parallaxImage from '../assets/hero.jpg';

const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        // Calculate position relative to viewport
        const rect = sectionRef.current.getBoundingClientRect();
        // Move background at 40% of scroll speed
        setOffsetY(rect.top * 0.4);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        height: '600px', // Reduced height slightly for better framing
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
      }}
    >
      {/* Background con Parallax Correcto */}
      <div style={{
        position: 'absolute',
        top: '-20%', // Give more room for movement
        left: 0,
        width: '100%',
        height: '140%', // Taller to allow parallax movement
        transform: `translateY(${offsetY}px)`,
        zIndex: 0,
        willChange: 'transform' // Performance optimization
      }}>
        <img
          src={parallaxImage}
          alt="Gym Equipment"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.8, // Increased opacity slightly
            filter: 'brightness(0.8) contrast(1.2)' // Adjusted for text readability
          }}
        />
        {/* Gradient Overlay for Text Readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'
        }} />
      </div>

      {/* Contenido */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        padding: '2rem',
        maxWidth: '900px',
        width: '100%'
      }}>
        <div style={{
          marginBottom: '2rem',
          opacity: 0,
          animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
        }}>
          <span style={{
            color: 'var(--accent-primary)',
            fontWeight: 600,
            fontSize: '0.875rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            background: 'rgba(0,0,0,0.4)',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            backdropFilter: 'blur(4px)'
          }}>
            Metodología Comprobada
          </span>
        </div>

        <h2 className="heading-1" style={{
          color: '#ffffff',
          marginBottom: '1.5rem',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          opacity: 0,
          animation: 'fadeInUp 0.8s ease-out 0.4s forwards',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)'
        }}>
          Entrena como un atleta profesional
        </h2>

        <p className="body-large" style={{
          color: 'rgba(255,255,255,0.9)',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          lineHeight: 1.7,
          textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          opacity: 0,
          animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
        }}>
          Equipamiento de primer nivel, coaching personalizado y una comunidad que te impulsa a superar tus límites cada día.
        </p>

        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          opacity: 0,
          animation: 'fadeInUp 0.8s ease-out 0.8s forwards'
        }}>
          {[
            { number: '500+', label: 'Miembros Activos' },
            { number: '15+', label: 'Años de Experiencia' },
            { number: '98%', label: 'Satisfacción' }
          ].map((stat, index) => (
            <div key={index} style={{
              textAlign: 'center',
              flex: '1 1 150px',
              background: 'rgba(255,255,255,0.05)',
              padding: '1.5rem',
              borderRadius: '12px',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                color: 'var(--accent-primary)',
                lineHeight: 1,
                marginBottom: '0.5rem',
                textShadow: '0 0 20px rgba(237, 0, 140, 0.4)'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.8)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Parallax;
