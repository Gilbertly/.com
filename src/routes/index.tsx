import { createFileRoute } from '@tanstack/react-router';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

function InlineIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={16}
      height={16}
      className="inline-block w-4 h-4 mr-1 align-text-bottom"
    />
  );
}

export const Route = createFileRoute('/')({
  component: HomePage,
});

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl font-semibold mt-12 mb-4 pb-1 border-b"
      style={{ borderColor: 'var(--color-border)' }}
    >
      {children}
    </h2>
  );
}

function AccentLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="accent-link font-medium transition-colors duration-200 underline decoration-1 underline-offset-2"
    >
      {children}
    </a>
  );
}

function HomePage() {
  return (
    <div>
      {/* Intro */}
      <section>
        <p className="text-2xl" style={{ color: 'var(--color-text-secondary)' }}>
          Hello! I'm
        </p>
        <h1 className="text-4xl font-bold mt-1 md:text-5xl" style={{ color: 'var(--color-text)' }}>
          Gilbert Gathara
        </h1>
        <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          A Senior Full-Stack Engineer and Technical Team Lead based in{' '}
          <InlineIcon src="/icons/work/map.png" alt="Location" />Nairobi, Kenya.
          I have 9+ years of experience building and scaling web applications, managing
          engineering teams, and architecting cloud-native solutions on AWS and Cloudflare.
        </p>
      </section>

      {/* Work */}
      <SectionHeading>Work</SectionHeading>
      <div className="space-y-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        <p>
          Most recently, I was a Technical Team Lead at{' '}
          <InlineIcon src="/icons/work/yc.webp" alt="Yellow Card" />
          <AccentLink href="https://yellowcard.io">Yellow Card</AccentLink>, managing two
          engineering teams averaging 5 engineers each over the years. I led teams owning 11 microservices
          across admin tooling, a B2C crypto rewards program, and onboarding and KYC for
          34 countries and 2M+ users.
        </p>
        <p>
          Before that, I was a Full-Stack Engineer at{' '}
          <InlineIcon src="/icons/work/yc.webp" alt="Yellow Card" />
          <AccentLink href="https://yellowcard.io">Yellow Card</AccentLink>, building
          payment platforms handling fiat on-ramp and off-ramp across 20 African countries
          on AWS.
        </p>
        <p>
          At <InlineIcon src="/icons/work/mgas.png" alt="M-Gas" />
          <AccentLink href="https://mgas.ke">M-Gas</AccentLink>, I worked as a DevOps
          Engineer, helping refactor a monolith into serverless microservices on AWS and
          deploying ETL analytics pipelines alongside IoT and data teams.
        </p>
        <p>
          I started my career at{' '}
          <InlineIcon src="/icons/work/andela.svg" alt="Andela" />
          <AccentLink href="https://andela.com">Andela</AccentLink> as a Software / DevOps
          Engineer, spending 3.5 years monitoring AWS infrastructure, designing monolith-to-serverless
          migrations, and conducting security audits on production environments.
        </p>
      </div>

      {/* Tech Stack */}
      <SectionHeading>Tech Stack</SectionHeading>
      <div className="space-y-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        <div>
          <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
            Frontend
          </h3>
          <p>
            React, TanStack, Sentry, Storybook, Figma. Testing with Vitest, Lighthouse,
            Playwright, GitHub Actions, and PostHog.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
            Backend
          </h3>
          <p>
            Serverless Framework, Node.js, Bun, Wrangler. Testing with GitHub Actions,
            Vitest, Postman, and PostHog.
          </p>
          <p className="mt-1">
            <span className="font-medium" style={{ color: 'var(--color-text)' }}>AWS:</span>{' '}
            SQS, SNS, API Gateway, DynamoDB, StepFunctions, Route53, OpenSearch, Cognito,
            Lambda, CloudWatch.
          </p>
          <p className="mt-1">
            <span className="font-medium" style={{ color: 'var(--color-text)' }}>Cloudflare:</span>{' '}
            Workers, D1, R2, Durable Objects, Turnstile, WAF, Queues, Workflows.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
            Mobile
          </h3>
          <p>
            Flutter, Firebase, Fastlane, Bloc. Testing with Flutter test, Patrol, GitHub
            Actions, and PostHog. Publishing via Apple App Store Connect and Google Play
            Console.
          </p>
        </div>
      </div>

      {/* Contact */}
      <SectionHeading>Contact</SectionHeading>
      <div className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        <p>
          Reach me at{' '}
          <AccentLink href="mailto:hello@gilbertly.com">hello@gilbertly.com</AccentLink>,
          or find me on{' '}
          <AccentLink href="https://github.com/gilbertly">
            <GitHubLogoIcon className="inline-block w-4 h-4 mr-0.5 align-text-bottom" />
            GitHub
          </AccentLink>
          {' and '}
          <AccentLink href="https://www.linkedin.com/in/gilbert-gathara/">
            <LinkedInLogoIcon className="inline-block w-4 h-4 mr-0.5 align-text-bottom" />
            LinkedIn
          </AccentLink>.
        </p>
      </div>
    </div>
  );
}
