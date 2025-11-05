import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import sprintHeroImage from "@/assets/sprint-hero.jpg";
import spotifyLogo from "@/assets/logos/spotify-logo.png";
import netflixLogo from "@/assets/logos/netflix-logo.png";
import metaLogo from "@/assets/logos/meta-logo.png";
import instagramLogo from "@/assets/logos/instagram-logo.png";

const SprintProgram = () => {
  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-36 md:px-48 lg:px-60">
          <div className="font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">Bifocal</div>
          <Button variant="hero" size="default">
            Book Consultation
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-36 md:px-48 lg:px-60 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Category Label */}
            <div className="text-sm uppercase tracking-widest font-semibold bg-gradient-primary bg-clip-text text-transparent">
              The Bifocal Sprint
            </div>
            
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Validate your next product idea in two weeks with a full-service research and design sprint.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Get a full product discovery cycle run by the Bifocal team. Test 5-10 concepts with real users and get working prototypes in code that your team can start building immediately.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Book 30 minute consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Side - Hero Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img 
                src={sprintHeroImage} 
                alt="Product development sprint iteration concept showing rapid prototyping and testing cycles" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative gradient accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-36 md:px-48 lg:px-60 py-16 md:py-20">
        <div className="text-center space-y-12">
          {/* Heading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every discovery sprint run by product, design and research leaders from world-class companies.
          </p>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img src={spotifyLogo} alt="Spotify" className="h-8 md:h-10 w-auto object-contain" />
            <img src={netflixLogo} alt="Netflix" className="h-8 md:h-10 w-auto object-contain" />
            <img src={metaLogo} alt="Meta" className="h-8 md:h-10 w-auto object-contain" />
            <img src={instagramLogo} alt="Instagram" className="h-8 md:h-10 w-auto object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SprintProgram;
