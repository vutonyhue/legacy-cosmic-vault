import { Plus, TrendingUp, Wallet, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const honorBoard = [
    { label: "EARN", value: "12.5K", trend: "+15%" },
    { label: "DIGITAL ASSETS", value: "48", trend: "+8" },
    { label: "CONTRIBUTION", value: "3.2K", trend: "+12%" },
    { label: "NET ASSET", value: "$45K", trend: "+20%" },
  ];

  const rankings = [
    { title: "Top Trainer", rank: "#342", icon: Award },
    { title: "Top Protector", rank: "#128", icon: Heart },
    { title: "Top Player", rank: "#456", icon: TrendingUp },
    { title: "Top Giver", rank: "#89", icon: Wallet },
  ];

  const lifeEvents = [
    {
      id: 1,
      title: "Graduated from University",
      date: "2020-06-15",
      type: "Education",
      minted: true,
    },
    {
      id: 2,
      title: "First Product Launch",
      date: "2021-03-22",
      type: "Achievement",
      minted: true,
    },
    {
      id: 3,
      title: "Community Leadership Award",
      date: "2023-11-10",
      type: "Recognition",
      minted: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="glass rounded-lg p-6 mb-8 animate-fade-in">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gradient mb-2">Profile Dashboard</h1>
                <p className="text-muted-foreground">Manage your eternal legacy</p>
              </div>
              <Button variant="hero">
                <Wallet className="h-4 w-4" />
                0x1234...5678
              </Button>
            </div>
          </div>

          {/* Honor Board */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary animate-glow" />
              Honor Board
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {honorBoard.map((item, index) => (
                <Card key={index} className="hover-lift glass animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                    <div className="text-3xl font-bold text-gradient mb-2">{item.value}</div>
                    <Badge variant="secondary" className="text-xs">
                      {item.trend}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {rankings.map((rank, index) => (
                <Card key={index} className="hover-lift glass animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>
                  <CardContent className="p-4 text-center">
                    <rank.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="font-semibold text-sm">{rank.title}</div>
                    <div className="text-2xl font-bold text-gradient">{rank.rank}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Life Events Timeline */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary animate-glow" />
                Life Events Timeline
              </h2>
              <Button variant="hero">
                <Plus className="h-4 w-4" />
                Add Event
              </Button>
            </div>

            <div className="space-y-4">
              {lifeEvents.map((event, index) => (
                <Card key={event.id} className="hover-lift glass animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
                      </div>
                      <Badge variant={event.minted ? "default" : "secondary"}>
                        {event.minted ? "Minted" : "Draft"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{event.type}</Badge>
                      {!event.minted && (
                        <Button variant="hero" size="sm">
                          Mint as NFT
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
