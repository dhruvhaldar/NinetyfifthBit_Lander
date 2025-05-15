
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Rocket, Smartphone, TabletSmartphone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Cosmic Capture | Ninetyfifth Bit',
  description: 'Details and upcoming release information for Cosmic Capture, an exciting retro space shooter.',
};

const CosmicCapturePage = () => {
  const gameVersion = "Alpha 0.7.2"; // Example version

  return (
    <div className="space-y-12">
      <header className="text-center py-8 bg-card shadow-[0_0_20px_hsl(var(--primary)/0.25)] rounded-lg border-2 border-primary/20 p-6">
        <Rocket className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-3xl font-heading text-primary mb-2">Cosmic Capture</h1>
        <p className="text-xl text-foreground/80">An adrenaline-fueled arcade shooter where you capture cosmic creatures and defend the galaxy!</p>
      </header>

      <Card className="shadow-[0_0_15px_hsl(var(--primary)/0.15)] border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-heading text-primary/90">Game Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-foreground/90">
          <p>Dive into the vibrant, chaotic depths of space in Cosmic Capture! Pilot your advanced starfighter through waves of bizarre and powerful cosmic entities. Your mission: capture them for study, protect vital star-lanes, and upgrade your ship to face ever-increasing challenges.</p>
          <p>Featuring fast-paced gameplay, a dazzling retro-pixel art style, and a chiptune soundtrack that will transport you back to the golden age of arcades.</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Intense top-down shooter action.</li>
            <li>Variety of unique alien creatures to capture.</li>
            <li>Upgradeable ship systems and weaponry.</li>
            <li>Multiple challenging levels and boss fights.</li>
            <li>Global leaderboards to compete for high scores.</li>
          </ul>
        </CardContent>
      </Card>
      
      <section>
        <h2 className="text-3xl font-heading text-center mb-8 text-primary/90">Visuals from the Void</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden shadow-[0_0_15px_hsl(var(--primary)/0.15)] hover:shadow-[0_0_25px_3px_hsl(var(--primary)/0.25)] transition-shadow border-border flex flex-col items-center pt-4 sm:pt-6">
              <div className="relative aspect-[9/16] w-60 rounded-xl overflow-hidden border-2 border-foreground/10 shadow-lg bg-muted">
                <Image
                  src={`https://placehold.co/360x640.png`}
                  alt={`Cosmic Capture Screenshot ${item}`}
                  data-ai-hint="space battle"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 text-center w-full">
                <p className="text-sm text-muted-foreground">Action-packed gameplay scene {item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card className="shadow-[0_0_15px_hsl(var(--primary)/0.15)] border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-heading text-primary/90">Release Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-center text-accent font-semibold animate-pulse">Get Ready, Pilots! Cosmic Capture is warping in soon!</p>
          <Separator />
          <div className="text-center space-y-2">
             <p className="text-foreground/90">Current Version: <span className="font-bold text-primary">{gameVersion}</span></p>
             <p className="text-muted-foreground text-sm">Copyright &copy; {new Date().getFullYear()} Ninetyfifth Bit</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Button variant="outline" size="lg" className="w-full sm:w-auto font-heading" disabled>
              <Smartphone className="mr-2 h-5 w-5" /> Android (Play Store) - Coming Soon
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto font-heading" disabled>
              <TabletSmartphone className="mr-2 h-5 w-5" /> iOS (App Store) - Coming Soon
            </Button>
          </div>
           <p className="text-center text-xs text-muted-foreground pt-2">
            Links will be active upon release. Follow us for updates!
          </p>
        </CardContent>
      </Card>

      <AdPlaceholder
        width={300}
        height={250}
        description="Advertisement Area (e.g., Medium Rectangle)"
        className="mx-auto"
      />
    </div>
  );
};

export default CosmicCapturePage;
