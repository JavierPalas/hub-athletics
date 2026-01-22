import React, { useState, useEffect } from 'react';
import { Cookie, X, Shield, Lock } from 'lucide-react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem('hubAthleticsCookieConsent');
        if (cookieConsent) return;

        // Listen for scroll events
        const handleScroll = () => {
            if (!hasScrolled && window.scrollY > 50) {
                setHasScrolled(true);
                setIsVisible(true);

                // Start animation after a brief delay for smoother effect
                setTimeout(() => {
                    setIsAnimating(true);
                }, 100);

                // Remove listener once triggered
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);

    const handleAcceptAll = () => {
        localStorage.setItem('hubAthleticsCookieConsent', 'all');
        closeBanner();
    };

    const handleAcceptNecessary = () => {
        localStorage.setItem('hubAthleticsCookieConsent', 'necessary');
        closeBanner();
    };

    const closeBanner = () => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsVisible(false);
        }, 600);
    };

    if (!isVisible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '1.5rem',
                left: '1.5rem',
                zIndex: 9999,
                transform: isAnimating ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(10px)',
                opacity: isAnimating ? 1 : 0,
                transition: 'transform 2.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
                transformOrigin: 'bottom left'
            }}
        >
            <div
                style={{
                    maxWidth: '380px',
                    background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.55) 0%, rgba(30, 30, 30, 0.50) 100%)',
                    backdropFilter: 'blur(28px)',
                    WebkitBackdropFilter: 'blur(28px)',
                    border: '1px solid rgba(237, 0, 140, 0.2)',
                    borderRadius: '16px',
                    padding: '1.25rem 1.5rem',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(237, 0, 140, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Animated gradient border */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, var(--accent-primary) 0%, #ff1493 50%, var(--accent-primary) 100%)',
                        backgroundSize: '200% 100%',
                        animation: 'gradientSlide 3s ease infinite',
                        opacity: 0.8
                    }}
                />

                {/* Content Container */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    {/* Header with Icon */}
                    <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            minWidth: '36px',
                            background: 'linear-gradient(135deg, rgba(237, 0, 140, 0.2) 0%, rgba(237, 0, 140, 0.05) 100%)',
                            border: '1px solid var(--accent-primary)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Cookie size={18} color="var(--accent-primary)" />
                        </div>

                        <h3 style={{
                            fontFamily: "'Montserrat', 'Inter', sans-serif",
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            color: 'var(--text-primary)',
                            margin: 0
                        }}>
                            Cookies
                        </h3>
                    </div>

                    {/* Text Content */}
                    <p style={{
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                        color: 'var(--text-secondary)',
                        margin: 0
                    }}>
                        Usamos cookies para mejorar tu experiencia. ¿Aceptas su uso?
                    </p>

                    {/* Buttons Section */}
                    <div style={{
                        display: 'flex',
                        gap: '0.5rem',
                        flexDirection: 'column'
                    }}>
                        {/* Accept All Button */}
                        <button
                            onClick={handleAcceptAll}
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                padding: '0.7rem 1.25rem',
                                background: 'linear-gradient(135deg, var(--accent-primary) 0%, #ff1493 100%)',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#ffffff',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 12px rgba(237, 0, 140, 0.3)',
                                width: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 16px rgba(237, 0, 140, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 12px rgba(237, 0, 140, 0.3)';
                            }}
                        >
                            Aceptar todas
                        </button>

                        {/* Necessary Only Button */}
                        <button
                            onClick={handleAcceptNecessary}
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 500,
                                fontSize: '0.8rem',
                                padding: '0.6rem 1rem',
                                background: 'transparent',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                borderRadius: '8px',
                                color: 'var(--text-secondary)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                width: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                                e.target.style.color = 'var(--text-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                                e.target.style.color = 'var(--text-secondary)';
                            }}
                        >
                            Solo necesarias
                        </button>
                    </div>
                </div>

                {/* CSS Animations */}
                <style>{`
                    @keyframes gradientSlide {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }

                    @media (max-width: 768px) {
                        .cookie-banner-content {
                            flex-direction: column !important;
                            align-items: flex-start !important;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default CookieBanner;
