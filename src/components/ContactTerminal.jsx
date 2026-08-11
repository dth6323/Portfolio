import React, { useState } from 'react';
import { Terminal, Send, Download, Mail, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const ContactTerminal = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | transmitting | success | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('transmitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1200);
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    // Simulate real PDF file download stream
    const element = document.createElement('a');
    const file = new Blob([
      `ALEX MERCER — SENIOR FULL-STACK ENGINEER & SYSTEM ARCHITECT\n\n` +
      `Email: ${DEVELOPER_PROFILE.socials.email}\n` +
      `GitHub: ${DEVELOPER_PROFILE.socials.github}\n` +
      `LinkedIn: ${DEVELOPER_PROFILE.socials.linkedin}\n\n` +
      `SUMMARY:\n${DEVELOPER_PROFILE.bio}\n\n` +
      `KEY METRICS:\n` +
      `- Global P99 Latency: < 42ms\n` +
      `- Daily Active Requests: 8.4M+\n` +
      `- Production Uptime: 99.99%\n` +
      `- Systems Engineered: 24+\n\n` +
      `CORE EXPERTISE:\n` +
      `Go, Node.js, Rust, React 19, TypeScript, PostgreSQL, ClickHouse, Redis, Kafka, Docker, Kubernetes`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = "Alex_Mercer_Senior_FullStack_Engineer_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2 className="section-title">
          System <span className="text-cyan">Terminal</span> & Contact
        </h2>
        <p className="section-subtitle">
          Initiate direct communication for senior full-stack roles, system architecture consulting, or technical advisory.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Contact & Resume */}
        <div className="contact-info">
          <div className="cad-frame" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Terminal size={18} className="text-cyan" />
                <h3 style={{ fontSize: '1.4rem' }}>Direct Dispatch Channels</h3>
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Currently open to select Staff / Senior Full-Stack Lead opportunities, distributed system consulting, and architectural code reviews.
              </p>

              <div className="contact-methods">
                <a href={`mailto:${DEVELOPER_PROFILE.socials.email}`} className="contact-method-item">
                  <Mail size={20} className="text-cyan" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>PRIMARY EMAIL</div>
                    <div style={{ fontWeight: 600 }}>{DEVELOPER_PROFILE.socials.email}</div>
                  </div>
                </a>

                <a href={DEVELOPER_PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="contact-method-item">
                  <Github size={20} className="text-cyan" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>GITHUB REPOSITORIES</div>
                    <div style={{ fontWeight: 600 }}>github.com/alexmercer</div>
                  </div>
                </a>

                <a href={DEVELOPER_PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method-item">
                  <Linkedin size={20} className="text-cyan" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>LINKEDIN PROFILE</div>
                    <div style={{ fontWeight: 600 }}>linkedin.com/in/alexmercer</div>
                  </div>
                </a>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleDownloadResume}>
                <Download size={16} />
                <span>DOWNLOAD RESUME ARCHIVE</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Message Dispatch Form */}
        <div className="terminal-form cad-frame">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--signal-cyan)' }}>
              [SECURE MESSAGE TERMINAL v2.4]
            </div>
            <div className="status-badge" style={{ fontSize: '0.7rem' }}>
              <span>ENCRYPTED</span>
            </div>
          </div>

          {status === 'success' && (
            <div className="tradeoff-verdict" style={{ marginBottom: '1.25rem', borderColor: 'var(--signal-emerald)' }} role="alert">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--signal-emerald)', fontWeight: 600 }}>
                <CheckCircle2 size={16} />
                <span>TRANSMISSION ACKNOWLEDGED</span>
              </div>
              <p style={{ fontSize: '0.88rem', marginTop: '0.25rem' }}>
                Your message has been successfully routed. I will respond within 24 hours.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="tradeoff-verdict" style={{ marginBottom: '1.25rem', borderColor: 'var(--signal-rose)' }} role="alert">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--signal-rose)', fontWeight: 600 }}>
                <AlertCircle size={16} />
                <span>TRANSMISSION ERROR</span>
              </div>
              <p style={{ fontSize: '0.88rem', marginTop: '0.25rem' }}>
                Please complete all required fields (Name, Email, and Message).
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">IDENTIFIER / YOUR NAME *</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                placeholder="e.g. Sarah Jenkins (Engineering Manager)"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">RETURN DISPATCH EMAIL *</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="sarah@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="company">ORGANIZATION / COMPANY</label>
              <input
                id="company"
                type="text"
                name="company"
                className="form-input"
                placeholder="e.g. Acme Cloud Corp"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">TRANSMISSION PAYLOAD / MESSAGE *</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Describe project requirements, tech stack, or engineering position..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '0.5rem' }}
              disabled={status === 'transmitting'}
            >
              <Send size={15} />
              <span>{status === 'transmitting' ? 'TRANSMITTING PAYLOAD...' : 'TRANSMIT PAYLOAD'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
