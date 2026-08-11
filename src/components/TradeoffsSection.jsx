import React from 'react';
import { ARCHITECTURE_TRADEOFFS } from '../data/portfolioData';
import { GitCompare, CheckCircle2 } from 'lucide-react';

export const TradeoffsSection = () => {
  return (
    <section id="tradeoffs" className="section">
      <div className="section-header">
        <h2 className="section-title">
          Phân Tích <span className="text-cyan">Trade-off</span> & Benchmark
        </h2>
        <p className="section-subtitle">
          Quyết định kiến trúc phần mềm chuyên sâu đòi hỏi sự cân nhắc kỹ lưỡng giữa các ràng buộc công nghệ.
        </p>
      </div>

      <div className="tradeoff-container">
        {ARCHITECTURE_TRADEOFFS.map((item) => (
          <div key={item.id} className="tradeoff-card cad-frame">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <GitCompare size={18} className="text-cyan" />
              <h3 className="tradeoff-title" style={{ margin: 0 }}>{item.title}</h3>
            </div>

            <div className="comparison-box">
              <div className="comp-side">
                <h4>{item.sideA.name}</h4>
                <p><strong>Ưu điểm:</strong> {item.sideA.pros}</p>
                <p style={{ marginTop: '0.4rem' }}><strong>Hạn chế:</strong> {item.sideA.cons}</p>
              </div>

              <div className="comp-side" style={{ paddingLeft: '0.75rem' }}>
                <h4 style={{ color: 'var(--signal-cyan)' }}>{item.sideB.name}</h4>
                <p><strong>Ưu điểm:</strong> {item.sideB.pros}</p>
                <p style={{ marginTop: '0.4rem' }}><strong>Hạn chế:</strong> {item.sideB.cons}</p>
              </div>
            </div>

            <div className="tradeoff-verdict">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: 'var(--signal-cyan)', marginBottom: '0.25rem' }}>
                <CheckCircle2 size={15} />
                <span>ĐÁNH GIÁ RATIONALE THỰC TẾ</span>
              </div>
              <div>{item.verdict}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
