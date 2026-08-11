import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, Layers } from 'lucide-react';

export const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    // Lock body scrolling when modal is open
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { title, category, description, metrics, techStack, githubUrl, liveUrl, architectureDetails } = project;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div 
        className="modal-content cad-frame" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close case study modal">
          <X size={24} />
        </button>

        <div className="project-header" style={{ marginBottom: '1.25rem' }}>
          <div>
            <span className="project-tag" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
              {category} // CASE STUDY
            </span>
            <h2 id="case-study-title" style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>{title}</h2>
          </div>

          <div className="project-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Github size={15} />
                <span>GITHUB</span>
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink size={15} />
                <span>LIVE DEMO</span>
              </a>
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="hero-metrics" style={{ marginBottom: '1.75rem' }}>
          {metrics.map((m, idx) => (
            <div key={idx} className="metric-item">
              <span className="metric-val">{m.value}</span>
              <span className="metric-lbl">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Problem & Solution Breakdown */}
        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.75rem' }}>
          <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--signal-amber)', marginBottom: '0.5rem' }}>
              PROBLEM & BOTTLENECK STATEMENT
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              {architectureDetails?.problem}
            </p>
          </div>

          <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border-cad)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--signal-cyan)', marginBottom: '0.5rem' }}>
              ARCHITECTURAL SOLUTION
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              {architectureDetails?.solution}
            </p>
          </div>
        </div>

        {/* Topology Schematic Flow */}
        {architectureDetails?.architectureDiagram && (
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              SYSTEM DATA FLOW TOPOLOGY
            </h3>
            <div className="code-block" style={{ border: '1px solid var(--border-cad)' }}>
              <code>{architectureDetails.architectureDiagram}</code>
            </div>
          </div>
        )}

        {/* Key Engineering Decisions */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            KEY ENGINEERING DECISIONS & TRADE-OFFS
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {architectureDetails?.keyDecisions?.map((decision, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} className="text-cyan" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{decision}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            TECHNOLOGY STACK
          </h3>
          <div className="tech-stack-badges">
            {techStack.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
