import React, { useState } from 'react';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';

interface DiagramPart {
  name: string;
  description: string;
}

interface AnatomyDiagramProps {
  title: string;
  description: string;
  stepsOrParts: DiagramPart[];
}

export const AnatomyDiagram: React.FC<AnatomyDiagramProps> = ({
  title,
  description,
  stepsOrParts,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectedPart = stepsOrParts[selectedIndex] || stepsOrParts[0];

  return (
    <div className="bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-5 md:p-6 my-6 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-[#E6E1D1] gap-2">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#734528] font-semibold">
            Interactive Zoology Diagram
          </span>
          <h4 className="text-lg md:text-xl font-serif font-bold text-[#23201D] mt-0.5">
            {title}
          </h4>
        </div>
        <p className="text-xs font-serif italic text-[#685F53] max-w-md">
          {description}
        </p>
      </div>

      {/* Pathway Navigation Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-thin">
        {stepsOrParts.map((step, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <React.Fragment key={idx}>
              <button
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`px-3 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#385E38] text-white shadow-xs'
                    : 'bg-[#EFECE3] text-[#4A453E] hover:bg-[#EAE5D9] border border-[#D8D1BD]'
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">{idx + 1}.</span>
                <span>{step.name}</span>
              </button>
              {idx < stepsOrParts.length - 1 && (
                <ArrowRight className="w-3 h-3 text-[#A99E81] shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Selected Step Explanation Card */}
      <div className="bg-[#FFFFFF] border border-[#E0DBCB] rounded p-4 flex items-start gap-3.5">
        <div className="p-2 bg-[#E5EDE1] text-[#2C4B2C] rounded-sm shrink-0 mt-0.5">
          <Info className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-[#385E38]">
              Step {selectedIndex + 1} of {stepsOrParts.length}
            </span>
            <span className="text-xs text-[#8C8270]">·</span>
            <h5 className="font-serif font-semibold text-[#23201D] text-base">
              {selectedPart.name}
            </h5>
          </div>
          <p className="text-sm text-[#4A453E] font-serif leading-relaxed mt-1">
            {selectedPart.description}
          </p>
        </div>
      </div>
    </div>
  );
};
