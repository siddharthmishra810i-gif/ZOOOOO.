import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { Phylum } from '../types/zoology';
import { phylumImages } from '../data/images';
import { NaturalistImage } from './NaturalistImage';

interface PhylumCardProps {
  phylum: Phylum;
  index: number;
}

export const PhylumCard: React.FC<PhylumCardProps> = ({ phylum, index }) => {
  const imageMeta = phylumImages[phylum.id];

  return (
    <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg overflow-hidden flex flex-col hover:border-[#385E38] transition-all duration-300 shadow-xs hover:shadow-md group">
      {/* Visual Header / Plate */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-[#EAE5D9]">
        <NaturalistImage
          src={imageMeta?.url || phylumImages.porifera.url}
          fallbackSrc={imageMeta?.fallbackPlate}
          alt={`Zoological plate of ${phylum.name}`}
          className="group-hover:scale-105 transition-transform duration-700 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        
        {/* Phylum Accession Badge */}
        <div className="absolute top-3 left-3 bg-[#FAF8F3]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-[#734528] border border-[#D8D1BD] rounded-xs">
          Phylum 0{index + 1}
        </div>

        {/* Specimen count in corner */}
        <div className="absolute bottom-3 left-3 text-white">
          <span className="text-xs uppercase tracking-wider font-mono opacity-80 block text-[10px]">
            Specimens Cataloged
          </span>
          <span className="text-sm font-semibold">
            {phylum.specimenIds.length} Key Specimens
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Scientific Etymology */}
          <p className="text-xs font-serif italic text-[#734528] mb-1">
            {phylum.etymology}
          </p>

          {/* Phylum Title & Common Name */}
          <h3 className="text-2xl font-serif font-bold text-[#162617] group-hover:text-[#2C4B2C] transition-colors">
            {phylum.name}
          </h3>
          <p className="text-xs font-serif text-[#685F53] -mt-0.5 mb-3 font-medium">
            {phylum.commonName}
          </p>

          {/* Short Description */}
          <p className="text-sm text-[#4A453E] font-serif leading-relaxed line-clamp-3 mb-4">
            {phylum.shortDescription}
          </p>

          {/* Key Characteristics Preview */}
          <div className="border-t border-[#E6E1D1] pt-3 mt-2 space-y-1.5 text-xs text-[#554E44]">
            <div className="flex items-center justify-between">
              <span className="text-[#8C8270]">Organization:</span>
              <span className="font-medium text-[#23201D] text-right">{phylum.atAGlance.organization}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8C8270]">Symmetry:</span>
              <span className="font-medium text-[#23201D] text-right">{phylum.atAGlance.symmetry}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8C8270]">Coelom:</span>
              <span className="font-medium text-[#23201D] text-right">{phylum.atAGlance.coelom}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6 mt-4 border-t border-[#E6E1D1] flex items-center justify-between">
          <span className="text-xs font-mono text-[#8C8270]">
            {phylum.specimenIds.length} taxa
          </span>
          <Link
            to={`/phyla/${phylum.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C4B2C] group-hover:text-[#17281A] transition-colors"
          >
            <span>Explore Phylum</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
