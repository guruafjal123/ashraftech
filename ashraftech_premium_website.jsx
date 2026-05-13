export default function AshrafTechWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-cyan-400/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <nav className="flex items-center justify-between mb-20">
            <h1 className="text-3xl font-bold tracking-wide">
              Ashraf<span className="text-sky-400">Tech</span>
            </h1>

            <div className="hidden md:flex gap-8 text-slate-300">
              <a href="#services" className="hover:text-sky-400 transition">Services</a>
              <a href="#about" className="hover:text-sky-400 transition">About</a>
              <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
            </div>
          </nav>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-sm mb-6">
                Premium IT Solutions & Infrastructure
              </div>

              <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                Building Secure & Smart Digital Systems
              </h2>

              <p className="text-slate-300 text-lg leading-8 mb-8 max-w-xl">
                AshrafTech delivers enterprise-grade IT solutions including DevOps,
                Cyber Security, Cloud Infrastructure, Automation, and Networking.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-7 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 transition text-lg font-semibold shadow-2xl shadow-sky-500/30">
                  Get Started
                </button>

                <button className="px-7 py-4 rounded-2xl border border-slate-700 hover:border-sky-400 transition text-lg font-semibold">
                  View Services
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full"></div>

              <div className="relative bg-slate-900/80 border border-slate-800 rounded-[32px] p-8 backdrop-blur-xl shadow-2xl">
                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-slate-800 rounded-3xl p-6">
                    <div className="text-sky-400 text-4xl mb-3">☁️</div>
                    <h3 className="text-xl font-bold mb-2">Cloud</h3>
                    <p className="text-slate-400 text-sm">AWS & scalable cloud architecture.</p>
                  </div>

                  <div className="bg-slate-800 rounded-3xl p-6">
                    <div className="text-sky-400 text-4xl mb-3">🔐</div>
                    <h3 className="text-xl font-bold mb-2">Security</h3>
                    <p className="text-slate-400 text-sm">Advanced cyber protection systems.</p>
                  </div>

                  <div className="bg-slate-800 rounded-3xl p-6">
                    <div className="text-sky-400 text-4xl mb-3">⚡</div>
                    <h3 className="text-xl font-bold mb-2">Automation</h3>
                    <p className="text-slate-400 text-sm">DevOps workflows & CI/CD pipelines.</p>
                  </div>

                  <div className="bg-slate-800 rounded-3xl p-6">
                    <div className="text-sky-400 text-4xl mb-3">🌐</div>
                    <h3 className="text-xl font-bold mb-2">Networking</h3>
                    <p className="text-slate-400 text-sm">Enterprise network infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-5">Our Services</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Powerful IT solutions designed for startups, enterprises, and modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Cloud Infrastructure',
              desc: 'Secure and scalable cloud deployments using AWS and modern technologies.',
              icon: '☁️'
            },
            {
              title: 'Cyber Security',
              desc: 'Advanced protection against cyber threats and network vulnerabilities.',
              icon: '🔐'
            },
            {
              title: 'DevOps & Automation',
              desc: 'Faster deployments with CI/CD, Docker, Linux, and automation systems.',
              icon: '⚡'
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-[28px] p-8 hover:border-sky-400/40 transition hover:-translate-y-1"
            >
              <div className="text-5xl mb-5">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-7">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8">About AshrafTech</h2>
            <p className="text-slate-300 text-lg leading-8 mb-6">
              AshrafTech focuses on delivering premium IT infrastructure,
              secure systems, and intelligent automation for modern businesses.
            </p>

            <p className="text-slate-400 leading-8">
              Our mission is to help organizations build scalable digital systems
              with reliability, security, and performance at the core.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-slate-800 rounded-[32px] p-10">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-extrabold text-sky-400 mb-2">100+</h3>
                <p className="text-slate-400">Projects</p>
              </div>

              <div>
                <h3 className="text-5xl font-extrabold text-sky-400 mb-2">24/7</h3>
                <p className="text-slate-400">Support</p>
              </div>

              <div>
                <h3 className="text-5xl font-extrabold text-sky-400 mb-2">99%</h3>
                <p className="text-slate-400">Uptime</p>
              </div>

              <div>
                <h3 className="text-5xl font-extrabold text-sky-400 mb-2">AI</h3>
                <p className="text-slate-400">Driven Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-slate-800 rounded-[36px] p-14">
          <h2 className="text-5xl font-bold mb-6">Let’s Build Something Amazing</h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-8 mb-10">
            Need secure infrastructure, cloud deployment, or modern IT automation?
            AshrafTech is ready to help.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5">
            <a
              href="mailto:contact@ashraftech.com"
              className="px-8 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 transition font-semibold text-lg"
            >
              contact@ashraftech.com
            </a>

            <a
              href="tel:+919876543210"
              className="px-8 py-4 rounded-2xl border border-slate-700 hover:border-sky-400 transition font-semibold text-lg"
            >
              +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 AshrafTech — Premium IT Solutions
      </footer>
    </div>
  )
}
