import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { env } from "../lib/env";

export function Home() {
  return (
    <section className="space-y-16">
      {/* HERO SECTION */}
      <header className="space-y-7 rounded-2xl border border-[#f1ddc9] bg-[#fff7ec] px-6 py-12 text-center sm:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#fd7632]">
          Creative Agency
        </p>
        <h1 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-[#26170e] sm:text-5xl">
          {env.appName || "Neon Harbor"}<span className="text-[#ff6541]">.</span>{" "}
          Grow your brand with standout digital experiences
        </h1>
        <p className="mx-auto max-w-xl text-base text-[#6f5b4a] sm:text-lg">
          A visionary agency delivering design, branding, and digital marketing that turns ideas into impact. We help ambitious teams ignite growth and loyalty using creativity, strategy, and the latest web tech.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-[#ff6b4a] text-white shadow-lg hover:bg-[#d94828]">
            <Link to="#contact">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-[#e7cdb4] bg-[#fffaf2] text-[#26170e] hover:bg-[#ffe7cf]">
            <Link to="#services">Our Services</Link>
          </Button>
        </div>
      </header>

      {/* CLIENT LOGOS */}
      <div className="flex flex-wrap items-center justify-center gap-6 px-2 py-4 md:gap-10">
        {["client1", "client2", "client3", "client4", "client5"].map((client, i) => (
          <div key={client} className="flex h-10 w-32 items-center justify-center rounded-lg bg-[#fffaf2] border border-[#f1ddc9]">
            <span className="text-[#d3bda9] text-sm font-semibold">Logo {i + 1}</span>
          </div>
        ))}
      </div>

      {/* FEATURES / SERVICES */}
      <section id="services" className="mx-auto max-w-5xl space-y-8">
        <h2 className="text-center text-2xl font-bold text-[#26170e] sm:text-3xl">What We Do</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-[#f1ddc9] bg-[#fffaf2]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-[#26170e]">
                <span className="inline-block h-7 w-7 rounded-full bg-[#ff6541] text-white flex items-center justify-center font-bold text-lg">🎨</span>
                Branding & Design
              </CardTitle>
              <CardDescription className="text-[#6f5b4a]">
                Beautiful, memorable visuals and brand identities for future icons.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              Logos, palletes, full brand systems, pitch decks, and stunning assets to set you apart.
            </CardContent>
          </Card>
          <Card className="border-[#f1ddc9] bg-[#fffaf2]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-[#26170e]">
                <span className="inline-block h-7 w-7 rounded-full bg-[#63c9b0] text-white flex items-center justify-center font-bold text-lg">⚡</span>
                Web Development
              </CardTitle>
              <CardDescription className="text-[#6f5b4a]">
                High-performance websites, apps, and digital flows from concept to launch.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              Conversion-focused landing pages, SaaS frontends, e-commerce, and more.
            </CardContent>
          </Card>
          <Card className="border-[#f1ddc9] bg-[#fffaf2]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-[#26170e]">
                <span className="inline-block h-7 w-7 rounded-full bg-[#ffca21] text-white flex items-center justify-center font-bold text-lg">🚀</span>
                Digital Marketing
              </CardTitle>
              <CardDescription className="text-[#6f5b4a]">
                Growth strategies that drive real traffic, engagement, and sales.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              SEO, content, paid ads, and analytics, all built to fit your ambitious goals.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* NEW SERVICES SECTION */}
      <section className="mx-auto max-w-5xl space-y-8 rounded-2xl border border-[#ace9e5] bg-[#f5fdfa] px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-[#247669] sm:text-3xl">Our Services</h2>
        <p className="mx-auto max-w-2xl text-center text-[#37695f] text-base mb-8">
          Discover what we offer to elevate your business and brand. Explore all service details or ask us about custom solutions.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-[#bae5d9] bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-[#1c4741]">
                <span className="inline-block h-8 w-8 rounded-full bg-[#3ee1c6] text-white flex items-center justify-center font-bold text-xl">💡</span>
                Creative Consulting
              </CardTitle>
              <CardDescription className="text-[#567e74]">
                Get actionable insights and roadmaps for breakout growth.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#567e74]">
              Workshops, brainstorming, and strategy tailored to your unique position, goals, and vision.
            </CardContent>
          </Card>
          <Card className="border-[#bae5d9] bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-[#1c4741]">
                <span className="inline-block h-8 w-8 rounded-full bg-[#725bd9] text-white flex items-center justify-center font-bold text-xl">📱</span>
                Mobile Experience
              </CardTitle>
              <CardDescription className="text-[#567e74]">
                Seamless mobile-first design and progressive web apps.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#567e74]">
              Intuitive mobile UIs, PWA expertise, and mobile optimization for your audience on the go.
            </CardContent>
          </Card>
          <Card className="border-[#bae5d9] bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-[#1c4741]">
                <span className="inline-block h-8 w-8 rounded-full bg-[#ffca21] text-white flex items-center justify-center font-bold text-xl">📊</span>
                Analytics & Insights
              </CardTitle>
              <CardDescription className="text-[#567e74]">
                Make every move count with clear data-driven guidance.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#567e74]">
              Metrics dashboards, campaign ROI tracking, and recommendations so you always know what works.
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg" className="bg-[#247669] text-white shadow-lg hover:bg-[#145a49]">
            <Link to="/services">See All Services</Link>
          </Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-5xl space-y-8">
        <h2 className="text-center text-2xl font-bold text-[#26170e] sm:text-3xl">What Clients Say</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map(idx => (
            <Card key={idx} className="border-[#e7cdb4] bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-[#26170e]">
                  <span className="inline-block h-10 w-10 rounded-full bg-[#ffe7cf] text-center font-bold text-[#d94828] flex items-center justify-center">
                    {["AB", "CW", "EZ"][idx-1]}
                  </span>
                  <span className="text-base font-semibold text-[#563826]">
                    {["Alice Brandly", "Chris Wills", "Ella Zhao"][idx-1]}
                  </span>
                </CardTitle>
                <CardDescription className="text-[#6f5b4a]">
                  {["Startup Founder", "Product Lead", "Marketing Director"][idx-1]}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-[#6f5b4a] text-sm">
                {[
                  "Neon Harbor absolutely transformed our pitch, brand and website—delivering far beyond what we imagined!",
                  "Brilliant partnership and smart strategy. Conversions improved overnight, and the designs wowed our investors.",
                  "From the first call to deployment, the team felt like an extension of ours. Revenue up, stress down. Thank you!",
                ][idx-1]}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="mx-auto max-w-5xl space-y-8">
        <h2 className="text-center text-2xl font-bold text-[#26170e] sm:text-3xl">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {name: "Jordan Lee", role: "Creative Director", initials: "JL"},
            {name: "Casey Morgan", role: "Lead Developer", initials: "CM"},
            {name: "Sam Patel", role: "Marketing Strategist", initials: "SP"},
          ].map((member) => (
            <Card key={member.name} className="w-64 border-[#f1ddc9] bg-[#fffaf2] text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#ffe7cf] text-2xl font-bold text-[#d94828]">
                  {member.initials}
                </div>
                <CardTitle className="text-lg text-[#26170e]">{member.name}</CardTitle>
                <CardDescription className="text-[#6f5b4a]">{member.role}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT / CTA SECTION */}
      <section id="contact" className="mx-auto max-w-2xl rounded-2xl border border-[#e7cdb4] bg-[#fff7ec] px-6 py-10 text-center">
        <h2 className="text-2xl font-bold text-[#26170e] sm:text-3xl">
          Ready to make something great together?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[#6f5b4a] text-base">
          Reach out today for a free strategy call. Let's elevate your business with brand, design, and web magic—tailored to you.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-[#ff6b4a] text-white shadow-lg hover:bg-[#d94828]">
            <a href="mailto:hello@agency-demo.com">Book Your Call</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-[#e7cdb4] bg-[#fffaf2] text-[#26170e] hover:bg-[#ffe7cf]">
            <a href="mailto:hello@agency-demo.com">Email Us</a>
          </Button>
        </div>
      </section>
    </section>
  );
}