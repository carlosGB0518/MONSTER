const MonsterM = ({ size = 80, color = '#95D600' }) => (
  <svg viewBox="0 0 200 250" width={size} aria-label="Monster M claw mark">
    <line x1="30"  y1="20"  x2="60"  y2="230" stroke={color} strokeWidth="28" strokeLinecap="square" />
    <line x1="100" y1="20"  x2="60"  y2="140" stroke={color} strokeWidth="28" strokeLinecap="square" />
    <line x1="100" y1="20"  x2="140" y2="140" stroke={color} strokeWidth="28" strokeLinecap="square" />
    <line x1="170" y1="20"  x2="140" y2="230" stroke={color} strokeWidth="28" strokeLinecap="square" />
  </svg>
)

export default MonsterM
