import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code2, 
  Package, 
  TrendingUp, 
  Lightbulb, 
  ArrowRight,
  MessageSquare,
  Wrench,
  MousePointer2,
  Palette,
  FileText,
  ArrowRightLeft,
  ShoppingCart,
  Rocket,
  DollarSign,
  Target,
  Mail
} from "lucide-react";

// Use Cases Data
const useCasesData = [
  {
    id: "software",
    name: "Software Teams",
    icon: Code2,
    iconColor: "primary",
    subCases: [
      {
        icon: MessageSquare,
        title: "Product Feedback",
        description: "Collect and analyze user feedback to prioritize features that matter most"
      },
      {
        icon: Wrench,
        title: "New Feature Development",
        description: "Rapidly prototype and test new features before committing to full development"
      },
      {
        icon: MousePointer2,
        title: "Usability Testing",
        description: "Test interface designs and user flows with real prototypes, not mockups"
      }
    ]
  },
  {
    id: "cpg",
    name: "CPG & DTC Teams",
    icon: Package,
    iconColor: "accent",
    subCases: [
      {
        icon: Lightbulb,
        title: "New Product Concepts",
        description: "Generate and validate product ideas before investing in manufacturing"
      },
      {
        icon: Palette,
        title: "Ad Creative",
        description: "Test multiple creative concepts to find the messaging that resonates"
      },
      {
        icon: Package,
        title: "Packaging & Messaging",
        description: "Optimize product packaging and positioning with customer feedback"
      }
    ]
  },
  {
    id: "marketing",
    name: "Growth Marketing Teams",
    icon: TrendingUp,
    iconColor: "secondary",
    subCases: [
      {
        icon: FileText,
        title: "Landing Pages",
        description: "Build and test landing page variations to maximize conversion rates"
      },
      {
        icon: ArrowRightLeft,
        title: "Conversion Flows",
        description: "Optimize checkout and signup flows with rapid iteration"
      },
      {
        icon: ShoppingCart,
        title: "Product Display Pages",
        description: "Test different product presentations to drive more sales"
      }
    ]
  },
  {
    id: "strategy",
    name: "Business Strategy Teams",
    icon: Lightbulb,
    iconColor: "primary",
    subCases: [
      {
        icon: Rocket,
        title: "New Business Lines",
        description: "Validate market opportunities before major strategic investments"
      },
      {
        icon: DollarSign,
        title: "Pricing Research",
        description: "Test pricing strategies and packages with target customers"
      },
      {
        icon: Target,
        title: "Market Entry Strategy",
        description: "Explore new markets with rapid concept testing and validation"
      }
    ]
  }
];

// Interactive Use Cases Component
const UseCasesInteractive = () => {
  return (
    <div className="container mx-auto px-12 md:px-16 lg:px-24 pb-32">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue={useCasesData[0].id} className="w-full">
          {/* Horizontal Tabs */}
          <TabsList className="w-full h-auto grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8 bg-transparent p-0">
            {useCasesData.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="flex items-center gap-3 p-4 h-auto data-[state=active]:bg-primary/10 data-[state=active]:border-2 data-[state=active]:border-primary data-[state=active]:shadow-md rounded-lg bg-muted/30 border-2 border-transparent"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-sm lg:text-base">{useCase.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Content Panels */}
          {useCasesData.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id} className="mt-0">
              <Card className="p-8 md:p-12 bg-background shadow-premium">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {useCase.subCases.map((subCase, index) => {
                    const SubIcon = subCase.icon;
                    
                    return (
                      <div key={index} className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                          <SubIcon className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold">{subCase.title}</h4>
                        <p className="text-muted-foreground">{subCase.description}</p>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
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
            <Button 
              variant="hero" 
              size="xl"
              className="group"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="group"
            >
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

      {/* Use Cases Section - Interactive Tabs */}
      <div className="relative">
        {/* Section Intro */}
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">
            Bifocal helps innovation teams turn customer insights into breakthrough products.
          </h2>
          <Button 
            variant="hero" 
            size="lg"
            className="group"
          >
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Interactive Use Cases */}
        <UseCasesInteractive />
      </div>

      {/* Final CTA Section */}
      <section className="relative bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Feedback loops measured in seconds, not sprints
            </h2>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="group"
              >
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
    </div>
  );
};

export default Index;
