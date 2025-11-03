import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Package, TrendingUp, Lightbulb, ArrowRight, MessageSquare, Wrench, MousePointer2, Palette, FileText, ArrowRightLeft, ShoppingCart, Rocket, DollarSign, Target, Mail } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">Bifocal</div>
          <Button variant="hero" size="default">
            Get Early Access
          </Button>
        </div>
      </header>

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
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="group">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
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

      {/* Use Cases Section - Full Screen Parallax */}
      <div className="relative">
        {/* Section Intro */}
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">
            Bifocal helps innovation teams turn customer insights into breakthrough products.
          </h2>
          <Button variant="hero" size="lg" className="group">
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Stacked Sticky Slides */}
        <div className="relative h-[400vh]">
          {/* 1. Software Teams */}
          <div className="sticky top-0 h-screen z-10 flex items-center bg-gradient-to-br from-muted/20 to-muted/5">
            <Card className="container mx-auto px-6 max-w-6xl w-full p-12 md:p-16 bg-background/95 backdrop-blur shadow-premium">
              <div className="text-center mb-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-6">
                  <Code2 className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">Software Teams</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">Product Feedback</h4>
                  <p className="text-muted-foreground">Collect and analyze user feedback to prioritize features that matter most</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Wrench className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">New Feature Development</h4>
                  <p className="text-muted-foreground">Rapidly prototype and test new features before committing to full development</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <MousePointer2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">Usability Testing</h4>
                  <p className="text-muted-foreground">Test interface designs and user flows with real prototypes, not mockups</p>
                </div>
              </div>
            </Card>
          </div>

          {/* 2. CPG & DTC Teams */}
          <div className="sticky top-0 h-screen z-20 flex items-center bg-gradient-to-br from-accent/10 to-accent/5">
            <Card className="container mx-auto px-6 max-w-6xl w-full p-12 md:p-16 bg-background/95 backdrop-blur shadow-premium">
              <div className="text-center mb-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mx-auto mb-6">
                  <Package className="w-10 h-10 text-accent-foreground" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">CPG & DTC Teams</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Lightbulb className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold">New Product Concepts</h4>
                  <p className="text-muted-foreground">Generate and validate product ideas before investing in manufacturing</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Palette className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold">Ad Creative</h4>
                  <p className="text-muted-foreground">Test multiple creative concepts to find the messaging that resonates</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Package className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold">Packaging & Messaging</h4>
                  <p className="text-muted-foreground">Optimize product packaging and positioning with customer feedback</p>
                </div>
              </div>
            </Card>
          </div>

          {/* 3. Growth Marketing Teams */}
          <div className="sticky top-0 h-screen z-30 flex items-center bg-gradient-to-br from-secondary/10 to-secondary/5">
            <Card className="container mx-auto px-6 max-w-6xl w-full p-12 md:p-16 bg-background/95 backdrop-blur shadow-premium">
              <div className="text-center mb-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">Growth Marketing Teams</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                    <FileText className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold">Landing Pages</h4>
                  <p className="text-muted-foreground">Build and test landing page variations to maximize conversion rates</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                    <ArrowRightLeft className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold">Build and test hundreds of ideas in days, not weeks.</h4>
                  <p className="text-muted-foreground">Optimize checkout and signup flows with rapid iteration</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                    <ShoppingCart className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold">Product Display Pages</h4>
                  <p className="text-muted-foreground">Generate product concepts using data from surveys and customer interviews in seconds.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* 4. Business Strategy Teams */}
          <div className="sticky top-0 h-screen z-40 flex items-center bg-gradient-to-br from-primary/10 to-accent/5">
            <Card className="container mx-auto px-6 max-w-6xl w-full p-12 md:p-16 bg-background/95 backdrop-blur shadow-premium">
              <div className="text-center mb-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">Business Strategy Teams</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">New Business Lines</h4>
                  <p className="text-muted-foreground">Validate market opportunities before major strategic investments</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">Pricing Research</h4>
                  <p className="text-muted-foreground">Test pricing strategies and packages with target customers</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">Market Entry Strategy</h4>
                  <p className="text-muted-foreground">Explore new markets with rapid concept testing and validation</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="relative bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Feedback loops measured in seconds, not sprints
            </h2>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="group">
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Left side - Company info */}
            <div>
              <div className="font-bold text-xl mb-2 bg-gradient-primary bg-clip-text text-transparent">
                Bifocal
              </div>
              <p className="text-sm text-muted-foreground">
                Turn customer feedback into product concepts instantly
              </p>
            </div>

            {/* Right side - Contact and legal */}
            <div className="flex flex-col items-start md:items-end gap-4">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div className="text-sm text-muted-foreground text-right">
                <p className="mb-2">© 2025. All rights reserved.</p>
                <div className="space-y-1">
                  <p className="text-primary hover:underline cursor-pointer">Terms of Service</p>
                  <p className="text-primary hover:underline cursor-pointer">Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Optional: Add subtle decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </div>;
};
export default Index;