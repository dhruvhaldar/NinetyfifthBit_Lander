
import type { FC } from 'react';
import { Megaphone } from 'lucide-react';

interface AdPlaceholderProps {
  width?: string | number;
  height?: string | number;
  description?: string;
  className?: string;
  // AdSense specific, user must replace these with actual values from their AdSense account!
  'data-ad-client'?: string;
  'data-ad-slot'?: string;
  'data-ad-format'?: string; // e.g., "auto", "rectangle", "vertical", "horizontal"
  'data-full-width-responsive'?: string; // "true" or "false"
}

const AdPlaceholder: FC<AdPlaceholderProps> = ({
  width = '100%',
  height = 90,
  description = 'Advertisement Placeholder',
  className,
  'data-ad-client': adClient = 'ca-pub-YOUR_PUBLISHER_ID', // USER: Replace with your AdSense Publisher ID
  'data-ad-slot': adSlot = 'YOUR_AD_SLOT_ID',             // USER: Replace with your AdSense Ad Slot ID
  'data-ad-format': adFormat = 'auto',
  'data-full-width-responsive': fullWidthResponsive = 'true',
}) => {
  // In a real AdSense integration, the AdSense script might clear the content of the <ins> tag.
  // This inner content is primarily for visual indication during development.
  const showPlaceholderContent = process.env.NODE_ENV === 'development' || !process.env.NEXT_PUBLIC_ADSENSE_SCRIPT_LOADED;

  return (
    <div
      className={`flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/30 bg-muted/10 p-1 my-8 text-center text-muted-foreground ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        minHeight: typeof height === 'number' ? `${height}px` : 'auto', // Ensure minHeight for reserved space
      }}
      aria-label={description}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: 'block', // Required by AdSense
          width: '100%',    // Placeholder styling; AdSense might override
          height: '100%',   // Placeholder styling; AdSense might override
          textAlign: 'center',
        }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      >
        {/* This inner content is a visual placeholder for development. */}
        {/* Google AdSense will typically fill this <ins> tag with the ad content. */}
        {/* If ads are blocked or fail to load, AdSense might show a blank space or its own fallback. */}
        {showPlaceholderContent && (
          <div className="flex flex-col items-center justify-center h-full p-2">
            <Megaphone className="w-6 h-6 mb-1 text-muted-foreground/50" />
            <p className="text-xs font-medium">{description}</p>
            <p className="text-xs">
              ({typeof width === 'number' ? `${width}px` : width} x {typeof height === 'number' ? `${height}px` : height})
            </p>
            <p className="text-xs mt-1 font-semibold text-primary/70">
              AdSense Slot (Replace with your AdSense code)
            </p>
          </div>
        )}
      </ins>
      {/*
        USER INSTRUCTIONS:
        1. Ensure the main Google AdSense script is added to <head> in src/app/layout.tsx.
           (It looks like: <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID" crossorigin="anonymous"></script>)
        2. Replace 'ca-pub-YOUR_PUBLISHER_ID' and 'YOUR_AD_SLOT_ID' in the props of this component (or in your AdSense ad unit code) with your actual values from AdSense.
        3. When you get ad unit code from AdSense, you can replace this entire <AdPlaceholder> component instance with that snippet, or carefully merge the attributes.
        4. The `style` attribute on `<ins>` here is for basic layout; AdSense often controls the final appearance and size.
        5. This placeholder will be less visible in production if an environment variable `NEXT_PUBLIC_ADSENSE_SCRIPT_LOADED` is set to "true" (you can set this if you confirm AdSense is active).
      */}
    </div>
  );
};

export default AdPlaceholder;

