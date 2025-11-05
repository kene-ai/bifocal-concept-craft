import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Users, Compass, Palette, Flag, Search, Zap, FileText, Package, TrendingUp, Lightbulb, LayoutGrid, Code, Brain } from "lucide-react";
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
      <section className="bg-muted/30">
        <div className="container mx-auto px-18 md:px-24 lg:px-30 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Category Label */}
            <div className="text-base md:text-lg uppercase tracking-widest font-semibold bg-gradient-primary bg-clip-text text-transparent">
              The Bifocal Sprint
            </div>
            
            {/* Headline */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
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
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-36 md:px-48 lg:px-60 py-16 md:py-20">
        <div className="text-center space-y-12">
          {/* Heading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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

      {/* Service Features Section */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-36 md:px-48 lg:px-60 py-16 md:py-24">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Research, strategy and design delivered by the Bifocal team, all in one sprint.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Everything you need to build, test and iterate on your next product idea before building it, powered by our proprietary AI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Card 1 */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Customer Research</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We'll run customer interviews or surveys to understand needs, validate demand, and test concepts.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Product Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our team will synthesize insights and create clear specs on what to build, which features to prioritize, and why.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Product Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We'll test 5-10 product concepts using high-fidelity, working prototypes built in code, aligned to your brand and UX.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button variant="hero" size="lg">
              Book a consultation
            </Button>
          </div>
        </div>
      </section>

      {/* AI Technology Feature Section */}
      <section className="container mx-auto px-36 md:px-48 lg:px-60 py-16 md:py-24">
        <div className="border border-border/50 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          {/* Header */}
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Difference: Proprietary AI Technology
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We've built breakthrough AI tools that collapse traditional feedback loops—letting us iterate on prototypes in minutes instead of weeks.
            </p>
          </div>

          {/* Supporting Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* Card 1 */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <LayoutGrid className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Rapid prototyping and testing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our AI creates a seamless workflow from feedback → synthesis → design. You test 5-10 concepts in 2 weeks vs. 1-2 concepts in 6-8 weeks with traditional methods.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">AI-optimized deliverables, not static files</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We deliver AI-generated prototypes that are ready-to-use in coding and design tools like Figma and Cursor, and research data formatted for ChatGPT or Claude in code that your engineers can build from directly.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Constant transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We give daily updates over a Slack channel where you can watch interviews, read summaries, and interact with prototypes as we're developing them
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Statement */}
          <p className="text-center text-lg md:text-xl font-medium text-foreground max-w-4xl mx-auto">
            This isn't just faster research—it's a fundamentally new capability for product discovery that wasn't possible until now.
          </p>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="container mx-auto px-36 md:px-48 lg:px-60 py-16 md:py-24">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How it works
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Complete in 10 business days • Run multiple sprints back-to-back as needed
          </p>
        </div>

        {/* Timeline - Horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-border" style={{ width: 'calc(100% - 4rem)', marginLeft: '2rem' }} />
            
            <div className="grid grid-cols-5 gap-6">
              {/* Phase 1 */}
              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="relative z-10 w-24 h-24 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-sm">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                    <Flag className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-base">Phase 1: Getting Started</h3>
                  <p className="text-sm text-muted-foreground">Day 1-2</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    After a kickoff call to share context, we'll create a Slack channel and finalize the project plan.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="relative z-10 w-24 h-24 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-sm">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                    <Search className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-base">Phase 2: Generative Insights</h3>
                  <p className="text-sm text-muted-foreground">Day 3-4</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We'll run user interviews or field a survey to build foundational insights.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="relative z-10 w-24 h-24 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-sm">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-base">Phase 3: Concept Prototyping</h3>
                  <p className="text-sm text-muted-foreground">Day 5-6</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our AI generates 3 high-fidelity prototypes, each aligned to your brand and UX. You pick the strongest to test.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="relative z-10 w-24 h-24 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-sm">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-base">Phase 4: Concept Testing</h3>
                  <p className="text-sm text-muted-foreground">Day 7-8</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We test concepts with 10-12 users, iterating the prototype between interviews based on feedback so that you can test more variations faster. We'll keep you updated with insights from every interview + concept iterations.
                  </p>
                </div>
              </div>

              {/* Phase 5 */}
              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="relative z-10 w-24 h-24 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-sm">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-base">Phase 5: Validated Prototypes</h3>
                  <p className="text-sm text-muted-foreground">Day 10</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Get a final report with research synthesis + 2-3 prototypes your team can continue iterating on immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden relative">
            {/* Connecting Line */}
            <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-8">
              {/* Phase 1 */}
              <div className="relative flex gap-4">
                <div className="relative z-10 flex-shrink-0 w-24 h-24 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-sm">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                    <Flag className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="pt-2 space-y-2">
                  <h3 className="font-semibold text-base">Phase 1: Getting Started</h3>
                  <p className="text-sm text-muted-foreground">Day 1-2</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    After a kickoff call to share context, we'll create a Slack channel and finalize the project plan.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex gap-4">
                <div className="relative z-10 flex-shrink-0 w-24 h-24 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-sm">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                    <Search className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="pt-2 space-y-2">
                  <h3 className="font-semibold text-base">Phase 2: Generative Insights</h3>
                  <p className="text-sm text-muted-foreground">Day 3-4</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We'll run user interviews or field a survey to build foundational insights.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative flex gap-4">
                <div className="relative z-10 flex-shrink-0 w-24 h-24 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-sm">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="pt-2 space-y-2">
                  <h3 className="font-semibold text-base">Phase 3: Concept Prototyping</h3>
                  <p className="text-sm text-muted-foreground">Day 5-6</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our AI generates 3 high-fidelity prototypes, each aligned to your brand and UX. You pick the strongest to test.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative flex gap-4">
                <div className="relative z-10 flex-shrink-0 w-24 h-24 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-sm">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="pt-2 space-y-2">
                  <h3 className="font-semibold text-base">Phase 4: Concept Testing</h3>
                  <p className="text-sm text-muted-foreground">Day 7-8</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We test concepts with 10-12 users, iterating the prototype between interviews based on feedback so that you can test more variations faster. We'll keep you updated with insights from every interview + concept iterations.
                  </p>
                </div>
              </div>

              {/* Phase 5 */}
              <div className="relative flex gap-4">
                <div className="relative z-10 flex-shrink-0 w-24 h-24 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-sm">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="pt-2 space-y-2">
                  <h3 className="font-semibold text-base">Phase 5: Validated Prototypes</h3>
                  <p className="text-sm text-muted-foreground">Day 10</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Get a final report with research synthesis + 2-3 prototypes your team can continue iterating on immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Button variant="hero" size="lg">
            Start Your Sprint
          </Button>
        </div>
      </section>

      {/* Who Uses Bifocal Sprint Section */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-36 md:px-48 lg:px-60 py-16 md:py-24">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Who Uses Bifocal Sprint?
            </h2>
          </div>

          <Tabs defaultValue="product" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="product">Product Teams</TabsTrigger>
              <TabsTrigger value="marketing">Marketing & Growth Teams</TabsTrigger>
              <TabsTrigger value="business">Business Strategy Teams</TabsTrigger>
            </TabsList>

            <TabsContent value="product" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Validate features before engineering builds them</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Test new product features with target users</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Redesign core flows and experiences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Explore new product lines and opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Validate your roadmap priorities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="marketing" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Optimize websites, landing pages and conversion flows</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Test landing page designs and messaging</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Optimize conversion funnels and flows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Validate product display pages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Explore pricing and packaging approaches</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="business" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">De-risk new opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Validate new business lines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Test expansion into new markets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Explore strategic initiatives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Assess customer demand</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default SprintProgram;
