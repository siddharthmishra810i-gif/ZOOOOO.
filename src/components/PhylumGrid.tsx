import React from 'react';
import { phylaData } from '../data/nonChordata';
import { PhylumCard } from './PhylumCard';
import { Sparkles } from 'lucide-react';

export const PhylumGrid: React.FC = () => {
  return (
    <section id="phyla" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#734528] font-mono mb-2">
          <span>Zoological Classification</span>
          <span aria-hidden="true">·</span>
          <span>Section 01</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#162617] tracking-tight">
          Explore the Five Phyla
        </h2>
        <p className="mt-3 text-base text-[#5C5549] font-serif leading-relaxed">
          From the cellular simplicity of pore-bearing sponges to the pressurized hydrostatic engineering of roundworms, examine the anatomical innovations that shaped animal life before backbones evolved.
        </p>
      </div>

      {/* Grid of 5 Phyla */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {phylaData.map((phylum, index) => (
          <PhylumCard key={phylum.id} phylum={phylum} index={index} />
        ))}
      </div>
    </section>
  );
};
