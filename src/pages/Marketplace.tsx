import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NFTCard from "@/components/NFTCard";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const nfts = [
    {
      id: 1,
      title: "Graduation Moment 2020",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop",
      price: 250,
      rarity: "Rare",
      rating: 5,
    },
    {
      id: 2,
      title: "First Business Achievement",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop",
      price: 500,
      rarity: "Epic",
      rating: 5,
    },
    {
      id: 3,
      title: "Community Leadership",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
      price: 180,
      rarity: "Common",
      rating: 4,
    },
    {
      id: 4,
      title: "World Travel Memory",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop",
      price: 320,
      rarity: "Rare",
      rating: 5,
    },
    {
      id: 5,
      title: "Innovation Award 2023",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
      price: 750,
      rarity: "Legendary",
      rating: 5,
    },
    {
      id: 6,
      title: "Family Heritage",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop",
      price: 420,
      rarity: "Epic",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              NFT Marketplace
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover and trade eternal life moments. Each NFT represents a precious memory
              secured on the blockchain.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass rounded-lg p-6 mb-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search NFTs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Rarity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Rarities</SelectItem>
                  <SelectItem value="common">Common</SelectItem>
                  <SelectItem value="rare">Rare</SelectItem>
                  <SelectItem value="epic">Epic</SelectItem>
                  <SelectItem value="legendary">Legendary</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="latest">
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nfts.map((nft, index) => (
              <div
                key={nft.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <NFTCard {...nft} />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              <Filter className="h-5 w-5" />
              Load More NFTs
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Marketplace;
