import React from 'react';
import { Cpu, Github, Linkedin, Mail } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Cpu size={16} className="text-cyan" />
          <span>{DEVELOPER_PROFILE.name} // {DEVELOPER_PROFILE.title}</span>
        </div>

        <div>
          TECHNICAL SYSTEM BLUEPRINT FORM — REACT 19 + VITE
        </div>

        <div>
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};
