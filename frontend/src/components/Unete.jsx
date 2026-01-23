import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from '../components/ui/sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : '/api';

const Unete = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación simple
    if (!formData.name || !formData.email) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/leads`, formData);

      if (response.data.success) {
        toast.success(response.data.message || "¡Bienvenido al HUB! Nos pondremos en contacto contigo pronto.");
        setFormData({ name: '', email: '' });
      } else {
        toast.error("Hubo un problema al enviar tu información. Por favor intenta nuevamente.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);

      // Handle different error types
      if (error.response) {
        // Server responded with error status
        console.error('Server error data:', error.response.data);
        const errorMessage = error.response.data?.message || error.response.data?.detail || "Error al procesar tu solicitud";
        toast.error(errorMessage);
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received:', error.request);
        toast.error("No se pudo conectar con el servidor. Por favor verifica tu conexión.");
      } else {
        // Something else happened
        console.error('Error detail:', error.message);
        toast.error("Ocurrió un error inesperado. Por favor intenta nuevamente.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="unete" className="section section-dark" style={{
      position: 'relative'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left Column - Content */}
          <div>
            <span style={{
              color: 'var(--accent-primary)',
              fontWeight: 600,
              fontSize: '0.875rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              Empieza Hoy
            </span>

            <h2 className="heading-1" style={{
              marginTop: '1rem',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}>
              Únete al movimiento
            </h2>

            <p className="body-large" style={{
              marginBottom: '2rem',
              color: 'var(--text-secondary)'
            }}>
              El primer paso hacia tu transformación comienza aquí. Déjanos tus datos y nos pondremos en contacto para diseñar tu plan personalizado.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--accent-primary)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.25rem'
                }}>
                  1
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Completa el formulario</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Compártenos tu información de contacto</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--accent-primary)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.25rem'
                }}>
                  2
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Evaluación inicial</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Analizamos tu situación y objetivos</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--accent-primary)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.25rem'
                }}>
                  3
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Comienza tu transformación</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Arranca tu programa personalizado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '3rem'
          }}>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div>
                <label htmlFor="name" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                />
              </div>

              <div>
                <label htmlFor="email" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Enviando...' : 'Empezar ahora'}
                {!isSubmitting && <Send size={18} />}
              </button>

              <p style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textAlign: 'center',
                lineHeight: 1.5
              }}>
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo para ofrecerte información sobre nuestros programas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unete;
