import { Heart, Lock, Globe, Users, Zap, Shield, Target, Sparkles, Rocket } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Lock,
      title: "Decentralization",
      description: "Empowering individuals through blockchain technology and distributed systems.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge Web3 solutions for eternal legacy.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Immutable blockchain storage ensures your data remains protected forever.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Building a worldwide community of digital citizens across 120+ countries.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Driven by our community, for our community's eternal benefit.",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Open-source platform with full visibility into our operations.",
    },
    {
      icon: Heart,
      title: "Love & Gratitude",
      description: "Building with compassion and appreciation for every life story.",
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "Committed to delivering the highest quality Web3 experiences.",
    },
    {
      icon: Rocket,
      title: "Growth Mindset",
      description: "Continuously evolving to serve the needs of future generations.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Heart className="h-16 w-16 text-primary mx-auto mb-4 animate-glow" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              About F.U.Profile
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Love & Gratitude: Building an Eternal Legacy for Humanity
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <Card className="glass hover-lift animate-fade-in">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-gradient">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    F.U.Profile was born from a simple yet profound idea: every human life deserves
                    to be remembered and celebrated for eternity. In a world where memories fade
                    and stories are lost, we saw an opportunity to harness blockchain technology
                    to preserve the essence of humanity forever.
                  </p>
                  <p>
                    Our journey began with Love and Gratitude at the core. We believe that every
                    achievement, every milestone, and every moment of joy should be immortalized
                    in a secure, decentralized manner. Through NFT technology, we're not just
                    storing data—we're preserving souls, dreams, and legacies.
                  </p>
                  <p>
                    Today, F.U.Profile serves as a bridge between the physical and digital worlds,
                    offering 13 fundamental rights to global citizens while building an ecosystem
                    where businesses and individuals can thrive with transparency and trust.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="glass hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4 animate-glow" />
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Funding Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="glass hover-lift animate-fade-in">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-gradient text-center">
                  Backed by Camly Foundation
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    F.U.Profile is proudly supported by the <strong>Camly Foundation</strong>,
                    a non-profit organization dedicated to advancing blockchain technology for
                    social good. Through their generous funding and guidance, we're able to
                    maintain our open-source platform and provide accessible services to
                    communities worldwide.
                  </p>
                  <p>
                    Our funding model is transparent and community-driven. We operate on a
                    sustainable freemium model where basic features remain free for all users,
                    while premium services help fund platform development and community initiatives.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-4 glass rounded-lg">
                      <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                      <div className="text-sm">Open Source</div>
                    </div>
                    <div className="text-center p-4 glass rounded-lg">
                      <div className="text-3xl font-bold text-gradient mb-2">$2.5M</div>
                      <div className="text-sm">Foundation Backing</div>
                    </div>
                    <div className="text-center p-4 glass rounded-lg">
                      <div className="text-3xl font-bold text-gradient mb-2">150K+</div>
                      <div className="text-sm">Community Members</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
