import { Link } from 'react-router-dom'
import ArrowLink from '../components/ArrowLink'
import PageHero from '../components/PageHero'
import { customers, images, values } from '../data'
import usePageTitle from '../usePageTitle'

export default function About() {
  usePageTitle('About')

  return (
    <>
      <PageHero title="About ASTRID" image={images.oslo} />

      <section className="band" data-theme="dark">
        <div className="container">
          <p className="statement statement--still">
            More than 25 years as a supplier of FDVU software for Norwegian
            property organisations.
          </p>
          <div className="split-stack">
            <div className="split">
              <h2>Quality, security and integrity</h2>
              <p>
                Those three are the values ASTRID holds the company to, and the
                standard the product has to meet. ASTRID FDVU, and everything
                around it, is expected to reflect them — in the record a customer
                keeps, and in the way the system is run.
              </p>
            </div>
            <div className="split">
              <h2>Based in Oslo</h2>
              <div>
                <p>
                  The team is in Oslo: people who design the system, people who
                  build it, and the people who keep the work organised. Customers
                  named by ASTRID include Oslobygg, KFiO and Oslo Forsikring.
                  The work is the same throughout — property operations, put into
                  a system an organisation can actually use.
                </p>
                <ArrowLink to="/contact" solid>
                  Let’s talk
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container">
          <div className="split split--top">
            <h2>What we hold ourselves to</h2>
            <div className="value-list">
              {values.map((value) => (
                <article key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" data-theme="light">
        <div className="container">
          <div className="section-head">
            <h2>Customers</h2>
          </div>
          <ul className="name-list">
            {customers.map((customer) => (
              <li key={customer.slug}>
                <Link to={`/customers/${customer.slug}`}>
                  <span aria-hidden="true">→</span>
                  {customer.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
