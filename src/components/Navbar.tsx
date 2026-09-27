import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, BookOpen, Sparkles } from 'lucide-react';
import { specimensData, phylaData } from '../data/nonChordata';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === '/' || (e.key === 'k' && (e.ctrlKey || e.metaKey))) && !['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Filter specimens and phyla based on searchQuery
  const searchResults = searchQuery.trim() === '' ? [] : [
    ...phylaData
      .filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(p => ({
        type: 'phylum' as const,
        id: p.id,
        title: p.name,
        subtitle: p.commonName,
        meta: 'Phylum Overview',
        link: `/phyla/${p.id}`
      })),
    ...specimensData
      .filter(s => 
        s.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.phylumId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.specialFeatures.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(s => ({
        type: 'specimen' as const,
        id: s.id,
        title: s.commonName,
        subtitle: s.scientificName,
        meta: `Phylum ${s.phylumId.charAt(0).toUpperCase() + s.phylumId.slice(1)}`,
        link: `/specimens/${s.id}`
      }))
  ];

  const handleSelectResult = (link: string) => {
    setSearchOpen(false);
    setSearchQuery('');
    navigate(link);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Phyla', path: '/#phyla' },
    { label: 'Specimens', path: '/explore' },
    { label: 'Taxonomic Tree', path: '/tree' },
    { label: 'Field Guide', path: '/field-guide' },
    { label: 'Revision', path: '/revision' },
    { label: 'Quiz', path: '/quiz' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F6F0]/95 backdrop-blur-md border-b border-[#D8D1BD] shadow-xs py-3'
            : 'bg-[#F8F6F0] border-b border-[#E6E1D1] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element Brand Wordmark */}
            <Link
              to="/"
              className="group flex items-center gap-2.5 text-[#17281A] hover:text-[#2C4B2C] transition-colors"
            >
              <div className="w-8 h-8 rounded-sm bg-[#385E38] text-[#F8F6F0] flex items-center justify-center font-serif font-bold text-lg shadow-xs group-hover:bg-[#2C4B2C] transition-colors">
                Ψ
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-wider text-base sm:text-lg text-[#162617] uppercase">
                  NON-CHORDATA
                </span>
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#734528] -mt-1 hidden sm:block">
                  Zoological Field Atlas
                </span>
              </div>
            </Link>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#4A453E]">
              {navLinks.map((item) => {
                const isActive = item.path === '/' 
                  ? location.pathname === '/' && !location.hash
                  : location.pathname === item.path || (item.path.startsWith('/#') && location.hash === item.path.substring(1));

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`transition-colors py-1 relative hover:text-[#17281A] ${
                      isActive
                        ? 'text-[#2C4B2C] font-semibold border-b-2 border-[#385E38]'
                        : 'text-[#5C5549]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action: Search & Mobile Trigger */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#EFECE3] border border-[#D8D1BD] text-xs text-[#5C5549] hover:bg-[#E5E1D3] hover:text-[#17281A] transition-colors cursor-pointer"
                title="Search specimens or phyla (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#734528]" />
                <span className="hidden sm:inline">Search specimen...</span>
                <kbd className="hidden sm:inline-block font-mono text-[10px] bg-white border border-[#D8D1BD] px-1 rounded text-[#8C8270]">
                  /
                </kbd>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-sm text-[#4A453E] hover:text-[#17281A] hover:bg-[#EFECE3]"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F3] border-b border-[#D8D1BD] px-4 pt-3 pb-5 mt-2 space-y-1 shadow-lg">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#4A453E] hover:bg-[#EFECE3] hover:text-[#17281A] rounded"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Search Modal Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-xs">
          <div className="relative w-full max-w-xl bg-[#FAF8F3] border border-[#C4BBA1] rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center px-4 py-3 border-b border-[#E6E1D1] bg-[#F4F1E8]">
              <Search className="w-5 h-5 text-[#734528] mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Search by specimen (e.g., Sycon, Physalia), phylum, or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-[#23201D] placeholder-[#8C8270] focus:outline-hidden font-serif"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-[#8C8270] hover:text-[#23201D] text-xs font-mono px-1.5 py-0.5 border border-[#D8D1BD] rounded bg-white"
              >
                ESC
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-2">
              {searchQuery.trim() === '' ? (
                <div className="p-6 text-center text-[#685F53]">
                  <p className="text-xs uppercase tracking-wider text-[#8C8270] mb-2 font-mono">
                    Instant Zoological Search
                  </p>
                  <p className="font-serif italic text-sm">
                    Search across 5 phyla and 22+ specimens by common name, scientific name, anatomy, or habitat.
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-1.5 text-xs text-[#385E38]">
                    {['Sycon', 'Aurelia', 'Physalia', 'Beroe', 'Fasciola', 'Taenia', 'Ascaris'].map((name) => (
                      <button
                        key={name}
                        onClick={() => setSearchQuery(name)}
                        className="px-2 py-0.5 bg-[#EAE5D9] hover:bg-[#DCD5C3] rounded text-[#4A453E] cursor-pointer"
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center text-[#685F53] font-serif">
                  No specimen or phylum found matching "{searchQuery}".
                </div>
              ) : (
                <div className="space-y-1">
                  {searchResults.map((item) => (
                    <button
                      key={item.id + item.type}
                      type="button"
                      onClick={() => handleSelectResult(item.link)}
                      className="w-full text-left px-3 py-2.5 rounded hover:bg-[#EFECE3] transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-semibold text-sm text-[#23201D] group-hover:text-[#2C4B2C]">
                            {item.title}
                          </span>
                          <span className="text-xs font-serif italic text-[#734528]">
                            {item.subtitle}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#8C8270] block">
                          {item.meta}
                        </span>
                      </div>
                      <span className="text-xs text-[#385E38] opacity-0 group-hover:opacity-100 transition-opacity font-serif">
                        Open →
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2 bg-[#EFECE3] border-t border-[#E6E1D1] text-[11px] text-[#8C8270] flex justify-between">
              <span>{searchResults.length} results</span>
              <span>Use arrow keys or click to view</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
