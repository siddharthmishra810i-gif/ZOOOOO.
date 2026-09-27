import React, { useState } from 'react';
import { fieldGuideAssets } from '../data/images';

interface NaturalistImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  caption?: string;
  className?: string;
  containerClassName?: string;
  showCaption?: boolean;
}

export const NaturalistImage: React.FC<NaturalistImageProps> = ({
  src,
  fallbackSrc = fieldGuideAssets.heroBanner,
  alt,
  caption,
  className = '',
  containerClassName = '',
  showCaption = false,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  React.useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setLoaded(false);
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(true);
    } else {
      setHasError(true);
    }
  };

  return (
    <figure className={`relative overflow-hidden ${containerClassName}`}>
      <div className="relative w-full h-full bg-[#EAE5D9] overflow-hidden">
        {/* Subtle paper grain / placeholder texture */}
        {!loaded && (
          <div className="absolute inset-0 bg-[#EFECE3] flex items-center justify-center text-[#8C8270] text-xs font-serif italic animate-pulse">
            Loading natural history specimen...
          </div>
        )}
        
        <img
          src={currentSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out ${className}`}
        />
        
        {/* Delicate naturalist inner vignette */}
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10" />
      </div>

      {showCaption && caption && (
        <figcaption className="mt-2 text-xs font-serif italic text-[#685F53] leading-relaxed border-l-2 border-[#C4BBA1] pl-2.5">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
