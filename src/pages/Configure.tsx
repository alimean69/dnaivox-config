import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Globe, Phone, Target, FileText, MessageSquare, Mic, Languages, Bot, Palette, Cpu, Volume2, Clock } from "lucide-react";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { useToast } from "@/hooks/use-toast";
import dnaiLogo from "@/assets/dnai-logo.png";

const Configure = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    phoneNumber: "",
    goal: "",
    background: "",
    welcomeMessage: "",
    instructionVoice: "",
    script: "",
    voice: "",
    language: "",
    agentType: "",
    tone: "",
    model: "",
    backgroundNoise: "",
    maxTimeout: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.phoneNumber || !formData.voice || !formData.model) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://nsolbpo.app.n8n.cloud/webhook-test/7b56375e-3d1c-4e5c-9de8-7d7dc4dedc1e", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      toast({
        title: "Success!",
        description: "Your AI Voice Agent configuration has been submitted.",
      });

      navigate("/success", { state: { formData } });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit configuration. Please try again.",
        variant: "destructive",
      });
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

        {/* Form Card */}
        <div className="glass-card p-8 md:p-12 rounded-3xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3">Set Up Your AI Voice Agent</h1>
            <p className="text-muted-foreground text-lg">
              Customize your voice, tone, and personality for your AI-powered real estate assistant
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Company Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    required
                    className="bg-white/5 border-white/10"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="websiteUrl" className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Website URL
                  </Label>
                  <Input
                    id="websiteUrl"
                    type="url"
                    placeholder="https://example.com"
                    value={formData.websiteUrl}
                    onChange={(e) => updateField("websiteUrl", e.target.value)}
                    className="bg-white/5 border-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phoneNumber}
                  onChange={(e) => updateField("phoneNumber", e.target.value)}
                  required
                  className="bg-white/5 border-white/10"
                />
              </div>
            </div>

            {/* Goals & Context */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Goals & Context
              </h2>
              
              <div className="space-y-2">
                <Label htmlFor="goal" className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Goal
                </Label>
                <Textarea
                  id="goal"
                  placeholder="e.g., Convert leads, Provide property information, Schedule viewings..."
                  value={formData.goal}
                  onChange={(e) => updateField("goal", e.target.value)}
                  className="bg-white/5 border-white/10 min-h-24"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="background" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Background / Context
                </Label>
                <Textarea
                  id="background"
                  placeholder="Provide context about your company, services, or project..."
                  value={formData.background}
                  onChange={(e) => updateField("background", e.target.value)}
                  className="bg-white/5 border-white/10 min-h-32"
                />
              </div>
            </div>

            {/* Voice Configuration */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Voice Configuration
              </h2>

              <div className="space-y-2">
                <Label htmlFor="welcomeMessage" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Welcome Message
                </Label>
                <Input
                  id="welcomeMessage"
                  placeholder="Hello! How can I help you today?"
                  value={formData.welcomeMessage}
                  onChange={(e) => updateField("welcomeMessage", e.target.value)}
                  className="bg-white/5 border-white/10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructionVoice" className="flex items-center gap-2">
                  <Mic className="w-4 h-4" />
                  Instruction Voice
                </Label>
                <Textarea
                  id="instructionVoice"
                  placeholder="Guidance on what the voice should say..."
                  value={formData.instructionVoice}
                  onChange={(e) => updateField("instructionVoice", e.target.value)}
                  className="bg-white/5 border-white/10 min-h-24"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="script" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Script (Optional)
                </Label>
                <Textarea
                  id="script"
                  placeholder="Optional script for your agent..."
                  value={formData.script}
                  onChange={(e) => updateField("script", e.target.value)}
                  className="bg-white/5 border-white/10 min-h-32"
                />
              </div>
            </div>

            {/* Agent Settings */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                Agent Settings
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="voice" className="flex items-center gap-2">
                    <Mic className="w-4 h-4" />
                    Voice *
                  </Label>
                  <Select value={formData.voice} onValueChange={(value) => updateField("voice", value)} required>
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Select a voice" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jake">Jake – Social Media and Podcast Voice – Informative, Energetic, Youthful</SelectItem>
                      <SelectItem value="wayne">Wayne – Special Phone Agent</SelectItem>
                      <SelectItem value="alexandra">Alexandra – Conversational and Real</SelectItem>
                      <SelectItem value="ricky">Ricky The K</SelectItem>
                      <SelectItem value="matt">Matt – Real, Hyper-Conversational, Friendly American Male</SelectItem>
                      <SelectItem value="john">John Shaw – Polite Customer Care Voice</SelectItem>
                      <SelectItem value="rudra">Rudra – Suspense and Horror Storyteller</SelectItem>
                      <SelectItem value="hope">Hope – Upbeat and Clear</SelectItem>
                      <SelectItem value="cristina">Cristina</SelectItem>
                      <SelectItem value="ana">Ana</SelectItem>
                      <SelectItem value="maria">Maria</SelectItem>
                      <SelectItem value="finn">Finn</SelectItem>
                      <SelectItem value="mike">Mike</SelectItem>
                      <SelectItem value="alex">Alex</SelectItem>
                      <SelectItem value="indian-support">Indian Customer Support Lady</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language" className="flex items-center gap-2">
                    <Languages className="w-4 h-4" />
                    Language
                  </Label>
                  <Select value={formData.language} onValueChange={(value) => updateField("language", value)}>
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="arabic">Arabic</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="portuguese">Portuguese</SelectItem>
                      <SelectItem value="chinese">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agentType" className="flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    Agent Type
                  </Label>
                  <Select value={formData.agentType} onValueChange={(value) => updateField("agentType", value)}>
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Select agent type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Real Estate Sales Agent</SelectItem>
                      <SelectItem value="support">Support Agent</SelectItem>
                      <SelectItem value="qualifier">Lead Qualifier</SelectItem>
                      <SelectItem value="scheduler">Appointment Scheduler</SelectItem>
                      <SelectItem value="information">Information Provider</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone" className="flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Tone
                  </Label>
                  <Select value={formData.tone} onValueChange={(value) => updateField("tone", value)}>
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="warm">Warm</SelectItem>
                      <SelectItem value="confident">Confident</SelectItem>
                      <SelectItem value="playful">Playful</SelectItem>
                      <SelectItem value="empathetic">Empathetic</SelectItem>
                      <SelectItem value="authoritative">Authoritative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Technical Settings */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                Technical Settings
              </h2>

              <div className="space-y-2">
                <Label htmlFor="model" className="flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Model *
                </Label>
                <Select value={formData.model} onValueChange={(value) => updateField("model", value)} required>
                  <SelectTrigger className="bg-white/5 border-white/10">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent className="max-h-72">
                    <SelectItem value="gpt-5">gpt-5</SelectItem>
                    <SelectItem value="gpt-5-mini">gpt-5-mini</SelectItem>
                    <SelectItem value="gpt-5-nano">gpt-5-nano</SelectItem>
                    <SelectItem value="gpt-4.1-2025-04-14">gpt-4.1-2025-04-14</SelectItem>
                    <SelectItem value="gpt-4.1-mini-2025-04-14">gpt-4.1-mini-2025-04-14</SelectItem>
                    <SelectItem value="gpt-4.1-nano-2025-04-14">gpt-4.1-nano-2025-04-14</SelectItem>
                    <SelectItem value="gpt-4.1">gpt-4.1</SelectItem>
                    <SelectItem value="gpt-4.1-mini">gpt-4.1-mini</SelectItem>
                    <SelectItem value="gpt-4.1-nano">gpt-4.1-nano</SelectItem>
                    <SelectItem value="chatgpt-4o-latest">chatgpt-4o-latest</SelectItem>
                    <SelectItem value="o3">o3</SelectItem>
                    <SelectItem value="o3-mini">o3-mini</SelectItem>
                    <SelectItem value="o4-mini">o4-mini</SelectItem>
                    <SelectItem value="o1-mini">o1-mini</SelectItem>
                    <SelectItem value="gpt-4o-realtime-preview">gpt-4o-realtime-preview-2024-12-17</SelectItem>
                    <SelectItem value="gpt-4o-mini">gpt-4o-mini</SelectItem>
                    <SelectItem value="gpt-4o">gpt-4o</SelectItem>
                    <SelectItem value="gpt-4-turbo">gpt-4-turbo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="backgroundNoise" className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4" />
                    Background Noise
                  </Label>
                  <Select value={formData.backgroundNoise} onValueChange={(value) => updateField("backgroundNoise", value)}>
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Select background noise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                      <SelectItem value="random">Random</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxTimeout" className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Max Timeout (seconds)
                  </Label>
                  <Input
                    id="maxTimeout"
                    type="number"
                    placeholder="e.g., 60"
                    value={formData.maxTimeout}
                    onChange={(e) => updateField("maxTimeout", e.target.value)}
                    className="bg-white/5 border-white/10"
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full gradient-primary glow-effect text-lg py-6 hover:scale-105 transition-transform"
            >
              Generate Voice Agent
            </Button>
          </form>
        </div>

        <footer className="text-center mt-12 text-sm text-muted-foreground">
          © DNAI 2025 – AI Solutions for Real Estate Success
        </footer>
      </div>
    </div>
  );
};

export default Configure;
