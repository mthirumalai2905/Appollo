import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { linkedin, phone, phoneHref } from '../data'

const links = [
  { to: '/about', label: 'About' },
  { to: '/platform', label: 'Platform' },
  { to: '/customers', label: 'Customers' },
  { to: '/contact', label: 'Contact' },
]

function Brand() {
  return (
    <NavLink to="/" className="brand" aria-label="Appollo home" end>
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M0 0h14v14H0V0zm18 0h14v14H18V0zM0 18h14v14H0V18zm22 4h10v10H22V22z"
        />
      </svg>
      <span>Appollo</span>
    </NavLink>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [onDark, setOnDark] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    const update = () => {
      const probe = 36
      let dark = false
      document.querySelectorAll('[data-theme]').forEach((node) => {
        const rect = node.getBoundingClientRect()
        if (rect.top <= probe && rect.bottom >= probe) {
          dark = node.getAttribute('data-theme') === 'dark'
        }
      })
      setOnDark(dark)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [pathname])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const headerClass = `header${onDark ? '' : ' is-ink'}${open ? ' is-menu' : ''}`

  return (
    <>
      <header className={headerClass}>
        <Brand />
        <div className="header__end">
          <nav className="header__links" aria-label="Primary">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button
            className={`menu-btn${open ? ' is-open' : ''}`}
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <button
          className="menu__backdrop"
          type="button"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <div className="menu__panel" role="dialog" aria-modal="true" aria-label="Menu">
          <nav className="menu__links" aria-label="Menu">
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="menu__meta">
            <p>Social</p>
            <a href={linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer" data-theme="dark">
        <div className="container">
          <div className="site-footer__main">
            <nav aria-label="Footer">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <a href={linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="site-footer__legal">
            <span>© {new Date().getFullYear()} Appollo</span>
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <a href={phoneHref}>{phone}</a>
          </div>
        </div>
      </footer>
    </>
  )
}
