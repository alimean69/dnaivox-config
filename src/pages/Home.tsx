import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import dnaiLogo from "@/assets/dnai-logo.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-20 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <img src={dnaiLogo} alt="DNAI Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold gradient-text">DNAI</span>
          </div>
          <Button variant="outline" onClick={() => navigate("/configure")}>
            Get Started
          </Button>
        </header>

        {/* Hero Section */}
        <main className="max-w-5xl mx-auto text-center space-y-8">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">AI-Powered Real Estate Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Your AI Partner for
              <span className="gradient-text block">Real Estate Success</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Transform your real estate business with cutting-edge AI automation and intelligent customer experience systems. 
              Streamline operations, boost conversions, and deliver exceptional service 24/7.
            </p>
            
            <Button 
              size="lg" 
              className="gradient-primary glow-effect text-lg px-8 py-6 h-auto hover:scale-105 transition-transform"
              onClick={() => navigate("/configure")}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-20 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Voice Agents</h3>
              <p className="text-muted-foreground">
                Deploy intelligent voice assistants that handle inquiries, qualify leads, and schedule viewings automatically.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automation</h3>
              <p className="text-muted-foreground">
                Streamline property management, lead nurturing, and customer follow-ups with smart automation workflows.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Provide instant, intelligent responses to customer queries at any time, ensuring no opportunity is missed.
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-32 pb-8 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          © DNAI 2025 – AI Solutions for Real Estate Success
        </footer>
      </div>
    </div>
  );
};

export default Home;
