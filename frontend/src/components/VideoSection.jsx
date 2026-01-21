import React, { useState } from 'react';
import { Play } from 'lucide-react';
import videoCover from '../assets/video-cover.jpg';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <section className="section section-dark" style={{ padding: '0' }}>
            <div className="container" style={{ maxWidth: '1000px', padding: '4rem 2rem' }}>

                {/* Header - Optional, keeps flow consistent */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase'
                    }}>
                        En Acción
                    </span>
                    <h2 className="heading-2" style={{ color: 'var(--text-primary)', marginTop: '1rem' }}>
                        Vive la Experiencia HUB
                    </h2>
                </div>

                {/* Video Wrapper */}
                <div style={{
                    position: 'relative',
                    paddingBottom: '56.25%', // 16:9 Aspect Ratio
                    height: 0,
                    background: '#000',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    border: '1px solid var(--border-subtle)'
                }}>

                    {!isPlaying ? (
                        // Custom Thumbnail & Play Button
                        <div
                            onClick={handlePlay}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                group: 'video-trigger' // Custom identifier for hover logic
                            }}
                            className="video-cover-container"
                        >
                            {/* Cover Image */}
                            <img
                                src={videoCover}
                                alt="Video Cover"
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: 0.8,
                                    transition: 'opacity 0.3s ease, transform 0.5s ease',
                                }}
                                className="video-cover-img"
                            />

                            {/* Play Button Circle */}
                            <div style={{
                                position: 'relative',
                                zIndex: 2,
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(237, 0, 140, 0.9)', // Primary accent
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 0 0 rgba(237, 0, 140, 0.7)',
                                animation: 'pulse-pink 2s infinite',
                                transition: 'transform 0.3s ease, background-color 0.3s ease'
                            }}
                                className="play-button">
                                <Play fill="white" stroke="white" size={32} style={{ marginLeft: '4px' }} /> {/* Offset slightly to visual center */}
                            </div>

                            {/* Styles for hover interactions */}
                            <style>{`
                .video-cover-container:hover .video-cover-img {
                  opacity: 0.6;
                  transform: scale(1.05);
                }
                .video-cover-container:hover .play-button {
                  transform: scale(1.1);
                  background-color: #ff1a9d;
                }
                @keyframes pulse-pink {
                  0% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 rgba(237, 0, 140, 0.7);
                  }
                  70% {
                    transform: scale(1);
                    box-shadow: 0 0 0 20px rgba(237, 0, 140, 0);
                  }
                  100% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 rgba(237, 0, 140, 0);
                  }
                }
              `}</style>
                        </div>
                    ) : (
                        // YouTube Iframe
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/AxiAKmZNDfk?autoplay=1&controls=0&rel=0&modestbranding=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                border: 'none'
                            }}
                        ></iframe>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
