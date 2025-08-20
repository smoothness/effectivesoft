import { Link } from 'react-router'

function HomePage() {
  return (
    <div>
      <section className="mb-8">
        <h2>Welcome to EffectiveSoft!</h2>
        <p>Exploring planets with modern React and TypeScript!</p>
      </section>
      <section className="mb-8">
        <p>
          <strong>Explore the vast universe of planets from the Star Wars universe!</strong>
        </p>
        <p className="mb-4">Select a planet to start your exploration!</p>
        <Link to="/planets" className="bg-fuchsia-800 !text-white px-4 py-2 rounded">
          View Planets
        </Link>
      </section>
      <section>
        <h2>Project Features</h2>
        <p className="mb-10">
          <strong>All requirements in the Effective - Soft PDF document accomplished.</strong>
        </p>
        <div className="mb-10">
          <h3>Frontend</h3>
          <div className="mb-3">
            <p>
              <strong>Modern React application built with Vite, TypeScript, and Tailwind CSS.</strong>
            </p>
            <p>
              Link to Github repo:{' '}
              <a className="!underline !text-blue-600" href="https://github.com/smoothness/effectivesoft">
                https://github.com/smoothness/effectivesoft
              </a>
            </p>
          </div>
          <p className="mb-2 mt-3 text-xl">
            <strong>Features:</strong>
          </p>
          <ul className="!list-disc !pl-3">
            <li>React with TypeScript for type safety and better developement experience</li>
            <li>Vite for fast development and optimized builds</li>
            <li>React Router for client-side routing</li>
            <li>Tailwind CSS for responsive design</li>
            <li>ESLint and Prettier for code quality and formatting</li>
            <li>Integration with Star Wars API (SWAPI) for real data</li>
            <li>Integration with an external auth server</li>
            <li>Custom authentication and authorization, login and logout functionality</li>
            <li>LocalStorage integration for persisting user sessions</li>
            <li>Protected routes for secure access to certain pages</li>
            <ul className="!list-disc !pl-3">
              <li>Home page is not protected</li>
              <li>Planet list page and planet detail page are protected</li>
            </ul>
            <li>Modern React patterns including Suspense and Error Boundaries</li>
            <li>Deployed to Github Pages</li>
          </ul>
          <p className="mb-2 mt-3 text-xl">
            <strong>Constrains:</strong>
          </p>
          <ul className="!list-disc !pl-3">
            <li>No UI library used, just plain Tailwind</li>
          </ul>
        </div>
        <div>
          <h3>Backend</h3>
          <div className="mb-3">
            <p>
              <strong>Hono app.</strong>
            </p>
            <p>
              Link to Github repo:{' '}
              <a className="!underline !text-blue-600" href="https://github.com/smoothness/effectivesoftbe">
                https://github.com/smoothness/effectivesoftbe
              </a>
            </p>
            <p>
              Link to backend "/" route:{' '}
              <a className="!underline !text-blue-600" href="https://effectivesoftbe.vercel.app/">
                https://effectivesoftbe.vercel.app/
              </a>
            </p>
          </div>
          <p className="mb-2 mt-3 text-xl">
            <strong>Features:</strong>
          </p>
          <ul className="!list-disc !pl-3">
            <li>Simple Hono server with Typescript</li>
            <li>Login and logout routes</li>
            <li>Login and logout controllers for user authentication</li>
            <li>Logic to handle access to hardcoded credentials</li>
            <li>Deployed to Vercel</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default HomePage
