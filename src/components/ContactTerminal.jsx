import React, { useState } from 'react';
import { Terminal, Send, Download, Mail, Phone, MapPin, Facebook, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
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

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2 className="section-title">
          Terminal <span className="text-cyan">Liên Hệ</span> & Tải CV
        </h2>
        <p className="section-subtitle">
          Kết nối trực tiếp về các cơ hội tuyển dụng Backend Developer, tư vấn kiến trúc hệ thống hoặc hợp tác dự án.
        </p>
      </div>

      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
        {/* Left Column: Direct Contact & Resume */}
        <div className="contact-info" style={{ height: '100%' }}>
          <div className="cad-frame" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.75rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Terminal size={18} className="text-cyan" />
                <h3 style={{ fontSize: '1.35rem', margin: 0 }}>Kênh Liên Hệ Trực Tiếp</h3>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Sẵn sàng tiếp nhận vị trí Backend Developer (NestJS / Java) tại Hà Nội hoặc làm việc Remote.
              </p>

              <div className="contact-methods" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
                <a href={DEVELOPER_PROFILE.socials.phone} className="contact-method-item">
                  <Phone size={18} className="text-cyan" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>DI ĐỘNG / ZALO</div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{DEVELOPER_PROFILE.phone}</div>
                  </div>
                </a>

                <a href={DEVELOPER_PROFILE.socials.email} className="contact-method-item">
                  <Mail size={18} className="text-cyan" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>EMAIL CHÍNH THỨC</div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{DEVELOPER_PROFILE.email}</div>
                  </div>
                </a>

                <a href={DEVELOPER_PROFILE.facebook} target="_blank" rel="noopener noreferrer" className="contact-method-item">
                  <Facebook size={18} className="text-cyan" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>FACEBOOK</div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>ha.hightlight</div>
                  </div>
                </a>

                <div className="contact-method-item" style={{ cursor: 'default' }}>
                  <MapPin size={18} className="text-cyan" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>ĐỊA CHỈ</div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{DEVELOPER_PROFILE.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <a 
                href={DEVELOPER_PROFILE.resumePdfUrl} 
                download="Dang-Thai-Ha-JavaDeveloper.pdf" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
              >
                <Download size={16} />
                <span>TẢI CV ĐẶNG THÁI HÀ (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Message Dispatch Form */}
        <div className="terminal-form cad-frame" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.75rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--signal-cyan)', fontWeight: 600 }}>
                [TERMINAL GỬI THÔNG ĐIỆP]
              </div>
              <div className="status-badge" style={{ fontSize: '0.7rem' }}>
                <span>MÃ HÓA SECURITY</span>
              </div>
            </div>

            {status === 'success' && (
              <div className="tradeoff-verdict" style={{ marginBottom: '1.25rem', borderColor: 'var(--signal-emerald)' }} role="alert">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--signal-emerald)', fontWeight: 600 }}>
                  <CheckCircle2 size={16} />
                  <span>ĐÃ NHẬN THÔNG ĐIỆP KẾT NỐI</span>
                </div>
                <p style={{ fontSize: '0.88rem', marginTop: '0.25rem' }}>
                  Cảm ơn bạn đã gửi thông tin. Đặng Thái Hà sẽ phản hồi trong vòng 24 giờ.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="tradeoff-verdict" style={{ marginBottom: '1.25rem', borderColor: 'var(--signal-rose)' }} role="alert">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--signal-rose)', fontWeight: 600 }}>
                  <AlertCircle size={16} />
                  <span>LỖI GỬI THÔNG ĐIỆP</span>
                </div>
                <p style={{ fontSize: '0.88rem', marginTop: '0.25rem' }}>
                  Vui lòng điền đầy đủ các trường bắt buộc (Họ tên, Email và Nội dung).
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <div>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">HỌ VÀ TÊN NGUỜI GỬI *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Ví dụ: Nguyễn Văn A (Nhà tuyển dụng)"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">EMAIL PHẢN HỒI *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="nguyenvana@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="company">TÊN TỔ CHỨC / CÔNG TY</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    className="form-input"
                    placeholder="Ví dụ: Tập đoàn Công nghệ Acme"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label" htmlFor="message">NỘI DUNG THÔNG ĐIỆP *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Mô tả vị trí tuyển dụng, yêu cầu dự án hoặc trao đổi kỹ thuật..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{ minHeight: '90px' }}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: 'auto' }}
                disabled={status === 'transmitting'}
              >
                <Send size={15} />
                <span>{status === 'transmitting' ? 'ĐANG GỬI DỮ LIỆU...' : 'GỬI THÔNG ĐIỆP'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
