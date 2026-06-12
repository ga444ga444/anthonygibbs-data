'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px' }}>

      {/* Header */}
      <header style={{ marginBottom: '80px' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--accent)',
          fontSize: '13px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '16px'
        }}>
          Anthony Gibbs
        </p>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          color: 'var(--text-primary)',
          lineHeight: '1.15',
          marginBottom: '24px'
        }}>
          Data Projects
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--text-muted)',
          fontSize: '17px',
          lineHeight: '1.7',
          maxWidth: '560px'
        }}>
          Dashboards, analysis, and live data visualisations.
          Built to Head of Data standard.
        </p>
      </header>

      {/* Project Cards — hardcoded for now, migrates to JSON before project 4 */}
      <section>
        <h2 style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginBottom: '32px'
        }}>
          Projects
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>

          {/* Project Card — Arc Flow Map */}
          <Link href="/projects/arc-flow-map" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '28px 32px',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.3rem',
                  color: 'var(--text-primary)',
                }}>
                  AG Arc Flow Visualization
                </h3>
                <span style={{
                  fontSize: '11px',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginLeft: '16px',
                  whiteSpace: 'nowrap'
                }}>
                  Live
                </span>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--text-muted)',
                fontSize: '15px',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                Animated arc map showing inspector dispatch patterns across the UK.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Leaflet', 'Canvas API', 'Python'].map(tag => (
                  <span key={tag} style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-muted)',
                    background: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    padding: '3px 8px',
                    letterSpacing: '0.05em'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {/* Project Card — RFM Segmentation */}
          <Link href="/projects/rfm-segmentation" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '28px 32px',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.3rem',
                  color: 'var(--text-primary)',
                }}>
                  RFM Customer Segmentation
                </h3>
                <span style={{
                  fontSize: '11px',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginLeft: '16px',
                  whiteSpace: 'nowrap'
                }}>
                  Live
                </span>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--text-muted)',
                fontSize: '15px',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                4,338 customers segmented by recency, frequency, and monetary value.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Python', 'Pandas', 'RFM Analysis'].map(tag => (
                  <span key={tag} style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-muted)',
                    background: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    padding: '3px 8px',
                    letterSpacing: '0.05em'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer style={{
        marginTop: '120px',
        paddingTop: '32px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--text-muted)',
          fontSize: '13px'
        }}>
          data.anthonygibbs.com
        </span>
        <a href="https://anthonygibbs.com" style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--text-muted)',
          fontSize: '13px',
          textDecoration: 'none'
        }}>
          anthonygibbs.com →
        </a>
      </footer>

    </main>
  )
}