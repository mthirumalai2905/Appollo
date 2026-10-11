import { Link } from 'react-router-dom'

export default function ArrowLink({ to, href, children, solid = false }) {
  const className = `arrow-link${solid ? ' arrow-link--solid' : ''}`
  const inner = (
    <>
      <span className="arrow-link__mark" aria-hidden="true">
        ↳
      </span>
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <a className={className} href={href}>
        {inner}
      </a>
    )
  }

  return (
    <Link className={className} to={to}>
      {inner}
    </Link>
  )
}
