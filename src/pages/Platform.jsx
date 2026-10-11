import { Link } from 'react-router-dom'
import ArrowLink from '../components/ArrowLink'
import PageHero from '../components/PageHero'
import { images, included, modules, plans } from '../data'
import usePageTitle from '../usePageTitle'

export default function Platform() {
  usePageTitle('Platform')

  return (
    <>
      <PageHero title="Appollo FDVU" image={images.white} />

      <section className="band" data-theme="dark">
        <div className="container">
          <p className="statement statement--still">
            A complete, modular FDVU system. Combine the modules you need, then
            add specialist consulting or purpose-built functions when the
            portfolio asks for more.
          </p>
        </div>
      </section>

      <section className="section" data-theme="light">
        <div className="container">
          <div className="split split--top">
            <h2>The platform</h2>
            <div className="prose">
              <p>
                Appollo FDVU is a web-based system for property operations,
                on desktop and on mobile. It is built so an organisation can
                meet the requirements in NS 3456, and the other laws and
                regulations that sit beside it, without keeping the building in
                a stack of separate files.
              </p>
              <p>
                Appollo, also known as Abis air, is the desktop system. ORRABrann
                covers fire measures. Air App takes the work on site. Around
                them: Aqua for reporting, a digital twin fed by IoT, and
                condition assessment according to NS 3424.
              </p>
            </div>
          </div>
          <ul className="module-index">
            {modules.map((item) => (
              <li key={item.slug}>
                <Link to={`/platform/${item.slug}`}>
                  <img src={item.image} alt="" />
                  <span>
                    <strong>{item.title}</strong>
                    {item.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight" data-theme="light">
        <div className="container">
          <div className="section-head">
            <h2>Plans</h2>
            <p>
              Three published levels. Entreprise includes Basic. The full plan
              includes both. Pricing is agreed for the portfolio — book a demo
              and we will walk through the scope.
            </p>
          </div>
          <div className="plans">
            {plans.map((plan) => (
              <article className="plan" key={plan.name}>
                <h3>{plan.name}</h3>
                <p>{plan.note}</p>
                {plan.groups.map((group) => (
                  <div key={group.label}>
                    <h4>{group.label}</h4>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--tight" data-theme="dark">
        <div className="container">
          <div className="split split--top">
            <h2>Included in every plan</h2>
            <div className="value-list value-list--light">
              {included.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="split consultant">
            <h2>Consulting, when the standard scope is not enough</h2>
            <div>
              <p>
                Appollo’s consultants have long experience in FDVU and work with
                new and existing customers. Start with a conversation. When a
                portfolio needs something the current modules do not cover, the
                development team adapts what exists or builds the function.
              </p>
              <ArrowLink to="/contact" solid>
                Book a demo
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
