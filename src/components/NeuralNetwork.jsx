import { useState } from 'react'

/* ─── 6 nodes placed evenly around a circle (hexagonal ring) ───
   Container: 320×480. Center: (160, 243). Ring radius: 90px.
   Each node's base center = (cx + r*cos(θ), cy + r*sin(θ))
   Circle div size: 88px → subtract 44 to get top-left.            */

const CX = 160, CY = 243, R = 90, SIZE = 88, HALF = SIZE / 2

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
    ...polar(-90),   /* top           */
    anim: 'f-ud',    dur: '4.0s', delay: '0s',
  },
  {
    id: 'cloud', full: 'Cloud',             lines: ['Cloud'],
    color: '#06b6d4', desc: 'AWS · GCP · Azure at scale',
    ...polar(-30),   /* upper-right   */
    anim: 'f-diag1', dur: '3.8s', delay: '-0.7s',
  },
  {
    id: 'cv',    full: 'Computer Vision',   lines: ['Computer', 'Vision'],
    color: '#f43f5e', desc: 'Image recognition & object detection',
    ...polar(30),    /* lower-right   */
    anim: 'f-lr',    dur: '5.0s', delay: '-1.8s',
  },
  {
    id: 'auto',  full: 'Automation',        lines: ['Automation'],
    color: '#f59e0b', desc: 'Workflow, RPA & intelligent bots',
    ...polar(90),    /* bottom        */
    anim: 'f-diag2', dur: '4.6s', delay: '-2.4s',
  },
  {
    id: 'nlp',   full: 'NLP',              lines: ['NLP'],
    color: '#10b981', desc: 'Language models & text AI',
    ...polar(150),   /* lower-left    */
    anim: 'f-ud',    dur: '5.4s', delay: '-3.1s',
  },
  {
    id: 'de',    full: 'Data Engineering',  lines: ['Data', 'Engineering'],
    color: '#8b5cf6', desc: 'Pipelines, lakehouses & warehouses',
    ...polar(-150),  /* upper-left    */
    anim: 'f-diag1', dur: '4.2s', delay: '-0.3s',
  },
]

export default function NeuralNetwork() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="relative" style={{ width: 320, height: 480 }}>

      <style>{`
        @keyframes f-ud    { 0%,100%{transform:translateY(0)}          50%{transform:translateY(-13px)}         }
        @keyframes f-lr    { 0%,100%{transform:translateX(0)}          50%{transform:translateX(11px)}          }
        @keyframes f-diag1 { 0%,100%{transform:translate(0,0)}         50%{transform:translate(9px,-11px)}      }
        @keyframes f-diag2 { 0%,100%{transform:translate(0,0)}         50%{transform:translate(-8px,10px)}      }
        @keyframes nn-pop  {
          from { opacity:0; transform:translateX(-50%) translateY(6px) scale(0.84); }
          to   { opacity:1; transform:translateX(-50%) translateY(0)   scale(1);    }
        }
      `}</style>

      {/* Optional subtle guide-circle behind nodes */}
      <div
        style={{
          position:     'absolute',
          left:          CX - R,
          top:           CY - R,
          width:         R * 2,
          height:        R * 2,
          borderRadius:  '50%',
          border:        '1px dashed rgba(99,102,241,0.12)',
          pointerEvents: 'none',
        }}
      />

      {NODES.map(n => {
        const isHov = hovered === n.id
        /* Popup direction: show above unless node is in the bottom half */
        const popAbove = n.top < CY - HALF

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
            {/* ── Popup ── */}
            {isHov && (
              <div
                style={{
                  position:      'absolute',
                  left:          '50%',
                  [popAbove ? 'bottom' : 'top']: 'calc(100% + 10px)',
                  display:       'flex',
                  flexDirection: popAbove ? 'column' : 'column-reverse',
                  alignItems:    'center',
                  pointerEvents: 'none',
                  zIndex:        50,
                  animation:     'nn-pop 0.22s cubic-bezier(.34,1.56,.64,1) both',
                  transform:     'translateX(-50%)',
                }}
              >
                {/* Card */}
                <div style={{
                  background:     `linear-gradient(135deg,${n.color}f0,${n.color}b0)`,
                  border:         `1px solid ${n.color}`,
                  boxShadow:      `0 8px 28px ${n.color}55`,
                  backdropFilter: 'blur(14px)',
                  borderRadius:   14,
                  padding:        '8px 14px',
                  whiteSpace:     'nowrap',
                }}>
                  <div style={{ color:'#fff', fontSize:'0.82rem', fontWeight:700, fontFamily:'Syne,sans-serif' }}>
                    {n.full}
                  </div>
                  <div style={{ color:'rgba(255,255,255,0.88)', fontSize:'0.68rem', marginTop:2, fontFamily:'Inter,sans-serif' }}>
                    {n.desc}
                  </div>
                </div>
                {/* Caret */}
                <div style={{
                  width:0, height:0,
                  borderLeft:'6px solid transparent',
                  borderRight:'6px solid transparent',
                  ...(popAbove
                    ? { borderTop:`7px solid ${n.color}`, marginTop:-1 }
                    : { borderBottom:`7px solid ${n.color}`, marginBottom:-1 }),
                }}/>
              </div>
            )}

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
