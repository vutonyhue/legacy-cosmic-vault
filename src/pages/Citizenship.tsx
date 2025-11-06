import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Citizenship = () => {
  const rights = [
    {
      id: "earn",
      title: "Earning Rights",
      description: "Access to fair compensation, financial opportunities, and sustainable income streams through blockchain-verified work.",
    },
    {
      id: "essentials",
      title: "Essential Resources",
      description: "Guaranteed access to food, clean water, and basic necessities as fundamental human rights.",
    },
    {
      id: "health",
      title: "Healthcare Access",
      description: "Comprehensive healthcare services, preventive care, and medical support for all global citizens.",
    },
    {
      id: "education",
      title: "Quality Education",
      description: "Lifetime learning opportunities, skill development, and knowledge sharing platforms.",
    },
    {
      id: "housing",
      title: "Safe Housing",
      description: "Access to secure, comfortable living spaces and property ownership opportunities.",
    },
    {
      id: "travel",
      title: "Global Travel",
      description: "Freedom of movement and exploration across borders with verified digital identity.",
    },
    {
      id: "employment",
      title: "Employment Opportunities",
      description: "Fair job access, career development, and professional growth in the global marketplace.",
    },
    {
      id: "vote",
      title: "Democratic Participation",
      description: "Voice in governance decisions through decentralized voting systems.",
    },
    {
      id: "safety",
      title: "Personal Safety",
      description: "Protection from harm, secure digital identity, and privacy guarantees.",
    },
    {
      id: "expression",
      title: "Freedom of Expression",
      description: "Right to share ideas, create content, and participate in global conversations.",
    },
    {
      id: "connection",
      title: "Social Connection",
      description: "Build meaningful relationships and communities across the globe.",
    },
    {
      id: "environment",
      title: "Environmental Protection",
      description: "Live in a sustainable environment with clean air, water, and preserved ecosystems.",
    },
    {
      id: "innovation",
      title: "Innovation & Growth",
      description: "Access to technology, tools, and resources for personal and professional development.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4 animate-glow" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Global Citizenship
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Claim your 13 fundamental rights as a global citizen. These rights are
              immutably recorded on the blockchain, ensuring your legacy and protections
              for generations to come.
            </p>
          </div>

          {/* Rights Accordion */}
          <div className="max-w-4xl mx-auto mb-12">
            <Accordion type="single" collapsible className="space-y-4">
              {rights.map((right, index) => (
                <AccordionItem
                  key={right.id}
                  value={right.id}
                  className="glass rounded-lg px-6 border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-lg">{right.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    <p className="ml-12">{right.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA Section */}
          <div className="glass rounded-lg p-8 md:p-12 text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Ready to Become a Global Citizen?
            </h2>
            <p className="text-muted-foreground mb-6">
              Mint your NFT Identity and claim all 13 fundamental rights. Join thousands
              of global citizens building a better future together.
            </p>
            <Button variant="hero" size="lg">
              Claim Your NFT ID
              <ArrowRight className="h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              One-time minting fee: 100 $C
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Citizenship;
