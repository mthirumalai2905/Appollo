import { useState } from 'react'
import PageHero from '../components/PageHero'
import { email, images, phone, phoneHref } from '../data'
import usePageTitle from '../usePageTitle'

const topics = [
  'Full platform demo',
  'FDV documentation',
  'Fire safety (ORRABrann)',
  'Mobile app',
  'Not sure yet',
]

export default function Contact() {
  usePageTitle('Contact')
  const [sent, setSent] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '')
    const organisation = String(data.get('organisation') || '')
    const from = String(data.get('email') || '')
    const tel = String(data.get('phone') || '')
    const topic = String(data.get('topic') || '')
    const message = String(data.get('message') || '')
    const body = [
      `Name: ${name}`,
      `Organisation: ${organisation}`,
      `Email: ${from}`,
      `Phone: ${tel}`,
      `Topic: ${topic}`,
      '',
      message,
    ].join('\n')
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `Demo request from ${organisation || name}`,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHero title="Contact" image={images.dusk} />
      <section className="section" data-theme="light">
        <div className="container">
          <div className="split split--top">
            <div>
              <h2>Book a demo</h2>
              <p className="lede">
                Tell us about the portfolio and what you want to see. We will
                reply from {email}.
              </p>
              <dl className="contact-facts">
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${email}`}>{email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href={phoneHref}>{phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>Studio</dt>
                  <dd>Oslo, Norway</dd>
                </div>
              </dl>
            </div>

            {sent ? (
              <div className="form-success">
                <h3>Your email app should be open.</h3>
                <p>
                  The demo request is addressed to {email}. If nothing opened,
                  send the same note directly and we will follow up.
                </p>
              </div>
            ) : (
              <form className="demo-form" onSubmit={onSubmit}>
                <label>
                  Name
                  <input name="name" type="text" required autoComplete="name" />
                </label>
                <label>
                  Organisation
                  <input name="organisation" type="text" required autoComplete="organization" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label>
                  Phone
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
                <label>
                  What should we show you?
                  <select name="topic" defaultValue={topics[0]}>
                    {topics.map((topic) => (
                      <option key={topic}>{topic}</option>
                    ))}
                  </select>
                </label>
                <label>
                  About the portfolio
                  <textarea name="message" rows="5" required />
                </label>
                <button className="arrow-link arrow-link--solid" type="submit">
                  <span aria-hidden="true">↳</span>
                  Book a demo
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
