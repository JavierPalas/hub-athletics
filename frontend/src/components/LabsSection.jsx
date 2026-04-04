import React, { useState, useEffect, useRef } from 'react';
import { Dumbbell, Brain, MousePointerClick } from 'lucide-react';

import trainerAthlete from '../assets/trainer-athlete.jpg';
import trainerInner from '../assets/trainer-inner.jpg';

const LabsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const labs = [
    {
      id: 1,
      icon: Dumbbell,
      title: 'Athlete LAB',
      description: 'Transformas tu cuerpo y tu capacidad fisica',
      trainerImage: trainerAthlete
    },
    {
      id: 2,
      icon: Brain,
      title: 'System LAB',
      description: 'Transformas tu forma de pensar y empiezas a ejecutar',
      trainerImage: trainerInner
    }
  ];

  return (
    <section id="hublab" ref={sectionRef} className="section section-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(237, 0, 140, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}>
          <h2 className="heading-1" style={{ marginTop: '1rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontSize: 'clamp(3rem, 5vw, 4rem)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            HUB LAB
          </h2>
          <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.50rem' }}>
            Un metodo, una vision, una cultura aplicada al dia a dia.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {labs.map((lab, index) => (
            <FlipCard key={lab.id} lab={lab} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>

      <style>{`
        .flip-card {
          perspective: 1000px;
          height: 400px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 16px;
          overflow: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 8px rgba(237, 0, 140, 0.4));
          }
          50% {
            transform: scale(1.15);
            filter: drop-shadow(0 0 20px rgba(237, 0, 140, 0.8));
          }
        }
        @keyframes floatBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .hover-hint-icon {
          animation: pulseGlow 2s ease-in-out infinite, floatBounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

const FlipCard = ({ lab, index, isVisible }) => {
  const IconComponent = lab.icon;

  return (
    <div className="flip-card" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(50px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out', transitionDelay: `${index * 0.15}s` }}>
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ background: 'linear-gradient(145deg, rgba(30, 30, 30, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2.5rem', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, rgba(237, 0, 140, 0.2) 0%, rgba(237, 0, 140, 0.1) 100%)', border: '1px solid var(--accent-primary)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <IconComponent size={36} color="var(--accent-primary)" />
          </div>
          <h3 style={{ fontFamily: "'Montserrat', 'Inter', sans-serif", fontWeight: 800, fontSize: 'clamp(1.75rem, 3vw, 2rem)', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.1 }}>
            {lab.title}
          </h3>
          <p style={{ fontSize: '1.14rem', lineHeight: 1.6, color: 'var(--text-primary)', maxWidth: '280px', textWrap: 'balance', opacity: 1, fontWeight: 500 }}>
            {lab.description}
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <div className="hover-hint-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(237, 0, 140, 0.15) 0%, rgba(237, 0, 140, 0.05) 100%)', border: '1px solid rgba(237, 0, 140, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <MousePointerClick size={22} color="var(--accent-primary)" />
            </div>
          </div>
        </div>
        <div className="flip-card-back" style={{ background: 'var(--bg-card)', border: '1px solid var(--accent-primary)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <img src={lab.trainerImage} alt={`Trainer ${lab.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top, rgba(10, 10, 10, 0.95) 0%, transparent 100%)', pointerEvents: 'none' }} />
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Montserrat', 'Inter', sans-serif", fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Head of {lab.title}
            </h3>
            <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)' }}>
              {lab.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabsSection;
