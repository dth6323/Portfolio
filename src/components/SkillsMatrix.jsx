import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Server, Database, Cloud } from 'lucide-react';

export const SkillsMatrix = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(SKILL_CATEGORIES[0].id);

  const activeCategory = SKILL_CATEGORIES.find(c => c.id === activeCategoryId) || SKILL_CATEGORIES[0];

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'backend': return <Server size={16} />;
      case 'database': return <Database size={16} />;
      case 'storage': return <Cloud size={16} />;
      case 'frontend': return <Cpu size={16} />;
      default: return <Cpu size={16} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2 className="section-title">
          Bảng Kỹ Năng & <span className="text-cyan">Công Nghệ</span>
        </h2>
        <p className="section-subtitle">
          Tổng hợp chi tiết năng lực lập trình Java/Fullstack, CSDL lớn và công cụ hạ tầng triển khai thực tế.
        </p>
      </div>

      <div className="cad-frame" style={{ padding: '2rem' }}>
        {/* Category Tabs */}
        <div className="matrix-tabs">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`matrix-tab ${activeCategoryId === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategoryId(cat.id)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {activeCategory.skills.map((skill, idx) => (
            <div key={idx} className="skill-card">
              <div>
                <div className="skill-name">
                  <span>{skill.name}</span>
                  <span className="skill-exp">{skill.exp}</span>
                </div>
                <p className="skill-note">{skill.note}</p>
              </div>

              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
