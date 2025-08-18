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
          <strong>
            This is a modern React application built with Vite, TypeScript, and Tailwind CSS. Explore the vast universe
            of planets from the Star Wars universe!
          </strong>
        </p>
        <p className="mb-4">Select a planet to start your exploration!</p>
        <Link to="/planets" className="bg-fuchsia-800 !text-white px-4 py-2 rounded">
          View Planets
        </Link>
      </section>
      <section>
        <h2>Project Features</h2>
        <p>This project demonstrates modern web development practices.</p>
        <p>All features requested in the Effective - Soft PDF document provided:</p>
        <p className="mb-6 mt-8 text-xl">
          <strong>Key features include:</strong>
        </p>
        <ul className="!list-disc pl-6">
          <li>React with TypeScript for type safety and better developer experience</li>
          <li>Vite for fast development and optimized builds</li>
          <li>React Router for client-side routing</li>
          <li>Tailwind CSS for responsive design</li>
          <li>ESLint and Prettier for code quality and formatting</li>
          <li>Jest for testing utilities and functions</li>
          <li>Integration with Star Wars API (SWAPI) for real data</li>
          <li>Modern React patterns including Suspense and Error Boundaries</li>
        </ul>
        <p className="mb-6 mt-8 text-xl">
          <strong>Constrains:</strong>
        </p>
        <ul className="!list-disc pl-6">
          <li>No UI library used, just plain Tailwind</li>
        </ul>
      </section>
    </div>
  )
}

export default HomePage
