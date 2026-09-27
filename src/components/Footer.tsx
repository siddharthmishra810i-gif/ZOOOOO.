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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D8D1BD] flex flex-col sm:flex-row items-center justify-between text-[11px] font-serif text-[#8C8270] gap-3">
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
