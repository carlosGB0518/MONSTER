const NAV_LINKS = [
  { href: '#la-marca',   label: 'La Marca'   },
  { href: '#concepto',   label: 'Concepto'   },
  { href: '#logo',       label: 'Logo'       },
  { href: '#colores',    label: 'Colores'    },
  { href: '#tipografia', label: 'Tipografía' },
  { href: '#tamano',     label: 'Tamaño'     },
  { href: '#uso',        label: 'Uso'        },
  { href: '#tono',       label: 'Tono'       },
]

const Navbar = () => (
  <nav className="monster-nav">
    <div className="brand-name">
      MONSTER <span>ENERGY</span>
    </div>
    <ul className="nav-links d-none d-lg-flex">
      {NAV_LINKS.map(({ href, label }) => (
        <li key={href}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navbar
