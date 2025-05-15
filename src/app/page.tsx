
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import GamePreviewCard from '@/components/GamePreviewCard';
import AdPlaceholder from '@/components/AdPlaceholder';
import { Rocket, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ninetyfifth Bit - Indie Game Creator',
  description: 'Welcome to Ninetyfifth Bit, an indie game developer crafting unique retro-inspired experiences.',
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-card shadow-[0_0_20px_hsl(var(--primary)/0.25)] rounded-lg border-2 border-primary/20 p-8">
        <h1 className="text-2xl md:text-3xl font-heading mb-4 text-primary drop-shadow-sm">
          Ninetyfifth Bit
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
          Forging new worlds from classic pixels. I am an indie game developer passionate about creating unique, engaging, and retro-inspired games.
        </p>
        <Button size="sm" asChild className="font-heading text-xs animate-pulse">
          <Link href="#my-games">Explore My Games</Link>
        </Button>
      </section>

      <section id="my-games" className="space-y-8">
        <h2 className="text-2xl font-heading text-center mb-10 text-primary/90">My Games</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <GamePreviewCard
            title="Cosmic Capture"
            description="An adrenaline-fueled arcade shooter! Capture cosmic creatures and defend the galaxy. Coming soon!"
            imageSrc="https://placehold.co/360x640.png"
            dataAiHint="space shooter"
            imageAlt="Cosmic Capture game preview"
            linkHref="/cosmic-capture"
            icon={<Rocket className="w-8 h-8 text-accent" />}
            showStoreLinks={true}
          />
          <GamePreviewCard
            title="Chip Quest"
            description="Embark on a perilous journey through a digital realm. Solve puzzles and battle corrupted data. In development."
            imageSrc="https://placehold.co/360x640.png"
            dataAiHint="digital adventure"
            imageAlt="Chip Quest game preview"
            linkHref="/chip-quest"
            icon={<Cpu className="w-8 h-8 text-accent" />}
            showStoreLinks={true}
          />
        </div>
      </section>

      <AdPlaceholder
        width="100%"
        height={100}
        description="Advertisement Area (e.g., Leaderboard)"
        className="max-w-4xl mx-auto"
      />
    </div>
  );
}
