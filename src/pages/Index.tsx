import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
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

      {/* Optional: Add subtle decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Index;
