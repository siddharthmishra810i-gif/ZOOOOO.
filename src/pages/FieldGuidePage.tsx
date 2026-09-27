import React, { useState, useEffect } from 'react';
import { specimensData, phylaData } from '../data/nonChordata';
import { specimenImages, fieldGuideAssets } from '../data/images';
import { NaturalistImage } from '../components/NaturalistImage';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Compass, 
  MapPin, 
  Maximize2,
  X
} from 'lucide-react';

export const FieldGuidePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomModalOpen, setZoomModalOpen] = useState(false);

  const specimen = specimensData[currentIndex];
  const phylum = phylaData.find((p) => p.id === specimen.phylumId) || phylaData[0];
  const imageMeta = specimenImages[specimen.id];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : specimensData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < specimensData.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation for field guide
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomModalOpen) {
        if (e.key === 'Escape') setZoomModalOpen(false);
        return;
      }
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, zoomModalOpen]);

  return (
    <div className="py-8 md:py-12 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Field Journal Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#D8D1BD] pb-4 mb-8 gap-3">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#734528] font-mono block">
            The Naturalist's Field Journal
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#162617]">
            Non-Chordata Field Log
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#8C8270]">
            Plate {currentIndex + 1} of {specimensData.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 bg-[#FAF8F3] hover:bg-[#EFECE3] border border-[#D8D1BD] rounded text-[#4A453E] cursor-pointer transition-colors"
              title="Previous Page (←)"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2 bg-[#FAF8F3] hover:bg-[#EFECE3] border border-[#D8D1BD] rounded text-[#4A453E] cursor-pointer transition-colors"
              title="Next Page (→)"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Field Guide Folio / Open Journal Page */}
      <div className="bg-[#FAF8F3] border-2 border-[#C4BBA1] rounded-lg p-6 sm:p-10 paper-edge shadow-xl relative overflow-hidden naturalist-border">
        {/* Vintage Accession Stamp */}
        <div className="absolute top-6 right-6 border border-[#A44A32] text-[#A44A32] px-3 py-1 text-[10px] font-mono uppercase tracking-widest rotate-2 opacity-80 rounded-xs pointer-events-none">
          Cataloged · {specimen.accessionNo}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Naturalist Engraving / Specimen Plate */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="relative h-64 sm:h-84 rounded border-2 border-[#D8D1BD] overflow-hidden bg-[#EAE5D9] p-2 bg-[#F4F1E8] group">
              <div className="w-full h-full overflow-hidden rounded-xs border border-[#C4BBA1] relative">
                <NaturalistImage
                  key={specimen.id}
                  src={imageMeta?.url || fieldGuideAssets.heroBanner}
                  fallbackSrc={imageMeta?.fallbackPlate}
                  alt={specimen.commonName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Enlarge zoom button */}
                <button
                  type="button"
                  onClick={() => setZoomModalOpen(true)}
                  className="absolute bottom-2.5 right-2.5 p-1.5 bg-[#23201D]/80 hover:bg-[#23201D] text-white rounded-xs transition-colors cursor-pointer shadow-md"
                  title="Enlarge Specimen Image"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="text-center">
              <span className="text-xs font-serif italic text-[#685F53] block">
                {imageMeta?.caption || `Plate ${currentIndex + 1}: ${specimen.commonName}`}
              </span>
              <span className="text-[10px] font-mono text-[#8C8270] uppercase tracking-wider">
                Ex Coll. Natural History Herbarium · {imageMeta?.credit || 'Zoological Collection'}
              </span>
            </div>
          </div>

          {/* Right Column: Hand-annotated Naturalist Notes */}
          <div className="md:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Phylum Header */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-[#385E38] font-bold mb-1">
                <span>Phylum {phylum.name}</span>
                <span>·</span>
                <span>Class {specimen.classification.class}</span>
              </div>

              {/* Title & Scientific Binomial */}
              <h2 className="text-3xl font-serif font-bold text-[#162617] tracking-tight">
                {specimen.commonName}
              </h2>
              <p className="text-base font-serif italic text-[#734528] mt-0.5 mb-4">
                {specimen.scientificName}
              </p>

              {/* Field Note Identification */}
              <div className="border-l-2 border-[#734528] pl-3 py-1 mb-4 bg-[#F4F1E8] rounded-r text-xs font-serif text-[#4A453E] leading-relaxed">
                <span className="font-sans font-semibold text-[10px] uppercase tracking-wider block text-[#734528] mb-0.5">
                  Naturalist Field Note:
                </span>
                {specimen.identification}
              </div>

              {/* Habitat & Ecology */}
              <div className="space-y-2.5 text-xs font-serif text-[#4A453E] mb-6">
                <div>
                  <strong className="text-[#162617] font-sans font-semibold text-[11px] block uppercase tracking-wide">
                    Habitat & Occurrence:
                  </strong>
                  <p className="mt-0.5 leading-relaxed">{specimen.habitat}</p>
                </div>

                <div>
                  <strong className="text-[#162617] font-sans font-semibold text-[11px] block uppercase tracking-wide">
                    Key Morphological Features:
                  </strong>
                  <p className="mt-0.5 leading-relaxed">{specimen.morphology}</p>
                </div>

                <div>
                  <strong className="text-[#162617] font-sans font-semibold text-[11px] block uppercase tracking-wide">
                    Diagnostic Exam Note:
                  </strong>
                  <p className="mt-0.5 leading-relaxed italic text-[#685F53]">{specimen.examPoints[0]}</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E6E1D1] flex items-center justify-between">
              <Link
                to={`/specimens/${specimen.id}`}
                className="text-xs font-serif font-semibold text-[#2C4B2C] hover:text-[#162617] underline decoration-solid"
              >
                Inspect Complete Laboratory Dossier →
              </Link>

              <span className="text-[11px] font-mono text-[#8C8270]">
                {currentIndex + 1} / {specimensData.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Field Guide Page Quick Thumbnails Carousel with Visual Cards */}
      <div className="mt-8 pt-6 border-t border-[#D8D1BD]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#734528] font-bold">
            All Specimen Plates ({specimensData.length}):
          </span>
          <span className="text-[11px] font-serif text-[#8C8270] italic hidden sm:inline">
            Use Left/Right arrow keys or click any plate to navigate
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5 max-h-64 overflow-y-auto pr-1 scrollbar-thin">
          {specimensData.map((s, idx) => {
            const isSelected = currentIndex === idx;
            const thumbMeta = specimenImages[s.id];
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`p-1.5 rounded text-left transition-all cursor-pointer border flex flex-col items-center ${
                  isSelected
                    ? 'bg-[#385E38] text-white border-[#385E38] shadow-sm'
                    : 'bg-[#FAF8F3] hover:bg-[#EFECE3] border-[#D8D1BD] text-[#4A453E]'
                }`}
              >
                <div className="w-full h-14 rounded-xs overflow-hidden bg-[#EAE5D9] mb-1">
                  <img
                    src={thumbMeta?.url || fieldGuideAssets.heroBanner}
                    alt={s.commonName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="font-serif text-[11px] truncate w-full text-center leading-tight">
                  {s.commonName}
                </span>
                <span className={`text-[9px] font-mono ${isSelected ? 'text-white/80' : 'text-[#8C8270]'}`}>
                  #{idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
          <div className="relative max-w-4xl w-full bg-[#FAF8F3] border border-[#C4BBA1] rounded-lg p-4 shadow-2xl">
            <button
              type="button"
              onClick={() => setZoomModalOpen(false)}
              className="absolute top-3 right-3 p-1.5 bg-[#23201D] text-white rounded-full hover:bg-[#385E38] transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[80vh] overflow-hidden flex items-center justify-center">
              <img
                src={imageMeta?.url || fieldGuideAssets.heroBanner}
                alt={specimen.commonName}
                className="max-h-[75vh] w-auto object-contain rounded"
              />
            </div>
            <div className="mt-3 text-center text-xs font-serif italic text-[#685F53]">
              {specimen.commonName} ({specimen.scientificName}) — {imageMeta?.caption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
