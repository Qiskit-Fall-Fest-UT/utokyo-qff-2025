export default function Page() {
  return (
    <main>
      {/* Nav */}
      <header className="sticky top-0 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6">
          <a href="#about" className="font-medium">
            About
          </a>
          <a href="#partners">Partners</a>
          <a href="#schedule">Schedule</a>
          <a href="#speakers">Speakers</a>
          <a href="#venue">Venue</a>
          <a
            href="https://example.com/register"
            className="ml-auto inline-flex items-center rounded-lg px-4 py-2 border"
          >
            Register
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center">
          <p className="uppercase tracking-widest text-sm">
            IBM Qiskit Fall Fest 2024
          </p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">October 1–4</h1>
          <p className="mt-4 text-balance text-gray-600">
            Hands-on quantum computing workshops, talks, and challenges.
          </p>
          <div className="mt-8">
            <a
              href="https://example.com/register"
              className="inline-block rounded-lg px-6 py-3 border"
            >
              Register now
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 text-gray-700">
          Replace this with your event description (Qiskit overview, audience,
          outcomes).
        </p>
      </section>

      {/* Partners */}
      <section id="partners" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <h2 className="text-2xl font-semibold">Partners</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="aspect-[3/1] rounded-xl border grid place-content-center">
            IBM
          </div>
          <div className="aspect-[3/1] rounded-xl border grid place-content-center">
            Qiskit
          </div>
          <div className="aspect-[3/1] rounded-xl border grid place-content-center">
            VITC
          </div>
          <div className="aspect-[3/1] rounded-xl border grid place-content-center">
            Sponsor
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <h2 className="text-2xl font-semibold">Schedule</h2>
        <ul className="mt-6 space-y-4">
          <li className="rounded-xl border p-4">
            <p className="font-medium">Day 1 — Oct 1</p>
            <p className="text-gray-600">Venue, agenda…</p>
          </li>
          <li className="rounded-xl border p-4">
            <p className="font-medium">Day 2 — Oct 2</p>
            <p className="text-gray-600">Workshops…</p>
          </li>
          {/* Add Day 3/4 */}
        </ul>
      </section>

      {/* Speakers */}
      <section id="speakers" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <h2 className="text-2xl font-semibold">Speakers</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {["Speaker A", "Speaker B", "Speaker C"].map((name) => (
            <article key={name} className="rounded-xl border p-4">
              <div className="aspect-square rounded-lg border" />
              <h3 className="mt-3 font-medium">{name}</h3>
              <p className="text-gray-600">Title • Affiliation</p>
            </article>
          ))}
        </div>
      </section>

      {/* Venue / Contact */}
      <section id="venue" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <h2 className="text-2xl font-semibold">Venue & Contact</h2>
        <p className="mt-3 text-gray-700">
          Venue details, map link, student coordinators, social links…
        </p>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} QFF • Built with Next.js & Tailwind
        </div>
      </footer>
    </main>
  );
}
