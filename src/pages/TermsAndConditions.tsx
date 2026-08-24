import React from 'react';
import { LegalPage } from './LegalPage';

export const TermsAndConditions: React.FC = () => (
  <LegalPage
    pageTitle="Terms & Conditions"
    eyebrow="Terms"
    title="Terms & Conditions"
    description="These terms describe the conditions for using this portfolio and its publicly linked resources."
  >
    <section>
      <h2>1. Acceptance of these terms</h2>
      <p>
        By accessing this portfolio, you agree to use it lawfully and respectfully. If you do not agree with
        these terms, please do not use the site or its resources.
      </p>
    </section>

    <section>
      <h2>2. Purpose of the site</h2>
      <p>
        This is a personal portfolio for presenting professional experience, software projects, certifications,
        technical interests, and contact information. The content is provided for general informational and
        demonstration purposes.
      </p>
    </section>

    <section>
      <h2>3. Intellectual property</h2>
      <p>
        Unless otherwise stated, the portfolio’s original text, visual design, code, favicon, and presentation
        materials belong to Syed Ashraf S.N. Individual projects may have their own repositories, licenses,
        contributors, assets, and third-party dependencies. Those project-specific terms continue to apply to
        the relevant project.
      </p>
      <p>
        You may view and share links to this portfolio for personal or professional reference. Do not reproduce,
        modify, redistribute, or present the portfolio’s original content as your own without permission.
      </p>
    </section>

    <section>
      <h2>4. External websites and project links</h2>
      <p>
        This portfolio links to GitHub repositories, live demos, professional profiles, hosting services, and
        other third-party websites. These links are provided for convenience and reference. Syed Ashraf does not
        control those services and is not responsible for their content, availability, security, or terms.
      </p>
    </section>

    <section>
      <h2>5. Acceptable use</h2>
      <p>
        You agree not to misuse the site, attempt to disrupt its operation, access it through unauthorized means,
        introduce malicious code, scrape it in a way that harms the service, or use information from it to
        impersonate Syed Ashraf or misrepresent a professional relationship.
      </p>
    </section>

    <section>
      <h2>6. No professional or commercial guarantee</h2>
      <p>
        Portfolio content is presented as a record of experience and examples of work. It is not a guarantee of
        future performance, a warranty for any linked software, or an offer of employment, consulting, support,
        or other services unless separately agreed in writing.
      </p>
    </section>

    <section>
      <h2>7. Availability and limitations</h2>
      <p>
        The site and its linked resources are provided on an “as available” basis. Efforts are made to keep the
        information accurate and the site available, but uninterrupted operation, complete accuracy, and
        continued availability of external links cannot be guaranteed.
      </p>
    </section>

    <section>
      <h2>8. Changes to these terms</h2>
      <p>
        These terms may be updated when the site, its content, or its connected services change. The current
        version will be published on this page with its updated date. Continued use of the site after an update
        means you accept the revised terms.
      </p>
    </section>

    <section>
      <h2>9. Contact</h2>
      <p>
        Questions about these terms can be sent to{' '}
        <a href="mailto:galladeashraf@gmail.com">galladeashraf@gmail.com</a>.
      </p>
    </section>
  </LegalPage>
);
