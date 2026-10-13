import PageHero from '../components/PageHero'
import { email, images } from '../data'
import usePageTitle from '../usePageTitle'

export default function Privacy() {
  usePageTitle('Privacy policy')

  return (
    <>
      <PageHero title="Privacy policy" image={images.atrium} />
      <section className="section" data-theme="light">
        <div className="container prose prose--narrow">
          <p>
            This notice covers the ASTRID marketing site. It explains what
            happens to the details you send when you ask for a demo.
          </p>
          <h2>What you send us</h2>
          <p>
            The contact form collects your name, organisation, email, phone
            number if you leave one, the topic you choose, and the message you
            write. Submitting the form opens a message in your own email app,
            addressed to {email}. We receive it only if you send that email.
          </p>
          <h2>Why</h2>
          <p>
            We use those details to reply to a demo request and to understand
            which part of ASTRID FDVU you want to see. We do not sell them, and
            this site does not run advertising trackers.
          </p>
          <h2>How long</h2>
          <p>
            Correspondence is kept for as long as we need it to answer you and
            to keep a record of the conversation, then deleted when it is no
            longer needed for that purpose.
          </p>
          <h2>Your rights</h2>
          <p>
            You can ask what we hold about you, ask for a correction, or ask us
            to delete it, by writing to {email}. You can also complain to
            Datatilsynet, the Norwegian Data Protection Authority.
          </p>
        </div>
      </section>
    </>
  )
}
