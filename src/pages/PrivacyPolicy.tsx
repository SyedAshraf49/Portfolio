import React from 'react';
import { LegalPage } from './LegalPage';

export const PrivacyPolicy: React.FC = () => (
  <LegalPage
    pageTitle="Privacy Policy"
    eyebrow="Privacy"
    title="Privacy Policy"
    description="This policy explains what information may be handled when you visit this portfolio or contact Syed Ashraf."
  >
    <section>
      <h2>1. Overview</h2>
      <p>
        This portfolio belongs to Syed Ashraf S.N. It is a personal website that presents software projects,
        experience, certifications, and contact information. This policy describes the limited information
        connected with the site and how it is handled.
      </p>
    </section>

    <section>
      <h2>2. Information you choose to send</h2>
      <p>
        If you use the contact form, you may enter your name, subject, and message. The portfolio does not
        intentionally save these form entries in its own database. Instead, the form prepares an email and
        opens your email client. If you send that email, the information is handled by your email provider,
        your account, and the recipient mailbox.
      </p>
    </section>

    <section>
      <h2>3. Technical information</h2>
      <p>
        The hosting provider may process standard technical information needed to deliver, secure, and
        troubleshoot the site, such as request timestamps, browser details, device information, and network
        information. This site does not intentionally add a separate advertising or analytics profile to visitors.
      </p>
    </section>

    <section>
      <h2>4. Cookies and local storage</h2>
      <p>
        The site does not intentionally set non-essential advertising cookies. Your browser, hosting provider,
        embedded services, or linked third-party websites may use their own storage technologies under their own
        policies. The portfolio also includes theme behavior that may use browser storage to remember a display
        preference when applicable.
      </p>
    </section>

    <section>
      <h2>5. Third-party services and links</h2>
      <p>
        The portfolio links to services such as GitHub, LinkedIn, Instagram, Vercel-hosted demos, Google Fonts,
        and other external websites. When you follow an external link, that service’s privacy policy and terms
        apply. Syed Ashraf does not control the privacy practices, availability, or content of external services.
      </p>
    </section>

    <section>
      <h2>6. Data retention and security</h2>
      <p>
        Information sent by email is retained according to the practices and settings of the relevant email
        accounts. Reasonable care is taken with communications, but no online transmission or storage system can
        be guaranteed to be completely secure.
      </p>
    </section>

    <section>
      <h2>7. Your choices</h2>
      <p>
        You can choose not to submit information through the contact form and can contact Syed Ashraf directly
        by email with questions about a message you have sent. You may also manage cookies, browser storage, and
        third-party permissions through your browser and the relevant service.
      </p>
    </section>

    <section>
      <h2>8. Policy updates</h2>
      <p>
        This policy may be updated when the portfolio, contact process, or connected services change. The latest
        version will be published on this page with its updated date.
      </p>
    </section>
  </LegalPage>
);
