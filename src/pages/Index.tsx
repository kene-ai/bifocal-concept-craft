import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/30 container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Turn customer feedback into{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              product concepts
            </span>{" "}
            instantly
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bifocal uses AI to collect feedback, instantly generate product prototypes, 
            and test concepts with users.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              variant="hero" 
              size="xl"
              className="group"
            >
              Request Early Access
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Subtle supporting text */}
          <p className="text-sm text-muted-foreground pt-4">
            Join leading product teams building better products
          </p>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Test hundreds of ideas in days, not weeks
          </h2>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="p-8 bg-background shadow-soft hover:shadow-premium transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Instant prototyping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Generate product concepts using data from surveys and customer interviews in seconds
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="p-8 bg-background shadow-soft hover:shadow-premium transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Iterate fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Refine and evolve concepts in real-time during user research, team brainstorms, and customer calls
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="p-8 bg-background shadow-soft hover:shadow-premium transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Discover better solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI helps you build and test many ideas to find the strongest ones
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-6 py-24 md:py-32 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Use Cases
          </h2>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Software Teams */}
            <Card className="p-8 bg-background shadow-soft hover:shadow-premium transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Software Teams</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Product Feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>New feature development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Usability testing</span>
                </li>
              </ul>
            </Card>

            {/* CPG & DTC Teams */}
            <Card className="p-8 bg-background shadow-soft hover:shadow-premium transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">CPG & DTC Teams</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>New Product Concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ad Creative</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Packaging & Messaging</span>
                </li>
              </ul>
            </Card>

            {/* Growth Marketing Teams */}
            <Card className="p-8 bg-background shadow-soft hover:shadow-premium transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Growth Marketing Teams</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Landing Pages</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Conversion Flows</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Product display pages</span>
                </li>
              </ul>
            </Card>

            {/* Business Strategy Teams */}
            <Card className="p-8 bg-background shadow-soft hover:shadow-premium transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Business Strategy Teams</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>New business lines</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pricing research</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Market Entry Strategy</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Optional: Add subtle decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Index;
