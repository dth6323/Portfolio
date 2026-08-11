import React, { useEffect } from 'react';
import { X, CheckCircle2, Calendar, Building2 } from 'lucide-react';

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

  const { title, category, company, period, description, metrics, techStack, architectureDetails } = project;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div 
        className="modal-content cad-frame" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Đóng cửa sổ dự án">
          <X size={24} />
        </button>

        <div className="project-header" style={{ marginBottom: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <span className="project-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Building2 size={13} />
                <span>{company} // {category}</span>
              </span>

              {/* Dedicated Period Badge */}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--signal-cyan)', background: 'rgba(0, 240, 255, 0.08)', padding: '0.2rem 0.65rem', border: '1px solid rgba(0, 240, 255, 0.25)', borderRadius: 'var(--radius-sm)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar size={13} />
                <span>THỜI GIAN THỰC HIỆN: {period}</span>
              </span>
            </div>

            <h2 id="case-study-title" style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>{title}</h2>
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
              THÁCH THỨC & NGHẼN BÌNH VÔI HỆ THỐNG
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              {architectureDetails?.problem}
            </p>
          </div>

          <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border-cad)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--signal-cyan)', marginBottom: '0.5rem' }}>
              GIẢI PHÁP THIẾT KẾ KIẾN TRÚC
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
              LUỒNG DỮ LIỆU TOPOLOGY HỆ THỐNG
            </h3>
            <div className="code-block" style={{ border: '1px solid var(--border-cad)' }}>
              <code>{architectureDetails.architectureDiagram}</code>
            </div>
          </div>
        )}

        {/* Key Engineering Decisions */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            QUYẾT ĐỊNH KỸ THUẬT & TỐI ƯU CỐT LÕI
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
            CÔNG NGHỆ SỬ DỤNG
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
