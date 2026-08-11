import React from 'react';
import { ArrowRight, Download, Terminal, Cpu, Database, Server, ShieldCheck } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const HeroTopology = ({ onExploreProjects, onContactClick }) => {
  return (
    <section id="hero" className="section hero-section" style={{ padding: '4rem 0 3rem' }}>
      <div className="hero-content cad-frame" style={{ padding: '3rem 2.5rem', width: '100%', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div className="status-badge" style={{ fontSize: '0.8rem' }}>
            <span className="status-dot"></span>
            <span>BACKEND DEVELOPER // CADPRO VN</span>
          </div>
        </div>

        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
          {DEVELOPER_PROFILE.name} — <span className="text-cyan">{DEVELOPER_PROFILE.title}</span>
        </h1>

        <p className="hero-bio" style={{ fontSize: '1.1rem', maxWidth: '960px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          {DEVELOPER_PROFILE.bio}
        </p>

        <div className="hero-ctas" style={{ marginBottom: '2.5rem' }}>
          <button className="btn btn-primary" onClick={onExploreProjects}>
            <span>XEM CÁC DỰ ÁN THỰC CHIẾN</span>
            <ArrowRight size={15} />
          </button>
          
        </div>

        {/* Highlighted Engineering Badges */}
        <div className="hero-metrics">
          {DEVELOPER_PROFILE.metrics.map((m, idx) => (
            <div key={idx} className="metric-item">
              <span className="metric-val">{m.value}</span>
              <span className="metric-lbl">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
