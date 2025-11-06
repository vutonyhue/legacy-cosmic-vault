import { Database, Users, Briefcase, Upload, BarChart3, FileCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Ecosystem = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              F.U.Profile Ecosystem
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive suite of Web3 tools for life storage, business management,
              and community building.
            </p>
          </div>

          {/* Tabs */}
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="storage" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 glass p-1 h-auto">
                <TabsTrigger value="storage" className="py-3">
                  <Database className="h-4 w-4 mr-2" />
                  Life Storage
                </TabsTrigger>
                <TabsTrigger value="crm" className="py-3">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  CRM System
                </TabsTrigger>
                <TabsTrigger value="business" className="py-3">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Business Tools
                </TabsTrigger>
              </TabsList>

              {/* Life Storage Tab */}
              <TabsContent value="storage" className="space-y-6 animate-fade-in">
                <Card className="glass hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="h-5 w-5 text-primary" />
                      Upload Life Events
                    </CardTitle>
                    <CardDescription>
                      Transform your precious moments into immutable NFTs on the blockchain
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="glass p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Supported Formats</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Photos & Videos</li>
                          <li>• Documents & Certificates</li>
                          <li>• Audio Recordings</li>
                          <li>• Digital Artwork</li>
                        </ul>
                      </div>
                      <div className="glass p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Security Features</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• End-to-End Encryption</li>
                          <li>• Blockchain Verification</li>
                          <li>• IPFS Distributed Storage</li>
                          <li>• Private Access Controls</li>
                        </ul>
                      </div>
                    </div>
                    <Button variant="hero" className="w-full">
                      Start Uploading
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-accent" />
                      Life Timeline Management
                    </CardTitle>
                    <CardDescription>
                      Organize your memories in a chronological, searchable timeline
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Create a comprehensive timeline of your life events, achievements, and
                      milestones. Share with loved ones or keep private. Your legacy,
                      your choice.
                    </p>
                    <Button variant="secondary">View Timeline</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* CRM Tab */}
              <TabsContent value="crm" className="space-y-6 animate-fade-in">
                <Card className="glass hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Automated Lead Generation
                    </CardTitle>
                    <CardDescription>
                      Smart algorithms identify and nurture potential connections
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 glass rounded-lg">
                        <div>
                          <h4 className="font-semibold">AI Lead Scoring</h4>
                          <p className="text-sm text-muted-foreground">
                            Prioritize high-value connections automatically
                          </p>
                        </div>
                        <Button variant="ghost">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 glass rounded-lg">
                        <div>
                          <h4 className="font-semibold">Marketing Automation</h4>
                          <p className="text-sm text-muted-foreground">
                            Personalized campaigns based on blockchain data
                          </p>
                        </div>
                        <Button variant="ghost">Set Up</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 glass rounded-lg">
                        <div>
                          <h4 className="font-semibold">Sales Pipeline</h4>
                          <p className="text-sm text-muted-foreground">
                            Track and optimize your sales process
                          </p>
                        </div>
                        <Button variant="ghost">Manage</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Business Tab */}
              <TabsContent value="business" className="space-y-6 animate-fade-in">
                <Card className="glass hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Business Connections
                    </CardTitle>
                    <CardDescription>
                      Connect employees, partners, and stakeholders on the blockchain
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-4 glass rounded-lg">
                        <div className="text-3xl font-bold text-gradient mb-2">250+</div>
                        <div className="text-sm text-muted-foreground">Active Employees</div>
                      </div>
                      <div className="text-center p-4 glass rounded-lg">
                        <div className="text-3xl font-bold text-gradient mb-2">48</div>
                        <div className="text-sm text-muted-foreground">Partner Organizations</div>
                      </div>
                      <div className="text-center p-4 glass rounded-lg">
                        <div className="text-3xl font-bold text-gradient mb-2">1.2K</div>
                        <div className="text-sm text-muted-foreground">Verified Documents</div>
                      </div>
                    </div>
                    <Button variant="hero" className="w-full">
                      Manage Connections
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass hover-lift">
                  <CardHeader>
                    <CardTitle>Immutable Business Documents</CardTitle>
                    <CardDescription>
                      Store contracts, agreements, and legal documents on the blockchain
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <FileCheck className="h-4 w-4 text-accent" />
                        <span>Employment Contracts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileCheck className="h-4 w-4 text-accent" />
                        <span>Partnership Agreements</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileCheck className="h-4 w-4 text-accent" />
                        <span>Intellectual Property Records</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileCheck className="h-4 w-4 text-accent" />
                        <span>Financial Statements</span>
                      </li>
                    </ul>
                    <Button variant="secondary" className="w-full mt-4">
                      Upload Documents
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Ecosystem;
