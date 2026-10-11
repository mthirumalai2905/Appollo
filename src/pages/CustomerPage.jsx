import { Link, useParams } from 'react-router-dom'
import ArrowLink from '../components/ArrowLink'
import PageHero from '../components/PageHero'
import { customers } from '../data'
import usePageTitle from '../usePageTitle'

export default function CustomerPage() {
  const { slug } = useParams()
  const customer = customers.find((entry) => entry.slug === slug)
  usePageTitle(customer ? customer.name : 'Customers')

  if (!customer) {
    return (
      <section className="section missing" data-theme="light">
        <div className="container">
          <h1>That customer page does not exist.</h1>
          <ArrowLink to="/customers">All customers</ArrowLink>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHero title={customer.name} image={customer.image} />
      <section className="section" data-theme="light">
        <div className="container">
          <div className="split">
            <h2>Reference</h2>
            <div className="prose">
              <p>{customer.summary}</p>
              <p>{customer.body}</p>
              <ArrowLink to="/contact" solid>
                Book a demo
              </ArrowLink>
            </div>
          </div>
          <div className="split split--top">
            <h2>Also named</h2>
            <ul className="resource-list resource-list--ink">
              {customers
                .filter((entry) => entry.slug !== customer.slug)
                .map((entry) => (
                  <li key={entry.slug}>
                    <Link to={`/customers/${entry.slug}`}>
                      <span aria-hidden="true">→</span>
                      {entry.name}
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
