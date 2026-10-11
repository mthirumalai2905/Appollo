import { Link } from 'react-router-dom'

export default function RefCard({ to, image, title }) {
  function onMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--y', `${event.clientY - rect.top}px`)
  }

  return (
    <article className="ref-card">
      <Link to={to} className="ref-card__media" onMouseMove={onMove}>
        <img src={image} alt="" />
        <span className="ref-card__pill">
          <span aria-hidden="true">↳</span> View
        </span>
      </Link>
      <Link to={to} className="ref-card__label">
        <h3>{title}</h3>
        <span className="hover-line" />
      </Link>
    </article>
  )
}
