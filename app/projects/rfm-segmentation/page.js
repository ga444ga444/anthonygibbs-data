'use client'

export default function RfmSegmentationPage() {
  return (
    <>
      <style>{`
        .rfm-page {
          background: var(--background);
          color: var(--text-primary);
          min-height: 100vh;
          font-family: var(--font-body);
        }

        /* Header bar — matches arc-flow-map treatment */
        .rfm-header {
          background: #000000;
          border-bottom: 1px solid var(--border);
        }

        .rfm-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
        }

        .rfm-header h1 {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 400;
          color: var(--accent);
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .rfm-header .rfm-subtitle {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-top: 0.35rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .rfm-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        /* KPI Grid */
        .rfm-kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .rfm-card {
          background: var(--surface);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid var(--border);
          transition: border-color 0.2s ease;
        }

        .rfm-kpi-title {
          text-transform: uppercase;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .rfm-kpi-value {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .rfm-kpi-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .rfm-section-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 400;
          color: var(--text-primary);
        }

        /* Segment Overview List */
        .rfm-segment-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .rfm-segment-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .rfm-segment-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .rfm-segment-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .rfm-segment-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .rfm-segment-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .rfm-segment-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .rfm-segment-metrics {
          text-align: right;
        }

        .rfm-segment-revenue {
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .rfm-segment-share {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        /* Distribution Bars */
        .rfm-distribution-wrapper {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }

        .rfm-bar-container {
          margin-bottom: 1.5rem;
        }

        .rfm-bar-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .rfm-stacked-bar {
          width: 100%;
          height: 24px;
          display: flex;
          border-radius: 6px;
          overflow: hidden;
        }

        .rfm-bar-segment {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          color: var(--background);
          font-weight: 600;
        }

        .rfm-bar-segment.light-text {
          color: var(--text-primary);
        }

        /* Strategic Insights */
        .rfm-insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .rfm-insight-card {
          border-left: 4px solid var(--accent);
          padding-left: 1rem;
        }

        .rfm-insight-title {
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .rfm-insight-text {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .rfm-insight-text strong {
          color: var(--text-primary);
        }

        /* Table */
        .rfm-table-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        @media (max-width: 900px) {
          .rfm-table-wrapper {
            border-radius: 8px;
            box-shadow: inset -12px 0 12px -12px rgba(198, 124, 46, 0.25);
          }

          .rfm-table-hint {
            display: block;
          }
        }

        .rfm-table-hint {
          display: none;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .rfm-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .rfm-table th {
          padding: 1rem;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          border-bottom: 2px solid var(--border);
          font-weight: 600;
          white-space: nowrap;
        }

        .rfm-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--border);
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .rfm-table tr:last-child td {
          border-bottom: none;
        }

        .rfm-customer-rank {
          color: var(--text-muted);
          font-weight: 600;
        }

        .rfm-customer-id {
          font-family: monospace;
          color: var(--text-muted);
        }

        .rfm-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          background: var(--accent);
          color: var(--background);
        }

        @media (max-width: 900px) {
          .rfm-container {
            padding: 1.25rem;
          }

          .rfm-header-inner {
            padding: 1.25rem 1.25rem;
          }

          .rfm-kpi-grid {
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .rfm-card {
            padding: 1.25rem;
          }

          .rfm-header h1 {
            font-size: 1.4rem;
          }

          .rfm-header .rfm-subtitle {
            font-size: 0.85rem;
          }

          .rfm-kpi-value {
            font-size: 2rem;
          }

          .rfm-section-title {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }

          .rfm-segment-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .rfm-segment-metrics {
            text-align: left;
          }
        }
      `}</style>

      <div className="rfm-page">
        <div className="rfm-header">
          <div className="rfm-header-inner">
            <h1>Customer Segmentation Dashboard</h1>
            <div className="rfm-subtitle">RFM Analysis &amp; Strategic Insights (Based on Core Dataset)</div>
          </div>
        </div>

        <div className="rfm-container">
          {/* KPI Cards */}
          <div className="rfm-kpi-grid">
            <div className="rfm-card"
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div className="rfm-kpi-title">Total Customers</div>
              <div className="rfm-kpi-value">4,338</div>
              <div className="rfm-kpi-desc">Active customer base</div>
            </div>
            <div className="rfm-card"
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div className="rfm-kpi-title">Total Revenue</div>
              <div className="rfm-kpi-value">£8.91M</div>
              <div className="rfm-kpi-desc">Lifetime value tracked</div>
            </div>
            <div className="rfm-card"
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div className="rfm-kpi-title">Avg Order Value</div>
              <div className="rfm-kpi-value">£481</div>
              <div className="rfm-kpi-desc">Per transaction (Overall)</div>
            </div>
            <div className="rfm-card"
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div className="rfm-kpi-title">VIP Customers</div>
              <div className="rfm-kpi-value">716</div>
              <div className="rfm-kpi-desc">Top tier segment (16.5%)</div>
            </div>
          </div>

          {/* Segment Overview & Distribution */}
          <div className="rfm-card" style={{ marginBottom: '2rem' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <h2 className="rfm-section-title">Segment Overview &amp; Distribution</h2>

            <div className="rfm-segment-list">
              <div className="rfm-segment-item">
                <div className="rfm-segment-info">
                  <div className="rfm-segment-dot" style={{ background: 'var(--accent)' }}></div>
                  <div>
                    <div className="rfm-segment-name">VIP</div>
                    <div className="rfm-segment-desc">High value, frequent buyers</div>
                  </div>
                </div>
                <div className="rfm-segment-metrics">
                  <div className="rfm-segment-revenue">£5.78M revenue</div>
                  <div className="rfm-segment-share">716 customers (64.9% rev share)</div>
                </div>
              </div>

              <div className="rfm-segment-item">
                <div className="rfm-segment-info">
                  <div className="rfm-segment-dot" style={{ background: '#D99A57' }}></div>
                  <div>
                    <div className="rfm-segment-name">Needs Attention</div>
                    <div className="rfm-segment-desc">At-risk, requires intervention</div>
                  </div>
                </div>
                <div className="rfm-segment-metrics">
                  <div className="rfm-segment-revenue">£2.11M revenue</div>
                  <div className="rfm-segment-share">1,173 customers (23.7% rev share)</div>
                </div>
              </div>

              <div className="rfm-segment-item">
                <div className="rfm-segment-info">
                  <div className="rfm-segment-dot" style={{ background: '#E8B888' }}></div>
                  <div>
                    <div className="rfm-segment-name">Promising</div>
                    <div className="rfm-segment-desc">Growing engagement &amp; potential</div>
                  </div>
                </div>
                <div className="rfm-segment-metrics">
                  <div className="rfm-segment-revenue">£461K revenue</div>
                  <div className="rfm-segment-share">837 customers (5.2% rev share)</div>
                </div>
              </div>

              <div className="rfm-segment-item">
                <div className="rfm-segment-info">
                  <div className="rfm-segment-dot" style={{ background: '#3A3A3A' }}></div>
                  <div>
                    <div className="rfm-segment-name">Hibernating</div>
                    <div className="rfm-segment-desc">Dormant, win-back opportunity</div>
                  </div>
                </div>
                <div className="rfm-segment-metrics">
                  <div className="rfm-segment-revenue">£553K revenue</div>
                  <div className="rfm-segment-share">1,612 customers (6.2% rev share)</div>
                </div>
              </div>
            </div>

            <div className="rfm-distribution-wrapper">
              <div className="rfm-bar-container">
                <div className="rfm-bar-header">
                  <span>Revenue Distribution</span>
                </div>
                <div className="rfm-stacked-bar">
                  <div className="rfm-bar-segment" style={{ width: '64.9%', background: 'var(--accent)' }}>65%</div>
                  <div className="rfm-bar-segment" style={{ width: '23.7%', background: '#D99A57' }}>24%</div>
                  <div className="rfm-bar-segment light-text" style={{ width: '5.2%', background: '#E8B888' }}>5%</div>
                  <div className="rfm-bar-segment light-text" style={{ width: '6.2%', background: '#3A3A3A' }}>6%</div>
                </div>
              </div>
              <div className="rfm-bar-container">
                <div className="rfm-bar-header">
                  <span>Customer Volume</span>
                </div>
                <div className="rfm-stacked-bar">
                  <div className="rfm-bar-segment" style={{ width: '16.5%', background: 'var(--accent)' }}>17%</div>
                  <div className="rfm-bar-segment" style={{ width: '27%', background: '#D99A57' }}>27%</div>
                  <div className="rfm-bar-segment light-text" style={{ width: '19.3%', background: '#E8B888' }}>19%</div>
                  <div className="rfm-bar-segment light-text" style={{ width: '37.2%', background: '#3A3A3A' }}>37%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Insights */}
          <div className="rfm-card" style={{ marginBottom: '2rem' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <h2 className="rfm-section-title">Strategic Insights</h2>
            <div className="rfm-insights-grid">
              <div className="rfm-insight-card" style={{ borderLeftColor: 'var(--accent)' }}>
                <div className="rfm-insight-title" style={{ color: 'var(--accent)' }}>VIP Focus</div>
                <div className="rfm-insight-text">
                  Just <strong>716 VIP customers</strong> generate nearly 65% of the £8.9M lifetime total. Retention of this cohort is critical.
                </div>
              </div>
              <div className="rfm-insight-card" style={{ borderLeftColor: '#D99A57' }}>
                <div className="rfm-insight-title" style={{ color: '#D99A57' }}>Growth Opportunity</div>
                <div className="rfm-insight-text">
                  The &ldquo;Needs Attention&rdquo; segment holds over <strong>£2.1M</strong> in historical value. Targeted intervention could shift them to VIP.
                </div>
              </div>
              <div className="rfm-insight-card" style={{ borderLeftColor: '#E8B888' }}>
                <div className="rfm-insight-title" style={{ color: '#E8B888' }}>Promising Conversion</div>
                <div className="rfm-insight-text">
                  <strong>837 promising buyers</strong> are currently active. Introducing loyalty incentives will push their frequency higher.
                </div>
              </div>
              <div className="rfm-insight-card" style={{ borderLeftColor: 'var(--text-muted)' }}>
                <div className="rfm-insight-title" style={{ color: 'var(--text-muted)' }}>At-Risk Volume</div>
                <div className="rfm-insight-text">
                  While only accounting for 6.2% of revenue, the <strong>1,612 hibernating users</strong> represent a massive pool for automated win-back campaigns.
                </div>
              </div>
            </div>
          </div>

          {/* Top 15 Customers Table */}
          <div className="rfm-card"
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <h2 className="rfm-section-title">Top 15 Customers by Revenue</h2>
            <div className="rfm-table-hint">← Swipe to see all columns →</div>
            <div className="rfm-table-wrapper">
              <table className="rfm-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Customer ID</th>
                    <th>Segment</th>
                    <th>Revenue</th>
                    <th>Orders</th>
                    <th>Avg Order</th>
                    <th>Recency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="rfm-customer-rank">1</td><td className="rfm-customer-id">#14646</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£280,206</td><td>73</td><td>£3,838</td><td style={{ color: '#4ADE80' }}>2d · Active</td></tr>
                  <tr><td className="rfm-customer-rank">2</td><td className="rfm-customer-id">#18102</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£259,657</td><td>60</td><td>£4,328</td><td style={{ color: '#4ADE80' }}>1d · Active</td></tr>
                  <tr><td className="rfm-customer-rank">3</td><td className="rfm-customer-id">#17450</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£194,551</td><td>46</td><td>£4,229</td><td style={{ color: '#4ADE80' }}>8d · Active</td></tr>
                  <tr><td className="rfm-customer-rank">4</td><td className="rfm-customer-id">#16446</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£168,472</td><td>2</td><td>£84,236</td><td style={{ color: '#4ADE80' }}>1d · Active</td></tr>
                  <tr><td className="rfm-customer-rank">5</td><td className="rfm-customer-id">#14911</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£143,825</td><td>201</td><td>£716</td><td style={{ color: '#4ADE80' }}>1d · Active</td></tr>
                  <tr><td className="rfm-customer-rank">6</td><td className="rfm-customer-id">#12415</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£124,915</td><td>21</td><td>£5,948</td><td style={{ color: '#FBBF24' }}>24d · Recent</td></tr>
                  <tr><td className="rfm-customer-rank">7</td><td className="rfm-customer-id">#14156</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£117,380</td><td>55</td><td>£2,134</td><td style={{ color: '#4ADE80' }}>10d · Active</td></tr>
                  <tr><td className="rfm-customer-rank">8</td><td className="rfm-customer-id">#17511</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£91,062</td><td>31</td><td>£2,937</td><td style={{ color: '#4ADE80' }}>3d · Active</td></tr>
                  <tr><td className="rfm-customer-rank">9</td><td className="rfm-customer-id">#16029</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£81,025</td><td>63</td><td>£1,286</td><td style={{ color: '#FBBF24' }}>39d · Recent</td></tr>
                  <tr><td className="rfm-customer-rank">10</td><td className="rfm-customer-id">#16684</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£66,654</td><td>28</td><td>£2,380</td><td style={{ color: '#4ADE80' }}>4d · Active</td></tr>
                  <tr><td className="rfm-customer-rank">11</td><td className="rfm-customer-id">#14096</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£65,165</td><td>17</td><td>£3,833</td><td style={{ color: '#4ADE80' }}>4d · Active</td></tr>
                  <tr><td className="rfm-customer-rank">12</td><td className="rfm-customer-id">#13694</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£65,040</td><td>50</td><td>£1,301</td><td style={{ color: '#4ADE80' }}>4d · Active</td></tr>
                  <tr><td className="rfm-customer-rank">13</td><td className="rfm-customer-id">#15311</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£60,768</td><td>91</td><td>£668</td><td style={{ color: '#4ADE80' }}>1d · Active</td></tr>
                  <tr><td className="rfm-customer-rank">14</td><td className="rfm-customer-id">#13089</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£58,826</td><td>97</td><td>£606</td><td style={{ color: '#4ADE80' }}>3d · Active</td></tr>
                  <tr><td className="rfm-customer-rank">15</td><td className="rfm-customer-id">#17949</td><td><span className="rfm-badge">VIP</span></td><td style={{ fontWeight: 600 }}>£58,510</td><td>45</td><td>£1,300</td><td style={{ color: '#4ADE80' }}>1d · Active</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
