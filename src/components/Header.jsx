import React, { useState, useEffect } from 'react';
import { Terminal, Download, Send, Cpu, Menu, X } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const Header = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'projects', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#hero" className="logo-group">
          <div className="logo-mark">
            <Cpu size={18} />
          </div>
          <div className="logo-text">
            <span className="logo-name">{DEVELOPER_PROFILE.name}</span>
            <span className="logo-title">{DEVELOPER_PROFILE.title.toUpperCase()}</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <a 
                href="#hero" 
                className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                aria-current={activeSection === 'hero' ? 'page' : undefined}
                onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
              >
                <span className="nav-num">01.</span> GIỚI THIỆU
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                aria-current={activeSection === 'projects' ? 'page' : undefined}
                onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}
              >
                <span className="nav-num">02.</span> DỰ ÁN NỔI BẬT
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                aria-current={activeSection === 'skills' ? 'page' : undefined}
                onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}
              >
                <span className="nav-num">03.</span> KỸ NĂNG
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                aria-current={activeSection === 'experience' ? 'page' : undefined}
                onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}
              >
                <span className="nav-num">04.</span> KINH NGHIỆM
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                aria-current={activeSection === 'contact' ? 'page' : undefined}
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              >
                <span className="nav-num">05.</span> LIÊN HỆ
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="status-text">HỆ THỐNG ONLINE</span>
          </div>
          
          <button className="btn btn-primary header-connect-btn" onClick={onOpenContact}>
            <Send size={14} />
            <span>KẾT NỐI</span>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content cad-frame" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-nav-links">
              <li>
                <a 
                  href="#hero" 
                  className={`mobile-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
                >
                  <span className="nav-num">01.</span> GIỚI THIỆU THÔNG TIN
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={`mobile-nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}
                >
                  <span className="nav-num">02.</span> DỰ ÁN NỔI BẬT
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={`mobile-nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}
                >
                  <span className="nav-num">03.</span> BẢNG KỸ NĂNG
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className={`mobile-nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}
                >
                  <span className="nav-num">04.</span> QUÁ TRÌNH LÀM VIỆC
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                >
                  <span className="nav-num">05.</span> LIÊN HỆ & DOWNLOAD CV
                </a>
              </li>
            </ul>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              >
                <Send size={15} />
                <span>GỬI THÔNG ĐIỆP KẾT NỐI</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
