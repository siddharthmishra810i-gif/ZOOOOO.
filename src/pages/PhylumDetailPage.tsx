import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { phylaData, specimensData } from '../data/nonChordata';
import { phylumImages } from '../data/images';
import { SpecimenCard } from '../components/SpecimenCard';
import { AnatomyDiagram } from '../components/AnatomyDiagram';
import { NaturalistImage } from '../components/NaturalistImage';
import { ChevronRight, ArrowLeft, ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export const PhylumDetailPage: React.FC = () => {
  const { phylumId } = useParams<{ phylumId: string }>();
  const navigate = useNavigate();

  const phylumIndex = phylaData.findIndex((p) => p.id === phylumId);
  const phylum = phylaData[phylumIndex] || phylaData[0];

  const prevPhylum = phylumIndex > 0 ? phylaData[phylumIndex - 1] : null;
  const nextPhylum = phylumIndex < phylaData.length - 1 ? phylaData[phylumIndex + 1] : null;

  // Filter specimens for this phylum
  const phylumSpecimens = specimensData.filter((s) => s.phylumId === phylum.id);
  const imageMeta = phylumImages[phylum.id];

  return (
    <div className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs font-mono text-[#8C8270]">
        <Link to="/" className="hover:text-[#17281A] transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3 text-[#C4BBA1]" />
        <Link to="/#phyla" className="hover:text-[#17281A] transition-colors">
          Phyla
        </Link>
        <ChevronRight className="w-3 h-3 text-[#C4BBA1]" />
        <span className="text-[#385E38] font-bold">{phylum.name}</span>
      </nav>

      {/* Phylum Header & At-A-Glance Banner */}
      <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6 md:p-8 paper-edge mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#734528] font-mono mb-2">
              <span>Phylum {phylumIndex + 1} of 5</span>
              <span aria-hidden="true">·</span>
              <span>Kingdom Animalia</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#162617] tracking-tight">
              {phylum.name}
            </h1>
            
            <p className="text-sm font-serif italic text-[#734528] mt-1 mb-4 font-medium">
              {phylum.etymology} — {phylum.commonName}
            </p>

            <p className="text-base text-[#4A453E] font-serif leading-relaxed mb-6">
              {phylum.overview}
            </p>

            {/* Quick Revision Bullets */}
            <div className="bg-[#F4F1E8] border border-[#E6E1D1] rounded p-4">
              <h4 className="text-xs uppercase tracking-wider font-mono text-[#2C4B2C] font-semibold mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#385E38]" />
                <span>Salient Diagnostic Points</span>
              </h4>
              <ul className="space-y-1.5 text-xs font-serif text-[#554E44]">
                {phylum.revisionPoints.slice(0, 4).map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#385E38] font-bold">›</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* At-a-Glance Definition Card & Plate */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="h-56 rounded-lg overflow-hidden border border-[#D8D1BD] shadow-xs">
              <NaturalistImage
                src={imageMeta?.url || phylumImages.porifera.url}
                fallbackSrc={imageMeta?.fallbackPlate}
                alt={phylum.name}
                caption={imageMeta?.caption}
                showCaption
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#FFFFFF] border border-[#E0DBCB] rounded p-4 text-xs font-serif">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#734528] font-bold mb-3 border-b border-[#E6E1D1] pb-1.5">
                Phylum At A Glance
              </h4>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-[#4A453E]">
                <div>
                  <dt className="text-[#8C8270] text-[10px] uppercase font-mono">Kingdom</dt>
                  <dd className="font-semibold text-[#162617]">{phylum.atAGlance.kingdom}</dd>
                </div>
                <div>
                  <dt className="text-[#8C8270] text-[10px] uppercase font-mono">Organization</dt>
                  <dd className="font-semibold text-[#162617]">{phylum.atAGlance.organization}</dd>
                </div>
                <div>
                  <dt className="text-[#8C8270] text-[10px] uppercase font-mono">Symmetry</dt>
                  <dd className="font-semibold text-[#162617]">{phylum.atAGlance.symmetry}</dd>
                </div>
                <div>
                  <dt className="text-[#8C8270] text-[10px] uppercase font-mono">Germ Layers</dt>
                  <dd className="font-semibold text-[#162617]">{phylum.atAGlance.germLayers}</dd>
                </div>
                <div>
                  <dt className="text-[#8C8270] text-[10px] uppercase font-mono">Coelom</dt>
                  <dd className="font-semibold text-[#162617]">{phylum.atAGlance.coelom}</dd>
                </div>
                <div>
                  <dt className="text-[#8C8270] text-[10px] uppercase font-mono">Habitat</dt>
                  <dd className="font-semibold text-[#162617] truncate">{phylum.atAGlance.habitat}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Anatomy Diagram (if available for this phylum) */}
      {phylum.anatomicalDiagram && (
        <AnatomyDiagram
          title={phylum.anatomicalDiagram.title}
          description={phylum.anatomicalDiagram.description}
          stepsOrParts={phylum.anatomicalDiagram.stepsOrParts}
        />
      )}

      {/* 15 General Characteristics Breakdown Accordion / Grid */}
      <section className="my-12">
        <div className="max-w-2xl mb-6">
          <span className="text-xs uppercase tracking-widest text-[#734528] font-mono">
            Systematic Zoology
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#162617] mt-1">
            General Characteristics of {phylum.name}
          </h2>
          <p className="text-xs font-serif text-[#685F53] mt-1">
            Comprehensive morphological, physiological, and anatomical attributes for undergraduate examination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              1. Habitat & Distribution
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.bodyOrganization}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              2. Body Symmetry
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.symmetry}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              3. Level of Organization
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.levelOfOrganization}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              4. Germ Layers
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.germLayers}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              5. Coelom (Body Cavity)
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.coelom}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              6. Body Wall & Integument
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.bodyWall}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              7. Canal / Internal Cavity
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.canalOrCavity}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              8. Digestion & Nutrition
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.digestion}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              9. Respiration
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.respiration}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              10. Excretion & Osmoregulation
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.excretion}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              11. Nervous System & Sensory
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.nervousSystem}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              12. Reproduction & Larvae
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.reproduction}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              13. Skeletal Support
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.skeleton}
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4 md:col-span-2">
            <h4 className="font-serif font-bold text-[#2C4B2C] text-sm mb-1">
              14. Ecological & Economic Importance
            </h4>
            <p className="text-xs font-serif text-[#4A453E] leading-relaxed">
              {phylum.generalCharacteristics.ecologicalImportance}
            </p>
          </div>
        </div>
      </section>

      {/* Specimens of this Phylum */}
      <section className="my-12 pt-8 border-t border-[#D8D1BD]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#734528] font-mono">
              Specimen Cabinet
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#162617] mt-1">
              Representative Specimens of {phylum.name}
            </h2>
            <p className="text-xs font-serif text-[#685F53] mt-1">
              {phylumSpecimens.length} verified museum and laboratory specimens cataloged in this collection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {phylumSpecimens.map((specimen) => (
            <SpecimenCard key={specimen.id} specimen={specimen} />
          ))}
        </div>
      </section>

      {/* Phylum Navigation Footer (Prev / Next Phylum) */}
      <div className="mt-16 pt-6 border-t border-[#D8D1BD] flex items-center justify-between">
        {prevPhylum ? (
          <Link
            to={`/phyla/${prevPhylum.id}`}
            className="flex items-center gap-2 text-xs font-serif font-medium text-[#4A453E] hover:text-[#2C4B2C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#734528]" />
            <span>← Previous Phylum: {prevPhylum.name}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextPhylum && (
          <Link
            to={`/phyla/${nextPhylum.id}`}
            className="flex items-center gap-2 text-xs font-serif font-medium text-[#4A453E] hover:text-[#2C4B2C] transition-colors ml-auto"
          >
            <span>Next Phylum: {nextPhylum.name} →</span>
            <ArrowRight className="w-4 h-4 text-[#734528]" />
          </Link>
        )}
      </div>
    </div>
  );
};
