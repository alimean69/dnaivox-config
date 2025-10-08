import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home } from "lucide-react";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import dnaiLogo from "@/assets/dnai-logo.png";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  if (!formData) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen relative py-12">
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={dnaiLogo} alt="DNAI Logo" className="w-10 h-10" />
            <span className="text-xl font-bold gradient-text">DNAI</span>
          </div>
        </div>

        {/* Success Card */}
        <div className="glass-card p-8 md:p-12 rounded-3xl text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            Thank You!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Your AI Agent configuration for <span className="font-semibold text-foreground">{formData.companyName}</span> is ready.
          </p>

          {/* Configuration Summary */}
          <div className="bg-white/5 rounded-2xl p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold mb-4">Configuration Summary</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {formData.companyName && (
                <div>
                  <span className="text-muted-foreground">Company:</span>
                  <p className="font-medium">{formData.companyName}</p>
                </div>
              )}
              {formData.phoneNumber && (
                <div>
                  <span className="text-muted-foreground">Phone:</span>
                  <p className="font-medium">{formData.phoneNumber}</p>
                </div>
              )}
              {formData.voice && (
                <div>
                  <span className="text-muted-foreground">Voice:</span>
                  <p className="font-medium">{formData.voice}</p>
                </div>
              )}
              {formData.model && (
                <div>
                  <span className="text-muted-foreground">Model:</span>
                  <p className="font-medium">{formData.model}</p>
                </div>
              )}
              {formData.language && (
                <div>
                  <span className="text-muted-foreground">Language:</span>
                  <p className="font-medium">{formData.language}</p>
                </div>
              )}
              {formData.agentType && (
                <div>
                  <span className="text-muted-foreground">Agent Type:</span>
                  <p className="font-medium">{formData.agentType}</p>
                </div>
              )}
              {formData.tone && (
                <div>
                  <span className="text-muted-foreground">Tone:</span>
                  <p className="font-medium">{formData.tone}</p>
                </div>
              )}
              {formData.websiteUrl && (
                <div>
                  <span className="text-muted-foreground">Website:</span>
                  <p className="font-medium truncate">{formData.websiteUrl}</p>
                </div>
              )}
            </div>
            
            {formData.goal && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-muted-foreground text-sm">Goal:</span>
                <p className="text-sm mt-1">{formData.goal}</p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <Button 
              size="lg"
              className="gradient-primary glow-effect px-8 hover:scale-105 transition-transform"
              onClick={() => navigate("/configure")}
            >
              Configure Another Agent
            </Button>
            
            <div>
              <Button 
                variant="outline"
                onClick={() => navigate("/")}
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>

        <footer className="text-center mt-12 text-sm text-muted-foreground">
          © DNAI 2025 – AI Solutions for Real Estate Success
        </footer>
      </div>
    </div>
  );
};

export default Success;
