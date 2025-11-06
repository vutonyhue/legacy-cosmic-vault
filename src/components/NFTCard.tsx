import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NFTCardProps {
  title: string;
  image: string;
  price: number;
  rarity: string;
  rating?: number;
}

const NFTCard = ({ title, image, price, rarity, rating = 5 }: NFTCardProps) => {
  return (
    <Card className="hover-lift glass group overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm">
            {rarity}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold text-lg truncate">{title}</h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-secondary text-secondary" : "text-muted"
              }`}
            />
          ))}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gradient">{price}</span>
          <span className="text-sm text-muted-foreground">$C</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="hero" className="w-full">
          <ShoppingCart className="h-4 w-4" />
          Buy & Earn
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NFTCard;
