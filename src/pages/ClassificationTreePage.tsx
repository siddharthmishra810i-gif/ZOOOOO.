import React, { useState } from 'react';
import { phylaData, specimensData } from '../data/nonChordata';
import { Link } from 'react-router-dom';
import { 
  GitBranch, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Sparkles,
  Info,
  Compass
} from 'lucide-react';
import { specimenImages } from '../data/images';
import { NaturalistImage } from '../components/NaturalistImage';

interface TreeNode {
  id: string;
  name: string;
  rank: 'kingdom' | 'subkingdom' | 'division' | 'grade' | 'phylum' | 'specimen';
  description: string;
  phylumId?: string;
  specimenId?: string;
  children?: TreeNode[];
}

export const ClassificationTreePage: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<{
    title: string;
    rank: string;
    description: string;
    link?: string;
    specimenId?: string;
  }>({
    title: 'Kingdom Animalia',
    rank: 'Kingdom',
    description: 'Multicellular, eukaryotic, heterotrophic organisms lacking cell walls, originating from colonial flagellate ancestors.',
  });

  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    animalia: true,
    parazoa: true,
    eumetazoa: true,
    radiata: true,
    bilateria: true,
    acoelomata: true,
    pseudocoelomata: true,
    porifera: true,
    cnidaria: true,
    ctenophora: true,
    platyhelminthes: true,
    nemathelminthes: true,
  });

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const treeHierarchy: TreeNode = {
    id: 'animalia',
    name: 'Kingdom Animalia (Metazoa)',
    rank: 'kingdom',
    description: 'Multicellular, heterotrophic metazoans exhibiting cellular differentiation and embryonic development.',
    children: [
      {
        id: 'parazoa',
        name: 'Subkingdom Parazoa (Cellular Grade)',
        rank: 'subkingdom',
        description: 'Multicellular animals without true tissues, distinct germ layers, or nervous system.',
        children: [
          {
            id: 'porifera',
            name: 'Phylum Porifera (Sponges)',
            rank: 'phylum',
            phylumId: 'porifera',
            description: 'Pore-bearing sedentary aquatic organisms possessing choanocytes, spicules, and an aquiferous canal system.',
            children: specimensData
              .filter((s) => s.phylumId === 'porifera')
              .map((s) => ({
                id: s.id,
                name: `${s.commonName} (${s.scientificName})`,
                rank: 'specimen' as const,
                specimenId: s.id,
                description: s.identification,
              })),
          },
        ],
      },
      {
        id: 'eumetazoa',
        name: 'Subkingdom Eumetazoa (True Tissues)',
        rank: 'subkingdom',
        description: 'Animals with differentiated tissues, nervous coordination, and embryonic germ layers.',
        children: [
          {
            id: 'radiata',
            name: 'Division Radiata (Diploblastic, Radial Symmetry)',
            rank: 'division',
            description: 'Eumetazoans with primary radial/biradial symmetry, two germ layers (ectoderm and endoderm), and diffuse nerve nets.',
            children: [
              {
                id: 'cnidaria',
                name: 'Phylum Cnidaria (Coelenterates)',
                rank: 'phylum',
                phylumId: 'cnidaria',
                description: 'Possess cnidocytes with stinging nematocysts and a gastrovascular cavity.',
                children: specimensData
                  .filter((s) => s.phylumId === 'cnidaria')
                  .map((s) => ({
                    id: s.id,
                    name: `${s.commonName} (${s.scientificName})`,
                    rank: 'specimen' as const,
                    specimenId: s.id,
                    description: s.identification,
                  })),
              },
              {
                id: 'ctenophora',
                name: 'Phylum Ctenophora (Comb Jellies)',
                rank: 'phylum',
                phylumId: 'ctenophora',
                description: 'Pelagic biradial jellies propelled by 8 rows of ciliated comb plates and armed with adhesive colloblasts.',
                children: specimensData
                  .filter((s) => s.phylumId === 'ctenophora')
                  .map((s) => ({
                    id: s.id,
                    name: `${s.commonName} (${s.scientificName})`,
                    rank: 'specimen' as const,
                    specimenId: s.id,
                    description: s.identification,
                  })),
              },
            ],
          },
          {
            id: 'bilateria',
            name: 'Division Bilateria (Triploblastic, Bilateral Symmetry)',
            rank: 'division',
            description: 'Animals with primary bilateral symmetry, cephalization, and three embryonic germ layers.',
            children: [
              {
                id: 'acoelomata',
                name: 'Grade Acoelomata (Solid Parenchyma, No Coelom)',
                rank: 'grade',
                description: 'Body cavity absent; space between gut and body wall filled with solid mesodermal parenchyma tissue.',
                children: [
                  {
                    id: 'platyhelminthes',
                    name: 'Phylum Platyhelminthes (Flatworms)',
                    rank: 'phylum',
                    phylumId: 'platyhelminthes',
                    description: 'Dorsoventrally flattened acoelomates with flame-cell protonephridia and incomplete gut.',
                    children: specimensData
                      .filter((s) => s.phylumId === 'platyhelminthes')
                      .map((s) => ({
                        id: s.id,
                        name: `${s.commonName} (${s.scientificName})`,
                        rank: 'specimen' as const,
                        specimenId: s.id,
                        description: s.identification,
                      })),
                  },
                ],
              },
              {
                id: 'pseudocoelomata',
                name: 'Grade Pseudocoelomata (False Body Cavity)',
                rank: 'grade',
                description: 'Possess a persistent blastocoelic cavity not lined by mesodermal peritoneum.',
                children: [
                  {
                    id: 'nemathelminthes',
                    name: 'Phylum Nemathelminthes (Roundworms)',
                    rank: 'phylum',
                    phylumId: 'nemathelminthes',
                    description: 'Cylindrical unsegmented worms with high-pressure pseudocoelom, collagenous cuticle, and complete gut.',
                    children: specimensData
                      .filter((s) => s.phylumId === 'nemathelminthes')
                      .map((s) => ({
                        id: s.id,
                        name: `${s.commonName} (${s.scientificName})`,
                        rank: 'specimen' as const,
                        specimenId: s.id,
                        description: s.identification,
                      })),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const handleNodeClick = (node: TreeNode) => {
    let link: string | undefined;
    if (node.specimenId) {
      link = `/specimens/${node.specimenId}`;
    } else if (node.phylumId) {
      link = `/phyla/${node.phylumId}`;
    }

    setSelectedNode({
      title: node.name,
      rank: node.rank.toUpperCase(),
      description: node.description,
      link,
      specimenId: node.specimenId,
    });
  };

  const renderTree = (node: TreeNode, depth: number = 0) => {
    const isExpanded = expandedNodes[node.id] !== false;
    const hasChildren = node.children && node.children.length > 0;
    const isSelected = selectedNode.title === node.name;

    return (
      <div key={node.id} className="relative">
        <div
          onClick={() => handleNodeClick(node)}
          className={`flex items-center gap-2 py-1.5 px-3 rounded cursor-pointer transition-colors text-xs font-serif ${
            isSelected
              ? 'bg-[#385E38] text-white font-semibold'
              : 'hover:bg-[#EFECE3] text-[#23201D]'
          }`}
          style={{ paddingLeft: `${depth * 1.2 + 0.75}rem` }}
        >
          {hasChildren ? (
            <button
              type="button"
              onClick={(e) => toggleExpand(node.id, e)}
              className="p-0.5 hover:bg-black/10 rounded cursor-pointer shrink-0"
            >
              {isExpanded ? (
                <ChevronDown className="w-3.5 h-3.5 text-[#734528]" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-[#734528]" />
              )}
            </button>
          ) : (
            <span className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#385E38]" />
            </span>
          )}

          <span className="font-mono text-[10px] uppercase opacity-75">
            [{node.rank}]
          </span>
          <span className="truncate">{node.name}</span>
        </div>

        {hasChildren && isExpanded && (
          <div className="border-l border-[#D8D1BD] ml-4">
            {node.children!.map((child) => renderTree(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const selectedSpecimen = selectedNode.specimenId
    ? specimensData.find((s) => s.id === selectedNode.specimenId)
    : null;

  return (
    <div className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#734528] font-mono mb-2">
          <span>Phylogenetic Hierarchy</span>
          <span aria-hidden="true">·</span>
          <span>Systematic Taxonomy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#162617] tracking-tight">
          Interactive Classification Tree
        </h1>
        <p className="mt-2 text-base text-[#5C5549] font-serif leading-relaxed">
          Navigate the evolutionary branching of Non-Chordata from Kingdom Animalia down to subkingdoms, symmetry divisions, coelom grades, phyla, and individual laboratory specimens.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Tree Viewer (7 cols) */}
        <div className="lg:col-span-7 bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-5 paper-edge">
          <div className="flex items-center justify-between border-b border-[#E6E1D1] pb-3 mb-4">
            <span className="text-xs uppercase tracking-wider font-mono text-[#734528] font-bold flex items-center gap-1.5">
              <GitBranch className="w-4 h-4 text-[#385E38]" />
              <span>Taxonomic Cladogram</span>
            </span>
            <span className="text-[11px] font-serif italic text-[#8C8270]">
              Click nodes to view descriptions
            </span>
          </div>

          <div className="max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
            {renderTree(treeHierarchy)}
          </div>
        </div>

        {/* Right: Selected Node Details Inspector (5 cols) */}
        <div className="lg:col-span-5 sticky top-24 bg-[#FAF8F3] border border-[#D8D1BD] rounded-lg p-6 paper-edge">
          <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#385E38] font-bold mb-1">
            <Info className="w-3.5 h-3.5" />
            <span>Taxon Inspector: {selectedNode.rank}</span>
          </div>

          <h3 className="font-serif font-bold text-2xl text-[#162617] mt-1 mb-3">
            {selectedNode.title}
          </h3>

          <p className="text-sm font-serif text-[#4A453E] leading-relaxed mb-6">
            {selectedNode.description}
          </p>

          {/* If a specimen is selected, show mini preview */}
          {selectedSpecimen && (
            <div className="bg-[#FFFFFF] border border-[#E0DBCB] rounded p-4 mb-6">
              <div className="h-36 rounded overflow-hidden bg-[#EAE5D9] mb-3">
                <NaturalistImage
                  src={specimenImages[selectedSpecimen.id]?.url || ''}
                  fallbackSrc={specimenImages[selectedSpecimen.id]?.fallbackPlate}
                  alt={selectedSpecimen.commonName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs font-serif">
                <span className="font-semibold text-[#162617] block">
                  {selectedSpecimen.commonName}
                </span>
                <span className="italic text-[#734528] block mb-2">
                  {selectedSpecimen.scientificName}
                </span>
                <p className="text-[#685F53] text-[11px] line-clamp-2">
                  {selectedSpecimen.shortDescription}
                </p>
              </div>
            </div>
          )}

          {selectedNode.link ? (
            <Link
              to={selectedNode.link}
              className="w-full py-2.5 px-4 bg-[#385E38] hover:bg-[#2C4B2C] text-white text-xs font-semibold rounded-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Explore Full {selectedNode.rank} View</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <div className="p-3 bg-[#F4F1E8] border border-[#E6E1D1] rounded text-[11px] font-serif text-[#685F53] text-center">
              Select a Phylum or Specimen node to open dedicated pages.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
