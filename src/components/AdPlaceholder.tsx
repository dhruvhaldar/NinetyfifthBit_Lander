
import type { FC } from 'react';
import { Card } from '@/components/ui/card';
import { Megaphone } from 'lucide-react';

interface AdPlaceholderProps {
  width?: string | number;
  height?: string | number;
  description?: string;
  className?: string;
}

const AdPlaceholder: FC<AdPlaceholderProps> = ({
  width = '100%',
  height = 90,
  description = 'Advertisement Placeholder',
  className,
}) => {
  return (
    <Card
      className={`flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/30 bg-muted/10 p-4 my-8 text-center text-muted-foreground ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        minHeight: typeof height === 'number' ? `${height}px` : 'auto',
      }}
      aria-label={description}
    >
      <Megaphone className="w-8 h-8 mb-2 text-muted-foreground/50" />
      <p className="text-sm font-medium">{description}</p>
      {width && height && (
        <p className="text-xs">
          ({typeof width === 'number' ? `${width}px` : width} x {typeof height === 'number' ? `${height}px` : height})
        </p>
      )}
    </Card>
  );
};

export default AdPlaceholder;
