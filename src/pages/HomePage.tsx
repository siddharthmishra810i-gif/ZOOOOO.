import React from 'react';
import { Hero } from '../components/Hero';
import { PhylumGrid } from '../components/PhylumGrid';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  GitBranch, 
  Award, 
  ArrowRight, 
  Sparkles,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { specimensData, quickZoologyFacts } from '../data/nonChordata';
import { SpecimenCard } from '../components/SpecimenCard';

export const HomePage: React.FC = () => {
  // Highlight 4 representative specimens
  const featuredSpecimens = specimensData.filter((s) =>
    ['sycon', 'aurelia', 'beroe', 'fasciola'].includes(s.id)
  );

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Five Phyla Section */}
      <PhylumGrid />

      {/* 3. Featured Museum Specimens Showcase */}
      <section className="py-16 bg-[#F4F1E8] border-y border-[#D8D1BD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#734528] font-mono mb-2">
                <span>Representative Taxa</span>
                <span aria-hidden="true">·</span>
                <span>Cabinet Highlights</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#162617] tracking-tight">
                Featured Zoology Specimens
              </h2>
              <p className="mt-2 text-sm text-[#5C5549] font-serif max-w-xl">
                A curated selection of primary non-chordate specimens studied in undergraduate zoology laboratory courses.
              </p>
            </div>

            <Link
              to="/explore"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#2C4B2C] hover:text-[#162617] transition-colors self-start sm:self-end"
            >
              <span>View All 22+ Specimens</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSpecimens.map((specimen) => (
              <SpecimenCard key={specimen.id} specimen={specimen} showPhylumBadge />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Three Study Modes Callout Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#734528] font-mono">
            Interactive Learning Modes
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#162617] mt-1">
            Engineered for Academic Mastery
          </h2>
          <p className="mt-2 text-sm text-[#5C5549] font-serif leading-relaxed">
            Transition between tactile naturalist field journals, evolutionary cladograms, and rigorous university examination quizzes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Field Guide */}
          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6 paper-edge flex flex-col justify-between hover:border-[#385E38] transition-colors group">
            <div>
              <div className="w-10 h-10 rounded bg-[#E5EDE1] text-[#2C4B2C] flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#734528] font-bold block mb-1">
                Visual Folio
              </span>
              <h3 className="font-serif font-bold text-xl text-[#162617] group-hover:text-[#2C4B2C] transition-colors mb-2">
                Field Guide Journal
              </h3>
              <p className="text-xs font-serif text-[#554E44] leading-relaxed mb-4">
                Browse through specimen plates formatted like the handwritten field journals of 19th-century naturalists, complete with morphology notes and habitat stamps.
              </p>
            </div>
            <Link
              to="/field-guide"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C4B2C] group-hover:text-[#162617] pt-3 border-t border-[#E6E1D1]"
            >
              <span>Open Field Journal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Cladogram Tree */}
          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6 paper-edge flex flex-col justify-between hover:border-[#385E38] transition-colors group">
            <div>
              <div className="w-10 h-10 rounded bg-[#E5EDE1] text-[#2C4B2C] flex items-center justify-center mb-4">
                <GitBranch className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#734528] font-bold block mb-1">
                Taxonomic Mapping
              </span>
              <h3 className="font-serif font-bold text-xl text-[#162617] group-hover:text-[#2C4B2C] transition-colors mb-2">
                Taxonomic Tree
              </h3>
              <p className="text-xs font-serif text-[#554E44] leading-relaxed mb-4">
                Explore phylogenetic branching from Parazoa to Bilateria. Inspect grades of organization, germ layers, and coelom formation in a structured cladogram.
              </p>
            </div>
            <Link
              to="/tree"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C4B2C] group-hover:text-[#162617] pt-3 border-t border-[#E6E1D1]"
            >
              <span>Explore Taxonomy Tree</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3: Quiz & Revision */}
          <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6 paper-edge flex flex-col justify-between hover:border-[#385E38] transition-colors group">
            <div>
              <div className="w-10 h-10 rounded bg-[#E5EDE1] text-[#2C4B2C] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#734528] font-bold block mb-1">
                Assessment
              </span>
              <h3 className="font-serif font-bold text-xl text-[#162617] group-hover:text-[#2C4B2C] transition-colors mb-2">
                Quiz & Exam Revision
              </h3>
              <p className="text-xs font-serif text-[#554E44] leading-relaxed mb-4">
                Test your identification skills on practical laboratory spotters and revise high-yield syllabus points before your college semester examinations.
              </p>
            </div>
            <Link
              to="/quiz"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C4B2C] group-hover:text-[#162617] pt-3 border-t border-[#E6E1D1]"
            >
              <span>Start Zoology Quiz</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
