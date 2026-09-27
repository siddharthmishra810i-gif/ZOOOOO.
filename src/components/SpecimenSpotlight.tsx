import React from 'react';
import { Specimen } from '../types/zoology';
import { specimenImages, fieldGuideAssets } from '../data/images';
import { NaturalistImage } from './NaturalistImage';
import { Sparkles, Compass } from 'lucide-react';

interface SpecimenSpotlightProps {
  specimen: Specimen;
  onExploreAnatomy?: () => void;
}

export const SpecimenSpotlight: React.FC<SpecimenSpotlightProps> = ({
  specimen,
  onExploreAnatomy,
}) => {
  const imageMeta = specimenImages[specimen.id];

  return (
    <aside className="bg-[#FAF8F3] border border-[#C4BBA1] rounded-lg p-6 paper-edge relative overflow-hidden my-6">
      {/* Delicate vintage stamp border */}
      <div className="flex items-center justify-between border-b border-[#D8D1BD] pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#734528] font-bold">
            Specimen Spotlight
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#8C8270]">
          {specimen.accessionNo}
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Specimen Framed Visual */}
        <div className="w-full md:w-56 h-48 md:h-52 rounded overflow-hidden shrink-0 border border-[#D8D1BD] bg-[#EAE5D9]">
          <NaturalistImage
            src={imageMeta?.url || fieldGuideAssets.heroBanner}
            fallbackSrc={imageMeta?.fallbackPlate}
            alt={specimen.commonName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Specimen Curatorial Card Text */}
        <div className="flex-1 text-center md:text-left">
          <div className="text-xs uppercase tracking-wider font-mono text-[#385E38] font-semibold mb-1">
            Phylum {specimen.phylumId.toUpperCase()}
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#162617] tracking-tight">
            {specimen.commonName}
          </h3>
          <p className="text-sm font-serif italic text-[#734528] mb-3">
            {specimen.scientificName}
          </p>

          <blockquote className="text-sm font-serif italic text-[#4A453E] border-l-2 border-[#A44A32] pl-3 my-3 bg-[#F4F1E8] py-2 pr-3 rounded-r">
            "{specimen.spotlightQuote}"
          </blockquote>

          {/* Key Quick Metadata */}
          <div className="grid grid-cols-2 gap-2 text-xs font-serif text-[#554E44] my-3 max-w-sm">
            <div>
              <span className="text-[#8C8270] block text-[10px] uppercase font-mono">Habitat</span>
              <span className="font-semibold text-[#23201D] truncate block">
                {specimen.habitat.split(',')[0]}
              </span>
            </div>
            <div>
              <span className="text-[#8C8270] block text-[10px] uppercase font-mono">Class</span>
              <span className="font-semibold text-[#23201D] truncate block">
                {specimen.classification.class.split(' ')[0]}
              </span>
            </div>
          </div>

          {onExploreAnatomy && (
            <button
              type="button"
              onClick={onExploreAnatomy}
              className="mt-3 px-4 py-2 bg-[#385E38] hover:bg-[#2C4B2C] text-white text-xs font-semibold rounded-sm transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Explore Anatomy & Life Cycle</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
