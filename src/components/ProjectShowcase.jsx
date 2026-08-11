import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Layers, BarChart3 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';

export const ProjectShowcase = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Distributed Systems', 'High-Scale Web', 'Security & Cloud', 'Real-Time Data'];

  const filteredProjects = activeFilter === 'All' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2 className="section-title">
          Featured <span className="text-cyan">Architecture</span> Projects
        </h2>
        <p className="section-subtitle">
          Production-grade applications and distributed systems showcasing real engineering metrics and system trade-offs.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card cad-frame">
            <div>
              <div className="project-header">
                <span className="project-tag">{project.category}</span>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub Repository">
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Live Project Demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Metrics Strip */}
              <div className="project-metrics-strip">
                {project.metrics.slice(0, 2).map((m, idx) => (
                  <div key={idx}>
                    <div className="p-metric-val">{m.value}</div>
                    <div className="p-metric-lbl">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="tech-stack-badges">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => onSelectProject(project)}>
              <span>VIEW FULL CASE STUDY</span>
              <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
