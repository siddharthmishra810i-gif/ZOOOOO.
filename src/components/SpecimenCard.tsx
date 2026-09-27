import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Tag } from 'lucide-react';
import { Specimen } from '../types/zoology';
import { specimenImages, fieldGuideAssets } from '../data/images';
import { NaturalistImage } from './NaturalistImage';

interface SpecimenCardProps {
  specimen: Specimen;
  showPhylumBadge?: boolean;
}

export const SpecimenCard: React.FC<SpecimenCardProps> = ({
  specimen,
  showPhylumBadge = false,
}) => {
  const imageMeta = specimenImages[specimen.id];

  return (
    <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg overflow-hidden flex flex-col hover:border-[#385E38] transition-all duration-300 shadow-xs hover:shadow-md group">
      {/* Specimen Photograph / Naturalist Plate */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#EAE5D9]">
        <NaturalistImage
          src={imageMeta?.url || fieldGuideAssets.heroBanner}
          fallbackSrc={imageMeta?.fallbackPlate}
          alt={`Specimen of ${specimen.commonName} (${specimen.scientificName})`}
          className="group-hover:scale-105 transition-transform duration-500 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Accession Number Label (Natural History Museum Tag) */}
        <div className="absolute top-2.5 left-2.5 bg-[#FAF8F3]/95 backdrop-blur-xs px-2 py-0.5 text-[10px] font-mono text-[#734528] border border-[#D8D1BD] rounded-xs shadow-xs">
          {specimen.accessionNo}
        </div>

        {showPhylumBadge && (
          <div className="absolute top-2.5 right-2.5 bg-[#385E38] text-white px-2 py-0.5 text-[10px] font-serif capitalize tracking-wide rounded-xs shadow-xs">
            {specimen.phylumId}
          </div>
        )}
      </div>

      {/* Museum Specimen Label Box */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Classification Kicker */}
          <div className="text-[11px] font-mono text-[#8C8270] uppercase tracking-wider mb-1">
            Class: {specimen.classification.class.split(' ')[0]}
          </div>

          {/* Common Name */}
          <h4 className="text-lg font-serif font-bold text-[#162617] group-hover:text-[#2C4B2C] transition-colors leading-tight">
            {specimen.commonName}
          </h4>

          {/* Scientific Name */}
          <p className="text-xs font-serif italic text-[#734528] mt-0.5 mb-2 font-medium">
            {specimen.scientificName}
          </p>

          {/* 1-Line Identification */}
          <p className="text-xs text-[#4A453E] font-serif leading-relaxed line-clamp-2 mb-3">
            {specimen.identification}
          </p>

          {/* Habitat Indicator */}
          <div className="flex items-center gap-1.5 text-[11px] text-[#685F53] border-t border-[#E6E1D1] pt-2.5">
            <MapPin className="w-3 h-3 text-[#734528] shrink-0" />
            <span className="truncate">{specimen.habitat.split(',')[0]}</span>
          </div>
        </div>

        {/* View Specimen CTA */}
        <div className="mt-4 pt-3 border-t border-[#E6E1D1] flex items-center justify-end">
          <Link
            to={`/specimens/${specimen.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C4B2C] group-hover:text-[#17281A] transition-colors"
          >
            <span>View Specimen</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
