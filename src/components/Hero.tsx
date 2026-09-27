import React from 'react';
import { Compass, BookOpen, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fieldGuideAssets } from '../data/images';

export const Hero: React.FC = () => {
  const scrollToPhyla = () => {
    const el = document.getElementById('phyla');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F4F1E8] border-b border-[#D8D1BD] py-16 md:py-24">
      {/* Background Lithograph Plate with Scrim */}
      <div className="absolute inset-0 pointer-events-none opacity-20 md:opacity-25 mix-blend-multiply overflow-hidden">
        <img
          src={fieldGuideAssets.heroBanner}
          alt="Natural History Marine Invertebrate Plate"
          className="w-full h-full object-cover object-center filter saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F1E8] via-[#F4F1E8]/70 to-[#F4F1E8]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Natural History Archival Kicker */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#734528] font-mono mb-3">
            <span>Vol. I</span>
            <span aria-hidden="true">·</span>
            <span>Comparative Invertebrate Zoology</span>
            <span aria-hidden="true">·</span>
            <span>Undergraduate Atlas</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#162617] tracking-tight leading-tight uppercase">
            NON-CHORDATA
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-xl sm:text-2xl font-serif text-[#2C4B2C] italic leading-relaxed">
            An Interactive Journey Through the Hidden World of Invertebrate Life
          </p>

          {/* Supporting Text */}
          <p className="mt-4 text-base sm:text-lg text-[#554E44] font-serif leading-relaxed max-w-2xl">
            Explore the diversity, structure, classification, and fascinating biology of five major non-chordate phyla through verified specimens, museum-grade lithographs, and interactive laboratory learning.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={scrollToPhyla}
              className="px-6 py-3 bg-[#385E38] hover:bg-[#2C4B2C] text-[#FDFCF7] text-sm font-semibold rounded-sm shadow-sm transition-all duration-200 flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore the Phyla</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <Link
              to="/field-guide"
              className="px-5 py-3 bg-[#FAF8F3] hover:bg-[#EFECE3] border border-[#C4BBA1] text-[#23201D] text-sm font-medium rounded-sm transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#734528]" />
              <span>Naturalist Field Guide Mode</span>
            </Link>

            <Link
              to="/tree"
              className="px-4 py-3 text-xs uppercase tracking-wider text-[#734528] hover:text-[#2C4B2C] font-mono font-medium transition-colors flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Taxonomic Tree</span>
            </Link>
          </div>

          {/* Quick Stats Ribbon */}
          <div className="mt-12 pt-6 border-t border-[#D8D1BD]/80 flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-serif text-[#685F53]">
            <div>
              <span className="font-bold text-[#162617] text-lg block font-sans">5</span>
              <span>Major Phyla Studied</span>
            </div>
            <div className="h-8 w-px bg-[#D8D1BD]" />
            <div>
              <span className="font-bold text-[#162617] text-lg block font-sans">22+</span>
              <span>Representative Specimens</span>
            </div>
            <div className="h-8 w-px bg-[#D8D1BD]" />
            <div>
              <span className="font-bold text-[#162617] text-lg block font-sans">100%</span>
              <span>Syllabus & Lab Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
