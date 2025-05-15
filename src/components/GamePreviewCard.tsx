
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone } from 'lucide-react';

type GamePreviewCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  dataAiHint?: string;
  linkHref: string;
  icon?: ReactNode;
  showStoreLinks?: boolean;
};

const GamePreviewCard = ({ title, description, imageSrc, imageAlt, dataAiHint, linkHref, icon, showStoreLinks }: GamePreviewCardProps) => {
  return (
    <Card className="overflow-hidden shadow-[0_0_15px_hsl(var(--primary)/0.15)] hover:shadow-[0_0_25px_3px_hsl(var(--primary)/0.25)] transition-shadow duration-300 border-2 border-border hover:border-primary/50 flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <h3 className="text-xl font-heading text-primary font-semibold leading-none tracking-tight">{title}</h3>
        </div>
        <CardDescription className="text-foreground/70 text-sm h-12 overflow-hidden">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-0">
        <div className="relative aspect-video w-full">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            fill 
            className="object-cover"
            data-ai-hint={dataAiHint}
          />
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-secondary/30 flex flex-col items-stretch gap-2">
        <Button size="sm" asChild className="w-full font-heading text-xs group">
          <Link href={linkHref}>
            Learn More 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        {showStoreLinks && (
          <Button variant="outline" size="sm" className="w-full font-heading text-xs" disabled>
            <Smartphone className="mr-2 h-5 w-5" /> Android (Play Store) - Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default GamePreviewCard;
