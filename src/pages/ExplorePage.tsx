import React, { useState } from 'react';
import { specimensData, phylaData, quickZoologyFacts } from '../data/nonChordata';
import { PhylumId, Specimen } from '../types/zoology';
import { SpecimenCard } from '../components/SpecimenCard';
import { specimenImages } from '../data/images';
import { NaturalistImage } from '../components/NaturalistImage';
import { 
  Search, 
  Filter, 
  Sparkles, 
  Columns, 
  ArrowRight, 
  Check, 
  RotateCcw,
  Compass,
  MapPin,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExplorePage: React.FC = () => {
  const [selectedPhylum, setSelectedPhylum] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'catalog' | 'compare'>('catalog');

  // Specimen of the Day (seeded on date or first item)
  const dayIndex = new Date().getDate() % specimensData.length;
  const specimenOfTheDay = specimensData[dayIndex];

  // Compare mode state
  const [compareIdA, setCompareIdA] = useState<string>('sycon');
  const [compareIdB, setCompareIdB] = useState<string>('fasciola');

  const specimenA = specimensData.find((s) => s.id === compareIdA) || specimensData[0];
  const specimenB = specimensData.find((s) => s.id === compareIdB) || specimensData[1];

  // Quick facts index
  const [factIndex, setFactIndex] = useState(0);
  const currentFact = quickZoologyFacts[factIndex];

  const handleNextFact = () => {
    setFactIndex((prev) => (prev + 1) % quickZoologyFacts.length);
  };

  // Filtered specimens
  const filteredSpecimens = specimensData.filter((specimen) => {
    const matchesPhylum = selectedPhylum === 'all' || specimen.phylumId === selectedPhylum;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      specimen.commonName.toLowerCase().includes(query) ||
      specimen.scientificName.toLowerCase().includes(query) ||
      specimen.phylumId.toLowerCase().includes(query) ||
      specimen.habitat.toLowerCase().includes(query) ||
      specimen.identification.toLowerCase().includes(query) ||
      specimen.specialFeatures.toLowerCase().includes(query);

    return matchesPhylum && matchesSearch;
  });

  return (
    <div className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#734528] font-mono mb-2">
          <span>Zoological Repository</span>
          <span aria-hidden="true">·</span>
          <span>Explore Non-Chordata</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#162617] tracking-tight">
          Explore the Living World
        </h1>
        <p className="mt-2 text-base text-[#5C5549] font-serif leading-relaxed">
          Search the complete catalog of 22+ invertebrate specimens, filter by taxonomic phylum, read natural history field trivia, or compare two specimens side-by-side.
        </p>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex items-center gap-2 border-b border-[#D8D1BD] mb-8 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('catalog')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'catalog'
              ? 'bg-[#385E38] text-white shadow-xs'
              : 'bg-[#FAF8F3] text-[#4A453E] hover:bg-[#EFECE3] border border-[#D8D1BD]'
          }`}
        >
          <Filter className="w-3.5 h-3.5" />
          <span>Specimen Catalog & Search ({filteredSpecimens.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('compare')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'compare'
              ? 'bg-[#385E38] text-white shadow-xs'
              : 'bg-[#FAF8F3] text-[#4A453E] hover:bg-[#EFECE3] border border-[#D8D1BD]'
          }`}
        >
          <Columns className="w-3.5 h-3.5" />
          <span>Comparative Anatomy Tool</span>
        </button>
      </div>

      {activeTab === 'catalog' ? (
        <>
          {/* Top Banner: Specimen of the Day + Quick Facts */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            {/* Specimen of the Day */}
            <div className="lg:col-span-7 bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-5 paper-edge flex flex-col sm:flex-row gap-5 items-center">
              <div className="w-full sm:w-44 h-36 rounded overflow-hidden shrink-0 border border-[#D8D1BD] bg-[#EAE5D9]">
                <NaturalistImage
                  src={specimenImages[specimenOfTheDay.id]?.url || ''}
                  fallbackSrc={specimenImages[specimenOfTheDay.id]?.fallbackPlate}
                  alt={specimenOfTheDay.commonName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A44A32] font-bold block mb-1">
                  Specimen of the Day
                </span>
                <h3 className="font-serif font-bold text-xl text-[#162617]">
                  {specimenOfTheDay.commonName}
                </h3>
                <p className="text-xs font-serif italic text-[#734528] mb-2">
                  {specimenOfTheDay.scientificName} · Phylum {specimenOfTheDay.phylumId.toUpperCase()}
                </p>
                <p className="text-xs text-[#554E44] font-serif line-clamp-2 mb-3">
                  {specimenOfTheDay.shortDescription}
                </p>
                <Link
                  to={`/specimens/${specimenOfTheDay.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2C4B2C] hover:text-[#162617]"
                >
                  <span>Explore Specimen</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Quick Facts Carousel Drawer */}
            <div className="lg:col-span-5 bg-[#F8F5EE] border border-[#D8D1BD] rounded-lg p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono text-[#734528] font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-[#A44A32]" />
                    <span>Did You Know?</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8C8270]">
                    {factIndex + 1}/{quickZoologyFacts.length}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-serif italic text-[#4A453E] leading-relaxed my-2">
                  "{currentFact.fact}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#E6E1D1] flex items-center justify-between">
                {currentFact.specimenId && (
                  <Link
                    to={`/specimens/${currentFact.specimenId}`}
                    className="text-[11px] font-serif font-semibold text-[#2C4B2C] hover:underline"
                  >
                    View related specimen →
                  </Link>
                )}
                <button
                  type="button"
                  onClick={handleNextFact}
                  className="px-2.5 py-1 text-[11px] font-medium bg-[#EFECE3] hover:bg-[#E5E1D3] rounded border border-[#D8D1BD] text-[#4A453E] transition-colors ml-auto cursor-pointer"
                >
                  Next Fact
                </button>
              </div>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-4 sm:p-5 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#734528] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by specimen, scientific name, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#D8D1BD] rounded-sm pl-9 pr-4 py-2 text-xs font-serif text-[#23201D] placeholder-[#8C8270] focus:outline-hidden focus:border-[#385E38]"
                />
              </div>

              {/* Phylum Filter Segments */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
                <button
                  type="button"
                  onClick={() => setSelectedPhylum('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap transition-colors cursor-pointer ${
                    selectedPhylum === 'all'
                      ? 'bg-[#385E38] text-white shadow-xs'
                      : 'bg-[#EFECE3] text-[#4A453E] hover:bg-[#EAE5D9] border border-[#D8D1BD]'
                  }`}
                >
                  All Phyla
                </button>

                {phylaData.map((phylum) => (
                  <button
                    key={phylum.id}
                    type="button"
                    onClick={() => setSelectedPhylum(phylum.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap transition-colors cursor-pointer ${
                      selectedPhylum === phylum.id
                        ? 'bg-[#385E38] text-white shadow-xs'
                        : 'bg-[#EFECE3] text-[#4A453E] hover:bg-[#EAE5D9] border border-[#D8D1BD]'
                    }`}
                  >
                    {phylum.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Grid */}
          {filteredSpecimens.length === 0 ? (
            <div className="p-12 text-center bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg">
              <p className="font-serif text-lg text-[#685F53] italic">
                No specimens found matching your criteria.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedPhylum('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-serif text-[#385E38] underline font-semibold cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSpecimens.map((specimen) => (
                <SpecimenCard
                  key={specimen.id}
                  specimen={specimen}
                  showPhylumBadge={selectedPhylum === 'all'}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        /* ================= COMPARE TOOL ================= */
        <div className="space-y-8">
          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6 paper-edge">
            <h2 className="text-xl font-serif font-bold text-[#162617] mb-2">
              Side-by-Side Morphological Comparison
            </h2>
            <p className="text-xs font-serif text-[#685F53] mb-6">
              Select any two specimens to contrast their taxonomic hierarchy, body symmetry, level of organization, nutrition, and evolutionary adaptations.
            </p>

            {/* Specimen Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-[#E6E1D1]">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#734528] font-bold mb-1.5">
                  Select Specimen A:
                </label>
                <select
                  value={compareIdA}
                  onChange={(e) => setCompareIdA(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#D8D1BD] rounded p-2 text-xs font-serif text-[#23201D] focus:outline-hidden"
                >
                  {specimensData.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.commonName} ({s.scientificName}) — {s.phylumId.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#734528] font-bold mb-1.5">
                  Select Specimen B:
                </label>
                <select
                  value={compareIdB}
                  onChange={(e) => setCompareIdB(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#D8D1BD] rounded p-2 text-xs font-serif text-[#23201D] focus:outline-hidden"
                >
                  {specimensData.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.commonName} ({s.scientificName}) — {s.phylumId.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Comparison Visual Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Card A */}
              <div className="bg-[#FFFFFF] border border-[#E0DBCB] rounded-lg p-5">
                <div className="h-44 rounded overflow-hidden bg-[#EAE5D9] mb-4">
                  <NaturalistImage
                    src={specimenImages[specimenA.id]?.url || ''}
                    fallbackSrc={specimenImages[specimenA.id]?.fallbackPlate}
                    alt={specimenA.commonName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#385E38] font-semibold">
                  Phylum {specimenA.phylumId.toUpperCase()}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#162617]">
                  {specimenA.commonName}
                </h3>
                <p className="text-xs font-serif italic text-[#734528] mb-4">
                  {specimenA.scientificName}
                </p>
                <Link
                  to={`/specimens/${specimenA.id}`}
                  className="inline-flex items-center gap-1 text-xs font-serif font-medium text-[#2C4B2C] hover:underline"
                >
                  <span>Open Full Dossier</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Card B */}
              <div className="bg-[#FFFFFF] border border-[#E0DBCB] rounded-lg p-5">
                <div className="h-44 rounded overflow-hidden bg-[#EAE5D9] mb-4">
                  <NaturalistImage
                    src={specimenImages[specimenB.id]?.url || ''}
                    fallbackSrc={specimenImages[specimenB.id]?.fallbackPlate}
                    alt={specimenB.commonName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#385E38] font-semibold">
                  Phylum {specimenB.phylumId.toUpperCase()}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#162617]">
                  {specimenB.commonName}
                </h3>
                <p className="text-xs font-serif italic text-[#734528] mb-4">
                  {specimenB.scientificName}
                </p>
                <Link
                  to={`/specimens/${specimenB.id}`}
                  className="inline-flex items-center gap-1 text-xs font-serif font-medium text-[#2C4B2C] hover:underline"
                >
                  <span>Open Full Dossier</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Systematic Comparison Table */}
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-serif">
                <thead>
                  <tr className="border-b border-[#D8D1BD] bg-[#F4F1E8]">
                    <th className="py-2.5 px-4 font-mono uppercase text-[10px] text-[#734528]">Zoological Feature</th>
                    <th className="py-2.5 px-4 font-bold text-[#162617]">{specimenA.commonName}</th>
                    <th className="py-2.5 px-4 font-bold text-[#162617]">{specimenB.commonName}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E1D1]">
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#8C8270] font-mono text-[11px]">Phylum</td>
                    <td className="py-2.5 px-4 font-semibold text-[#2C4B2C] capitalize">{specimenA.phylumId}</td>
                    <td className="py-2.5 px-4 font-semibold text-[#2C4B2C] capitalize">{specimenB.phylumId}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#8C8270] font-mono text-[11px]">Class</td>
                    <td className="py-2.5 px-4 text-[#23201D]">{specimenA.classification.class}</td>
                    <td className="py-2.5 px-4 text-[#23201D]">{specimenB.classification.class}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#8C8270] font-mono text-[11px]">Habitat</td>
                    <td className="py-2.5 px-4 text-[#4A453E]">{specimenA.habitat}</td>
                    <td className="py-2.5 px-4 text-[#4A453E]">{specimenB.habitat}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#8C8270] font-mono text-[11px]">Diagnostic Feature</td>
                    <td className="py-2.5 px-4 text-[#4A453E]">{specimenA.identification}</td>
                    <td className="py-2.5 px-4 text-[#4A453E]">{specimenB.identification}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#8C8270] font-mono text-[11px]">Nutrition</td>
                    <td className="py-2.5 px-4 text-[#4A453E]">{specimenA.nutrition}</td>
                    <td className="py-2.5 px-4 text-[#4A453E]">{specimenB.nutrition}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#8C8270] font-mono text-[11px]">Reproduction</td>
                    <td className="py-2.5 px-4 text-[#4A453E]">{specimenA.reproduction}</td>
                    <td className="py-2.5 px-4 text-[#4A453E]">{specimenB.reproduction}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#8C8270] font-mono text-[11px]">Special Features</td>
                    <td className="py-2.5 px-4 text-[#4A453E]">{specimenA.specialFeatures}</td>
                    <td className="py-2.5 px-4 text-[#4A453E]">{specimenB.specialFeatures}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
