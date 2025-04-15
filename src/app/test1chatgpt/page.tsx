import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Whitespace</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
        </nav>
        <div className="space-x-4">
          <button className="bg-yellow-300 text-black px-4 py-2 rounded">
            Login
          </button>
          <button className="bg-white text-blue-900 px-4 py-2 rounded">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Get More Done with whitespace
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Organize your work, collaborate with your team, and stay productive
          wherever you are.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded">
          Try for Free
        </button>
      </section>

      {/* Features */}
      <section className="py-20 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-2">Project Management</h3>
          <p className="mb-4">
            Stay on top of all your work with powerful tools that make task
            tracking and team collaboration simple and efficient.
          </p>
          <button className="text-blue-900 underline">Learn more</button>
        </div>
        <div className="bg-blue-100 h-60 rounded" />
      </section>

      {/* Teamwork */}
      <section className="py-20 px-6 bg-blue-900 text-white grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-blue-100 h-60 rounded" />
        <div>
          <h3 className="text-2xl font-bold mb-2">Work together</h3>
          <p className="mb-4">
            Collaborate in real-time with your team members and keep everyone in
            sync.
          </p>
          <button className="bg-white text-blue-900 px-4 py-2 rounded">
            Explore
          </button>
        </div>
      </section>

      {/* Extensions */}
      <section className="py-20 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-2">Use as Extension</h3>
          <p className="mb-4">
            Easily integrate with Chrome to enhance your productivity workflow.
          </p>
          <button className="text-blue-900 underline">Read more</button>
        </div>
        <div className="bg-blue-100 h-60 rounded" />
      </section>

      {/* Customization */}
      <section className="py-20 px-6 grid md:grid-cols-2 gap-10">
        <div className="bg-blue-100 h-60 rounded" />
        <div>
          <h3 className="text-2xl font-bold mb-2">
            Customize it to your needs
          </h3>
          <p className="mb-4">
            Tailor the platform to suit your workflow, whether you&apos;re a
            solo user or a large team.
          </p>
          <button className="text-blue-900 underline">Show me how</button>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">Choose Your Plan</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-6 rounded shadow">
            <h4 className="font-bold mb-2">Free</h4>
            <p className="text-3xl font-bold">$0</p>
            <ul className="mt-4 space-y-2 text-left">
              <li>✓ Basic features</li>
              <li>✓ 3 Projects</li>
              <li>✓ Email support</li>
            </ul>
          </div>
          <div className="border p-6 rounded shadow bg-blue-900 text-white">
            <h4 className="font-bold mb-2">Personal</h4>
            <p className="text-3xl font-bold">$11.99</p>
            <ul className="mt-4 space-y-2 text-left">
              <li>✓ Everything in Free</li>
              <li>✓ Unlimited Projects</li>
              <li>✓ Advanced Analytics</li>
            </ul>
          </div>
          <div className="border p-6 rounded shadow">
            <h4 className="font-bold mb-2">Team</h4>
            <p className="text-3xl font-bold">$49.99</p>
            <ul className="mt-4 space-y-2 text-left">
              <li>✓ Everything in Personal</li>
              <li>✓ Collaboration Tools</li>
              <li>✓ Priority Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <h3 className="text-2xl font-bold mb-4">
          Your work, everywhere you are
        </h3>
        <p className="mb-6">
          Access your projects and tasks on any device with our cross-platform
          apps.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded">
          Start Now
        </button>
      </section>

      {/* Data Security */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">100% your data</h3>
        <p className="mb-4">
          Your data is private, secure, and always under your control.
        </p>
        <button className="bg-blue-900 text-white px-6 py-3 rounded">
          Learn More
        </button>
      </section>

      {/* Sponsors */}
      <section className="py-12 px-6 text-center space-y-4">
        <h3 className="text-lg font-bold">Our sponsors</h3>
        <div className="flex justify-center gap-10">
          <span>🍎</span>
          <span>🪟</span>
          <span>💬</span>
          <span>🔍</span>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Work with Your Favorite Apps Using whitespace
        </h3>
        <p className="mb-6">
          Seamless integration with popular tools to keep your workflow smooth
          and efficient.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded">
          See Integrations
        </button>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h3 className="text-2xl font-bold mb-6">What Our Clients Say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <p className="italic">
              &quot;Whitespace has made our workflow more efficient!&quot;
            </p>
            <p className="mt-2 font-bold">— Client Name, Role</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="italic">
              &quot;Incredible app for managing my personal tasks!&quot;
            </p>
            <p className="mt-2 font-bold">— User Name, Freelancer</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="italic">
              &quot;An absolute must-have for teams.&quot;
            </p>
            <p className="mt-2 font-bold">— Startup Lead, Company</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <h3 className="text-2xl font-bold mb-4">Try Whitespace today</h3>
        <p className="mb-6">Start your free trial. No credit card needed.</p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded">
          Sign Up
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-sm text-center py-6">
        <p>&copy; 2025 Whitespace. All rights reserved.</p>
      </footer>
    </div>
  );
}
