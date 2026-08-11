import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Calendar, Building2, GraduationCap, Briefcase } from 'lucide-react';

export const WorkExperience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2 className="section-title">
          Hành Trình <span className="text-cyan">Kinh Nghiệm</span>
        </h2>
        <p className="section-subtitle">
          Lịch sử thời gian công tác và quá trình phát triển sự nghiệp kỹ thuật.
        </p>
      </div>

      {/* Horizontal CAD Timeline Container */}
      <div className="horizontal-timeline-wrapper cad-frame" style={{ padding: '2.5rem 2rem 2rem', position: 'relative' }}>
        {/* Connecting Horizontal Line Track */}
        <div 
          className="timeline-track-line"
          style={{
            position: 'absolute',
            top: '3.75rem',
            left: '3rem',
            right: '3rem',
            height: '2px',
            background: 'linear-gradient(to right, var(--signal-cyan), var(--signal-emerald), rgba(0, 240, 255, 0.3))',
            zIndex: 1
          }}
        />

        {/* Symmetrical 3-Step Cards Grid */}
        <div 
          className="horizontal-timeline-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            position: 'relative',
            alignItems: 'stretch',
            zIndex: 2
          }}
        >
          {WORK_EXPERIENCE.map((exp, idx) => {
            return (
              <div 
                key={exp.id} 
                className="timeline-step-card"
                style={{
                  background: 'var(--bg-slate)',
                  border: '1px solid var(--border-cad)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem 1.25rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  height: '100%',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {/* Glowing Node Marker */}
                  <div 
                    className="timeline-node-dot"
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: idx === 0 ? 'var(--signal-emerald)' : 'var(--signal-cyan)',
                      boxShadow: `0 0 10px ${idx === 0 ? 'var(--signal-emerald)' : 'var(--signal-cyan)'}`,
                      border: '2px solid var(--bg-dark)',
                      margin: '-2.25rem auto 1.25rem auto'
                    }}
                  />

                  {/* Period Badge */}
                  <div style={{ textAlign: 'center', marginBottom: '0.85rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: idx === 0 ? 'var(--signal-emerald)' : 'var(--signal-cyan)',
                        background: idx === 0 ? 'rgba(0, 230, 153, 0.1)' : 'rgba(0, 240, 255, 0.1)',
                        border: `1px solid ${idx === 0 ? 'rgba(0, 230, 153, 0.3)' : 'rgba(0, 240, 255, 0.3)'}`,
                        padding: '0.25rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                  </div>

                  {/* Symmetrical Company Title */}
                  <div style={{ textAlign: 'center', minHeight: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.3rem' }}>
                    <h3 style={{ fontSize: '1.15rem', margin: 0, color: 'var(--text-primary)', textAlign: 'center' }}>
                      {exp.company}
                    </h3>
                  </div>

                  {/* Symmetrical Role Subtitle */}
                  <div style={{ textAlign: 'center', minHeight: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--signal-cyan)', fontWeight: 600 }}>
                      {exp.role}
                    </div>
                  </div>

                  {/* Symmetrical Concise Summary */}
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: 1.55, minHeight: '76px', marginBottom: '1rem' }}>
                    {exp.description}
                  </p>
                </div>

                {/* Symmetrical Tech Stack Badges anchored at bottom */}
                <div className="tech-stack-badges" style={{ justifyContent: 'center', minHeight: '52px', alignContent: 'flex-start', marginTop: 'auto' }}>
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-badge" style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
