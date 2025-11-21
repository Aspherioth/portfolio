/**
 * Disclaimer:
 * This file (ThemePreview.jsx) was generated with ChatGPT model 5 on 2025-08-08 11:21 (local time).
 * Its sole purpose is to preview the theme used in this project.
 */
import { useEffect, useState } from 'react'

export default function ThemePreview(): React.ReactElement {
  const [mode, setMode] = useState(
    () => localStorage.getItem('wop-mode') || 'light',
  )
  useEffect(() => localStorage.setItem('wop-mode', mode), [mode])

  return (
    <div className={`wop ${mode === 'dark' ? 'theme-dark' : ''}`}>
      {/* Header */}
      <header
        className='bordered'
        style={{ position: 'sticky', top: 0, backdropFilter: 'blur(6px)' }}
      >
        <div
          className='container'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <span
              style={{
                display: 'inline-flex',
                width: '36px',
                height: '36px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                background:
                  'linear-gradient(135deg, var(--primary), var(--secondary))',
                boxShadow: 'var(--glow-primary)',
              }}
            >
              🪄
            </span>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                }}
              >
                Wizard of Pages
              </div>
              <div style={{ fontSize: '.75rem', color: 'var(--text-muted)' }}>
                Magically crafted frontends
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <button className='btn btn-ghost'>Docs</button>
            <button className='btn btn-secondary'>Contact</button>
            <button
              className='btn btn-ghost'
              onClick={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))}
            >
              <span style={{ marginRight: '.25rem' }}>
                {mode === 'dark' ? '☀️' : '🌙'}
              </span>
              {mode === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className='container' style={{ padding: '3rem 1rem' }}>
        <div
          className='card'
          style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, var(--primary), #FAD8FF)',
          }}
        >
          <h1 className='h1' style={{ marginBottom: '.5rem' }}>
            Summon Beautiful Interfaces
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '48ch',
              marginBottom: '1rem',
            }}
          >
            This preview uses pure CSS variables and targets WCAG AAA for core
            pairs.
          </p>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            <button className='btn btn-primary'>Get Started</button>
            <button className='btn btn-secondary'>View Components</button>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className='container' style={{ padding: '2rem 1rem' }}>
        <h2 className='h2' style={{ marginBottom: '1rem' }}>
          Components
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1rem',
          }}
        >
          {/* Card */}
          <div className='card' style={{ padding: '1.5rem' }}>
            <div
              style={{
                fontSize: '.8rem',
                color: 'var(--text-muted)',
                marginBottom: '.25rem',
              }}
            >
              Card
            </div>
            <h3 className='h3'>Spellbook Entry</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '.5rem' }}>
              Reusable container with subtle elevation and border.
            </p>
            <button className='btn btn-primary' style={{ marginTop: '1rem' }}>
              Open Grimoire
            </button>
          </div>

          {/* Alerts */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}
          >
            <div className='alert success'>
              <span className='bar' />
              Success: Your spell was cast.
            </div>
            <div className='alert warning'>
              <span className='bar' />
              Warning: Mind your mana.
            </div>
            <div className='alert error'>
              <span className='bar' />
              Error: The rune fizzled.
            </div>
            <div className='alert info'>
              <span className='bar' />
              Info: New grimoire available.
            </div>
          </div>

          {/* Buttons */}
          <div>
            <div
              style={{
                fontSize: '.8rem',
                color: 'var(--text-muted)',
                marginBottom: '.25rem',
              }}
            >
              Buttons
            </div>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
              <button className='btn btn-primary'>Primary</button>
              <button className='btn btn-secondary'>Secondary</button>
              <button className='btn btn-ghost'>Ghost</button>
              <button className='btn btn-teal'>Teal</button>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className='container' style={{ padding: '2rem 1rem' }}>
        <h2 className='h2' style={{ marginBottom: '1rem' }}>
          Typography
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '1rem',
          }}
        >
          <div className='card' style={{ padding: '1rem' }}>
            <div
              style={{
                fontSize: '.8rem',
                color: 'var(--text-muted)',
                marginBottom: '.25rem',
              }}
            >
              Headings
            </div>
            <h1 className='h1'>H1 — Arcane Header</h1>
            <h2 className='h2' style={{ marginTop: '.25rem' }}>
              H2 — Mystic Subtitle
            </h2>
            <h3 className='h3' style={{ marginTop: '.25rem' }}>
              H3 — Spell Section
            </h3>
            <p style={{ marginTop: '.5rem', color: 'var(--text-secondary)' }}>
              Decorative headings with high contrast body text.
            </p>
          </div>
          <div className='card' style={{ padding: '1rem' }}>
            <div
              style={{
                fontSize: '.8rem',
                color: 'var(--text-muted)',
                marginBottom: '.25rem',
              }}
            >
              Body / Code
            </div>
            <p>Body text tuned for AAA against background.</p>
            <pre
              className='code'
              style={{ marginTop: '.5rem' }}
            >{'/* Example using variables */\n.btn-primary { background: var(--primary); color: var(--on-primary); }'}</pre>
            <p className='signature' style={{ marginTop: '.5rem' }}>
              Signed, the Wizard of Pages ✨
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
