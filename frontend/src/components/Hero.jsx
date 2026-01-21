import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBackground from '../assets/gym-background.gif';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
      }}>
        <img
          src={heroBackground}
          alt="Athlete training"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.7) 50%, rgba(237, 0, 140, 0.1) 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        padding: '2rem'
      }}>
        <div style={{
          maxWidth: '1000px',
          textAlign: 'center',
          margin: '0 auto',
          position: 'relative',
          paddingTop: '3rem'
        }}>

          <h1 className="display-heading" style={{
            color: 'var(--text-primary)',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            opacity: 0,
            animation: 'fadeInUp 0.8s ease-out 0.2s forwards',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            HUB ATHLETICS
          </h1>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0,
            animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
          }}>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--accent-primary)',
              position: 'relative',
              padding: '0 1rem'
            }}>
              OBSESSED WITH PROGRESS
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        opacity: 0,
        animation: 'fadeInUp 0.8s ease-out 1s forwards'
      }}>
        <div style={{
          width: '2px',
          height: '60px',
          background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
          animation: 'scrollIndicator 2s ease-in-out infinite'
        }} />
      </div>

      <style>{`
        @keyframes scrollIndicator {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(10px);
          }
        }

        @media (max-width: 768px) {
          .display-heading {
            font-size: clamp(2.5rem, 10vw, 4rem) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
