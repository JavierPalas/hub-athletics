import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from '../components/ui/sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const LEADS_ENDPOINT = process.env.REACT_APP_LEADS_ENDPOINT;

const getApiBase = () => {
  if (typeof window !== 'undefined') {
    const { hostname, pathname } = window.location;
    const isLocalHost = hostname === 'localhost' || hostname === '127.0.0.1';

    if (isLocalHost && pathname.startsWith('/hub-athletics')) {
      return '/hub-athletics/backend_php';
    }
  }

  if (BACKEND_URL) {
    return `${BACKEND_URL.replace(/\/$/, '').replace(/\/api$/, '')}/api`;
  }

  return '/api';
};

const Unete = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
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

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim()
    };

    if (!payload.name || !payload.email || !payload.phone) {
      toast.error('Por favor completa nombre, email y telefono');
      return;
    }

    setIsSubmitting(true);

    try {
      const endpoint = LEADS_ENDPOINT || `${getApiBase()}/leads.php`.replace('/api/leads.php', '/api/leads');
      const response = await axios.post(endpoint, payload);

      if (response.data.success) {
        toast.success(response.data.message || 'Bienvenido al HUB. Nos pondremos en contacto contigo pronto.');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        toast.error('Hubo un problema al enviar tu informacion. Por favor intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);

      if (error.response) {
        console.error('Server error data:', error.response.data);
        const errorMessage = error.response.data?.message || error.response.data?.detail || 'Error al procesar tu solicitud';
        toast.error(errorMessage);
      } else if (error.request) {
        console.error('No response received:', error.request);
        toast.error('No se pudo conectar con el servidor. Por favor verifica tu conexion.');
      } else {
        console.error('Error detail:', error.message);
        toast.error('Ocurrio un error inesperado. Por favor intenta nuevamente.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="unete" className="section section-dark" style={{
      position: 'relative'
    }}>
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
          <div>
            <span style={{
              color: 'var(--accent-primary)',
              fontWeight: 600,
              fontSize: '1.32rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              Empieza hoy
            </span>

            <h2 className="heading-1" style={{
              marginTop: '1rem',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}>
              Implementa el metodo HUB LAB
            </h2>

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
                  width: '64px',
                  height: '64px',
                  minWidth: '64px',
                  background: 'var(--accent-primary)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.75rem'
                }}>
                  1
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.4rem' }}>Rellena tus datos</div>
                  <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Compartenos tu informacion de contacto</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  minWidth: '64px',
                  background: 'var(--accent-primary)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.75rem'
                }}>
                  2
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.4rem' }}>Exploracion inicial</div>
                  <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Analizamos tu situacion y objetivos</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  minWidth: '64px',
                  background: 'var(--accent-primary)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.75rem'
                }}>
                  3
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.4rem' }}>Valoramos si tu perfil encaja</div>
                  <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Analisis de idoneidad con el perfil que trabajamos</div>
                </div>
              </div>
            </div>
          </div>

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
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Nombre completo
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  color: 'var(--text-primary)',
                  fontSize: '1.20rem',
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
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Correo electronico
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  color: 'var(--text-primary)',
                  fontSize: '1.20rem',
                  transition: 'border-color 0.3s ease'
                }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                />
              </div>

              <div>
                <label htmlFor="phone" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Telefono
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+34 600 000 000" required style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  color: 'var(--text-primary)',
                  fontSize: '1.20rem',
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
                fontSize: '0.90rem',
                color: 'var(--text-muted)',
                textAlign: 'center',
                lineHeight: 1.5
              }}>
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo para ofrecerte informacion sobre nuestros programas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unete;
