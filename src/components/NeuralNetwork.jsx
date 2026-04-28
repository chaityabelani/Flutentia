import { useState } from 'react'

/* ─── 6 nodes placed evenly around a circle (hexagonal ring) ───
   Container: 400×520. Center: (200, 260). Ring radius: 148px.
   Each node's base center = (cx + r*cos(θ), cy + r*sin(θ))
   Circle div size: 88px → subtract 44 to get top-left.            */

const CX = 200, CY = 260, R = 148, SIZE = 88, HALF = SIZE / 2

function polar(deg) {
  const rad = (deg * Math.PI) / 180
  return {
    left: Math.round(CX + R * Math.cos(rad) - HALF),
    top:  Math.round(CY + R * Math.sin(rad) - HALF),
  }
}

const NODES = [
  {
    id: 'ml',    full: 'Machine Learning',  lines: ['Machine', 'Learning'],
    color: '#6366f1', desc: 'Deep learning, LLMs & model ops',
    icon: '🧠',
    ...polar(-90),   /* top           */
    anim: 'f-ud',    dur: '4.0s', delay: '0s',
  },
  {
    id: 'cloud', full: 'Cloud',             lines: ['Cloud'],
    color: '#06b6d4', desc: 'AWS · GCP · Azure at scale',
    icon: '☁️',
    ...polar(-30),   /* upper-right   */
    anim: 'f-diag1', dur: '3.8s', delay: '-0.7s',
  },
  {
    id: 'cv',    full: 'Computer Vision',   lines: ['Computer', 'Vision'],
    color: '#f43f5e', desc: 'Image recognition & object detection',
    icon: '👁️',
    ...polar(30),    /* lower-right   */
    anim: 'f-lr',    dur: '5.0s', delay: '-1.8s',
  },
  {
    id: 'auto',  full: 'Automation',        lines: ['Automation'],
    color: '#f59e0b', desc: 'Workflow, RPA & intelligent bots',
    icon: '⚙️',
    ...polar(90),    /* bottom        */
    anim: 'f-diag2', dur: '4.6s', delay: '-2.4s',
  },
  {
    id: 'nlp',   full: 'NLP',              lines: ['NLP'],
    color: '#10b981', desc: 'Language models & text AI',
    icon: '💬',
    ...polar(150),   /* lower-left    */
    anim: 'f-ud',    dur: '5.4s', delay: '-3.1s',
  },
  {
    id: 'de',    full: 'Data Engineering',  lines: ['Data', 'Engineering'],
    color: '#8b5cf6', desc: 'Pipelines, lakehouses & warehouses',
    icon: '🗄️',
    ...polar(-150),  /* upper-left    */
    anim: 'f-diag1', dur: '4.2s', delay: '-0.3s',
  },
]

/* SVG connector lines between all node pairs */
function Connectors({ hovered }) {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      viewBox={`0 0 400 520`}
    >
      {NODES.map((a, i) =>
        NODES.slice(i + 1).map(b => {
          const isActive = hovered === a.id || hovered === b.id
          const aCx = a.left + HALF
          const aCy = a.top  + HALF
          const bCx = b.left + HALF
          const bCy = b.top  + HALF
          return (
            <line
              key={`${a.id}-${b.id}`}
              x1={aCx} y1={aCy} x2={bCx} y2={bCy}
              stroke={isActive ? (hovered === a.id ? a.color : b.color) : 'rgba(99,102,241,0.10)'}
              strokeWidth={isActive ? 1.5 : 0.8}
              strokeDasharray={isActive ? 'none' : '4 4'}
              style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
            />
          )
        })
      )}
    </svg>
  )
}

export default function NeuralNetwork() {
  const [hovered, setHovered] = useState(null)
  const activeNode = NODES.find(n => n.id === hovered)

  return (
    <div className="relative" style={{ width: 400, height: 520 }}>

      <style>{`
        @keyframes f-ud    { 0%,100%{transform:translateY(0)}          50%{transform:translateY(-13px)}         }
        @keyframes f-lr    { 0%,100%{transform:translateX(0)}          50%{transform:translateX(11px)}          }
        @keyframes f-diag1 { 0%,100%{transform:translate(0,0)}         50%{transform:translate(9px,-11px)}      }
        @keyframes f-diag2 { 0%,100%{transform:translate(0,0)}         50%{transform:translate(-8px,10px)}      }
        @keyframes nn-center-pop {
          from { opacity:0; transform:translate(-50%,-50%) scale(0.78); }
          to   { opacity:1; transform:translate(-50%,-50%) scale(1);    }
        }
        @keyframes nn-pulse-ring {
          0%   { box-shadow: 0 0 0 0px rgba(99,102,241,0.35); }
          70%  { box-shadow: 0 0 0 18px rgba(99,102,241,0);   }
          100% { box-shadow: 0 0 0 0px rgba(99,102,241,0);    }
        }
      `}</style>

      {/* Guide circle behind nodes */}
      <div
        style={{
          position:     'absolute',
          left:          CX - R,
          top:           CY - R,
          width:         R * 2,
          height:        R * 2,
          borderRadius:  '50%',
          border:        '1px dashed rgba(99,102,241,0.14)',
          pointerEvents: 'none',
        }}
      />

      {/* SVG connector lines */}
      <Connectors hovered={hovered} />

      {/* Center info card (shown in empty ring area on hover) */}
      {activeNode ? (
        <div
          key={activeNode.id}
          style={{
            position:      'absolute',
            left:          '50%',
            top:           '50%',
            transform:     'translate(-50%, -50%)',
            width:         148,
            textAlign:     'center',
            pointerEvents: 'none',
            animation:     'nn-center-pop 0.25s cubic-bezier(.34,1.56,.64,1) both',
            zIndex:        20,
          }}
        >
          {/* Icon */}
          <div style={{ fontSize: '2rem', lineHeight: 1, marginBottom: 8 }}>
            {activeNode.icon}
          </div>
          {/* Title */}
          <div style={{
            color:       activeNode.color,
            fontSize:    '0.88rem',
            fontWeight:  800,
            fontFamily:  'Syne, sans-serif',
            lineHeight:  1.2,
            marginBottom: 6,
            textShadow:  `0 0 18px ${activeNode.color}88`,
          }}>
            {activeNode.full}
          </div>
          {/* Divider */}
          <div style={{
            width:        40,
            height:       1.5,
            background:   activeNode.color,
            borderRadius: 2,
            margin:       '0 auto 8px',
            opacity:      0.6,
          }} />
          {/* Desc */}
          <div style={{
            color:      'rgba(255,255,255,0.72)',
            fontSize:   '0.7rem',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.5,
          }}>
            {activeNode.desc}
          </div>
        </div>
      ) : (
        /* Default idle state in center */
        <div style={{
          position:   'absolute',
          left:       '50%',
          top:        '50%',
          transform:  'translate(-50%, -50%)',
          textAlign:  'center',
          pointerEvents: 'none',
          zIndex:     10,
        }}>
          <div style={{
            width:        52,
            height:       52,
            borderRadius: '50%',
            border:       '1.5px solid rgba(99,102,241,0.30)',
            display:      'flex',
            alignItems:   'center',
            justifyContent: 'center',
            margin:       '0 auto 8px',
            animation:    'nn-pulse-ring 2.4s ease-out infinite',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(99,102,241,0.55)" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M4.9 19.1l2.1-2.1M16.9 7.1l2.1-2.1"/>
            </svg>
          </div>
          <div style={{ color: 'rgba(148,163,184,0.45)', fontSize: '0.65rem', fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em' }}>
            hover a node
          </div>
        </div>
      )}

      {/* Floating nodes */}
      {NODES.map(n => {
        const isHov = hovered === n.id

        return (
          <div
            key={n.id}
            style={{
              position:  'absolute',
              top:       n.top,
              left:      n.left,
              width:     SIZE,
              height:    SIZE,
              animation: `${n.anim} ${n.dur} ease-in-out infinite ${n.delay}`,
              zIndex:    isHov ? 30 : 1,
            }}
            onMouseEnter={() => setHovered(n.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* ── Circle ── */}
            <div
              style={{
                width:          '100%',
                height:         '100%',
                borderRadius:   '50%',
                display:        'flex',
                flexDirection:  'column',
                alignItems:     'center',
                justifyContent: 'center',
                gap:            2,
                cursor:         'pointer',
                background:     isHov ? n.color : `${n.color}1e`,
                border:         `2px solid ${n.color}`,
                boxShadow:      isHov
                  ? `0 0 0 8px ${n.color}20, 0 0 32px ${n.color}55`
                  : `0 0 14px ${n.color}20`,
                transform:      isHov ? 'scale(1.22)' : 'scale(1)',
                transition:     'background 0.25s, box-shadow 0.25s, transform 0.3s cubic-bezier(.34,1.56,.64,1)',
                userSelect:     'none',
              }}
            >
              {n.lines.map((line, i) => (
                <span key={i} style={{
                  color:         isHov ? '#fff' : n.color,
                  fontSize:      n.lines.length > 1 ? '0.68rem' : '0.78rem',
                  fontWeight:    700,
                  lineHeight:    1.2,
                  textAlign:     'center',
                  fontFamily:    'Inter, system-ui, sans-serif',
                  letterSpacing: '0.01em',
                  transition:    'color 0.2s',
                  pointerEvents: 'none',
                }}>
                  {line}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
