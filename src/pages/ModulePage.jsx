import { Link, useParams } from 'react-router-dom'
import ArrowLink from '../components/ArrowLink'
import PageHero from '../components/PageHero'
import { modules } from '../data'
import usePageTitle from '../usePageTitle'

export default function ModulePage() {
  const { slug } = useParams()
  const item = modules.find((entry) => entry.slug === slug)
  usePageTitle(item ? item.title : 'Platform')

  if (!item) {
    return (
      <section className="section missing" data-theme="light">
        <div className="container">
          <h1>This module is not on the platform page.</h1>
          <ArrowLink to="/platform">Back to the platform</ArrowLink>
        </div>
      </section>
    )
  }

  const others = modules.filter((entry) => entry.slug !== item.slug).slice(0, 5)

  return (
    <>
      <PageHero title={item.title} image={item.image} />
      <section className="section" data-theme="light">
        <div className="container">
          <div className="split">
            <h2>In ASTRID FDVU</h2>
            <div className="prose">
              <p>{item.lead}</p>
              <p>{item.body}</p>
              <ArrowLink to="/contact" solid>
                Book a demo
              </ArrowLink>
            </div>
          </div>
          <div className="split split--top module-points">
            <h2>What it covers</h2>
            <ul className="ticks">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="band band--tight" data-theme="dark">
        <div className="container">
          <div className="split split--top">
            <h2>More of the platform</h2>
            <ul className="resource-list">
              {others.map((entry) => (
                <li key={entry.slug}>
                  <Link to={`/platform/${entry.slug}`}>
                    <span aria-hidden="true">→</span>
                    {entry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
