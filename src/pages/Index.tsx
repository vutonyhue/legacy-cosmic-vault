import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroEarth from "@/assets/hero-earth.jpg";

const Index = () => {
  const stats = [
    { label: "NFT Profiles Created", value: "150K+", icon: Users },
    { label: "Total Value Locked", value: "$2.5M", icon: TrendingUp },
    { label: "Countries Represented", value: "120+", icon: Globe },
    { label: "Secure Transactions", value: "99.9%", icon: Shield },
  ];

  const rights = [
    "Earning Rights", "Essential Resources", "Healthcare Access",
    "Quality Education", "Safe Housing", "Global Travel",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroEarth}
            alt="Cosmic Earth"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">F.U.Profile</span>
            <br />
            <span className="text-3xl md:text-5xl">Eternal Legacy Web3</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Store your life as NFTs. Secure your legacy with blockchain technology.
            <br />
            <span className="text-primary font-semibold">Love, Gratitude, Infinite Growth</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="hero" size="lg" asChild>
              <Link to="/profile">
                Create NFT ID
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/marketplace">Explore Marketplace</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass p-6 rounded-lg hover-lift text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-4 animate-glow" />
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Immutable Blockchain Storage
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              F.U.Profile is an open-source social ecosystem that enables eternal life storage
              through NFT technology. Claim your 13 fundamental rights as a global citizen
              and build your legacy on the blockchain.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {rights.map((right, index) => (
                <div
                  key={index}
                  className="glass p-4 rounded-lg hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Shield className="h-6 w-6 text-accent mx-auto mb-2" />
                  <div className="text-sm font-medium">{right}</div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="mt-12" asChild>
              <Link to="/citizenship">
                Claim Your Rights
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Trusted by Global Citizens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Digital Artist",
                text: "F.U.Profile changed how I preserve my creative legacy forever.",
              },
              {
                name: "Marcus Johnson",
                role: "Entrepreneur",
                text: "The immutable storage gives me peace of mind for my life's work.",
              },
              {
                name: "Aisha Patel",
                role: "Educator",
                text: "A revolutionary platform for sharing knowledge across generations.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="glass p-6 rounded-lg hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
