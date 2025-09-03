import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Mail, MessageCircle, Calendar, Bitcoin } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-primary/5 to-orange-500/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 border border-orange-200 mb-4">
              <Bitcoin className="h-4 w-4" />
              <span className="text-sm font-medium">Ready to innovate?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold">
              Let's build intuitive<br />
              <span className="text-primary">Bitcoin-powered apps</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you're looking to create the next generation of financial applications 
              or need expertise in modern frontend development, I'm here to help bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">yash@example.com</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Telegram</h3>
                <p className="text-sm text-muted-foreground">@yashgandhi</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Schedule</h3>
                <p className="text-sm text-muted-foreground">Book a call</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="px-8">
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule a Call
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Open to collaborations, consulting, and full-time opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;