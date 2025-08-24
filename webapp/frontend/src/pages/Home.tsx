import { Link } from 'react-router-dom'
import { 
  RocketLaunchIcon, 
  ShieldCheckIcon, 
  CpuChipIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const features = [
    {
      name: 'Modern React Frontend',
      description: 'Built with React 18, TypeScript, and Tailwind CSS for a beautiful and responsive user interface.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Secure Backend',
      description: 'Node.js backend with Express, JWT authentication, and comprehensive security measures.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Robust Database',
      description: 'PostgreSQL database with Prisma ORM for type-safe database operations and migrations.',
      icon: CpuChipIcon,
    },
    {
      name: 'User Management',
      description: 'Complete user authentication system with registration, login, and profile management.',
      icon: UserGroupIcon,
    },
    {
      name: 'Content Management',
      description: 'Create, edit, and manage blog posts with rich text editing and commenting system.',
      icon: DocumentTextIcon,
    },
    {
      name: 'Developer Experience',
      description: 'Built with modern tooling including Vite, ESLint, Prettier, and comprehensive testing setup.',
      icon: CogIcon,
    },
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Amazing
            <span className="text-primary-600"> Web Applications</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern, full-stack web application template built with React, Node.js, and PostgreSQL. 
            Get started quickly with a production-ready foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="btn-primary text-lg px-8 py-3"
            >
              Get Started
            </Link>
            <Link
              to="/posts"
              className="btn-outline text-lg px-8 py-3"
            >
              View Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Build
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This template provides all the essential features and modern tooling to build 
            production-ready web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="card p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-white rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built with Modern Technologies
          </h2>
          <p className="text-lg text-gray-600">
            Leverage the latest tools and frameworks for optimal performance and developer experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-xl">R</span>
            </div>
            <h3 className="font-semibold text-gray-900">React 18</h3>
            <p className="text-sm text-gray-600">Frontend Framework</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold text-xl">N</span>
            </div>
            <h3 className="font-semibold text-gray-900">Node.js</h3>
            <p className="text-sm text-gray-600">Backend Runtime</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 font-bold text-xl">P</span>
            </div>
            <h3 className="font-semibold text-gray-900">PostgreSQL</h3>
            <p className="text-sm text-gray-600">Database</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 font-bold text-xl">T</span>
            </div>
            <h3 className="font-semibold text-gray-900">TypeScript</h3>
            <p className="text-sm text-gray-600">Type Safety</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-primary-600 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of developers building amazing web applications with this template.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Sign In
          </Link>
        </div>
      </section>
    </div>
  )
}
