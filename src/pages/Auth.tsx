import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from "zod";
import { Session } from "@supabase/supabase-js";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import fairy1 from "@/assets/fairy-elegant-1.png";
import fairy2 from "@/assets/fairy-elegant-2.png";
import fairy3 from "@/assets/fairy-elegant-3.png";

const authSchema = z.object({
  email: z.string().trim().email({ message: "Email không hợp lệ" }).max(255),
  password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }).max(100),
  displayName: z.string().trim().min(1, { message: "Tên hiển thị không được để trống" }).max(100).optional(),
});

const Auth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (session) {
          navigate("/feed");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        navigate("/feed");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("signup-email") as string;
    const password = formData.get("signup-password") as string;
    const displayName = formData.get("signup-displayName") as string;

    try {
      const validated = authSchema.parse({ email, password, displayName });
      
      const redirectUrl = `${window.location.origin}/feed`;
      const { error } = await supabase.auth.signUp({
        email: validated.email,
        password: validated.password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            display_name: validated.displayName,
          },
        },
      });

      if (error) {
        if (error.message.includes("already registered")) {
          toast({
            title: "Email đã tồn tại",
            description: "Email này đã được đăng ký. Vui lòng đăng nhập.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Lỗi đăng ký",
            description: error.message,
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Đăng ký thành công!",
          description: "Bạn có thể đăng nhập ngay bây giờ.",
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Lỗi xác thực",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("signin-email") as string;
    const password = formData.get("signin-password") as string;

    try {
      const validated = authSchema.parse({ email, password });

      const { error } = await supabase.auth.signInWithPassword({
        email: validated.email,
        password: validated.password,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          toast({
            title: "Đăng nhập thất bại",
            description: "Email hoặc mật khẩu không đúng.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Lỗi đăng nhập",
            description: error.message,
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Lỗi xác thực",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (session) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/10 p-4 relative overflow-hidden">
      {/* Magical sparkles background */}
      <MagicalSparkles />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      {/* Elegant Flying Fairies */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { img: fairy1, left: "5%", top: "15%", delay: 0, duration: 12 },
          { img: fairy2, left: "80%", top: "25%", delay: 2, duration: 14 },
          { img: fairy3, left: "15%", top: "65%", delay: 4, duration: 13 },
        ].map((fairy, i) => (
          <div
            key={i}
            className="absolute animate-fairy-float"
            style={{
              left: fairy.left,
              top: fairy.top,
              animationDelay: `${fairy.delay}s`,
              animationDuration: `${fairy.duration}s`,
            }}
          >
            <img
              src={fairy.img}
              alt="Elegant Fairy"
              className="w-32 h-48 md:w-40 md:h-60 object-contain opacity-90"
              style={{
                filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 40px rgba(251, 191, 36, 0.4))",
              }}
            />
            {/* Magical trail */}
            <div 
              className="absolute inset-0 animate-pulse"
              style={{
                background: "radial-gradient(ellipse at center, rgba(34, 197, 94, 0.3) 0%, transparent 70%)",
              }}
            />
          </div>
        ))}
      </div>

      <Card className="w-full max-w-md backdrop-blur-xl bg-background/80 border-primary/20 shadow-2xl hover-lift animate-fade-in relative overflow-hidden">
        {/* 3D shine effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl opacity-50 animate-pulse" />
        
        <div className="relative">
          <CardHeader className="text-center space-y-2 pb-8">
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg animate-glow">
              <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              Chào mừng
            </CardTitle>
            <CardDescription className="text-center text-base">
              Đăng nhập hoặc tạo tài khoản mới
            </CardDescription>
          </CardHeader>
          <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-muted/50 p-1 backdrop-blur-sm">
              <TabsTrigger 
                value="signin" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
              >
                Đăng nhập
              </TabsTrigger>
              <TabsTrigger 
                value="signup"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
              >
                Đăng ký
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin" className="mt-6">
              <form onSubmit={handleSignIn} className="space-y-5">
                <div className="space-y-2 group">
                  <Label htmlFor="signin-email" className="text-sm font-medium">Email</Label>
                  <Input
                    id="signin-email"
                    name="signin-email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    disabled={isLoading}
                    className="bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40"
                  />
                </div>
                <div className="space-y-2 group">
                  <Label htmlFor="signin-password" className="text-sm font-medium">Mật khẩu</Label>
                  <Input
                    id="signin-password"
                    name="signin-password"
                    type="password"
                    required
                    disabled={isLoading}
                    className="bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-semibold" 
                  disabled={isLoading}
                >
                  {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup" className="mt-6">
              <form onSubmit={handleSignUp} className="space-y-5">
                <div className="space-y-2 group">
                  <Label htmlFor="signup-displayName" className="text-sm font-medium">Tên hiển thị</Label>
                  <Input
                    id="signup-displayName"
                    name="signup-displayName"
                    type="text"
                    placeholder="Tên của bạn"
                    required
                    disabled={isLoading}
                    className="bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40"
                  />
                </div>
                <div className="space-y-2 group">
                  <Label htmlFor="signup-email" className="text-sm font-medium">Email</Label>
                  <Input
                    id="signup-email"
                    name="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    disabled={isLoading}
                    className="bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40"
                  />
                </div>
                <div className="space-y-2 group">
                  <Label htmlFor="signup-password" className="text-sm font-medium">Mật khẩu</Label>
                  <Input
                    id="signup-password"
                    name="signup-password"
                    type="password"
                    placeholder="Ít nhất 6 ký tự"
                    required
                    disabled={isLoading}
                    className="bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-semibold" 
                  disabled={isLoading}
                >
                  {isLoading ? "Đang đăng ký..." : "Đăng ký"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
