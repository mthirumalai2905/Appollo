import { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowLink from '../components/ArrowLink'
import BackgroundVideo from '../components/BackgroundVideo'
import PageHero from '../components/PageHero'
import RevealText from '../components/RevealText'
import RefCard from '../components/RefCard'
import {
  customers,
  email,
  faqs,
  homeModules,
  images,
  partners,
  phone,
  phoneHref,
  videos,
} from '../data'
import usePageTitle from '../usePageTitle'

export default function Home() {
  usePageTitle('')
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <section className="hero" data-theme="dark">
        <BackgroundVideo
          className="hero__media"
          src={videos.hero}
        />
        <div className="container hero__content">
          <h1>Norway’s trusted platform for end-to-end building operations</h1>
        </div>
      </section>

      <section className="band" data-theme="dark">
        <div className="container">
          <RevealText text="Appollo is an Oslo-based software company for property and building operations. Best known for maintenance, inspections, technical documentation, equipment and operational compliance. A web-based FDVU platform for the organisations that run buildings." />
          <div className="split-stack">
            <div className="split">
              <h2>We set a high standard for how property is managed</h2>
              <p>
                Appollo FDVU is a complete, web-based system for property
                operations. It is modular, so the platform can be shaped around
                the organisation: documentation, maintenance, deviations and the
                routines a building actually depends on. From a single property
                to a large portfolio, the record stays in one place.
              </p>
            </div>
            <div className="split">
              <h2>We treat every building as a system</h2>
              <div>
                <p>
                  Maintenance, inspections and technical records only work when
                  they stay connected. Appollo gives owners, managers and
                  suppliers one operational picture: what is due, what is open,
                  and what has been documented. Structured reporting. Clear
                  responsibilities. Less of the chasing you should not have to do.
                </p>
                <ArrowLink to="/contact" solid>
                  Let’s talk
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logos" data-theme="light">
        <div className="container">
          <h2>Trusted by Norwegian property organisations</h2>
        </div>
        <div className="marquee" aria-label="Customers">
          <div className="marquee__track">
            {[...partners, ...partners, ...partners, ...partners].map((name, index) => (
              <span key={`${name}-${index}`}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container">
          <div className="figures">
            <article className="figures__item">
              <img src={images.apartments} alt="Residential apartment buildings" />
              <div className="figures__copy">
                <h2>Who we serve</h2>
                <p>
                  Appollo delivers FDVU software for organisations that own and
                  run buildings: public portfolios, residential and mixed-use
                  properties, and the teams who insure or oversee them. Customers
                  such as Oslobygg, Brakon and Oslo Forsikring use the platform
                  to keep operations reliable and aligned with the rules and
                  standards that apply.
                </p>
                <ArrowLink to="/customers">Learn more</ArrowLink>
              </div>
            </article>
            <article className="figures__item figures__item--tall">
              <img src={images.facade} alt="A modern building facade" />
              <div className="figures__copy">
                <h2>Compliance, planned in</h2>
                <p>
                  The platform is built for Norwegian property operations. NS
                  3456 documentation, inspection intervals, risk assessments and
                  the files a building has to keep. Customer-specific servers and
                  GDPR-conscious data handling sit under the product. Preventative
                  routines and a visible status take pressure off the people
                  responsible for the asset.
                </p>
                <ArrowLink to="/contact">Contact</ArrowLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="band band--tight" data-theme="dark">
        <div className="container">
          <div className="split split--top">
            <h2>Platform</h2>
            <ul className="resource-list">
              {homeModules.map((item) => (
                <li key={item.slug}>
                  <Link to={`/platform/${item.slug}`}>
                    <span aria-hidden="true">→</span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container">
          <div className="section-head">
            <h2>Customer references</h2>
          </div>
          <div className="refs">
            {customers.map((customer) => (
              <RefCard
                key={customer.slug}
                to={`/customers/${customer.slug}`}
                image={customer.image}
                title={customer.name}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--faq" data-theme="light">
        <div className="container">
          <div className="split split--top">
            <h2>Frequently asked questions</h2>
            <div className="faq">
              {faqs.map((item, index) => {
                const open = openFaq === index
                return (
                  <div className={`faq__item${open ? ' is-open' : ''}`} key={item.q}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? -1 : index)}
                    >
                      {item.q}
                      <span aria-hidden="true">{open ? '–' : '+'}</span>
                    </button>
                    {open && <p>{item.a}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="closing" data-theme="dark">
        <BackgroundVideo className="closing__media" src={videos.closing} />
        <div className="container">
          <p className="closing__motto">Enkelhet, satt i system</p>
          <p className="closing__line">
            Simplicity, set into a system. From the first property record to
            everyday operations — maintenance, inspections and compliance in one
            place.
          </p>
          <ArrowLink to="/contact" solid>
            Contact
          </ArrowLink>
          <p className="closing__fine">
            <a href={`mailto:${email}`}>{email}</a>
            <a href={phoneHref}>{phone}</a>
          </p>
        </div>
      </section>
    </>
  )
}
