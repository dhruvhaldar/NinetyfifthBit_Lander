import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import IdeaGenerator from '@/components/chip-quest/IdeaGenerator'; // Removed as AI Idea Spark section is removed
import { Cpu } from 'lucide-react'; // Removed Lightbulb as it's no longer used

export const metadata: Metadata = {
  title: 'Chip Quest | Ninetyfifth Bit',
  description: 'Preview of Chip Quest, an upcoming digital adventure game.', // Updated description
};

const ChipQuestPage = () => {
  return (
    <div className="space-y-12">
      <header className="text-center py-8 bg-card shadow-[0_0_20px_hsl(var(--primary)/0.25)] rounded-lg border-2 border-primary/20 p-6">
        <Cpu className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-3xl font-heading text-primary mb-2">Chip Quest</h1>
        <p className="text-xl text-foreground/80">An upcoming adventure into a sprawling digital realm. Solve puzzles, battle corrupted data, and uncover ancient secrets.</p>
      </header>

      <Card className="shadow-[0_0_15px_hsl(var(--primary)/0.15)] border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-heading text-primary/90">About the Game</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-foreground/90">
          <p>Chip Quest is an innovative puzzle-adventure game set inside a vast, interconnected computer system. Players take on the role of a lone data fragment seeking to restore balance to a world overrun by glitches and rogue AI.</p>
          <p>Explore intricate circuits, decipher cryptic code, and engage in strategic battles against digital adversaries. With a focus on clever puzzle design and a compelling narrative, Chip Quest aims to deliver a thoughtful and engaging retro-tech experience.</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Unique puzzle mechanics based on computer logic.</li>
            <li>A rich storyline exploring themes of AI and digital consciousness.</li>
            <li>Pixel art aesthetic inspired by classic computer interfaces.</li>
            <li>Challenging boss encounters representing powerful system errors.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-[0_0_15px_hsl(var(--primary)/0.15)] border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-heading text-primary/90">Development Status</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-center text-accent font-semibold">
            Expected Release: Late 2024 / Early 2025
          </p>
          <p className="text-center text-muted-foreground mt-2">
            Currently in active development. Stay tuned for more updates!
          </p>
        </CardContent>
      </Card>

      {/* AI Idea Spark section removed
      <Card className="shadow-xl border-border">
        <CardHeader className="text-center">
          <Lightbulb className="w-12 h-12 text-primary mx-auto mb-3" />
          <CardTitle className="text-3xl font-heading text-primary/90">AI Idea Spark</CardTitle>
          <CardDescription className="text-foreground/75 max-w-xl mx-auto">
            Help us shape Chip Quest! Enter a theme or concept below and let our AI generate some game ideas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <IdeaGenerator />
        </CardContent>
      </Card>
      */}
    </div>
  );
};

export default ChipQuestPage;
