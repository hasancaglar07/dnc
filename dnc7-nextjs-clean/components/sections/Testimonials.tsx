'use client';

import { useState, useRef, useEffect } from 'react';

const referenceVideos = [
  { id: 1, thumbnail: 'https://i.vimeocdn.com/video/2147479138-4b84bb30634354cd5bc496bf8cb55a671da2bcf4791856d983922c7d7752282f-d_640x360?&r=pad&region=us', title: 'CW Energy Tanıtım' },
  { id: 2, thumbnail: 'https://i.vimeocdn.com/video/2147496870-909a882b4d50b4b158c0ebbc06bce9f0c62d2b34a83e7049eaa9d26bdde557ab-d_640x360?&r=pad&region=us', title: 'Spice Hotel' },
  { id: 3, thumbnail: 'https://i.vimeocdn.com/video/2056498936-f4bf8fd29706df5f51691730ef870981907a0f64ead80c7162931bdb58c109b5-d_640x360?&r=pad&region=us', title: 'Kurumsal Film' },
  { id: 4, thumbnail: 'https://i.vimeocdn.com/video/2147483984-a7b070b3b40d57c4dedcbb5e2ca83b434f3d0092ebd3b95bb7e118f87c17cd72-d_640x360?&r=pad&region=us', title: 'Reklam Filmi' },
  { id: 5, thumbnail: 'https://i.vimeocdn.com/video/2056548477-e51c9ff5fde382394361a381f4434be7d81435180d4c7a9b484b04b2404a2e41-d_640x360?&r=pad&region=us', title: 'Drone Çekim' },
  { id: 6, thumbnail: 'https://i.vimeocdn.com/video/2056512293-ae96f17f95343fa9043a7b7e0a1901ca5d5b6264509d85f5c1df335c8e2a1204-d_640x360?&r=pad&region=us', title: 'Etkinlik Filmi' },
  { id: 7, thumbnail: 'https://i.vimeocdn.com/video/2147505263-e2a1f30049fa75ae66f8f689d9fa8cc1fe4adc7921124d8041204c30cf2cb8ce-d_640x360?&r=pad&region=us', title: 'Sosyal Medya' },
  { id: 8, thumbnail: 'https://i.vimeocdn.com/video/2147479138-4b84bb30634354cd5bc496bf8cb55a671da2bcf4791856d983922c7d7752282f-d_640x360?&r=pad&region=us', title: 'Marka Filmi' },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Auto-scroll
  useEffect(() => {
    if (!isAutoScrolling || !scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.querySelector('.ref-card') as HTMLElement;
    const scrollAmount = card ? card.clientWidth + 32 : 300;

    autoScrollRef.current = setInterval(() => {
      if (!container) return;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 4000);

    return () => { if (autoScrollRef.current) clearInterval(autoScrollRef.current); };
  }, [isAutoScrolling]);

  const pauseAutoScroll = () => {
    setIsAutoScrolling(false);
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    setTimeout(() => setIsAutoScrolling(true), 4000);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      pauseAutoScroll();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('mousedown', pauseAutoScroll);
    el.addEventListener('touchstart', pauseAutoScroll);
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('mousedown', pauseAutoScroll);
      el.removeEventListener('touchstart', pauseAutoScroll);
    };
  }, []);

  return (
    <>
      <section id="referanslar" className="ref-video-section">
        {/* Decorative line */}
        <div className="ref-deco-line" />

        <div className="wrap">
          <div className="ref-header">
            <span className="ref-tag">REFERANS VİDEOLAR</span>
            <h2 className="ref-title">
              DNC7. video projeleri.<br />
              <em>öne çıkan işler.</em>
            </h2>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div className="ref-scroll-outer">
          <div className="ref-scroll" ref={scrollRef}>
            <div className="ref-track">
              {referenceVideos.map((v, i) => (
                <div
                  key={v.id}
                  className={`ref-card ${hoveredId === v.id ? 'ref-card--hover' : ''}`}
                  onMouseEnter={() => setHoveredId(v.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedVideo(v.thumbnail)}
                >
                  <div className="ref-card-inner">
                    <span className="ref-idx">{String(i + 1).padStart(2, '0')}</span>
                    <div className="ref-thumb">
                      <img src={v.thumbnail} alt={v.title} />
                      <div className="ref-overlay">
                        <svg className="ref-play" width="56" height="56" viewBox="0 0 56 56" fill="none">
                          <circle cx="28" cy="28" r="27" stroke="#F97316" strokeWidth="2" />
                          <polygon points="22 16 40 28 22 40" fill="white" />
                        </svg>
                      </div>
                    </div>
                    <div className="ref-meta">
                      <span className="ref-name">{v.title}</span>
                      <span className="ref-label">Video Prodüksiyon</span>
                    </div>
                    <div className="ref-accent-line" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="ref-hint">
            <span>KAYDIR</span>
            <svg width="32" height="12" viewBox="0 0 32 12"><path d="M0 6h24M20 1l5 5-5 5" stroke="rgba(249,115,22,.6)" strokeWidth="2" fill="none" /></svg>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedVideo && (
        <div className="ref-lightbox" onClick={() => setSelectedVideo(null)}>
          <button className="ref-lb-close" onClick={() => setSelectedVideo(null)}>✕</button>
          <img src={selectedVideo} alt="" className="ref-lb-img" onClick={e => e.stopPropagation()} />
        </div>
      )}

      <style jsx>{`
        /* ─── Section ─── */
        .ref-video-section {
          position: relative;
          background: #000;
          padding: 7rem 0 8rem;
          overflow: hidden;
        }

        .ref-deco-line {
          position: absolute;
          top: 0; left: 50%;
          width: 1px; height: 80px;
          background: linear-gradient(180deg, transparent, #F97316);
        }

        /* ─── Header ─── */
        .ref-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .ref-tag {
          display: inline-block;
          font-size: .7rem;
          letter-spacing: .35em;
          color: #F97316;
          font-weight: 700;
          border: 1px solid rgba(249,115,22,.3);
          padding: .45rem 1.2rem;
          border-radius: 40px;
          margin-bottom: 1.6rem;
        }

        .ref-title {
          font-size: clamp(2.2rem, 6vw, 4.2rem);
          font-weight: 900;
          line-height: 1.15;
          color: #fff;
          margin: 0;
          letter-spacing: -1px;
        }

        .ref-title em {
          font-style: italic;
          background: linear-gradient(135deg, #F97316, #FDBA74);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ─── Scroll ─── */
        .ref-scroll-outer { position: relative; }

        .ref-scroll {
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          scroll-behavior: smooth;
          cursor: grab;
          padding: 1rem 0 3rem;
        }
        .ref-scroll::-webkit-scrollbar { display: none; }
        .ref-scroll:active { cursor: grabbing; }

        .ref-track {
          display: flex;
          gap: 2rem;
          padding: 0 max(2rem, calc((100vw - 1400px) / 2));
          min-width: min-content;
        }

        /* ─── Card ─── */
        .ref-card {
          flex-shrink: 0;
          width: clamp(260px, 30vw, 340px);
          cursor: pointer;
          transition: transform .5s cubic-bezier(.4,0,.2,1);
        }

        .ref-card--hover { transform: translateY(-8px); }

        .ref-card-inner {
          position: relative;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color .4s, box-shadow .4s;
        }

        .ref-card--hover .ref-card-inner {
          border-color: rgba(249,115,22,.4);
          box-shadow: 0 30px 60px rgba(249,115,22,.15), 0 0 0 1px rgba(249,115,22,.2);
        }

        .ref-idx {
          position: absolute;
          top: -16px; left: 16px;
          font-size: 3rem;
          font-weight: 900;
          color: rgba(249,115,22,.08);
          font-family: 'Courier New', monospace;
          z-index: 1;
          pointer-events: none;
        }

        /* ─── Thumbnail ─── */
        .ref-thumb {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #111;
        }

        .ref-thumb img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform .6s ease;
        }

        .ref-card--hover .ref-thumb img { transform: scale(1.08); }

        .ref-overlay {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,.55);
          opacity: 0;
          transition: opacity .35s;
        }

        .ref-card--hover .ref-overlay { opacity: 1; }

        .ref-play {
          transform: scale(.85);
          transition: transform .4s cubic-bezier(.34,1.56,.64,1);
          filter: drop-shadow(0 4px 20px rgba(249,115,22,.5));
        }

        .ref-card--hover .ref-play { transform: scale(1); }

        /* ─── Meta ─── */
        .ref-meta {
          padding: 1rem 1.2rem;
          display: flex; flex-direction: column; gap: .25rem;
        }

        .ref-name {
          font-size: .95rem;
          font-weight: 700;
          color: #fff;
        }

        .ref-label {
          font-size: .7rem;
          letter-spacing: .12em;
          color: rgba(255,255,255,.4);
          text-transform: uppercase;
        }

        .ref-accent-line {
          height: 2px;
          background: linear-gradient(90deg, #F97316, transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .4s ease;
        }

        .ref-card--hover .ref-accent-line { transform: scaleX(1); }

        /* ─── Hint ─── */
        .ref-hint {
          position: absolute;
          bottom: 0; right: max(2rem, calc((100vw - 1400px) / 2));
          display: flex; align-items: center; gap: .6rem;
          font-size: .65rem; letter-spacing: .25em;
          color: rgba(249,115,22,.5);
          text-transform: uppercase;
        }

        .ref-hint svg { animation: hintArrow 2s ease-in-out infinite; }

        @keyframes hintArrow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(8px); }
        }

        /* ─── Lightbox ─── */
        .ref-lightbox {
          position: fixed; inset: 0;
          background: rgba(0,0,0,.95);
          display: flex; align-items: center; justify-content: center;
          z-index: 10000;
          padding: 2rem;
          animation: fadeIn .3s ease;
        }

        @keyframes fadeIn { from { opacity: 0; } }

        .ref-lb-close {
          position: absolute; top: 2rem; right: 2rem;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.2);
          color: #fff; font-size: 1.4rem;
          width: 48px; height: 48px;
          border-radius: 50%;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all .3s;
        }
        .ref-lb-close:hover { background: rgba(249,115,22,.2); border-color: #F97316; }

        .ref-lb-img {
          max-width: 90vw; max-height: 80vh;
          border-radius: 12px;
          box-shadow: 0 40px 80px rgba(0,0,0,.8);
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .ref-video-section { padding: 4rem 0 5rem; }
          .ref-header { margin-bottom: 2.5rem; }
          .ref-track { gap: 1.5rem; padding: 0 1.5rem; }
          .ref-card { width: 80vw; }
          .ref-hint { right: 1.5rem; }
        }
      `}</style>
    </>
  );
}
