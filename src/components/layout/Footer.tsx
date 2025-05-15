import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-muted-foreground">
        <Separator className="my-4 bg-border/50" />
        <p className="text-sm">
          &copy; {currentYear} Ninetyfifth Bit. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Fueling retro dreams with modern code.
        </p>
        <p className="text-xs mt-2">
          Made in India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
