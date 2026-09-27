export type PhylumId = 
  | 'porifera' 
  | 'cnidaria' 
  | 'ctenophora' 
  | 'platyhelminthes' 
  | 'nemathelminthes';

export interface ClassificationHierarchy {
  kingdom: string;
  phylum: string;
  subphylumOrSuperclass?: string;
  subclass?: string;
  class: string;
  order: string;
  family?: string;
  genus: string;
  species: string;
}

export interface AnatomicalFlow {
  title: string;
  path: string[];
  description: string;
}

export interface Specimen {
  id: string;
  commonName: string;
  scientificName: string;
  phylumId: PhylumId;
  classification: ClassificationHierarchy;
  shortDescription: string;
  identification: string;
  habitat: string;
  morphology: string;
  anatomy: string;
  nutrition: string;
  reproduction: string;
  lifeCycle?: string;
  specialFeatures: string;
  importance: string;
  interestingFacts: string[];
  examPoints: string[];
  spotlightQuote: string;
  accessionNo: string;
  anatomicalFlow?: AnatomicalFlow;
}

export interface PhylumGeneralCharacteristics {
  bodyOrganization: string;
  symmetry: string;
  levelOfOrganization: string;
  germLayers: string;
  coelom: string;
  bodyWall: string;
  canalOrCavity: string;
  digestion: string;
  respiration: string;
  excretion: string;
  nervousSystem: string;
  reproduction: string;
  skeleton: string;
  ecologicalImportance: string;
}

export interface PhylumAtAGlance {
  kingdom: string;
  phylum: string;
  organization: string;
  symmetry: string;
  habitat: string;
  germLayers: string;
  coelom: string;
  examples: string[];
}

export interface Phylum {
  id: PhylumId;
  name: string;
  commonName: string;
  etymology: string;
  shortDescription: string;
  overview: string;
  generalCharacteristics: PhylumGeneralCharacteristics;
  atAGlance: PhylumAtAGlance;
  specimenIds: string[];
  revisionPoints: string[];
  anatomicalDiagram?: {
    title: string;
    description: string;
    stepsOrParts: { name: string; description: string }[];
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  phylumId?: PhylumId;
  specimenId?: string;
  type: 'mcq' | 'identify_phylum' | 'spotter' | 'true_false';
}

export interface SpecimenImageEntry {
  primary: string;
  plate: string;
  caption: string;
  credit?: string;
}
