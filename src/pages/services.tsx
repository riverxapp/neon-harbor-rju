import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export function ServicesPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 space-y-12">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#26170e]">Our Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-[#6f5b4a]">
          Unlock your brand’s full potential with our full-stack creative and digital solutions.
          We partner with growth-minded teams to realize, build, and amplify their vision.
        </p>
        <div className="flex justify-center mt-4">
          <Link to="/" className="inline-block">
            <Button variant="outline" className="border-[#e7cdb4] bg-[#fffaf2] text-[#26170e] hover:bg-[#ffe7cf]">
              Back Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-[#f1ddc9] bg-[#fffaf2]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-[#26170e]">
              <span className="inline-block h-7 w-7 rounded-full bg-[#ff6541] text-white flex items-center justify-center font-bold text-lg">🎨</span>
              Branding & Design
            </CardTitle>
            <CardDescription className="text-[#6f5b4a]">
              Elevate your image with expertly crafted visual identities and brand artistry.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-[#6f5b4a] text-sm">
            <ul className="list-disc ml-5 space-y-1">
              <li>Brand strategy & positioning</li>
              <li>Visual identity and logo design</li>
              <li>Sales decks & pitch materials</li>
              <li>Marketing assets and collateral</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-[#f1ddc9] bg-[#fffaf2]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-[#26170e]">
              <span className="inline-block h-7 w-7 rounded-full bg-[#63c9b0] text-white flex items-center justify-center font-bold text-lg">⚡</span>
              Web Development
            </CardTitle>
            <CardDescription className="text-[#6f5b4a]">
              Build cutting-edge digital experiences that accelerate business growth.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-[#6f5b4a] text-sm">
            <ul className="list-disc ml-5 space-y-1">
              <li>Custom business websites</li>
              <li>Landing pages & campaign sites</li>
              <li>SaaS and web app UIs</li>
              <li>Performance & SEO optimization</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-[#f1ddc9] bg-[#fffaf2]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-[#26170e]">
              <span className="inline-block h-7 w-7 rounded-full bg-[#ffca21] text-white flex items-center justify-center font-bold text-lg">🚀</span>
              Digital Marketing
            </CardTitle>
            <CardDescription className="text-[#6f5b4a]">
              Attract and convert customers with data-driven, creative marketing.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-[#6f5b4a] text-sm">
            <ul className="list-disc ml-5 space-y-1">
              <li>SEO & organic growth</li>
              <li>Content marketing & campaigns</li>
              <li>Paid advertising (search, social)</li>
              <li>Analytics & reporting</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default ServicesPage;