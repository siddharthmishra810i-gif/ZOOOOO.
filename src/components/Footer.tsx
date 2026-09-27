import React from 'react';
import { Link } from 'react-router-dom';
import { phylaData } from '../data/nonChordata';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EFECE3] border-t border-[#D8D1BD] mt-20 pt-14 pb-10 text-[#4A453E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-sm bg-[#385E38] text-[#F8F6F0] flex items-center justify-center font-serif font-bold text-sm">
                Ψ
              </div>
              <span className="font-display font-bold tracking-wider text-lg text-[#162617] uppercase">
                NON-CHORDATA
              </span>
            </div>
            <p className="font-serif italic text-sm text-[#734528] mb-3">
              An Interactive Zoology Field Guide & Natural History Atlas
            </p>
            <p className="text-xs font-serif text-[#685F53] leading-relaxed max-w-sm mb-4">
              Built as a comprehensive educational and laboratory resource for undergraduate students studying Non-Chordate invertebrate diversity, anatomy, and taxonomy.
            </p>
            <p className="text-[11px] font-mono text-[#8C8270]">
              Covers 5 Core Phyla · 22+ Laboratory Specimens · Exam Revisions
            </p>
          </div>

          {/* Phyla Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[#162617] font-bold mb-3">
              The Five Phyla
            </h4>
            <ul className="space-y-2 text-xs font-serif">
              {phylaData.map((phylum) => (
                <li key={phylum.id}>
                  <Link
                    to={`/phyla/${phylum.id}`}
                    className="hover:text-[#2C4B2C] transition-colors"
                  >
                    {phylum.name} ({phylum.commonName.split(' ')[0]})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Field Guide & Learning Tools (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[#162617] font-bold mb-3">
              Interactive Resources
            </h4>
            <ul className="space-y-2 text-xs font-serif">
              <li>
                <Link to="/explore" className="hover:text-[#2C4B2C] transition-colors">
                  Specimen Catalog & Search
                </Link>
              </li>
              <li>
                <Link to="/tree" className="hover:text-[#2C4B2C] transition-colors">
                  Interactive Taxonomic Tree (Cladogram)
                </Link>
              </li>
              <li>
                <Link to="/field-guide" className="hover:text-[#2C4B2C] transition-colors">
                  Naturalist's Field Guide Mode
                </Link>
              </li>
              <li>
                <Link to="/revision" className="hover:text-[#2C4B2C] transition-colors">
                  Exam Revision & Lab Spotters
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-[#2C4B2C] transition-colors">
                  Zoology Knowledge Assessment Quiz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Academic Submission Details */}
        <div className="mt-8 pt-6 border-t border-[#D8D1BD]/80">
          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded p-4 sm:p-5 max-w-xl mx-auto shadow-xs">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#734528] font-bold text-center mb-3">
              Submission Details
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif divide-y sm:divide-y-0 sm:divide-x divide-[#E6E1D1]">
              <div className="text-center sm:text-left sm:pr-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8270] block mb-1">
                  Submitted By:
                </span>
                <p className="font-bold text-sm text-[#162617]">Naziya Parween</p>
                <p className="text-[#4A453E]">B.Sc (Hons.) Zoology</p>
                <p className="font-mono text-[11px] text-[#685F53] mt-0.5">Roll no: 26/7102</p>
              </div>

              <div className="text-center sm:text-left sm:pl-4 pt-3 sm:pt-0 flex flex-col justify-start">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8270] block mb-1">
                  Submitted To:
                </span>
                <p className="font-bold text-sm text-[#162617]">Dr. Gauri Nandi</p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-[#D8D1BD] flex flex-col sm:flex-row items-center justify-between text-[11px] font-serif text-[#8C8270] gap-3">
          <p>© Natural History Field Guide Series · Curated for Academic Study</p>
          <div className="flex items-center gap-4">
            <span>Kingdom Animalia</span>
            <span>·</span>
            <span>Non-Chordata</span>
            <span>·</span>
            <span>Invertebrata</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
