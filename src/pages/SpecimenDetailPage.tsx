import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { specimensData, phylaData } from '../data/nonChordata';
import { specimenImages, fieldGuideAssets } from '../data/images';
import { NaturalistImage } from '../components/NaturalistImage';
import { SpecimenSpotlight } from '../components/SpecimenSpotlight';
import { AnatomyDiagram } from '../components/AnatomyDiagram';
import { GlossaryTerm } from '../components/GlossaryTerm';
import { 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Maximize2, 
  X,
  Compass,
  BookOpen,
  MapPin,
  HelpCircle
} from 'lucide-react';

export const SpecimenDetailPage: React.FC = () => {
  const { specimenId } = useParams<{ specimenId: string }>();
  const navigate = useNavigate();
  const [zoomModalOpen, setZoomModalOpen] = useState(false);

  const specimenIndex = specimensData.findIndex((s) => s.id === specimenId);
  const specimen = specimensData[specimenIndex] || specimensData[0];
  const phylum = phylaData.find((p) => p.id === specimen.phylumId) || phylaData[0];

  const prevSpecimen = specimenIndex > 0 ? specimensData[specimenIndex - 1] : null;
  const nextSpecimen = specimenIndex < specimensData.length - 1 ? specimensData[specimenIndex + 1] : null;

  const imageMeta = specimenImages[specimen.id];

  const handleScrollToAnatomy = () => {
    const el = document.getElementById('specimen-anatomy');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#8C8270]">
        <Link to="/" className="hover:text-[#17281A] transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3 text-[#C4BBA1]" />
        <Link to={`/phyla/${phylum.id}`} className="hover:text-[#17281A] transition-colors">
          {phylum.name}
        </Link>
        <ChevronRight className="w-3 h-3 text-[#C4BBA1]" />
        <span className="text-[#385E38] font-bold">{specimen.commonName}</span>
      </nav>

      {/* Main Specimen Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D8D1BD] pb-6 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#734528] font-mono mb-2">
            <span>Accession {specimen.accessionNo}</span>
            <span aria-hidden="true">·</span>
            <Link to={`/phyla/${phylum.id}`} className="text-[#385E38] hover:underline font-semibold">
              Phylum {phylum.name}
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#162617] tracking-tight">
            {specimen.commonName}
          </h1>
          <p className="text-lg sm:text-xl font-serif italic text-[#734528] mt-1 font-medium">
            {specimen.scientificName}
          </p>
        </div>

        <Link
          to={`/phyla/${phylum.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-serif font-medium text-[#4A453E] hover:text-[#2C4B2C] border border-[#D8D1BD] px-3 py-1.5 rounded-sm bg-[#FAF8F3] hover:bg-[#EFECE3] transition-colors self-start md:self-end"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#734528]" />
          <span>Back to {phylum.name} Phylum</span>
        </Link>
      </div>

      {/* Top Section: High-Res Specimen Photograph & Taxonomy Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left: Specimen Visual Card */}
        <div className="lg:col-span-7 bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-4 sm:p-5 paper-edge">
          <div className="relative h-72 sm:h-96 rounded overflow-hidden bg-[#EAE5D9] group">
            <NaturalistImage
              src={imageMeta?.url || fieldGuideAssets.heroBanner}
              fallbackSrc={imageMeta?.fallbackPlate}
              alt={specimen.commonName}
              className="w-full h-full object-cover"
            />
            {/* Zoom Button */}
            <button
              type="button"
              onClick={() => setZoomModalOpen(true)}
              className="absolute bottom-3 right-3 p-2 bg-[#23201D]/80 hover:bg-[#23201D] text-white rounded-xs transition-colors cursor-pointer shadow-md"
              title="Enlarge Specimen Image"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3 text-xs font-serif italic text-[#685F53] flex items-center justify-between">
            <span>{imageMeta?.caption || `${specimen.commonName} (${specimen.scientificName})`}</span>
            <span className="font-mono text-[10px] text-[#8C8270] not-italic">{imageMeta?.credit}</span>
          </div>
        </div>

        {/* Right: Scientific Classification Matrix */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6 paper-edge">
            <h3 className="text-xs uppercase tracking-widest font-mono text-[#734528] font-bold border-b border-[#E6E1D1] pb-2 mb-4">
              Scientific Classification
            </h3>
            
            <dl className="space-y-2 text-xs font-serif">
              <div className="flex justify-between py-1 border-b border-[#F0EDE1]">
                <dt className="text-[#8C8270] uppercase font-mono text-[11px]">Kingdom</dt>
                <dd className="font-semibold text-[#162617]">{specimen.classification.kingdom}</dd>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EDE1]">
                <dt className="text-[#8C8270] uppercase font-mono text-[11px]">Phylum</dt>
                <dd className="font-semibold text-[#2C4B2C]">{specimen.classification.phylum}</dd>
              </div>
              {specimen.classification.subphylumOrSuperclass && (
                <div className="flex justify-between py-1 border-b border-[#F0EDE1]">
                  <dt className="text-[#8C8270] uppercase font-mono text-[11px]">Subphylum</dt>
                  <dd className="font-semibold text-[#162617]">{specimen.classification.subphylumOrSuperclass}</dd>
                </div>
              )}
              <div className="flex justify-between py-1 border-b border-[#F0EDE1]">
                <dt className="text-[#8C8270] uppercase font-mono text-[11px]">Class</dt>
                <dd className="font-semibold text-[#162617]">{specimen.classification.class}</dd>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EDE1]">
                <dt className="text-[#8C8270] uppercase font-mono text-[11px]">Order</dt>
                <dd className="font-semibold text-[#162617]">{specimen.classification.order}</dd>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EDE1]">
                <dt className="text-[#8C8270] uppercase font-mono text-[11px]">Genus</dt>
                <dd className="font-semibold italic text-[#734528]">{specimen.classification.genus}</dd>
              </div>
              <div className="flex justify-between py-1">
                <dt className="text-[#8C8270] uppercase font-mono text-[11px]">Species</dt>
                <dd className="font-semibold italic text-[#734528]">{specimen.classification.species}</dd>
              </div>
            </dl>
          </div>

          {/* Quick Identification Callout */}
          <div className="bg-[#E5EDE1]/60 border border-[#C4D7BC] rounded-lg p-5">
            <h4 className="text-xs uppercase tracking-wider font-mono text-[#2C4B2C] font-semibold mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#385E38]" />
              <span>Laboratory Diagnostic Identification</span>
            </h4>
            <p className="text-xs font-serif text-[#203821] leading-relaxed">
              {specimen.identification}
            </p>
          </div>
        </div>
      </div>

      {/* Specimen Spotlight Card */}
      <SpecimenSpotlight
        specimen={specimen}
        onExploreAnatomy={handleScrollToAnatomy}
      />

      {/* Specimen Anatomical Flow (if present) */}
      {specimen.anatomicalFlow && (
        <div id="specimen-anatomy">
          <AnatomyDiagram
            title={specimen.anatomicalFlow.title}
            description={specimen.anatomicalFlow.description}
            stepsOrParts={specimen.anatomicalFlow.path.map((item, idx) => ({
              name: item,
              description: `Stage / Segment ${idx + 1} in the sequential pathway of ${specimen.commonName}.`
            }))}
          />
        </div>
      )}

      {/* Detailed Zoology Curatorial Essay Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12">
        {/* Main Details (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Habitat */}
          <section className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-[#734528]" />
              <h3 className="font-serif font-bold text-lg text-[#162617]">
                Natural Habitat & Environmental Niche
              </h3>
            </div>
            <p className="text-sm font-serif text-[#4A453E] leading-relaxed">
              {specimen.habitat}
            </p>
          </section>

          {/* External Morphology */}
          <section className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6">
            <h3 className="font-serif font-bold text-lg text-[#162617] mb-2">
              External Morphology & General Appearance
            </h3>
            <p className="text-sm font-serif text-[#4A453E] leading-relaxed">
              {specimen.morphology}
            </p>
          </section>

          {/* Internal Anatomy & Histology */}
          <section className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6">
            <h3 className="font-serif font-bold text-lg text-[#162617] mb-2">
              Internal Anatomy & Functional Histology
            </h3>
            <p className="text-sm font-serif text-[#4A453E] leading-relaxed">
              {specimen.anatomy}
            </p>
          </section>

          {/* Nutrition & Physiological Feeding */}
          <section className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6">
            <h3 className="font-serif font-bold text-lg text-[#162617] mb-2">
              Mode of Nutrition & Trophic Ecology
            </h3>
            <p className="text-sm font-serif text-[#4A453E] leading-relaxed">
              {specimen.nutrition}
            </p>
          </section>

          {/* Reproduction & Life Cycle */}
          <section className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6">
            <h3 className="font-serif font-bold text-lg text-[#162617] mb-2">
              Reproduction, Larval Development & Life History
            </h3>
            <p className="text-sm font-serif text-[#4A453E] leading-relaxed mb-3">
              {specimen.reproduction}
            </p>
            {specimen.lifeCycle && (
              <div className="bg-[#F4F1E8] border border-[#E6E1D1] rounded p-3 text-xs font-serif text-[#4A453E]">
                <strong className="block text-[#734528] mb-1 font-sans uppercase tracking-wider text-[10px]">
                  Life Cycle Succession:
                </strong>
                {specimen.lifeCycle}
              </div>
            )}
          </section>

          {/* Special Evolutionary Features */}
          <section className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6">
            <h3 className="font-serif font-bold text-lg text-[#162617] mb-2">
              Special Evolutionary Adaptations & Biomechanics
            </h3>
            <p className="text-sm font-serif text-[#4A453E] leading-relaxed">
              {specimen.specialFeatures}
            </p>
          </section>

          {/* Ecological / Medical Importance */}
          <section className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6">
            <h3 className="font-serif font-bold text-lg text-[#162617] mb-2">
              Ecological, Medical & Economic Significance
            </h3>
            <p className="text-sm font-serif text-[#4A453E] leading-relaxed">
              {specimen.importance}
            </p>
          </section>
        </div>

        {/* Sidebar: Exam Points & Interesting Facts (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Exam Points Card */}
          <div className="bg-[#FAF8F3] border-2 border-[#385E38]/30 rounded-lg p-6 paper-edge">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-[#385E38]" />
              <h3 className="font-serif font-bold text-base text-[#162617] uppercase tracking-wide">
                Undergraduate Exam Points
              </h3>
            </div>
            <p className="text-xs font-serif text-[#685F53] mb-4">
              High-yield spotter facts commonly asked in practical lab examinations and viva questions:
            </p>
            <ul className="space-y-2.5 text-xs font-serif text-[#4A453E]">
              {specimen.examPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#E5EDE1] text-[#2C4B2C] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interesting Facts Card */}
          <div className="bg-[#F8F5EE] border border-[#D8D1BD] rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#A44A32]" />
              <h3 className="font-serif font-bold text-base text-[#162617]">
                Curator's Field Notes & Trivia
              </h3>
            </div>
            <div className="space-y-3">
              {specimen.interestingFacts.map((fact, idx) => (
                <div key={idx} className="border-l-2 border-[#A44A32] pl-3 py-1 text-xs font-serif italic text-[#554E44] leading-relaxed">
                  "{fact}"
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Specimen Navigation Footer (Previous / Next Specimen) */}
      <div className="mt-16 pt-6 border-t border-[#D8D1BD] flex items-center justify-between">
        {prevSpecimen ? (
          <Link
            to={`/specimens/${prevSpecimen.id}`}
            className="flex items-center gap-2 text-xs font-serif font-medium text-[#4A453E] hover:text-[#2C4B2C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#734528]" />
            <div>
              <span className="text-[10px] uppercase font-mono block text-[#8C8270]">Previous Specimen</span>
              <span className="font-bold">{prevSpecimen.commonName}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextSpecimen && (
          <Link
            to={`/specimens/${nextSpecimen.id}`}
            className="flex items-center gap-2 text-xs font-serif font-medium text-[#4A453E] hover:text-[#2C4B2C] transition-colors ml-auto text-right"
          >
            <div>
              <span className="text-[10px] uppercase font-mono block text-[#8C8270]">Next Specimen</span>
              <span className="font-bold">{nextSpecimen.commonName}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#734528]" />
          </Link>
        )}
      </div>

      {/* Image Zoom Modal */}
      {zoomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="relative max-w-4xl w-full bg-[#FAF8F3] border border-[#C4BBA1] rounded-lg p-4 shadow-2xl">
            <button
              type="button"
              onClick={() => setZoomModalOpen(false)}
              className="absolute top-3 right-3 p-1.5 bg-[#23201D] text-white rounded-full hover:bg-[#385E38] transition-colors z-10"
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
