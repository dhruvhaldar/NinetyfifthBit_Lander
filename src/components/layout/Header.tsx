import Link from 'next/link';
import { Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-[0_3px_12px_hsl(var(--primary)/0.2)] sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 text-base font-heading text-primary hover:text-primary/80 transition-colors">
          <Gamepad2 size={32} className="text-accent" />
          Ninetyfifth Bit
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" asChild className="font-heading text-xs hover:bg-accent/10">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild className="font-heading text-xs hover:bg-accent/10">
            <Link href="/cosmic-capture">Cosmic Capture</Link>
          </Button>
          <Button variant="ghost" asChild className="font-heading text-xs hover:bg-accent/10">
            <Link href="/chip-quest">Chip Quest</Link>
          </Button>
          <Button variant="ghost" asChild className="font-heading text-xs hover:bg-accent/10">
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
