import React, { useState } from 'react';
import { Terminal, Activity, ArrowRight, Code, Shield, Layers, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_PROFILE, SYSTEM_TOPOLOGY_NODES } from '../data/portfolioData';

export const HeroTopology = ({ onExploreProjects, onContactClick }) => {
  const [selectedNodeId, setSelectedNodeId] = useState(SYSTEM_TOPOLOGY_NODES[0].id);
  const [simulatedTraffic, setSimulatedTraffic] = useState(true);

  const selectedNode = SYSTEM_TOPOLOGY_NODES.find(n => n.id === selectedNodeId) || SYSTEM_TOPOLOGY_NODES[0];

  const handleNodeKeyDown = (e, nodeId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedNodeId(nodeId);
    }
  };

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-grid">
        {/* Left Column: Bio & Value Proposition */}
        <div className="hero-content">
          <h1>
            Architecting <span className="text-cyan">High-Concurrency</span> Systems & Web Apps
          </h1>
          <p className="hero-bio">
            {DEVELOPER_PROFILE.bio}
          </p>

          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={onExploreProjects}>
              <span>EXPLORE CASE STUDIES</span>
              <ArrowRight size={15} />
            </button>
            <button className="btn btn-secondary" onClick={onContactClick}>
              <Terminal size={15} />
              <span>SYSTEM TERMINAL</span>
            </button>
          </div>

          {/* Key Engineering Impact Metrics Strip */}
          <div className="hero-metrics">
            {DEVELOPER_PROFILE.metrics.map((m, idx) => (
              <div key={idx} className="metric-item">
                <span className="metric-val">{m.value}</span>
                <span className="metric-lbl">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive System Architecture Topology */}
        <div className="topology-container cad-frame">
          <div className="topology-header">
            <div className="topology-title">
              <Activity size={16} className="text-cyan" />
              <span>LIVE FULL-STACK ARCHITECTURE SCHEMATIC</span>
            </div>

            <div className="topology-controls">
              <button 
                className={`topo-chip ${simulatedTraffic ? 'active' : ''}`}
                onClick={() => setSimulatedTraffic(!simulatedTraffic)}
                aria-pressed={simulatedTraffic}
              >
                {simulatedTraffic ? '[TRAFFIC: LIVE]' : '[TRAFFIC: PAUSED]'}
              </button>
            </div>
          </div>

          {/* Interactive Layered Node Canvas */}
          <div className="node-graph">
            {['Client Tier', 'Edge & Security', 'Backend Microservices', 'Data & Storage'].map((layerName) => {
              const nodesInLayer = SYSTEM_TOPOLOGY_NODES.filter(n => n.layer === layerName);
              return (
                <div key={layerName} className="node-layer">
                  <div className="layer-title">{layerName}</div>
                  <div className="layer-nodes">
                    {nodesInLayer.map(node => (
                      <div 
                        key={node.id} 
                        className={`node-card ${selectedNodeId === node.id ? 'selected' : ''} ${simulatedTraffic ? 'active-pulse' : ''}`}
                        onClick={() => setSelectedNodeId(node.id)}
                        onKeyDown={(e) => handleNodeKeyDown(e, node.id)}
                        tabIndex={0}
                        role="button"
                        aria-selected={selectedNodeId === node.id}
                        aria-label={`System node ${node.name}, ${node.tech}`}
                      >
                        <div className="node-name">{node.name}</div>
                        <div className="node-tech">{node.tech}</div>
                        <div className="node-stat">
                          <span>{node.latency}</span>
                          <span>{node.throughput}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Node Inspector Drawer */}
          {selectedNode && (
            <div className="node-inspector" role="region" aria-live="polite" aria-label="System Node Details">
              <div className="inspector-header">
                <div className="inspector-title">
                  NODE SPECIFICATION: {selectedNode.name}
                </div>
                <span className="project-tag">{selectedNode.layer}</span>
              </div>

              <p className="inspector-desc">{selectedNode.description}</p>

              <div className="inspector-meta">
                <div className="meta-field">
                  <span className="meta-lbl">P99 LATENCY</span>
                  <span className="meta-val text-emerald">{selectedNode.latency}</span>
                </div>
                <div className="meta-field">
                  <span className="meta-lbl">THROUGHPUT</span>
                  <span className="meta-val text-cyan">{selectedNode.throughput}</span>
                </div>
                <div className="meta-field">
                  <span className="meta-lbl">STATUS</span>
                  <span className="meta-val text-emerald">HEALTHY</span>
                </div>
              </div>

              <div className="tradeoff-verdict" style={{ fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                <strong>Architecture Rationale:</strong> {selectedNode.tradeoffs}
              </div>

              <div className="code-block">
                <pre><code>{selectedNode.codeSnippet}</code></pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
