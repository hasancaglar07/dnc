'use client';

import { useState, useRef, useEffect } from 'react';

// Tanıtım Filmleri Data - Tam Liste (14 Video)
const promotionalVideos = [
  {
    id: 1,
    vimeoId: '1184365492',
    thumbnail: 'https://i.vimeocdn.com/video/2147479138-4b84bb30634354cd5bc496bf8cb55a671da2bcf4791856d983922c7d7752282f-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 2,
    vimeoId: '1184362781',
    thumbnail: 'https://i.vimeocdn.com/video/2147496870-909a882b4d50b4b158c0ebbc06bce9f0c62d2b34a83e7049eaa9d26bdde557ab-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 3,
    vimeoId: '1184359223',
    thumbnail: 'https://i.vimeocdn.com/video/2056498936-f4bf8fd29706df5f51691730ef870981907a0f64ead80c7162931bdb58c109b5-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 4,
    vimeoId: '1184357793',
    thumbnail: 'https://i.vimeocdn.com/video/2147483984-a7b070b3b40d57c4dedcbb5e2ca83b434f3d0092ebd3b95bb7e118f87c17cd72-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 5,
    vimeoId: '1184349027',
    thumbnail: 'https://i.vimeocdn.com/video/2056548477-e51c9ff5fde382394361a381f4434be7d81435180d4c7a9b484b04b2404a2e41-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 6,
    vimeoId: '1184347798',
    thumbnail: 'https://i.vimeocdn.com/video/2056512293-ae96f17f95343fa9043a7b7e0a1901ca5d5b6264509d85f5c1df335c8e2a1204-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 7,
    vimeoId: '1184345822',
    thumbnail: 'https://i.vimeocdn.com/video/2147505263-e2a1f30049fa75ae66f8f689d9fa8cc1fe4adc7921124d8041204c30cf2cb8ce-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 8,
    vimeoId: '1184343554',
    thumbnail: 'https://i.vimeocdn.com/video/2147479138-4b84bb30634354cd5bc496bf8cb55a671da2bcf4791856d983922c7d7752282f-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 9,
    vimeoId: '1116802661',
    thumbnail: 'https://i.vimeocdn.com/video/2147496870-909a882b4d50b4b158c0ebbc06bce9f0c62d2b34a83e7049eaa9d26bdde557ab-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 10,
    vimeoId: '1116793981',
    thumbnail: 'https://i.vimeocdn.com/video/2056498936-f4bf8fd29706df5f51691730ef870981907a0f64ead80c7162931bdb58c109b5-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 11,
    vimeoId: '1116770115',
    thumbnail: 'https://i.vimeocdn.com/video/2147483984-a7b070b3b40d57c4dedcbb5e2ca83b434f3d0092ebd3b95bb7e118f87c17cd72-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 12,
    vimeoId: '1116760970',
    thumbnail: 'https://i.vimeocdn.com/video/2056548477-e51c9ff5fde382394361a381f4434be7d81435180d4c7a9b484b04b2404a2e41-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 13,
    vimeoId: '1116741515',
    thumbnail: 'https://i.vimeocdn.com/video/2056512293-ae96f17f95343fa9043a7b7e0a1901ca5d5b6264509d85f5c1df335c8e2a1204-d_640x360?&r=pad&region=us',
    platform: 'vimeo',
  },
  {
    id: 14,
    vimeoId: 'YGr5xZ20kiY',
    thumbnail: 'https://img.youtube.com/vi/YGr5xZ20kiY/maxresdefault.jpg',
    platform: 'youtube',
  },
];

export default function Services() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector('.film-card')?.clientWidth || 500;
    const gap = 48; // 3rem = 48px
    const scrollAmount = cardWidth + gap;

    autoScrollIntervalRef.current = setInterval(() => {
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      if (currentScroll >= maxScroll) {
        // Reset to start for infinite loop
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll to next card
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 5000); // 5 seconds

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);

  const handleWheel = (e: WheelEvent) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      setIsAutoScrolling(false); // Pause auto-scroll on manual interaction
      scrollContainerRef.current.scrollLeft += e.deltaY;

      // Resume auto-scroll after 3 seconds of inactivity
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      setTimeout(() => setIsAutoScrolling(true), 3000);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel as any, { passive: false });
      
      // Pause auto-scroll on user interaction
      const handleUserInteraction = () => {
        setIsAutoScrolling(false);
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
        }
        setTimeout(() => setIsAutoScrolling(true), 3000);
      };

      container.addEventListener('mousedown', handleUserInteraction);
      container.addEventListener('touchstart', handleUserInteraction);

      return () => {
        container.removeEventListener('wheel', handleWheel as any);
        container.removeEventListener('mousedown', handleUserInteraction);
        container.removeEventListener('touchstart', handleUserInteraction);
      };
    }
  }, []);

  return (
    <>
      {/* Öne Çıkan Films */}
      <section id="hizmetler" className="cinematic-films-section">
        <div className="films-container">
          {/* Film Grain Overlay */}
          <div className="film-grain"></div>
          
          {/* Ambient Glow */}
          <div className="ambient-glow" style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,215,0,0.1), transparent 40%)`
          }}></div>

          {/* Header */}
          <div className="films-header">
            <div className="films-tag">PORTFOLIO</div>
            <h2 className="films-title">
              <span className="films-title-line">Öne Çıkan</span>
              <span className="films-title-line films-title-emphasized">Films</span>
            </h2>
            <div className="films-subtitle">Premium Cinematic Productions</div>
          </div>

          {/* Horizontal Scroll Gallery */}
          <div className="films-scroll-wrapper">
            <div className="films-scroll-container" ref={scrollContainerRef}>
              <div className="films-track">
                {promotionalVideos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`film-card ${hoveredIndex === index ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => {
                      const videoUrl = video.platform === 'youtube'
                        ? `https://www.youtube.com/embed/${video.vimeoId}?autoplay=1`
                        : `https://player.vimeo.com/video/${video.vimeoId}?autoplay=1`;
                      setSelectedVideo(videoUrl);
                    }}
                    style={{
                      transform: hoveredIndex === index 
                        ? 'scale(1.05) translateY(-10px) rotateY(0deg)' 
                        : hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1
                        ? 'scale(0.95) rotateY(5deg)'
                        : 'scale(1) rotateY(0deg)',
                    }}
                  >
                    {/* Film Number */}
                    <div className="film-number">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </div>

                    {/* Film Frame */}
                    <div className="film-frame">
                      <div className="film-sprocket-top"></div>
                      <div className="film-image-wrapper">
                        <img 
                          src={video.thumbnail} 
                          alt={`Film ${index + 1}`}
                          className="film-image"
                        />
                        <div className="film-overlay">
                          <div className="play-button-cinematic">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                              <circle cx="40" cy="40" r="38" stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none" />
                              <circle cx="40" cy="40" r="38" stroke="rgba(255,215,0,0.5)" strokeWidth="2" fill="none" className="play-ring" />
                              <path d="M32 24L56 40L32 56V24Z" fill="white" />
                            </svg>
                          </div>
                          <div className="film-info">
                            <div className="film-label">PLAY FILM</div>
                          </div>
                        </div>
                      </div>
                      <div className="film-sprocket-bottom"></div>
                    </div>

                    {/* Glow Effect */}
                    <div className="film-glow"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
              <div className="scroll-indicator-text">DRAG TO EXPLORE</div>
              <div className="scroll-indicator-arrow">
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <path d="M0 10 L30 10 M25 5 L30 10 L25 15" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal-cinematic" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content-cinematic" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close-cinematic" onClick={() => setSelectedVideo(null)}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="24" y1="8" x2="8" y2="24" />
                <line x1="8" y1="8" x2="24" y2="24" />
              </svg>
            </button>
            <div className="video-wrapper-cinematic">
              <iframe
                src={selectedVideo}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Cinematic Film"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .cinematic-films-section {
          position: relative;
          background: linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
          padding: 8rem 0 10rem;
          overflow: hidden;
        }

        .film-grain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
          animation: grain 8s steps(10) infinite;
        }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          30% { transform: translate(3%, -15%); }
          50% { transform: translate(12%, 9%); }
          70% { transform: translate(9%, 4%); }
          90% { transform: translate(-1%, 7%); }
        }

        .ambient-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.6;
          transition: background 0.3s ease;
        }

        .films-container {
          position: relative;
          max-width: 100%;
        }

        .films-header {
          text-align: center;
          margin-bottom: 5rem;
          padding: 0 2rem;
          overflow: visible;
        }

        .films-tag {
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          color: rgba(255, 215, 0, 0.8);
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .films-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          line-height: 1.1;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
          overflow: visible;
        }

        .films-title-line {
          display: block;
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          white-space: nowrap;
          overflow: visible;
        }

        .films-title-emphasized {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
          text-shadow: 0 0 80px rgba(255, 215, 0, 0.3);
          filter: drop-shadow(0 0 30px rgba(255, 215, 0, 0.4));
        }

        .films-subtitle {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.15em;
          margin-top: 1.5rem;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: visible;
        }

        .films-scroll-wrapper {
          position: relative;
          width: 100%;
        }

        .films-scroll-container {
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: grab;
          padding: 2rem 0 4rem;
        }

        .films-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .films-scroll-container:active {
          cursor: grabbing;
        }

        .films-track {
          display: flex;
          gap: 3rem;
          padding: 0 max(2rem, calc((100vw - 1600px) / 2));
          min-width: min-content;
        }

        .film-card {
          position: relative;
          flex-shrink: 0;
          width: clamp(320px, 40vw, 500px);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          perspective: 1000px;
        }

        .film-number {
          position: absolute;
          top: -40px;
          left: 20px;
          font-size: 4rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.05);
          z-index: 1;
          font-family: 'Courier New', monospace;
        }

        .film-frame {
          position: relative;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 215, 0, 0.1),
            inset 0 0 20px rgba(0, 0, 0, 0.3);
        }

        .film-sprocket-top,
        .film-sprocket-bottom {
          height: 12px;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 8px,
            rgba(255, 255, 255, 0.1) 8px,
            rgba(255, 255, 255, 0.1) 12px,
            transparent 12px,
            transparent 20px
          );
          border-radius: 2px;
        }

        .film-sprocket-top {
          margin-bottom: 1rem;
        }

        .film-sprocket-bottom {
          margin-top: 1rem;
        }

        .film-image-wrapper {
          position: relative;
          aspect-ratio: 21 / 9;
          border-radius: 4px;
          overflow: hidden;
          background: #000;
        }

        .film-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .film-card:hover .film-image {
          transform: scale(1.1);
        }

        .film-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(255, 215, 0, 0.2) 100%
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .film-card:hover .film-overlay {
          opacity: 1;
        }

        .play-button-cinematic {
          transform: scale(0.8);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .film-card:hover .play-button-cinematic {
          transform: scale(1);
        }

        .play-ring {
          animation: pulsate 2s ease-in-out infinite;
        }

        @keyframes pulsate {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .film-info {
          margin-top: 1.5rem;
        }

        .film-label {
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: white;
          font-weight: 700;
          text-transform: uppercase;
        }

        .film-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          filter: blur(40px);
        }

        .film-card:hover .film-glow {
          opacity: 1;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 0;
          right: 4rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          opacity: 0.6;
        }

        .scroll-indicator-text {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
        }

        .scroll-indicator-arrow {
          animation: scrollArrow 2s ease-in-out infinite;
        }

        @keyframes scrollArrow {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }

        /* Video Modal */
        .video-modal-cinematic {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.98);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 2rem;
          backdrop-filter: blur(20px);
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .video-modal-content-cinematic {
          position: relative;
          width: 100%;
          max-width: 1600px;
          animation: modalSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes modalSlideIn {
          from {
            transform: scale(0.8) translateY(50px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        .video-modal-close-cinematic {
          position: absolute;
          top: -60px;
          right: 0;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .video-modal-close-cinematic:hover {
          background: rgba(255, 215, 0, 0.2);
          border-color: rgba(255, 215, 0, 0.5);
          transform: rotate(90deg) scale(1.1);
        }

        .video-wrapper-cinematic {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 
            0 50px 100px rgba(0, 0, 0, 0.9),
            0 0 0 1px rgba(255, 215, 0, 0.2),
            0 0 100px rgba(255, 215, 0, 0.1);
        }

        .video-wrapper-cinematic iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .cinematic-films-section {
            padding: 4rem 0 6rem;
          }

          .films-header {
            margin-bottom: 3rem;
          }

          .films-title {
            font-size: clamp(2.5rem, 12vw, 4rem);
          }

          .films-subtitle {
            font-size: 0.7rem;
          }

          .films-track {
            gap: 2rem;
            padding: 0 1.5rem;
          }

          .film-card {
            width: 85vw;
          }

          .film-number {
            font-size: 2.5rem;
            top: -30px;
          }

          .scroll-indicator {
            right: 2rem;
            bottom: 1rem;
          }

          .video-modal-cinematic {
            padding: 1rem;
          }

          .video-modal-close-cinematic {
            top: -50px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </>
  );
}
