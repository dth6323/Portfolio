import React, { useState } from 'react';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';

export const ProjectShowcase = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  // Dynamic filter categories array
  const categories = ['Tất cả', ...Array.from(new Set(FEATURED_PROJECTS.map(p => p.category)))];

  const filteredProjects = activeFilter === 'Tất cả' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2 className="section-title">
          Dự Án Kiến Trúc <span className="text-cyan">Thực Chiến</span>
        </h2>
        <p className="section-subtitle">
          Các hệ thống quy mô doanh nghiệp và dự án phần mềm đã triển khai thực tế với vai trò, framework và CSDL chuẩn hóa.
        </p>
      </div>

      {/* Premium CAD Filter Chips Bar */}
      <div className="projects-filter">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            <span className="filter-num">0{idx + 1}.</span>
            <span>{cat}</span>
          </button>
        ))}
      </div>

      {/* Symmetrical Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card cad-frame">
            {/* Top Card Content Container */}
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              {/* Card Top Header: Company Tag & Dedicated Time Badge (Period Only) */}
              <div className="project-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', minHeight: '40px', marginBottom: '0.85rem' }}>
                <span className="project-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Building2 size={13} />
                  <span>{project.company}</span>
                </span>

                {/* Period Badge: Displays Period String Only */}
                <span className="project-period-badge" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--signal-cyan)', background: 'rgba(0, 240, 255, 0.08)', padding: '0.2rem 0.6rem', border: '1px solid rgba(0, 240, 255, 0.25)', borderRadius: 'var(--radius-sm)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={13} />
                  <span>{project.period}</span>
                </span>
              </div>

              {/* Symmetrical Project Title */}
              <h3 className="project-title" style={{ minHeight: '56px', display: 'flex', alignItems: 'center' }}>
                {project.title}
              </h3>

              {/* Symmetrical Project Description */}
              <p className="project-desc" style={{ minHeight: '96px' }}>
                {project.description}
              </p>

              {/* Standardized 2 Metrics Grid: Single-Line Role & Framework Display */}
              <div className="project-metrics-strip" style={{ marginTop: 'auto', minHeight: '56px', marginBottom: '1.25rem' }}>
                {project.metrics.map((m, idx) => (
                  <div key={idx} style={{ overflow: 'hidden' }}>
                    <div className="p-metric-lbl">{m.label}</div>
                    <div className="p-metric-val" style={{ fontSize: '0.82rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Symmetrical Tech Stack Badges */}
              <div className="tech-stack-badges" style={{ minHeight: '68px', alignContent: 'flex-start', marginBottom: '1.25rem' }}>
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Anchored Bottom Case Study CTA Button */}
            <button className="btn btn-secondary" style={{ width: '100%' }} onClick={() => onSelectProject(project)}>
              <span>XEM CHI TIẾT CASE STUDY</span>
              <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
