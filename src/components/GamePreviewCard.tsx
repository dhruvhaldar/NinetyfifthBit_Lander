import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type GamePreviewCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  dataAiHint?: string;
  linkHref: string;
  icon?: ReactNode;
};

const GamePreviewCard = ({ title, description, imageSrc, imageAlt, dataAiHint, linkHref, icon }: GamePreviewCardProps) => {
  return (
    <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-border hover:border-primary/50 flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <CardTitle className="text-3xl font-heading text-primary">{title}</CardTitle>
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
      <CardFooter className="p-4 bg-secondary/30">
        <Button asChild className="w-full font-heading text-base group">
          <Link href={linkHref}>
            Learn More 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GamePreviewCard;
