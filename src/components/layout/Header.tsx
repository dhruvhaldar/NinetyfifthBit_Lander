import Link from 'next/link';
import { Gamepad2, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-[0_3px_12px_hsl(var(--primary)/0.2)] sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 md:h-16">
        <Link href="/" className="flex items-center gap-2 text-base font-heading text-primary hover:text-primary/80 transition-colors">
          <Gamepad2 size={32} className="text-accent" />
          Ninetyfifth Bit
        </Link>
        <nav className="hidden md:flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" asChild className="font-heading text-xs hover:bg-accent/10 hover:text-primary">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild className="font-heading text-xs hover:bg-accent/10 hover:text-primary">
            <Link href="/cosmic-capture">Cosmic Capture</Link>
          </Button>
          <Button variant="ghost" asChild className="font-heading text-xs hover:bg-accent/10 hover:text-primary">
            <Link href="/chip-quest">Chip Quest</Link>
          </Button>
          <Button variant="ghost" asChild className="font-heading text-xs hover:bg-accent/10 hover:text-primary">
            <Link href="/contact">Contact</Link>
          </Button>
          <Button variant="ghost" asChild className="font-heading text-xs hover:bg-accent/10 hover:text-primary">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium">Home</Link>
              <Link href="/cosmic-capture" className="text-sm font-medium">Cosmic Capture</Link>
              <Link href="/chip-quest" className="text-sm font-medium">Chip Quest</Link>
              <Link href="/contact" className="text-sm font-medium">Contact</Link>
              <Link href="/privacy-policy" className="text-sm font-medium">Privacy Policy</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
