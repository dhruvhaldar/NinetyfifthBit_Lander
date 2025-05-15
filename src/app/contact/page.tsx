
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Me | Ninetyfifth Bit',
  description: 'Get in touch with Ninetyfifth Bit for inquiries, feedback, or collaborations.',
};

const ContactPage = () => {
  const contactEmail = "ninetyfifthbit@gmail.com";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="text-center py-8 bg-card shadow-[0_0_20px_hsl(var(--primary)/0.25)] rounded-lg border-2 border-primary/20 p-6">
        <Mail className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-2xl font-heading text-primary mb-2">Get In Touch</h1>
        <p className="text-lg text-foreground/80">I'd love to hear from you! Whether you have questions, feedback, or just want to say hi.</p>
      </header>

      <Card className="shadow-[0_0_15px_hsl(var(--primary)/0.15)] border-border">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-heading text-primary/90">Contact Information</CardTitle>
          <CardDescription className="text-foreground/75">
            Reach out to me via email for any inquiries.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-base text-foreground/90">
            For support, press inquiries, or general questions, please email me at:
          </p>
          <Button size="lg" asChild className="font-heading text-base group">
            <Link href={`mailto:${contactEmail}`}>
              <Send className="mr-2 h-5 w-5 group-hover:animate-ping transition-transform" />
              {contactEmail}
            </Link>
          </Button>
          <p className="text-muted-foreground text-sm">
            I typically respond within 2-3 business days. I appreciate your patience!
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-[0_0_15px_hsl(var(--primary)/0.15)] border-border">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-heading text-primary/90">Stay Connected</CardTitle>
          <CardDescription className="text-foreground/75">
            Follow my development journey and get the latest news. (Social links coming soon!)
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
           {/* Placeholder for social media links */}
          <p className="text-muted-foreground text-sm">
            My social media channels will be available soon. Keep an eye on this space!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;
