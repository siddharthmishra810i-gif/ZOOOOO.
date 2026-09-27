import React, { useState } from 'react';
import { phylaData, specimensData, comparativeZoologyData } from '../data/nonChordata';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  CheckCircle2, 
  Table, 
  HelpCircle, 
  Printer, 
  ArrowRight,
  Eye,
  Award
} from 'lucide-react';

export const RevisionPage: React.FC = () => {
  const [selectedPhylum, setSelectedPhylum] = useState<string>('all');

  const handlePrint = () => {
    window.print();
  };

  const spottersList = specimensData.map((s) => ({
    id: s.id,
    commonName: s.commonName,
    scientificName: s.scientificName,
    phylumId: s.phylumId,
    spotterKey: s.examPoints[0] || s.identification,
    class: s.classification.class,
  }));

  return (
    <div className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#D8D1BD] pb-6 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#734528] font-mono mb-2">
            <span>High-Yield Summary</span>
            <span aria-hidden="true">·</span>
            <span>Undergraduate Zoology Revision</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#162617] tracking-tight">
            Exam Revision & Practical Spotters
          </h1>
          <p className="mt-2 text-sm text-[#5C5549] font-serif leading-relaxed max-w-2xl">
            Condensed syllabus cheat-sheets, comparative invertebrate taxonomy tables, and diagnostic spotter keys essential for university practical and theoretical examinations.
          </p>
        </div>

        <button
          type="button"
          onClick={handlePrint}
          className="px-4 py-2 bg-[#FAF8F3] hover:bg-[#EFECE3] border border-[#C4BBA1] text-[#23201D] text-xs font-semibold rounded-sm transition-colors flex items-center gap-2 self-start sm:self-end cursor-pointer shadow-xs"
        >
          <Printer className="w-3.5 h-3.5 text-[#734528]" />
          <span>Print Revision Sheet</span>
        </button>
      </div>

      {/* Comparative Zoology Table */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-wider text-[#385E38] font-bold block">
              Table 1.0
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#162617]">
              Comparative Invertebrate Zoology Matrix
            </h2>
          </div>
        </div>

        <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg overflow-x-auto paper-edge shadow-xs">
          <table className="w-full text-left border-collapse text-xs font-serif min-w-[700px]">
            <thead>
              <tr className="bg-[#F4F1E8] border-b border-[#D8D1BD] text-[#734528] font-mono uppercase text-[11px]">
                <th className="py-3 px-4 font-semibold">Diagnostic Feature</th>
                <th className="py-3 px-4 font-semibold">1. Porifera</th>
                <th className="py-3 px-4 font-semibold">2. Cnidaria</th>
                <th className="py-3 px-4 font-semibold">3. Ctenophora</th>
                <th className="py-3 px-4 font-semibold">4. Platyhelminthes</th>
                <th className="py-3 px-4 font-semibold">5. Nemathelminthes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E6E1D1] text-[#332F2A]">
              {comparativeZoologyData.map((row, i) => (
                <tr key={i} className="hover:bg-[#F9F7F2] transition-colors">
                  <td className="py-3 px-4 font-sans font-semibold text-[#162617] bg-[#FAF8F3]/60">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4">{row.porifera}</td>
                  <td className="py-3 px-4">{row.cnidaria}</td>
                  <td className="py-3 px-4">{row.ctenophora}</td>
                  <td className="py-3 px-4">{row.platyhelminthes}</td>
                  <td className="py-3 px-4">{row.nemathelminthes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5 Phyla Quick Revision Sheets */}
      <section className="mb-12">
        <div className="mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-[#734528] font-bold block">
            Phylum Summaries
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#162617]">
            Concise Phylum Revision Cards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phylaData.map((p, idx) => (
            <div key={p.id} className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-5 paper-edge flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#E6E1D1] pb-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#385E38] font-bold">
                    0{idx + 1} · {p.name.toUpperCase()}
                  </span>
                  <span className="text-[11px] font-serif italic text-[#734528]">
                    {p.commonName}
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs font-serif text-[#4A453E] mb-4">
                  {p.revisionPoints.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-2">
                      <span className="text-[#385E38] font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#E6E1D1] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8C8270]">
                  Examples: {p.atAGlance.examples.join(', ')}
                </span>
                <Link
                  to={`/phyla/${p.id}`}
                  className="text-xs font-serif font-semibold text-[#2C4B2C] hover:underline"
                >
                  View Phylum →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Laboratory Practical Spotters Checklist */}
      <section className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6 sm:p-8 paper-edge">
        <div className="flex items-center gap-2 mb-2">
          <Eye className="w-5 h-5 text-[#385E38]" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#162617]">
            Important Lab Spotters to Remember
          </h2>
        </div>
        <p className="text-xs font-serif text-[#685F53] mb-6">
          Key diagnostic laboratory features required for identifying microscope slides, preserved jar specimens, and dry mounts during practical zoology exams:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {spottersList.map((spotter) => (
            <div key={spotter.id} className="bg-[#FFFFFF] border border-[#E0DBCB] rounded p-4 text-xs font-serif">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-[#162617] text-sm">
                  {spotter.commonName}
                </span>
                <span className="text-[10px] font-mono text-[#385E38] uppercase">
                  {spotter.phylumId}
                </span>
              </div>
              <p className="italic text-[#734528] mb-2 font-mono text-[11px]">
                {spotter.scientificName} ({spotter.class})
              </p>
              <div className="border-t border-[#F0EDE1] pt-2 text-[#4A453E]">
                <strong className="text-[10px] uppercase font-sans text-[#8C8270] block">
                  Diagnostic Spotter Key:
                </strong>
                <p className="mt-0.5 leading-relaxed">{spotter.spotterKey}</p>
              </div>
              <div className="mt-3 text-right">
                <Link
                  to={`/specimens/${spotter.id}`}
                  className="text-[11px] font-semibold text-[#2C4B2C] hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
