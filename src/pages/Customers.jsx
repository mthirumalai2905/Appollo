import PageHero from '../components/PageHero'
import RefCard from '../components/RefCard'
import { customers, images } from '../data'
import usePageTitle from '../usePageTitle'

export default function Customers() {
  usePageTitle('Customers')

  return (
    <>
      <PageHero title="Customers" image={images.brick} />
      <section className="section" data-theme="light">
        <div className="container">
          <div className="split">
            <h2>Named by ASTRID</h2>
            <p>
              These are organisations ASTRID itself names as customers.
              Oslobygg, Brakon and Oslo Forsikring are cited for operational
              reliability and for compliance with the rules and standards that
              apply. KFiO is named alongside them. The pages below stay with
              what ASTRID has published — they are references, not invented
              case studies.
            </p>
          </div>
          <div className="refs refs--page">
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
    </>
  )
}
