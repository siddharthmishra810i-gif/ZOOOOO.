import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

export const zoologyGlossary: Record<string, string> = {
  Choanocytes: 'Specialized flagellated collar cells in sponges that generate continuous water flow and capture food particles via phagocytosis.',
  Cnidocytes: 'Specialized stinging cell organelles in Cnidaria that contain explosive venomous harpoons (nematocysts) for defense and prey capture.',
  Nematocysts: 'Pressurized capsule organelles inside cnidocytes that violently eject a coiled barbed thread loaded with toxins when triggered.',
  Colloblasts: 'Adhesive "lasso" cells unique to Ctenophora that secrete a sticky glue to entrap zooplankton prey without stinging.',
  Statocyst: 'Sensory equilibrium organ containing a dense calcareous statolith resting on sensory cilia to detect gravitational orientation.',
  'Flame Cells': 'Specialized ciliated bulb cells (protonephridia) in flatworms that flicker like flames to filter metabolic fluid and regulate osmotic balance.',
  Metagenesis: 'Alternation of generations between an asexual sessile polyp phase and a sexual motile medusa phase in cnidarian life cycles.',
  Strobilation: 'Asexual transverse segmentation in scyphistoma polyps of jellyfish (e.g. Aurelia) that stacks saucer-shaped juvenile ephyra larvae.',
  Pseudocoelom: 'A "false" fluid-filled body cavity derived from the blastocoel, lined externally by mesoderm and internally by endodermal gut.',
  Microtriches: 'Microscopic, finger-like hair projections on the tapeworm syncytial tegument that dramatically increase nutrient absorptive surface area.',
  Gemmules: 'Internal asexual survival buds produced by freshwater sponges (Spongilla) surrounded by spicule-reinforced armor to survive freezing winters.',
  Pinacoderm: 'The outermost cellular layer of sponges, composed of flattened pinacocyte cells and contractile porocytes.',
  Mesoglea: 'The gelatinous, non-cellular or sparsely cellular middle layer between epidermis and gastrodermis in cnidarians and ctenophores.',
  Parenchyma: 'Dense mesodermal packing tissue that fills the interior spaces of acoelomate flatworms between the body wall and gut.',
  Apolysis: 'The natural detachment of egg-filled gravid proglottids from the posterior end of a tapeworm strobila to be expelled in host feces.'
};

interface GlossaryTermProps {
  term: string;
  children?: React.ReactNode;
}

export const GlossaryTerm: React.FC<GlossaryTermProps> = ({ term, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const definition = zoologyGlossary[term] || 'Key anatomical term in invertebrate zoology.';

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="font-serif underline decoration-dotted decoration-[#734528]/60 underline-offset-4 text-[#162617] hover:text-[#734528] cursor-help inline-flex items-center gap-0.5"
      >
        <span>{children || term}</span>
      </button>

      {showTooltip && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-[#23201D] text-[#FAF8F3] text-xs font-serif rounded shadow-xl z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150 leading-relaxed text-left border border-[#D8D1BD]/20">
          <strong className="block text-[#E5EDE1] font-sans font-semibold mb-1 text-[11px] uppercase tracking-wide">
            {term}
          </strong>
          {definition}
        </span>
      )}
    </span>
  );
};
