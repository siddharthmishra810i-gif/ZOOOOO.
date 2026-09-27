import { Phylum, Specimen, QuizQuestion } from '../types/zoology';

export const phylaData: Phylum[] = [
  {
    id: 'porifera',
    name: 'Porifera',
    commonName: 'Pore-bearing Animals (Sponges)',
    etymology: 'Latin porus (pore) + ferre (to bear)',
    shortDescription: 'Primitive multicellular, sedentary aquatic organisms with cellular-grade organization and a distinctive aquiferous canal system.',
    overview: 'Phylum Porifera comprises the simplest multicellular animals (Metazoa), historically placed in Parazoa because their cells do not form genuine tissues, organs, or germ layers. They are sessile, filter-feeding invertebrates with thousands of incurrent pores (ostia) and a central excurrent opening (osculum), supported by an internal skeleton of mineralized spicules or collagenous spongin fibers.',
    generalCharacteristics: {
      bodyOrganization: 'Cellular level of body organization; cells exhibit division of labor but lack true basement membranes or synaptic junctions.',
      symmetry: 'Mostly asymmetrical, with some radial or urn-shaped forms (e.g., Sycon).',
      levelOfOrganization: 'Cellular grade (Parazoa) with loose aggregation of specialized cells (pinacocytes, choanocytes, amoebocytes).',
      germLayers: 'Diploblastic-like in anatomical arrangement with outer pinacoderm and inner choanoderm separated by a gelatinous mesohyl layer, though distinct embryological germ layers are absent.',
      coelom: 'Acoelomate; the primary internal space is the spongocoel (paragastric cavity), which is not a true gut or coelom.',
      bodyWall: 'Perforated by thousands of incurrent ostia and lined externally by pinacocytes and internally by flagellated choanocytes.',
      canalOrCavity: 'Unique aquiferous canal system (Asconoid, Syconoid, or Leuconoid) responsible for water circulation, food capture, gas exchange, and waste removal.',
      digestion: 'Strictly intracellular; choanocytes ingest microscopic food particles via phagocytosis and transfer nutrients to amoebocytes (trophocytes) for digestion and distribution.',
      respiration: 'Simple direct aerobic diffusion across cell membranes into the circulating water current; specialized respiratory organs are absent.',
      excretion: 'Excretion of ammonia (ammonotelic) by simple diffusion across cell surfaces into the water current; contractile vacuoles regulate osmolarity in freshwater sponges.',
      nervousSystem: 'Devoid of true neurons, synapses, or sensory organs; coordination relies on local mechanical contraction of myocytes surrounding pores.',
      reproduction: 'Both asexual (budding, fragmentation, gemmules in freshwater forms) and sexual (mostly hermaphroditic; choanocytes transform into sperm, amoebocytes into ova; free-swimming amphiblastula or parenchymula larvae).',
      skeleton: 'Internal skeletal matrix composed of calcareous or silicious spicules (mono-, tri-, or tetraxons) and/or flexible proteinaceous spongin fibers.',
      ecologicalImportance: 'Essential benthic filter feeders that clear coastal waters, cycle silicon and organic carbon, and host diverse symbiotic microorganisms and commensal crustaceans.'
    },
    atAGlance: {
      kingdom: 'Animalia',
      phylum: 'Porifera',
      organization: 'Cellular grade (Parazoa)',
      symmetry: 'Asymmetrical or radial',
      habitat: 'Mostly marine; family Spongillidae in freshwater',
      germLayers: 'Diploblastic organization (Pinacoderm & Choanoderm)',
      coelom: 'Absent (spongocoel present)',
      examples: ['Sycon', 'Hyalonema', 'Euplectella', 'Spongilla']
    },
    specimenIds: ['sycon', 'hyalonema', 'euplectella', 'spongilla'],
    revisionPoints: [
      'Cellular grade of organization without true tissues or germ layers.',
      'Possess characteristic flagellated collar cells called Choanocytes.',
      'Perforated by incurrent pores (Ostia) and one/more excurrent apertures (Osculum).',
      'Presence of an Aquiferous Canal System driving continuous water flow.',
      'Digestion is exclusively intracellular inside food vacuoles.',
      'Skeleton composed of crystalline spicules (calcium carbonate or silica) and/or spongin fibers.',
      'Larval stages are ciliated and free-swimming (Amphiblastula or Parenchymula).'
    ],
    anatomicalDiagram: {
      title: 'Syconoid Canal System Flow (Sycon)',
      description: 'Water circulation pathway driven by coordinated beats of choanocyte flagella',
      stepsOrParts: [
        { name: 'Dermal Ostia', description: 'Microscopic incurrent pores on the exterior surface.' },
        { name: 'Incurrent Canals', description: 'Tubular channels lined by pinacocytes passing water inward.' },
        { name: 'Prosopyles', description: 'Microscopic apertures connecting incurrent canals to radial canals.' },
        { name: 'Radial Canals', description: 'Flagellated chambers lined with active food-filtering choanocytes.' },
        { name: 'Apopyles', description: 'Internal pores through which filtered water exits radial canals.' },
        { name: 'Spongocoel', description: 'Central paragastric cavity lined by pinacocytes.' },
        { name: 'Osculum', description: 'Terminal wide aperture expelling filtered water into the environment.' }
      ]
    }
  },
  {
    id: 'cnidaria',
    name: 'Cnidaria',
    commonName: 'Coelenterata / Stinging Animals',
    etymology: 'Greek knide (nettle) + aria (connected with)',
    shortDescription: 'Diploblastic, radially symmetrical metazoans possessing stinging cell organelles (cnidocytes) and a gastrovascular cavity.',
    overview: 'Phylum Cnidaria comprises diverse aquatic invertebrates including hydroids, jellyfish, sea anemones, and reef-building corals. They represent the earliest evolutionary lineage with true tissues and organized nerve nets. Their hallmark evolutionary innovation is the cnidocyte—an explosive cellular capsule containing a coiled venomous thread (nematocyst) used for prey capture and defense.',
    generalCharacteristics: {
      bodyOrganization: 'Tissue grade of body organization with specialized cellular layers and primitive epitheliomuscular tissue.',
      symmetry: 'Radial or biradial symmetry around a central oral-aboral axis.',
      levelOfOrganization: 'Tissue grade; possess epidermis, gastrodermis, and an intervening acellular/cellular mesoglea.',
      germLayers: 'Diploblastic, derived embryologically from ectoderm and endoderm.',
      coelom: 'Acoelomate; primary internal chamber is the coelenteron (gastrovascular cavity) with a single opening serving as both mouth and anus.',
      bodyWall: 'Outer epidermis and inner gastrodermis separated by jelly-like mesoglea containing wandering amoeboid cells.',
      canalOrCavity: 'Gastrovascular cavity (coelenteron) functioning simultaneously in digestion, internal transport, and hydrostatic support.',
      digestion: 'Both extracellular and intracellular: enzymes secreted into the gastrovascular cavity break down prey before nutritive-muscular cells engulf fragments via phagocytosis.',
      respiration: 'Aerobic gas exchange occurs by direct diffusion across all body surfaces exposed to ambient water.',
      excretion: 'Excretion of metabolic ammonia via simple diffusion directly through the epidermal and gastrodermal cell layers.',
      nervousSystem: 'Primitive diffuse nerve net (subepithelial neural plexus) lacking a centralized brain or ganglia, with bi-directional impulse conduction.',
      reproduction: 'Metagenesis (alternation of generations) between an asexual sessile polyp and a sexual free-swimming medusa in many taxa; planula larva is standard.',
      skeleton: 'Hydrostatic skeleton in polyps and medusae; rigid external or internal calcareous skeletons in corals (calcium carbonate) or horny gorgonin in sea fans.',
      ecologicalImportance: 'Reef-building stony corals form biodiverse marine ecosystems supporting 25% of all ocean life; key pelagic predators in coastal trophic webs.'
    },
    atAGlance: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      organization: 'Tissue grade (Eumetazoa)',
      symmetry: 'Radial or biradial',
      habitat: 'Almost exclusively marine; Hydra in freshwater',
      germLayers: 'Diploblastic (Ectoderm and Endoderm)',
      coelom: 'Absent (Gastrovascular cavity present)',
      examples: ['Obelia', 'Physalia', 'Millepora', 'Aurelia', 'Tubipora', 'Corallium', 'Alcyonium', 'Gorgonia', 'Adamsia', 'Pennatula', 'Fungia', 'Meandrina', 'Madrepora']
    },
    specimenIds: ['obelia', 'physalia', 'millepora', 'aurelia', 'tubipora', 'corallium', 'alcyonium', 'gorgonia', 'adamsia', 'pennatula', 'fungia', 'meandrina', 'madrepora'],
    revisionPoints: [
      'Tissue grade of organization, radially symmetrical and diploblastic.',
      'Possess specialized stinging cells called Cnidocytes containing Nematocysts.',
      'Body plan features two distinct morphs: sessile cylindrical Polyp and motile umbrella-shaped Medusa.',
      'Single opening (hypostome mouth) connects gastrovascular cavity to exterior (incomplete gut).',
      'Digestion is initially extracellular in the coelenteron, completed intracellularly.',
      'Nervous system forms a primitive non-polarized diffuse nerve net.',
      'Exhibit metagenesis (alternation between asexual polyp and sexual medusa generations).'
    ],
    anatomicalDiagram: {
      title: 'Cnidocyte / Nematocyst Discharge Mechanism',
      description: 'The fastest cellular biomechanical event in nature (~700 nanoseconds)',
      stepsOrParts: [
        { name: 'Cnidocil', description: 'Hair-like sensory trigger receptor on epidermal surface.' },
        { name: 'Operculum', description: 'Hinged lid that seals the pressurized cnidocyte capsule.' },
        { name: 'Osmotic Influx', description: 'Triggering causes massive calcium and water influx, spiking internal pressure to 150 atmospheres.' },
        { name: 'Eversion', description: 'Inverted tubular thread is violently propelled inside-out at 5,000,000 g acceleration.' },
        { name: 'Barbs & Stylets', description: 'Penetrate target integument to anchor the hollow filament.' },
        { name: 'Toxin Delivery', description: 'Neurotoxic and cytolytic polypeptides injected into prey circulation.' }
      ]
    }
  },
  {
    id: 'ctenophora',
    name: 'Ctenophora',
    commonName: 'Comb Jellies / Sea Walnuts',
    etymology: 'Greek ktenos (comb) + phoros (bearing)',
    shortDescription: 'Biradially symmetrical, pelagic, transparent marine animals characterized by eight rows of ciliated comb plates and adhesive colloblasts.',
    overview: 'Phylum Ctenophora comprises graceful, gelatinous marine animals colloquially called comb jellies or sea gooseberries. While superficially resembling cnidarian jellyfish, they lack nematocysts entirely, swim using the coordinated rhythmic beating of eight meridional rows of giant fused cilia (ctenes), and capture zooplankton using sticky glue-secreting cells (colloblasts). Almost all species exhibit brilliant bioluminescence and ciliary iridescence.',
    generalCharacteristics: {
      bodyOrganization: 'Tissue-organ grade of body organization, with true muscle cells derived from the mesenchyme (cellular mesoglea).',
      symmetry: 'Biradial symmetry around the oral-aboral axis, determined by paired tentacles and the stomodeum.',
      levelOfOrganization: 'Tissue-organ grade with specialized aboral sense organ, complex pharynx, and branching gastrovascular canals.',
      germLayers: 'Diploblastic / Triploblastic according to modern zoological debate, possessing a thick cellular mesenchyme with true smooth muscle fibers.',
      coelom: 'Acoelomate; primary space is occupied by voluminous gelatinous mesoglea with amoebocytes and muscle cells.',
      bodyWall: 'Delicate external epidermis, thick internal mesoglea, and inner gastrodermis lining the stomodeal gut system.',
      canalOrCavity: 'Mouth opens into a long muscular stomodeum (pharynx) branching into a system of eight meridional and interradial canals terminating near anal pores.',
      digestion: 'Both extracellular (in stomodeum) and intracellular (within gastrodermal cells lining canals); unlike cnidarians, ctenophores possess anal pores.',
      respiration: 'Gas exchange occurs entirely by direct diffusion across the delicate body surface into seawater.',
      excretion: 'Metabolic ammonia eliminated through body surface and anal pores at the aboral pole.',
      nervousSystem: 'Subepidermal diffuse nerve plexus concentrated under the eight comb rows, coordinated by a complex sensory statocyst at the aboral pole.',
      reproduction: 'Hermaphroditic (monoecious); external fertilization; distinctive cydippid larval stage with tentacle sheaths.',
      skeleton: 'Exclusively hydrostatic; firm gelatinous mesoglea supports shape and resists hydrostatic compression in the water column.',
      ecologicalImportance: 'Significant pelagic predators of copepods, fish eggs, and mollusk larvae; invasive Mnemiopsis caused dramatic shifts in the Black Sea ecosystem.'
    },
    atAGlance: {
      kingdom: 'Animalia',
      phylum: 'Ctenophora',
      organization: 'Tissue-organ grade',
      symmetry: 'Biradial symmetry',
      habitat: 'Exclusively marine and pelagic',
      germLayers: 'Diploblastic with cellular mesenchyme',
      coelom: 'Absent',
      examples: ['Beroe', 'Ctenoplana']
    },
    specimenIds: ['beroe', 'ctenoplana'],
    revisionPoints: [
      'Locomotion executed by 8 meridional rows of ciliated comb plates (ctenes).',
      'Possess sticky adhesive cells called Colloblasts (lasso cells) instead of cnidocytes.',
      'Possess an apical sensory statocyst at the aboral pole governing equilibrium.',
      'Display biradial symmetry with paired tentacles and a pharyngeal axis.',
      'Exhibit bright bioluminescence and optical rainbow diffraction along ctenes.',
      'Completely lack stinging nematocysts (non-stinging jellies).',
      'Development typically includes a free-swimming spherical Cydippid larva.'
    ],
    anatomicalDiagram: {
      title: 'Aboral Sensory Statocyst & Comb Row Coordination',
      description: 'Equilibrium organ synchronizing the 8 ciliated comb plates for swimming',
      stepsOrParts: [
        { name: 'Statolith', description: 'Central cluster of calcareous granules resting atop four balancers.' },
        { name: 'Balancers (Sensory Cilia)', description: 'Four mechanoreceptor tufts supporting the statolith.' },
        { name: 'Ciliated Grooves', description: 'Bifurcating nerve-like tracts running from balancers to comb rows.' },
        { name: 'Comb Rows (Ctenes)', description: 'Plates of fused giant cilia executing power and recovery strokes.' },
        { name: 'Bell-Shaped Dome', description: 'Transparent protective cuticular cupola enclosing the sensory statocyst.' }
      ]
    }
  },
  {
    id: 'platyhelminthes',
    name: 'Platyhelminthes',
    commonName: 'Flatworms',
    etymology: 'Greek platys (flat) + helmins (worm)',
    shortDescription: 'Bilaterally symmetrical, triploblastic, dorsoventrally flattened acoelomates with organ-system grade organization and flame-cell protonephridia.',
    overview: 'Phylum Platyhelminthes represents a profound landmark in metazoan evolution: the introduction of primary bilateral symmetry, cephalization (head development with paired cerebral ganglia), triploblastic organization (ectoderm, mesoderm, endoderm), and dedicated organ systems. Their flat body plan facilitates gas exchange across the integument without specialized circulatory or respiratory structures.',
    generalCharacteristics: {
      bodyOrganization: 'Organ-system level of body organization; possess integrated digestive, excretory, nervous, and reproductive systems.',
      symmetry: 'Bilateral symmetry with distinct anterior-posterior and dorsal-ventral axes.',
      levelOfOrganization: 'Organ-system grade with well-developed cephalization and solid mesodermal parenchyma.',
      germLayers: 'Triploblastic: ectoderm (epidermis/tegument), mesoderm (parenchyma, muscle layers), and endoderm (gastrodermis).',
      coelom: 'Acoelomate: space between body wall and gut is filled with dense mesodermal connective tissue called parenchyma or mesenchyme.',
      bodyWall: 'Ciliated cellular epidermis in free-living turbellarians; syncytial metabolically active tegument (neodermis) with microtriches in parasitic flukes and tapeworms.',
      canalOrCavity: 'Incomplete digestive tract (blind sac) with a single mouth opening (no anus) in flukes; completely absent in parasitic cestodes (tapeworms).',
      digestion: 'Extracellular in the branched intestinal caeca, completed intracellularly by gastrodermal phagocytic cells; cestodes absorb pre-digested nutrients across their tegument.',
      respiration: 'Aerobic in free-living forms via cutaneous diffusion; anaerobic in adult endoparasites residing in oxygen-poor host viscera (bile ducts/intestines).',
      excretion: 'Specialized protonephridia equipped with terminal Flame Cells (solenocytes) responsible for osmoregulation and removal of metabolic wastes.',
      nervousSystem: 'Ladder-type nervous system: bilobed cerebral ganglia (primitive brain) connected to 2–3 pairs of longitudinal nerve cords linked by transverse commissures.',
      reproduction: 'Mostly monoecious (hermaphroditic) with complex copulatory apparatus; exhibit internal fertilization, polyembryony, and complex larval successions in parasitic forms.',
      skeleton: 'Hydrostatic skeleton maintained by fluid turgor within the compact mesodermal parenchyma.',
      ecologicalImportance: 'Significant parasites of medical and veterinary importance causing fascioliasis, schistosomiasis, and taeniasis in livestock and human hosts.'
    },
    atAGlance: {
      kingdom: 'Animalia',
      phylum: 'Platyhelminthes',
      organization: 'Organ-system grade',
      symmetry: 'Bilateral symmetry',
      habitat: 'Aquatic (freshwater/marine), moist terrestrial, or endoparasitic',
      germLayers: 'Triploblastic (Ecto, Meso, Endoderm)',
      coelom: 'Acoelomate (solid parenchyma)',
      examples: ['Liver fluke (Fasciola)', 'Tapeworm (Taenia)']
    },
    specimenIds: ['fasciola', 'taenia'],
    revisionPoints: [
      'Dorsoventrally flattened, triploblastic, and acoelomate body.',
      'First animal phylum with bilateral symmetry and cephalization.',
      'Possess characteristic Flame Cells (protonephridia) for osmoregulation and excretion.',
      'Digestive system is incomplete (mouth present, anus absent) or entirely absent (Cestoda).',
      'Parasitic forms possess protective syncytial Neodermis (tegument) and attachment organs (suckers, hooks).',
      'Complex reproductive systems, generally hermaphroditic with larval stages (Miracidium, Cercaria, Cysticercus).'
    ],
    anatomicalDiagram: {
      title: 'Flame Cell (Protonephridial Bulb) Ultrastructure',
      description: 'The primary osmoregulatory and excretory unit of flatworms',
      stepsOrParts: [
        { name: 'Ciliary Flame Tuft', description: 'Bundle of 50–100 vibrating flagella resembling a flickering candle flame.' },
        { name: 'Slit Interdigitations', description: 'Internal fenestrated filtration slits between terminal cell and tubule cell.' },
        { name: 'Basement Membrane', description: 'Molecular sieve excluding proteins while admitting water and metabolic wastes.' },
        { name: 'Intracellular Tubule', description: 'Convoluted drainage canal lined with microvilli for solute reabsorption.' },
        { name: 'Excretory Pore (Nephridiopore)', description: 'External terminal orifice releasing dilute urine from collecting ducts.' }
      ]
    }
  },
  {
    id: 'nemathelminthes',
    name: 'Nemathelminthes',
    commonName: 'Nematoda / Roundworms',
    etymology: 'Greek nema (thread) + helmins (worm)',
    shortDescription: 'Cylindrical, unsegmented, bilaterally symmetrical pseudocoelomate worms with a tough collagenous cuticle and a complete digestive canal.',
    overview: 'Phylum Nemathelminthes (Nematoda) consists of vermiform, non-segmented roundworms occupying every ecological niche on Earth—from deep oceanic sediments to soil and as pervasive parasites of plants and animals. They possess a complete one-way alimentary canal (mouth to anus), a fluid-filled pseudocoelom under high hydrostatic pressure, and a non-living collagenous cuticle that is periodically shed through ecdysis.',
    generalCharacteristics: {
      bodyOrganization: 'Organ-system grade of body organization, with distinct organ systems and eutely (fixed number of somatic cells in many species).',
      symmetry: 'Bilateral symmetry, with triradiate symmetry around the oral aperture and pharynx.',
      levelOfOrganization: 'Organ-system grade with longitudinal body wall muscles (no circular muscles) operating against pressurized pseudocoelomic fluid.',
      germLayers: 'Triploblastic: ectoderm (cuticle and epidermis), mesoderm (longitudinal muscles and reproductive organs), and endoderm (intestine).',
      coelom: 'Pseudocoelomate: body cavity derived from the embryonic blastocoel, lined externally by mesoderm and internally by endoderm (lacks peritoneal lining).',
      bodyWall: 'Thick, flexible, multilayered collagenous cuticle secreted by a syncytial hypodermis with four longitudinal chords (dorsal, ventral, two lateral).',
      canalOrCavity: 'Complete alimentary canal with terminal anterior mouth, muscular triradiate pumping pharynx, straight non-muscular tubular intestine, and posterior anus.',
      digestion: 'Extracellular digestion within the lumen of the intestine; food absorbed across intestinal microvilli into pseudocoelomic fluid.',
      respiration: 'Anaerobic in parasitic roundworms inhabiting host intestines; cutaneous diffusion in microscopic free-living soil nematodes.',
      excretion: 'Specialized giant Renette gland cells or H-shaped excretory canal system terminating in an anterior mid-ventral excretory pore.',
      nervousSystem: 'Circumpharyngeal nerve ring (brain) encircling the muscular pharynx, giving off dorsal and ventral nerve cords; sensory amphids and phasmids present.',
      reproduction: 'Strictly dioecious (unisexual) with pronounced sexual dimorphism: males are smaller with a curved posterior tail and copulatory spicules; females are larger.',
      skeleton: 'High-pressure hydrostatic skeleton (turgor pressure up to 225 mm Hg) maintained by pseudocoelomic fluid enclosed within the inelastic cuticle.',
      ecologicalImportance: 'Abundant soil microfauna essential for nutrient mineral cycling; prominent human parasites including Ascaris, Enterobius, and filarial nematodes.'
    },
    atAGlance: {
      kingdom: 'Animalia',
      phylum: 'Nemathelminthes',
      organization: 'Organ-system grade',
      symmetry: 'Bilateral with triradiate head',
      habitat: 'Soil, marine, freshwater, endoparasites of plants/animals',
      germLayers: 'Triploblastic',
      coelom: 'Pseudocoelom (blastocoelic origin)',
      examples: ['Ascaris']
    },
    specimenIds: ['ascaris'],
    revisionPoints: [
      'Unsegmented, cylindrical, elongated worms with tapering pointed ends.',
      'Body cavity is a Pseudocoelom maintained under high hydrostatic pressure.',
      'Complete digestive tract with anterior mouth, muscular pharynx, and posterior anus.',
      'Possess a non-living tough cuticle periodically shed through ecdysis (molting).',
      'Body wall possesses ONLY longitudinal muscle fibers; circular muscles are completely absent.',
      'Exhibit pronounced sexual dimorphism (males smaller with curved tail and copulatory spicules).',
      'Renette cells or H-shaped canal system serve in excretion and osmoregulation.'
    ],
    anatomicalDiagram: {
      title: 'Ascaris Body Wall & Pseudocoelomic Architecture',
      description: 'Cross-sectional mechanics generating characteristic S-shaped thrashing locomotion',
      stepsOrParts: [
        { name: 'Cuticle', description: 'Multilayered resistant collagenous sheath resisting host digestive enzymes.' },
        { name: 'Syncytial Hypodermis', description: 'Multinucleate cellular layer projecting into 4 longitudinal chords.' },
        { name: 'Longitudinal Muscle Bands', description: 'Four fields of muscle cells sending cytoplasmic arms to nerve cords.' },
        { name: 'Pseudocoelom', description: 'Pressurized fluid cavity functioning as an antagonistic hydrostatic skeleton.' },
        { name: 'Tubular Gut', description: 'Endodermal non-muscular intestine bathed directly in pseudocoelomic nutrients.' }
      ]
    }
  }
];

export const specimensData: Specimen[] = [
  // ================= PORIFERA =================
  {
    id: 'sycon',
    commonName: 'Scypha / Crown Sponge',
    scientificName: 'Sycon ciliatum',
    phylumId: 'porifera',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Porifera',
      class: 'Calcarea (Calcispongiae)',
      order: 'Heterocoela',
      genus: 'Sycon',
      species: 'ciliatum'
    },
    accessionNo: 'INV-POR-001',
    spotlightQuote: 'A canonical marine sponge illustrating the architectural elegance of syconoid canal dynamics.',
    shortDescription: 'Small urn-shaped solitary or colonial marine sponge with a prominent crown of calcareous monaxon spicules fringing its terminal osculum.',
    identification: 'Urn-shaped or vase-like cylindrical body with alternating incurrent and radial canals and a bristly oscular collar.',
    habitat: 'Marine shallow coastal waters, permanently attached to rocks, shells, and pilings in sheltered littoral zones.',
    morphology: 'Body measures 2 to 7 cm in height, pale cream to yellowish-brown, consisting of slender cylindrical tubes branching from a common basal stolon. The summit features a large aperture, the osculum, encircled by a prominent crown of long, monaxon calcareous spicules preventing entry of foreign debris. The lateral body wall is perforated by thousands of microscopic incurrent ostia.',
    anatomy: 'Sycon exhibits syconoid body wall folding: outer pinacoderm is indented to form incurrent canals, while the inner choanoderm is folded outward into radial canals lined with active choanocytes. Between the incurrent and radial canals lie microscopic prosopyles. The radial canals empty via apopyles into the central spongocoel lined with pinacocytes.',
    nutrition: 'Filter-feeding on suspended phytoplankton, bacteria, and fine organic detritus. Choanocyte flagella generate an inward water current. Food particles adhere to mucus collars, are engulfed by pinacocytosis/phagocytosis, and transferred to amoebocytes (thesocytes and trophocytes) for intracellular enzymatic hydrolysis.',
    reproduction: 'Reproduces asexually by budding and regeneration; sexually by internal fertilization. Hermaphroditic (protogynous); choanocytes capture incoming sperm, transport them to mature ova in the mesohyl. Development yields a characteristic free-swimming ciliated amphiblastula larva with micromeres and macromeres.',
    lifeCycle: 'Zygote undergoes holoblastic unequal cleavage to form a blastula with micromeres bearing flagella directed inward (stomoblastula). The blastula inverts (inversion stage), passes through the maternal radial canal, and is expelled via the osculum as a free-swimming amphiblastula that settles on rock and metamorphoses into an olynthus stage.',
    specialFeatures: 'Classic syconoid canal system with folded body walls; mineral skeleton composed of calcareous monaxon, triaxon, and tetraxon calcite spicules.',
    importance: 'Fundamental textbook archetype in comparative invertebrate zoology; contributes to coastal benthic particulate matter filtration and benthic-pelagic coupling.',
    interestingFacts: [
      'Inverts inside-out during embryogenesis through a unique process called stomoblastula inversion.',
      'A single Sycon can pump more than 20 liters of seawater through its body per day relative to its tiny mass.',
      'Its spicular crown acts as an exclusionary grill to prevent amphipods and debris from entering the osculum.'
    ],
    examPoints: [
      'Belongs to Class Calcarea due to calcium carbonate spicules.',
      'Displays Syconoid canal system: Ostia → Incurrent Canal → Prosopyle → Radial Canal → Apopyle → Spongocoel → Osculum.',
      'Choanocytes are restricted solely to the radial canals, not the spongocoel.',
      'Larva is an Amphiblastula with anterior flagellated cells and posterior non-flagellated cells.',
      'Pinacoderm is formed of flattened pinacocytes and contractile porocytes.'
    ],
    anatomicalFlow: {
      title: 'Water Current Direction in Sycon',
      path: ['Dermal Ostia', 'Incurrent Canals', 'Prosopyles', 'Radial Canals (Choanocytes)', 'Apopyles', 'Spongocoel', 'Osculum'],
      description: 'The rhythmic undulation of choanocyte flagella drives incoming water through microscopic ostia and expels it forcefully through the osculum.'
    }
  },
  {
    id: 'hyalonema',
    commonName: 'Glass Rope Sponge',
    scientificName: 'Hyalonema sieboldi',
    phylumId: 'porifera',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Porifera',
      class: 'Hexactinellida (Hyalospongiae)',
      order: 'Amphidiscophora',
      genus: 'Hyalonema',
      species: 'sieboldi'
    },
    accessionNo: 'INV-POR-002',
    spotlightQuote: 'A deep-sea marvel anchored into abyssal ooze by a luminous spiral cable of twisted fiberglass-like spicules.',
    shortDescription: 'Deep-sea hexactinellid sponge anchored to the abyssal muddy floor by a long, twisted bundle of silicious glass fibers.',
    identification: 'Rounded or cup-shaped sponge body anchored into ocean mud by a long spirally twisted root rope of silicious glass spicules.',
    habitat: 'Abyssal and bathyal marine waters between 1,000 and 4,000 meters depth, commonly in the Indo-Pacific and Atlantic basins.',
    morphology: 'Consists of two distinct portions: an apical rounded or cup-shaped sponge body (10–30 cm) and an elongated basal root tuft (rope) measuring up to 1 meter in length. The root tuft comprises dozens of spirally twisted, ultra-pure silicious spicules that penetrate deep into soft ocean mud.',
    anatomy: 'Body wall is formed of a syncytial hexactinellid reticulum without cellular boundaries. The skeletal framework consists of six-rayed (hexactine) and amphidisc silicious spicules. The central axis is penetrated by a columella around which the sponge body is organized.',
    nutrition: 'Deep-sea filter feeder feeding on marine snow, suspended organic matter, and bathypelagic bacteria transported by abyssal bottom currents.',
    reproduction: 'Sexual reproduction produces stereogastrula / parenchymula larvae; possesses high regenerative capacity common to hexactinellids.',
    specialFeatures: 'The twisted silicious stalk contains natural optical-fiber-grade glass spicules that conduct ambient light in the abyss. Almost always hosts colonial commensal zoanthid anemones (Epizoanthus) encrusting the stalk.',
    importance: 'Natural optical biomaterial studied by materials scientists for bio-silicification and low-temperature fiber-optic synthesis.',
    interestingFacts: [
      'Early naturalists mistakenly classified the sponge body and its encrusting Epizoanthus anemones as two halves of a mythical hybrid organism.',
      'Its root spicules have optical properties superior to synthetic commercial fiber-optic cables in fracture toughness.',
      'Can survive centuries in the calm, frigid conditions of the ocean abyss.'
    ],
    examPoints: [
      'Belongs to Class Hexactinellida characterized by 6-rayed silicious spicules.',
      'Possesses amphidisc spicules (spicules with umbrella-like discs at both ends).',
      'Distinguished by a twisted spiraling stalk of silicious anchoring threads (glass rope).',
      'Exhibits obligate commensalism with Epizoanthus polyps covering the stalk.'
    ]
  },
  {
    id: 'euplectella',
    commonName: "Venus' Flower Basket",
    scientificName: 'Euplectella aspergillum',
    phylumId: 'porifera',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Porifera',
      class: 'Hexactinellida',
      order: 'Hexasterophora',
      genus: 'Euplectella',
      species: 'aspergillum'
    },
    accessionNo: 'INV-POR-003',
    spotlightQuote: 'An ethereal latticed vase of spun glass that serves as an eternal oceanic sanctuary for paired commensal shrimp.',
    shortDescription: 'Exquisite cylindrical glass sponge with a curved cornucopia-like skeleton composed of fused triaxon silicious spicules forming a geometric lattice.',
    identification: 'Curved cornucopia-shaped cylinder with a square-and-diagonal glass spicule lattice, closed by an oscular sieve-plate.',
    habitat: 'Deep-sea benthic zones, especially rocky or sedimented slopes around the Philippines and Western Pacific (500–1,000 m).',
    morphology: 'Curved, tubular, vase-shaped body (15–30 cm long) anchored into the substrate by a dense tuft of delicate basal spicular root fibers. The upper terminal opening is closed by a perforated silicious sieve-plate (oscular sieve). The body wall exhibits a regular square and diagonal structural lattice.',
    anatomy: 'Lacks a pinacoderm layer; the external surface is covered by a syncytial trabecular network. Choanocytes are contained in thimble-shaped flagellated chambers. Skeleton is a masterpiece of architectural engineering: three-rayed silicious spicules fused together with colloidal silica to form an indestructible geodesic cylinder.',
    nutrition: 'Microscopic filter feeder utilizing water currents drawn inward through parietal gaps into flagellated chambers and expelled through the terminal sieve-plate.',
    reproduction: 'Sexual reproduction leads to parenchymula larvae that drift until settling on bathyal substrata.',
    specialFeatures: 'A male and female pair of small commensal shrimp (Spongicola venusta) enter the sponge body during their larval stage, grow inside the secure lattice, and become permanently imprisoned for life.',
    importance: 'Celebrated in Japanese tradition as a wedding gift symbolizing eternal matrimonial fidelity until death; model system in biomimetic structural engineering for earthquake-resistant skyscraper architecture.',
    interestingFacts: [
      'In Japan, dried specimens with the two imprisoned shrimp inside are given as traditional wedding presents representing "Together until old age and beyond."',
      'Architects and NASA engineers study Euplectella’s lattice ribs to design lightweight, high-strength aerospace structures.',
      'The glass spicules contain concentric layers of organic glue that prevent microscopic cracks from propagating.'
    ],
    examPoints: [
      'Class: Hexactinellida, Order: Hexasterophora (possesses hexaster spicules).',
      'Skeleton consists of fused silicious spicules forming a rigid, non-flexible cylindrical basket.',
      'Terminal osculum is sealed by a perforated silicious sieve-plate.',
      'Commensal association with Spongicola venusta shrimp.',
      'Root tuft anchors sponge firmly in soft oceanic sediments.'
    ]
  },
  {
    id: 'spongilla',
    commonName: 'Freshwater Sponge',
    scientificName: 'Spongilla lacustris',
    phylumId: 'porifera',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Porifera',
      class: 'Demospongiae',
      order: 'Spongillida',
      genus: 'Spongilla',
      species: 'lacustris'
    },
    accessionNo: 'INV-POR-004',
    spotlightQuote: 'A rare freshwater sponge that survives harsh frozen winters by producing armored internal survival pods called gemmules.',
    shortDescription: 'Colonial, encrusting or branched freshwater sponge colored bright emerald green due to symbiotic intracellular zoochlorellae algae.',
    identification: 'Encrusting or branched freshwater sponge tinted emerald green with symbiotic zoochlorellae and overwintering gemmules.',
    habitat: 'Clear, unpolluted freshwater ponds, lakes, quiet streams, and canals, attached to submerged tree branches, reeds, and stones.',
    morphology: 'Forms soft, irregularly branched or cushion-like encrustations on submerged logs. Color varies from dull yellowish-tan in shaded waters to vivid emerald green in sunlit waters due to endosymbiotic unicellular green algae (Zoochlorellae) living inside amoebocytes.',
    anatomy: 'Possesses a complex leuconoid canal system with rhagon-like flagellated chambers. The skeleton consists of silicious monaxon spicules bound together by soft organic spongin fibers. Pinacocytes contain contractile vacuoles for active freshwater osmoregulation.',
    nutrition: 'Dual nutrition: filter feeds on aquatic bacteria, rotifers, and detritus via choanocyte chambers, supplemented by carbohydrates synthesized by symbiotic zoochlorellae.',
    reproduction: 'Exhibits gemmule formation—an evolutionary adaptation for overwintering. When autumn approaches, internal asexual buds (gemmules) with thick amphidisc-reinforced amphicoel coats form. Gemmules survive desiccation and freezing, germinating the following spring.',
    specialFeatures: 'Gemmule formation with micropyle and amphidisc spicules; symbiotic mutualism with Zoochlorellae algae; presence of osmoregulatory contractile vacuoles in sponge cells.',
    importance: 'Bio-indicator of freshwater purity; plays a critical role in filtering organic particulates from lentic freshwater ecosystems.',
    interestingFacts: [
      'Gemmules can survive temperatures below -20°C and several months of complete dehydration.',
      'If moved to a dark cave, Spongilla turns ghostly white as its photosynthetic green algae perish.',
      'Archaeocytes inside gemmules are totipotent and can differentiate into all adult cell types.'
    ],
    examPoints: [
      'Belongs to Class Demospongiae, which contains all freshwater sponges.',
      'Exhibits a complex Leuconoid canal system with rounded flagellated chambers.',
      'Skeleton composed of silicious monaxon spicules and spongin fibers.',
      'Overwinters through Gemmules protected by a pneumatic layer and amphidisc spicules.',
      'Osmoregulation achieved via contractile vacuoles inside pinacocytes and amoebocytes.'
    ]
  },

  // ================= CNIDARIA =================
  {
    id: 'obelia',
    commonName: 'Sea Fir',
    scientificName: 'Obelia geniculata',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Hydrozoa',
      order: 'Leptothecata',
      genus: 'Obelia',
      species: 'geniculata'
    },
    accessionNo: 'INV-CNI-001',
    spotlightQuote: 'The quintessential polymorphic marine hydrozoan demonstrating clear alternation of polypoid and medusoid generations.',
    shortDescription: 'Colonial, marine, trimorphic hydrozoan exhibiting alternation of generations between an asexual branching hydroid colony and free-swimming sexual medusae.',
    identification: 'Delicate whitish-brown plant-like branched colony with bell-shaped hydrothecae and cylindrical gonothecae.',
    habitat: 'Shallow coastal marine waters attached to brown kelp, rocks, pilings, and mollusk shells down to 80 meters.',
    morphology: 'Arborescent colony rooted by a creeping horizontal stolon (hydrorhiza) producing upright branched stems (hydrocaulus). Colony exhibits polymorphism with three distinct zooids: gastrozooids (hydranths for feeding), blastostyles (gonozooids for asexual medusa budding), and free-swimming sexual medusae. The colony is shielded by a cuticular perisarc.',
    anatomy: 'Living tissue is the coenosarc enclosing a continuous gastrovascular cavity. Gastrozooids are protected by a transparent wineglass-shaped cup (hydrotheca) and bear a circle of 24 filiform solid tentacles with nematocysts around an elevated hypostome mouth. Blastostyles are enclosed within cylindrical gonothecae.',
    nutrition: 'Carnivorous filter-predator; gastrozooid tentacles capture micro-crustaceans and plankton using nematocysts, directing them into the hypostome for digestion in the continuous gastrovascular canal.',
    reproduction: 'Classical metagenesis: the asexual sedentary polyp colony produces tiny saucers (medusa buds) on blastostyles by budding. Medusae escape, mature as dioecious sexual pelagic jellies, and release gametes into seawater. Fertilization produces a ciliated planula larva that settles to establish a new polyp colony.',
    lifeCycle: 'Hydroid colony (asexual, diploid) → Medusa buds → Medusa (sexual, dioecious) → Egg & Sperm → Zygote → Ciliated Planula larva → Sessile Hydrula → Young Obelia colony.',
    specialFeatures: 'Trimorphic colony (hydranths, blastostyles, medusae); the medusa possesses true marginal statocysts (lithocysts) for equilibrium and a reduced velum (velum is rudimentary or absent).',
    importance: 'Classic textbook organism demonstrating metagenesis (alternation of generations) and polymorphic specialization in metazoans.',
    interestingFacts: [
      'The entire branching colony shares a single continuous "stomach" through which digested fluids pulse continuously.',
      'Its free-swimming medusae are scarcely 1 to 2 mm in diameter when liberated.',
      'Unlike Hydra, Obelia possesses an exoskeleton of amber-colored chitinous perisarc.'
    ],
    examPoints: [
      'Class: Hydrozoa, characterized by craspedote/acraspedote medusa and acellular mesoglea.',
      'Exhibits trimorphism: Hydranth (nutritive), Blastostyle (asexual budding), Medusa (sexual).',
      'Hydrotheca encloses hydranth; Gonotheca encloses blastostyle; perisarc covers hydrocaulus.',
      'Medusa possesses 8 marginal statocysts (lithocysts) located at the bases of tentacles.',
      'Larva is a solid, ciliated, free-swimming Planula.'
    ]
  },
  {
    id: 'physalia',
    commonName: 'Portuguese Man-of-War',
    scientificName: 'Physalia physalis',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Hydrozoa',
      order: 'Siphonophorae',
      genus: 'Physalia',
      species: 'physalis'
    },
    accessionNo: 'INV-CNI-002',
    spotlightQuote: 'A floating super-organism armada of specialized zooids capable of delivering agonizing neurotoxic stings.',
    shortDescription: 'Free-floating colonial siphonophore featuring a large, iridescent blue-pink gas float (pneumatophore) and trailing tentacles with lethal nematocysts.',
    identification: 'Iridescent blue-pink crested gas float (pneumatophore) supporting polymorphic colony with elongate dactylozooids.',
    habitat: 'Tropical and subtropical warm pelagic waters of the Atlantic, Pacific, and Indian Oceans drifting with surface winds and currents.',
    morphology: 'Consists not of a single organism, but a complex polymorphic colony of specialized zooids suspended from a crested, gas-filled bladder (pneumatophore) up to 30 cm long. Long trailing tentacles (dactylozooids) can extend 10 to 30 meters beneath the surface.',
    anatomy: 'Extreme division of labor with four specialized polypoid and medusoid zooids: 1) Pneumatophore (modified medusoid float containing gas gland that secretes carbon monoxide and nitrogen); 2) Dactylozooids (defensive and prey-catching tentacular polyps packed with battering batteries of nematocysts); 3) Gastrozooids (feeding polyps with digestive enzymes); 4) Gonozooids (branched reproductive clusters).',
    nutrition: 'Predatory carnivore. Trailing dactylozooids paralyze fish, squid, and crustaceans with potent hypnotoxins; contracting tentacles lift prey upward to the cluster of open-mouthed gastrozooids, which spread over the fish and secrete proteolytic enzymes.',
    reproduction: 'Gonozooids produce medusoids that generate gametes; external fertilization in open ocean waters produces pelagic larvae that develop into new floating colonies.',
    specialFeatures: 'Pneumatophore contains up to 14% carbon monoxide produced by a specialized gas gland. Its nematocysts inject physaliatoxin—a dangerous neurotoxic protein that can cause human cardiovascular collapse and severe dermal necrosis.',
    importance: 'Medical hazard for marine swimmers; fascinating study in colonial polymorphic integration where individuals sacrifice autonomy for colony survival.',
    interestingFacts: [
      'The float acts as a natural sailing rig: some colonies have floats aligned to the left ("left-handed") and others to the right, dispersing the species in opposite wind directions!',
      'Even dead, desiccated tentacles washed onto a beach can fire active nematocysts for weeks.',
      'The tiny shepherd fish (Nomeus gronovii) lives immune among the deadly tentacles, feeding on leftover food particles.'
    ],
    examPoints: [
      'Class: Hydrozoa, Order: Siphonophorae.',
      'Classic example of Polymorphism in animals with division of labor.',
      'Four zooid types: Pneumatophore (float), Dactylozooid (defense/prey), Gastrozooid (nutrition), Gonozooid (reproduction).',
      'Float contains gas gland producing carbon monoxide (CO).',
      'Venom contains potent physaliatoxin causing extreme systemic pain and paralysis.'
    ]
  },
  {
    id: 'millepora',
    commonName: 'Fire Coral',
    scientificName: 'Millepora alcicornis',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Hydrozoa',
      order: 'Anthoathecata',
      genus: 'Millepora',
      species: 'alcicornis'
    },
    accessionNo: 'INV-CNI-003',
    spotlightQuote: 'A false coral of the hydrozoan lineage whose microscopic pores conceal searing, painful urticating cnidocytes.',
    shortDescription: 'Colonial hydrocoral with a heavy calcium carbonate skeleton resembling true stony corals, infamous for painful burning stings on contact.',
    identification: 'Encrusting or branching calcareous mustard-yellow hydrocoral skeleton perforated with cyclosystem pores.',
    habitat: 'Shallow tropical coral reefs (1–40 m) in warm Caribbean, Atlantic, and Indo-Pacific waters.',
    morphology: 'Forms massive encrustations, leafy plates, or upright antler-like branching colonies with a mustard-yellow, tan, or greenish-brown hue. The skeleton surface appears smooth to the naked eye but is riddled with thousands of microscopic pin-prick pores.',
    anatomy: 'A true hydrocoral (not an anthozoan). The skeleton (coenosteum) displays pores arranged in cyclosystems: a large central gastropore (containing a feeding gastrozooid) encircled by 5 to 7 smaller dactylopores (each housing a defensive, tentacle-like dactylozooid equipped with formidable nematocysts). Living tissue covers the skeleton in a thin surface layer.',
    nutrition: 'Captures zooplankton through stinging dactylozooids that pass food to central gastrozooids; also relies on photosynthetic carbohydrates supplied by massive populations of endosymbiotic zooxanthellae.',
    reproduction: 'Asexual growth via skeletal expansion and fragmentation; sexual reproduction by releasing tiny, short-lived medusoids from specialized ampullae in the skeleton.',
    specialFeatures: 'Cyclosystem pore arrangement (one gastropore surrounded by dactylopores); extreme density of penetrating nematocysts causing intense burning dermatitis in divers.',
    importance: 'Major structural contributor to shallow reef frameworks; significant biological hazard for recreational divers and snorkelers.',
    interestingFacts: [
      'Though called "coral," it is closer kin to Hydra and Obelia than to true brain or staghorn corals.',
      'The burning sensation from contact can persist for days and leave pigmented scarring.',
      'Encrusts dead gorgonian fans and shipwrecks at astonishingly rapid calcification rates.'
    ],
    examPoints: [
      'Belongs to Class Hydrozoa (Hydrocorallina), NOT Class Anthozoa.',
      'Forms a massive calcareous exoskeleton (coenosteum).',
      'Pores arranged in Cyclosystems: central gastropore surrounded by small dactylopores.',
      'Zooids are dimorphic: Gastrozooids (feeding) and Dactylozooids (stinging/defense).',
      'Produces free-swimming, non-feeding medusoids from skeletal ampullae.'
    ]
  },
  {
    id: 'aurelia',
    commonName: 'Moon Jellyfish',
    scientificName: 'Aurelia aurita',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Scyphozoa',
      order: 'Semaeostomeae',
      genus: 'Aurelia',
      species: 'aurita'
    },
    accessionNo: 'INV-CNI-004',
    spotlightQuote: 'A translucent saucer-shaped pelagic drifter displaying four violet horseshoe gonads and marginal sensory rhopalia.',
    shortDescription: 'Free-swimming, saucer-shaped scyphomedusa with four distinctive horseshoe-shaped pinkish-violet gonads in its translucent bell.',
    identification: 'Translucent saucer-shaped umbrella with four horseshoe-shaped gonads, four frilled oral arms, and eight marginal rhopalia.',
    habitat: 'Coastal waters, estuaries, and sheltered bays worldwide, swimming near the surface in large aggregations.',
    morphology: 'Bowl-shaped or saucer-shaped umbrella (subumbrella and exumbrella) measuring 20 to 40 cm in diameter, milky white and translucent. The umbrella margin is scalloped into eight marginal notches, each housing a sensory rhopalium flanked by two marginal lappets. The underside mouth is surrounded by four long, ruffled oral arms.',
    anatomy: 'A true scyphomedusa lacking a velum (craspedote condition absent; acraspedote). Thick cellular mesoglea provides elasticity for swimming. Mouth leads into a central stomach giving off four gastric pouches, each bearing gastric filaments. A sophisticated gastrovascular system consists of 16 radial canals (branched perradial and interradial, unbranched adradial) opening into a circular ring canal at the margin.',
    nutrition: 'Feeds on plankton, fish eggs, and flagellates. Swimming movements drive plankton onto the mucus-coated exumbrella; flagella beat particles toward the margin where oral arms scrape the food and convey it to the mouth for extracellular enzymatic digestion.',
    reproduction: 'Dioecious with four horseshoe-shaped gonads in the gastric pouches. Fertilization occurs on the female’s oral arms. Development yields a ciliated planula larva, which metamorphoses into a small polyp called the scyphistoma. The scyphistoma undergoes transverse fission (strobilation) into a pile of saucers, each maturing into a free-swimming eight-lobed ephyra larva.',
    lifeCycle: 'Adult Medusa (male & female) → Planula larva → Sessile Scyphistoma (polyp) → Strobila (transverse budding) → Ephyra larva (juvenile medusa) → Adult Aurelia.',
    specialFeatures: 'Eight sensory rhopalia containing a statocyst (lithocyst) for equilibrium and a pigment-cup ocellus for photoreception. Gastrovascular canal branching pattern with ring canal.',
    importance: 'Classic laboratory specimen for teaching true jellyfish anatomy; key trophic link in pelagic coastal marine ecosystems.',
    interestingFacts: [
      'Its sting is so mild that human skin on the palms cannot feel it, though it can irritate sensitive eyelids or cuts.',
      'Can tolerate extremely low dissolved oxygen levels that kill competing commercial fishes.',
      'In laboratory microgravity tests aboard the Space Shuttle, Aurelia jellyfish developed normally but struggled to orient when returned to Earth gravity.'
    ],
    examPoints: [
      'Class: Scyphozoa (true jellyfish), acraspedote (velum is absent).',
      'Eight marginal notches with Rhopalia (each with statocyst and ocellus).',
      'Four horseshoe-shaped gonads located in gastric pouches.',
      'Strobilation: asexual transverse fission of scyphistoma into ephyra larvae.',
      'Gastrovascular system: 4 perradial, 4 interradial (branched), 8 adradial (unbranched), and 1 circular ring canal.'
    ]
  },
  {
    id: 'tubipora',
    commonName: 'Organ Pipe Coral',
    scientificName: 'Tubipora musica',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Anthozoa',
      subclass: 'Octocorallia (Alcyonaria)',
      order: 'Alcyonacea',
      genus: 'Tubipora',
      species: 'musica'
    },
    accessionNo: 'INV-CNI-005',
    spotlightQuote: 'A living architectural symphony of crimson calcareous tubes joined in tiers like the pipes of a cathedral organ.',
    shortDescription: 'Colonial octocoral with a brilliant crimson-red skeleton formed of vertical parallel tubes connected by horizontal platforms.',
    identification: 'Brilliant crimson calcareous skeleton of vertical parallel tubes linked by horizontal platforms, bearing emerald polyps.',
    habitat: 'Shallow tropical coral reefs in warm, sunlit lagoons across the Indo-Pacific and Red Sea.',
    morphology: 'Colony forms large hemispherical heads up to 1 meter across. The skeleton consists of numerous parallel, upright cylindrical tubes made of bright red calcium carbonate, linked together at intervals by horizontal platforms. Living polyps are emerald green with eight pinnate (feather-like) tentacles extending from the tube openings.',
    anatomy: 'An octocoral possessing eight mesenteries, eight pinnate tentacles, and a single ciliated siphonoglyph in the pharynx. The brilliant red skeleton is internal, formed by the fusion of calcareous spicules embedded in the mesoglea of the colony stolons and platforms. Iron salts impart the characteristic deep crimson color.',
    nutrition: 'Mixotrophic: tentacles capture plankton, while endosymbiotic zooxanthellae residing in gastrodermal cells photosynthesize sugars and amino acids for the host.',
    reproduction: 'Broadcast spawning of gametes into seawater; planula larvae disperse and settle on reef substrate to build new tubular colonies.',
    specialFeatures: 'Unique organ-pipe skeletal architecture with vertical parallel tubes joined by transversal platforms; bright red skeleton that retains color even after dying and drying.',
    importance: 'Important reef-building species; dried skeletons are prized worldwide as decorative natural history ornaments and in traditional crafts.',
    interestingFacts: [
      'When the living green polyps are extended, the bright red skeleton is completely hidden beneath a carpet of emerald tentacles.',
      'The red color comes from iron salts integrated into the calcite crystals, not organic pigments, so it never fades in the sun.',
      'Named "musica" by Carl Linnaeus because the arranged tubes look identical to church organ pipes.'
    ],
    examPoints: [
      'Class: Anthozoa, Subclass: Octocorallia (Alcyonaria).',
      'Polyps possess exactly 8 pinnate (feather-like) tentacles and 8 complete mesenteries.',
      'Skeleton composed of fused red calcareous spicules forming vertical tubes and horizontal platforms.',
      'Color caused by iron oxide salts impregnated in the calcite matrix.'
    ]
  },
  {
    id: 'corallium',
    commonName: 'Precious Red Coral',
    scientificName: 'Corallium rubrum',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Anthozoa',
      subclass: 'Octocorallia',
      order: 'Alcyonacea',
      genus: 'Corallium',
      species: 'rubrum'
    },
    accessionNo: 'INV-CNI-006',
    spotlightQuote: 'An ancient Mediterranean treasure with an intensely crimson axial skeleton prized for thousands of years in royal jewelry.',
    shortDescription: 'Sessile colonial octocoral with a hard, dense, porcelain-like crimson axial skeleton of fused calcium carbonate spicules.',
    identification: 'Arborescent scarlet branching colony with dense, hard calcareous axial skeleton and dimorphic white octocoral polyps.',
    habitat: 'Sublittoral to bathyal zones (30–300 m) on rocky crevices, dark caverns, and overhangs in the Mediterranean Sea and Eastern Atlantic.',
    morphology: 'Branching tree-like colony measuring 20 to 50 cm tall, with rigid, leafless scarlet or vermilion branches. The surface is covered by a soft living cortical layer (coenenchyme) from which pure white, flower-like polyps emerge.',
    anatomy: 'Displays dimorphic polyps: autozooids (larger polyps with eight pinnate tentacles and digestive organs for feeding and reproduction) and siphonozooids (microscopic mouthless polyps functioning as water pumps through internal solenia canals). The central axial skeleton consists of crystalline magnesium-rich calcium carbonate tinted deep red by carotenoid pigments.',
    nutrition: 'Suspension feeder: autozooid polyps capture suspended organic matter, copepods, and micro-zooplankton carried by subterranean marine currents.',
    reproduction: 'Gonochoric (separate sexes); internal fertilization with females brooding embryos until ciliated planula larvae are released.',
    specialFeatures: 'Extremely dense, polishable red skeleton; dimorphism of polyps (autozooids and siphonozooids); exceptionally slow growth rate (2–8 mm per year).',
    importance: 'Historic and economic value as precious gemstone coral; heavily harvested since Roman antiquity, now strictly regulated under international conservation laws.',
    interestingFacts: [
      'In Greek mythology, red coral was born when Perseus placed the severed head of Medusa on sea reeds, whose blood petrified into red branches.',
      'A mature colony can take over 100 years to reach the thickness of a human wrist.',
      'The red color is so durable that Roman amulets carved over 2,000 years ago remain as intensely red today as when first harvested.'
    ],
    examPoints: [
      'Class: Anthozoa, Subclass: Octocorallia (Alcyonaria).',
      'Displays polyp dimorphism: Autozooids (feeding) and Siphonozooids (water circulation).',
      'Solid axial skeleton formed of fused calcareous spicules colored by carotenoid pigments.',
      'Polyps possess 8 pinnate tentacles, characteristic of all Octocorallia.'
    ]
  },
  {
    id: 'alcyonium',
    commonName: "Dead Man's Fingers",
    scientificName: 'Alcyonium digitatum',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Anthozoa',
      subclass: 'Octocorallia',
      order: 'Alcyonacea',
      genus: 'Alcyonium',
      species: 'digitatum'
    },
    accessionNo: 'INV-CNI-007',
    spotlightQuote: 'A fleshy, lobed colonial soft coral whose retracted winter form resembles ghostly, pale humanoid fingers.',
    shortDescription: 'Fleshy, lobed colonial soft coral without a rigid axial skeleton, supported internally by isolated spicules embedded in thick mesoglea.',
    identification: 'Fleshy, spongy lobed colonial soft coral lacking a rigid axis, supported by isolated calcareous spicules in thick mesoglea.',
    habitat: 'Cold and temperate shallow seas of the North Atlantic, English Channel, and North Sea on rocky reefs with strong tidal currents.',
    morphology: 'Colony forms thick, spongy, lobed masses resembling swollen human fingers or hand-like lobes, up to 20 cm across. Color ranges from creamy white and dull yellow to orange. When underwater currents flow, hundreds of translucent, star-like polyps blossom across the lobes.',
    anatomy: 'Lacks a solid stony or horny skeleton. Structural support is provided by hydrostatic fluid pressure and numerous microscopic, dumbbell-shaped calcareous spicules (sclerites) scattered throughout the thick gelatinous coenenchyme. Polyps are monomorphic autozooids with eight pinnate tentacles.',
    nutrition: 'Carnivorous passive filter feeder catching copepod nauplii and detritus in strong tidal currents.',
    reproduction: 'Dioecious; synchronous mass spawning in mid-winter (December/January); external fertilization yields planula larvae.',
    specialFeatures: 'Leathery, fleshy texture; complete absence of a central axial rod; spectacular expansion and contraction cycles depending on tidal water movement.',
    importance: 'Dominant space competitor in temperate European sublittoral ecosystems; model organism for studying soft coral chemical defense metabolites.',
    interestingFacts: [
      'When exposed at extreme low tide or washed ashore, the contracted, mucus-covered lobes look astonishingly like severed human fingers.',
      'During late autumn, the colony retracts all its polyps and covers itself in a brown biofilm for a month-long dormant cleansing rest.',
      'Contains anti-predatory terpenes that deter predatory fish and sea urchins.'
    ],
    examPoints: [
      'Class: Anthozoa, Subclass: Octocorallia (Alcyonaria).',
      'Lacks a hard axial skeleton; supported by scattered calcareous sclerites in the mesoglea.',
      'Monomorphic polyps with 8 pinnate tentacles.',
      'Colony consists of lobed, finger-like projections (hence the common name).'
    ]
  },
  {
    id: 'gorgonia',
    commonName: 'Sea Fan',
    scientificName: 'Gorgonia flabellum',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Anthozoa',
      subclass: 'Octocorallia',
      order: 'Alcyonacea (Gorgonacea)',
      genus: 'Gorgonia',
      species: 'flabellum'
    },
    accessionNo: 'INV-CNI-008',
    spotlightQuote: 'A majestic planar lace of flexible gorgonin protein oriented perpendicular to reef surge currents to sift the tides.',
    shortDescription: 'Erect, fan-shaped colonial octocoral with an intricate network of interconnected flexible branches supported by a horn-like gorgonin skeleton.',
    identification: 'Flat, planar, reticulate sea fan with interconnected branches supported by a flexible horny axial rod of gorgonin protein.',
    habitat: 'Tropical shallow coral reefs and reef crests (2–15 m) of the Bahamas, Florida Keys, and Caribbean Sea exposed to strong wave action.',
    morphology: 'Grows strictly in a single vertical plane, forming a flat, delicate mesh-like fan up to 1.5 meters wide and tall. Color is vivid purple, violet, or golden-yellow. The branches repeatedly divide and anastomose (re-fuse) to create a lace-like grid. The fan is always anchored by a broad basal disc.',
    anatomy: 'The central skeletal core is made of gorgonin—a flexible, sulfur-rich, collagen-like fibrous protein. This axis is enveloped by living coenenchyme containing calcareous spicules and embedded gastrovascular tubes (solenia). Tiny polyps with eight pinnate tentacles project in rows along the edges of the branches.',
    nutrition: 'The entire fan is oriented strictly perpendicular to the prevailing wave surge, functioning as a filtration grid to intercept zooplankton, suspended detritus, and marine snow.',
    reproduction: 'Sexual reproduction with broadcast spawning of gametes; ciliated planulae settle on bare limestone; also capable of rapid asexual regeneration after storm damage.',
    specialFeatures: 'Planar reticulate branching pattern; flexible gorgonin protein skeleton that bends without breaking in violent storm surge.',
    importance: 'Creates 3D structural habitat on Caribbean reefs; provides shelter for basket stars, seahorses, and flamingo tongue snails.',
    interestingFacts: [
      'The entire fan acts as a natural windsock: its growth orientation precisely records the direction of prevailing underwater currents.',
      'Produces natural antifungal prostaglandins that protect its tissues from oceanic microbial infections.',
      'The specialized Flamingo Tongue snail (Cyphoma gibbosum) feeds exclusively on sea fan coenenchyme without damaging the internal axis.'
    ],
    examPoints: [
      'Class: Anthozoa, Subclass: Octocorallia.',
      'Central axis made of the horny scleroprotein Gorgonin.',
      'Branches anastomose to form a planar network (fan-like flabellum).',
      'Polyps have 8 pinnate tentacles and 8 mesenteries.'
    ]
  },
  {
    id: 'adamsia',
    commonName: 'Cloak Anemone',
    scientificName: 'Adamsia palliata',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Anthozoa',
      subclass: 'Hexacorallia (Zoantharia)',
      order: 'Actiniaria',
      genus: 'Adamsia',
      species: 'palliata'
    },
    accessionNo: 'INV-CNI-009',
    spotlightQuote: 'A mutualistic sea anemone that wraps its body around a hermit crab shell, expanding the shell so the crab never outgrows it.',
    shortDescription: 'Solitary sea anemone that forms an obligate mutualistic symbiosis with hermit crabs, enveloping the gastropod shell like an elastic cloak.',
    identification: 'Solitary sea anemone with a bilobed pedal disc wrapped around a hermit crab gastropod shell, equipped with acontia.',
    habitat: 'Sublittoral offshore muddy and gravelly sea floors (10–200 m) in the North-East Atlantic and Mediterranean.',
    morphology: 'Basal pedal disc is greatly expanded and bilobed, wrapping completely around the gastropod shell occupied by the hermit crab (Pagurus prideaux). The mouth and tentacles face downward near the crab’s walking legs. The column is pinkish-fawn with striking magenta or purple spots.',
    anatomy: 'A hexacorallian sea anemone: tentacles and internal mesenteries occur in multiples of six. Around its base are specialized Cinclides—pores through which long, white, venomous defensive threads called Acontia are fired when agitated.',
    nutrition: 'Scavenger and carnivore: shares food scraps shredded by the hermit crab’s feeding claws; also captures bottom worms and amphipods using tentacular nematocysts.',
    reproduction: 'Dioecious with external fertilization producing planula larvae that seek out juvenile hermit crabs.',
    specialFeatures: 'Secretes a chitinous membrane (carcinoecium) from its base that artificially extends the aperture of the crab’s snail shell, so the crab never needs to seek a larger shell as it grows!',
    importance: 'Classic textbook demonstration of mutualistic symbiosis (protocooperation) between a cnidarian and an arthropod.',
    interestingFacts: [
      'The hermit crab gently strokes the anemone with its claws to coax it onto a new shell, and the anemone willingly transfers without stinging the crab.',
      'If attacked by an octopus, Adamsia fires hundreds of vivid violet acontia threads packed with nematocysts that drive the predator away.',
      'The crab protects the anemone from starfish, while the anemone protects the crab from octopuses and fishes.'
    ],
    examPoints: [
      'Class: Anthozoa, Subclass: Hexacorallia (Actiniaria).',
      'Exhibits obligate Mutualism with the hermit crab Pagurus prideaux.',
      'Possesses Cinclides and defensive Acontia (stinging threads).',
      'Secretes chitinous carcinoecium extending the crab’s gastropod shell.'
    ]
  },
  {
    id: 'pennatula',
    commonName: 'Sea Pen',
    scientificName: 'Pennatula phosphorea',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Anthozoa',
      subclass: 'Octocorallia',
      order: 'Pennatulacea',
      genus: 'Pennatula',
      species: 'phosphorea'
    },
    accessionNo: 'INV-CNI-010',
    spotlightQuote: 'A quill-shaped colonial octocoral anchored into benthic silt, emitting waves of bioluminescent blue-green light when disturbed.',
    shortDescription: 'Feather-like or quill-shaped colonial octocoral anchored upright in marine mud, renowned for vivid mechanical bioluminescence.',
    identification: 'Fleshy quill-shaped colony with an anchoring peduncle and an upper bilateral leaf-bearing rachis exhibiting bioluminescence.',
    habitat: 'Soft, muddy, or sandy sea bottoms from 15 to 2,000 meters depth in the North Atlantic and Mediterranean.',
    morphology: 'Resembles an antique quill pen (15–40 cm tall). The colony consists of a fleshy central stem: the lower unbranched stalk (peduncle) anchors in mud, while the upper axis (rachis) bears paired, bilateral lateral leaf-like pinnules lined with polyps. Color is carmine red, purple, or deep yellow.',
    anatomy: 'A specialized colonial octocoral with high polymorphism: primary axial polyp (oozooid) forms the central stem supported by an uncalcified horny axial rod; secondary polyps on the lateral leaves consist of autozooids (feeding and reproduction with 8 pinnate tentacles) and siphonozooids (water-pumping polyps governing hydrostatic inflation of the peduncle).',
    nutrition: 'Passive suspension filter feeder catching suspended organic particles and plankton in deep ocean currents.',
    reproduction: 'Gonochoric broadcast spawner; planula larvae settle directly into muddy ocean sediments.',
    specialFeatures: 'Peduncle can pump water in and out to burrow or inflate/deflate; emits vivid green-blue bioluminescence when physically touched or stressed.',
    importance: 'Key structural species in deep muddy benthic shelf ecosystems; model organism in marine bioluminescence biophysics.',
    interestingFacts: [
      'When brushed by a passing fish in total darkness, a brilliant wave of green light pulses down the length of the pen like a neon sign.',
      'If severely disturbed, it can deflate its entire feather and retract completely beneath the surface of the mud within minutes.',
      'Its specific name "phosphorea" directly references its glowing phosphorescent display.'
    ],
    examPoints: [
      'Class: Anthozoa, Subclass: Octocorallia, Order: Pennatulacea.',
      'Colony differentiated into Peduncle (anchoring stalk) and Rachis (bearing lateral leaves).',
      'Polymorphism: Autozooids (feeding/reproduction) and Siphonozooids (hydrostatic regulation).',
      'Exhibits marked Bioluminescence triggered by mechanical stimulation.'
    ]
  },
  {
    id: 'fungia',
    commonName: 'Mushroom Coral',
    scientificName: 'Fungia fungites',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Anthozoa',
      subclass: 'Hexacorallia',
      order: 'Scleractinia',
      genus: 'Fungia',
      species: 'fungites'
    },
    accessionNo: 'INV-CNI-011',
    spotlightQuote: 'A massive solitary unattached coral resembling the cap of an inverted mushroom, capable of righting itself if flipped over.',
    shortDescription: 'Large, solitary, disk-shaped unattached stony coral with radiating septa resembling the gill-bearing underside of a mushroom.',
    identification: 'Solitary, unattached circular stony corallum with radiating blade-like septa resembling an inverted mushroom cap.',
    habitat: 'Shallow tropical coral reefs (1–25 m) resting unattached on sandy substrate or reef rubble across the Indo-Pacific.',
    morphology: 'Unlike most corals, the adult Fungia is entirely solitary and unattached. The hard calcareous corallum is flat or gently dome-shaped, circular to oval, measuring 15 to 30 cm across. A central slit-like oral opening sits on the upper surface surrounded by hundreds of sharp, radiating skeletal blades (septa).',
    anatomy: 'A true scleractinian coral (Hexacorallia) with tentacles and septa in multiples of six. A single enormous polyp covers the entire upper surface of the limestone skeleton. The corallum is composed of pure aragonite (calcium carbonate). Tissues contain millions of intracellular zooxanthellae.',
    nutrition: 'Dual nutrition: relies heavily on photosynthetic energy from zooxanthellae; at night, short tentacles expand to capture zooplankton, small shrimp, and worms.',
    reproduction: 'Exhibits unique biphasic life history: planula larva settles and forms an attached stalked juvenile (anthocaulus). The disk then detaches like a mushroom cap (anthocyathus) to live freely on the sand, while the stalk can bud additional caps.',
    specialFeatures: 'Adult is solitary and unattached; possesses mobility: can inflate its tissues with seawater to right itself if overturned by storm waves, or shed sand by ciliary mucus currents.',
    importance: 'Critical reef-flat organism; vital bio-model for studying skeletal aragonite biomineralization and coral locomotion.',
    interestingFacts: [
      'If flipped upside-down by a turtle or rough waves, Fungia slowly pumps its tissues full of water like an airbag to flip itself back right-side up.',
      'It is one of the largest single coral polyps in existence, with some solitary specimens exceeding 40 cm in diameter.',
      'Can crawl slowly across sandy patches by inflating and deflating different quadrants of its body wall.'
    ],
    examPoints: [
      'Class: Anthozoa, Subclass: Hexacorallia, Order: Scleractinia (true stony corals).',
      'Adult is Solitary and Unattached (free-living on sandy reef flats).',
      'Skeleton composed of Aragonite with radiating blade-like Septa.',
      'Juvenile stage is a stalked Anthocaulus; adult free disk is an Anthocyathus.'
    ]
  },
  {
    id: 'meandrina',
    commonName: 'Brain Coral',
    scientificName: 'Meandrina meandrites',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Anthozoa',
      subclass: 'Hexacorallia',
      order: 'Scleractinia',
      genus: 'Meandrina',
      species: 'meandrites'
    },
    accessionNo: 'INV-CNI-012',
    spotlightQuote: 'A massive hermatypic coral whose meandering labyrinth of valleys and ridges mirrors the convolutions of the human cerebrum.',
    shortDescription: 'Massive hemispherical stony coral featuring winding, sinuous corallite valleys separated by steep ridges resembling human cerebral gyri.',
    identification: 'Massive hemispherical dome with meandering labyrinthine valleys and steep ridges resembling cerebral convolutions.',
    habitat: 'Shallow to mid-depth tropical reefs (3–30 m) throughout the Caribbean Sea, Bahamas, and Gulf of Mexico.',
    morphology: 'Forms solid hemispherical domes or robust columnar boulders up to 1 meter in diameter. The skeletal surface is covered in deep, meandering valleys (1–2 cm wide) that wind continuously across the surface. At night, translucent tentacles expand from the valleys to feed.',
    anatomy: 'A colonial scleractinian with meandroid corallite integration: adjacent polyps fuse linearly within the valleys, sharing a common gastrovascular groove and mouth series while retaining distinct septal ridges (collines). The skeleton is dense, massive aragonite.',
    nutrition: 'Mixotrophic: daytime nutrition from symbiotic zooxanthellae; nocturnal extension of sweeping tentacular nets to capture pelagic zooplankton.',
    reproduction: 'Simultaneous hermaphroditic broadcast spawner during late-summer lunar spawning events; planulae settle to begin new colonies.',
    specialFeatures: 'Meandroid colony integration; deep robust septa with fine denticulations; high structural density providing storm resistance to Caribbean reefs.',
    importance: 'Primary framework builder of Western Atlantic coral reefs; provides immense calcium carbonate accretion and shoreline wave protection.',
    interestingFacts: [
      'Colonies can live for over 400 years, with annual growth bands in their skeletons recording past ocean temperatures like tree rings.',
      'Despite looking like a single brain, the colony contains thousands of interconnected individual coral polyps.',
      'Possesses extraordinary resistance to heavy sedimentation by producing self-cleaning mucus sheets.'
    ],
    examPoints: [
      'Class: Anthozoa, Subclass: Hexacorallia, Order: Scleractinia.',
      'Exhibits Meandroid colony growth where corallites fuse into continuous winding valleys.',
      'Skeletal ridges are called Collines; valleys contain the oral apertures.',
      'Major Hermatypic (reef-building) coral with aragonite skeleton.'
    ]
  },
  {
    id: 'madrepora',
    commonName: 'Staghorn / Branching Coral',
    scientificName: 'Madrepora oculata',
    phylumId: 'cnidaria',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Anthozoa',
      subclass: 'Hexacorallia',
      order: 'Scleractinia',
      genus: 'Madrepora',
      species: 'oculata'
    },
    accessionNo: 'INV-CNI-013',
    spotlightQuote: 'A prolific branching deep-water stony coral that builds cold-water reef sanctuaries in pitch-black abyssal trenches.',
    shortDescription: 'Branching colonial scleractinian with delicate zigzag branches and prominent protruding cylindrical corallites.',
    identification: 'Bushy branching stony coral with delicate zigzag branches and prominent projecting cylindrical corallite cups.',
    habitat: 'Cosmopolitan deep cold-water reefs (80–1,500 m) in total darkness, as well as shallow tropical reefs.',
    morphology: 'Bushy, dichotomously branching colonies up to 50 cm high. The branches follow a distinctive zigzag or alternating path, with prominent cup-like corallites (thecae) projecting alternately along opposite sides of the white or pale pink skeleton.',
    anatomy: 'Hexacorallian stony coral with polyps possessing 12 to 24 tentacles. Because it thrives in dark, cold deep-sea environments, it lacks photosynthetic zooxanthellae (azooxanthellate coral) and relies 100% on external prey capture.',
    nutrition: 'Strict carnivore: feeds on descending particulate organic carbon, copepods, and krill drifting along deep sea contours.',
    reproduction: 'Dioecious with broadcast spawning; planula larvae drift for weeks across deep oceanic currents before settling on hard rocks.',
    specialFeatures: 'Azooxanthellate (lacks symbiotic algae); thrives in cold water down to 4°C; zigzag branching architecture with alternating corallites.',
    importance: 'Critical foundation species of global deep-sea coral reef ecosystems, providing nursery grounds for commercial deep-sea fish species.',
    interestingFacts: [
      'Unlike tropical reef corals, Madrepora builds entire mountain-sized reefs in complete pitch-black darkness without a ray of sunlight.',
      'Deep-sea fishing trawlers severely threaten its fragile, centuries-old branching thickets.',
      'Its specific name "oculata" means "bearing eyes," referring to the round, eye-like corallite cups along the branches.'
    ],
    examPoints: [
      'Class: Anthozoa, Subclass: Hexacorallia, Order: Scleractinia.',
      'Exhibits alternating/zigzag branching with prominent projecting corallites.',
      'Often Azooxanthellate (cold-water deep-sea coral independent of sunlight).',
      'Produces a porous, branching aragonite exoskeleton.'
    ]
  },

  // ================= CTENOPHORA =================
  {
    id: 'beroe',
    commonName: 'Melon Comb Jelly / Sea Walnut',
    scientificName: 'Beroe cucumis',
    phylumId: 'ctenophora',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Ctenophora',
      class: 'Nuda (Atentaculata)',
      order: 'Beroida',
      genus: 'Beroe',
      species: 'cucumis'
    },
    accessionNo: 'INV-CTE-001',
    spotlightQuote: 'A voracious pelagic hunter with an enormous gaping mouth, lacking tentacles and swallowing other comb jellies whole.',
    shortDescription: 'Thimble- or melon-shaped transparent pelagic comb jelly that completely lacks tentacles, propelled by eight iridescent ciliated comb rows.',
    identification: 'Melon-shaped transparent ctenophore completely lacking tentacles, propelled by 8 iridescent ciliated comb rows.',
    habitat: 'Cold and temperate marine pelagic waters, common in Arctic, Atlantic, and North Pacific coastal and offshore waters.',
    morphology: 'Mitre-shaped, cylindrical, or thimble-shaped gelatinous body (5–15 cm long), laterally compressed with a wide, gaping oral aperture occupying the entire anterior end. Eight longitudinal meridional comb rows (ctenes) extend from the aboral pole down 3/4 of the body. Color is pinkish-translucent with shimmering rainbow fringes along the ctenes.',
    anatomy: 'Belongs to Class Nuda: completely lacks tentacles, tentacle sheaths, and colloblasts at all life stages. The interior is largely taken up by an enormous stomodeal pharynx lined with macrocilia that act like teeth to cut and ingest prey. Eight branching meridional gastrovascular canals radiate beneath the comb plates.',
    nutrition: 'Hyper-carnivorous apex gelatinous predator: preys almost exclusively on other ctenophores (such as Pleurobrachia and Bolinopsis). It engulfs prey whole, sealing its enormous lips with biological adhesive strips, and uses muscular churning to digest them in minutes.',
    reproduction: 'Hermaphroditic; gametes shed into the sea; external fertilization produces a direct-developing cydippid-like form that lacks tentacles.',
    specialFeatures: 'Completely devoid of tentacles (Class Nuda); giant oral lips lined with macroscopic fused cilia (macrocilia) serving as cutting teeth; dazzling bioluminescence and ciliary optical iridescence.',
    importance: 'Natural biological control agent of other ctenophore populations; introduced into the Black Sea where it successfully curtailed invasive Mnemiopsis blooms.',
    interestingFacts: [
      'The "rainbows" running along its body are not bioluminescence, but the physical diffraction of white light by millions of coordinated beating cilia.',
      'Can swallow another ctenophore larger than itself by stretching its elastic muscular pharynx like an anaconda.',
      'Its lips feature microscopic chemical velcro-like structures that seal the mouth shut during digestion.'
    ],
    examPoints: [
      'Class: Nuda (Atentaculata) — completely lacks tentacles and colloblasts.',
      'Possesses 8 meridional ciliated comb rows (ctenes) used for locomotion.',
      'Mouth is enormous, leading directly into an expansive pharynx.',
      'Aboral pole bears a single Statocyst (equilibrium sense organ).',
      'Feeds as a predator on tentaculate ctenophores.'
    ]
  },
  {
    id: 'ctenoplana',
    commonName: 'Creeping Comb Jelly',
    scientificName: 'Ctenoplana kowalevskii',
    phylumId: 'ctenophora',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Ctenophora',
      class: 'Tentaculata',
      order: 'Platyctenida',
      genus: 'Ctenoplana',
      species: 'kowalevskii'
    },
    accessionNo: 'INV-CTE-002',
    spotlightQuote: 'A bizarre evolutionary intermediate: a comb jelly that abandoned open-water swimming to creep like a flatworm over corals.',
    shortDescription: 'Dorsoventrally flattened, benthic creeping ctenophore resembling a flatworm, with reduced comb plates and two long retractile tentacles.',
    identification: 'Dorsoventrally flattened benthic creeping ctenophore with reduced comb plates and two long retractile pinnate tentacles.',
    habitat: 'Warm tropical shallow marine waters, creeping over alcyonarian soft corals, gorgonians, and echinoderms in the Indo-West Pacific.',
    morphology: 'Flattened, disc-like or oval body (6–10 mm across) adapted for creeping. The dorsal surface is brightly mottled with green, brown, or red patterns. The ventral surface is pale and flat, serving as a creeping sole. Eight tiny comb rows are reduced to short segments around the central aboral statocyst.',
    anatomy: 'Remarkable anatomical modification of the ctenophore plan: the oral-aboral axis is compressed dorsoventrally. Two deep lateral tentacle sheaths house long pinnate tentacles armed with sticky colloblasts. The stomodeum is turned outward (everted) across the ventral surface to secrete mucus and creep over benthic surfaces.',
    nutrition: 'Carnivorous: creeps over soft coral colonies, extending its two long feathery tentacles into water currents to trap copepods and larvae on sticky colloblasts.',
    reproduction: 'Hermaphroditic; internal fertilization occurs in brood chambers; development produces a typical free-swimming cydippid larva that settles to the seafloor.',
    specialFeatures: 'Benthic creeping lifestyle; extreme dorsoventral flattening; reduced comb plates; represents an astonishing convergence toward the platyhelminth (flatworm) body form.',
    importance: 'Classic evolutionary link historically studied by zoologists investigating the transition between Radiata and Bilateria.',
    interestingFacts: [
      'When first discovered by Kowalevsky in 1880, biologists argued for decades whether it was a modified jellyfish or a walking worm.',
      'It can swim briefly if detached from substrate by flapping the lateral margins of its flattened body.',
      'Its reduced comb rows beat only occasionally, functioning primarily as sensory aids rather than swimming oars.'
    ],
    examPoints: [
      'Class: Tentaculata, Order: Platyctenida.',
      'Body is dorsoventrally flattened and modified for creeping on substrate (benthic).',
      'Comb rows are reduced to 8 short rudimentary plates surrounding the aboral statocyst.',
      'Possesses two retractile tentacles equipped with Colloblasts.',
      'Serves as a classic example of evolutionary convergence toward a flatworm-like habit.'
    ]
  },

  // ================= PLATYHELMINTHES =================
  {
    id: 'fasciola',
    commonName: 'Sheep Liver Fluke',
    scientificName: 'Fasciola hepatica',
    phylumId: 'platyhelminthes',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Platyhelminthes',
      class: 'Trematoda (Digenea)',
      order: 'Echinostomida',
      genus: 'Fasciola',
      species: 'hepatica'
    },
    accessionNo: 'INV-PLA-001',
    spotlightQuote: 'A leaf-shaped endoparasitic trematode causing liver rot, equipped with an oral sucker and a branched blind intestine.',
    shortDescription: 'Dorsoventrally flattened, leaf-shaped endoparasitic fluke infecting the bile ducts of sheep, cattle, and humans, requiring a freshwater snail as an intermediate host.',
    identification: 'Dorsoventrally flattened leaf-like fluke with conical cephalic cone, oral sucker, ventral acetabulum, and branched gut caeca.',
    habitat: 'Endoparasite residing in the bile ducts and liver tissue of sheep, cattle, and occasionally humans; intermediate host is the freshwater pond snail (Lymnaea).',
    morphology: 'Flat, leaf-like body measuring 20 to 30 mm long and 8 to 13 mm wide, greyish-pink or pale brown with transparent lateral margins. The anterior end tapers into a triangular cephalic cone with a terminal oral sucker. A second cup-shaped muscular sucker, the ventral sucker (acetabulum), is located just behind the neck for attachment.',
    anatomy: 'Covered by a thick, syncytial, spiny tegument protecting it against host bile and digestive enzymes. Incomplete digestive system: mouth leads to a muscular pharynx and two deeply branched intestinal caeca ending blindly (no anus). Flame cells drain into a median longitudinal excretory duct opening via a posterior excretory pore. Ladder-like nervous system with paired cerebral ganglia.',
    nutrition: 'Feeds on host blood, bile, and liver cells sucked into its muscular pharynx and digested in branched intestinal caeca.',
    reproduction: 'Hermaphroditic (monoecious) with an exceptionally complex reproductive system: highly branched dendritic testes, single tubular branched ovary, extensive lateral vitelline glands, and convoluted uterus. Copulation via cirrus leads to production of thousands of operculated eggs.',
    lifeCycle: 'Digenetic life cycle requiring two hosts: Adult in sheep bile ducts → Operculated eggs passed in feces → Miracidium larva (ciliated) enters Lymnaea snail → Sporocyst → Redia (1st & 2nd gen) → Cercaria (tailed) leaves snail → Encysts on grass blades as Metacercaria → Ingested by sheep/cattle → Excysts in duodenum and migrates to liver.',
    specialFeatures: 'Digenetic life cycle involving five distinct larval stages (Miracidium, Sporocyst, Redia, Cercaria, Metacercaria); extensive polyembryony inside the snail host.',
    importance: 'Causes Fascioliasis ("liver rot") in livestock, leading to massive global agricultural losses and human zoonotic infections.',
    interestingFacts: [
      'A single miracidium penetrating a snail can amplify through polyembryony into over 500 swimming cercaria larvae.',
      'Humans contract the parasite by eating raw wild watercress contaminated with encysted metacercariae.',
      'Adult flukes can live in human bile ducts for up to 12 years, feeding continuously on blood.'
    ],
    examPoints: [
      'Class: Trematoda, Subclass: Digenea (two hosts: Primary host = Sheep/Human; Intermediate host = Lymnaea snail).',
      'Body is leaf-like, acoelomate, triploblastic, and dorsoventrally flattened.',
      'Two suckers: Oral sucker (feeding/attachment) and Ventral sucker / Acetabulum (attachment only).',
      'Digestive system is incomplete with branched blind-ended intestinal caeca (no anus).',
      'Excretion and osmoregulation executed by Flame Cells (protonephridia).',
      'Five larval stages in order: Miracidium → Sporocyst → Redia → Cercaria → Metacercaria.'
    ],
    anatomicalFlow: {
      title: 'Fasciola hepatica Digenetic Life Cycle Stages',
      path: ['Egg in Feces', 'Miracidium (enters snail)', 'Sporocyst', 'Redia', 'Cercaria (leaves snail)', 'Metacercaria (on grass)', 'Adult in Sheep Liver'],
      description: 'The digenetic cycle alternates between sexual reproduction in the primary mammalian host and massive asexual polyembryony in the intermediate freshwater snail.'
    }
  },
  {
    id: 'taenia',
    commonName: 'Pork Tapeworm',
    scientificName: 'Taenia solium',
    phylumId: 'platyhelminthes',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Platyhelminthes',
      class: 'Cestoda',
      order: 'Cyclophyllidea',
      genus: 'Taenia',
      species: 'solium'
    },
    accessionNo: 'INV-PLA-002',
    spotlightQuote: 'An intestinal endoparasite measuring meters in length, armed with an apical rostellum of chitinous hooks and lacking any gut.',
    shortDescription: 'Ribbon-like segmented endoparasite infecting the human small intestine, armed with an anchor-bearing scolex and hundreds of reproductive proglottids.',
    identification: 'Ribbon-like strobila with scolex bearing four suckers and hooked rostellum, lacking mouth and digestive tract.',
    habitat: 'Adult tapeworm lives attached to the mucosal lining of the human small intestine; larval stage (Cysticercus cellulosae) resides in the striated muscles of pigs.',
    morphology: 'Elongated, ribbon-like, dorsoventrally flattened body (strobila) measuring 2 to 4 meters in length. Divided into three distinct regions: 1) Scolex (tiny knob-like head with four hemispherical suckers and an apical rostellum with 22–32 chitinous hooks); 2) Unsegmented neck (zone of proliferation); 3) Strobila consisting of 800–1,000 segments called proglottids (immature, mature, and gravid).',
    anatomy: 'Completely lacks a mouth, pharynx, and digestive canal (alimentary system is 100% absent). The outer body is covered by a specialized syncytial tegument covered in millions of microscopic finger-like folds called microtriches, which maximize absorption of host nutrients. Flame cell excretory canals run along both margins.',
    nutrition: 'Absorptive nutrition (saprozoic): absorbs glucose, amino acids, and fatty acids directly from host pre-digested chime across its microtriches-lined tegument.',
    reproduction: 'Monoecious; each mature proglottid contains a complete set of male and female reproductive organs. Self-fertilization within or between proglottids is standard. Gravid proglottids at the posterior end contain a tree-like branched uterus packed with 30,000–50,000 onchosphere eggs, which detach via apolysis.',
    lifeCycle: 'Digenetic: Human (definitive host) passes gravid proglottids/eggs in stool → Ingested by pig (intermediate host) → Hexacanth embryo hatches in pig gut, penetrates vessels, and encysts in muscle as "measly pork" (Cysticercus cellulosae) → Human eats undercooked infected pork → Scolex everts in human intestine and grows into adult tapeworm.',
    specialFeatures: 'Total absence of digestive system; presence of armed scolex with rostellum and dual hook ring; microtriches on tegument; causes human neurocysticercosis if eggs are accidentally ingested.',
    importance: 'Major human pathogen causing Taeniasis (digestive discomfort) and Neurocysticercosis (larval cysts in the human brain causing epilepsy and death).',
    interestingFacts: [
      'If a human accidentally swallows Taenia solium eggs directly, the larvae hatch inside the human body and form dangerous cysts in the brain, eyes, and muscles (Cysticercosis).',
      'The tapeworm has evolved without a stomach or intestine for over 100 million years, letting its host do all the digestion.',
      'Gravid proglottids can crawl like tiny caterpillars out of the human anus to deposit eggs in soil.'
    ],
    examPoints: [
      'Class: Cestoda, Order: Cyclophyllidea.',
      'Body consists of Scolex (head with 4 suckers & armed rostellum), Neck, and Strobila.',
      'Completely lacks digestive tract; nutrient absorption occurs via Tegument lined with Microtriches.',
      'Definitive host is Human; Intermediate host is Pig (Sus scrofa).',
      'Larva is Cysticercus cellulosae (Bladder worm) with an invaginated scolex.',
      'Apolysis is the shedding of gravid proglottids packed with hexacanth onchosphere eggs.'
    ],
    anatomicalFlow: {
      title: 'Taenia solium Proglottid Strobilation Flow',
      path: ['Scolex & Neck (Proliferation Zone)', 'Immature Proglottids (Organ buds)', 'Mature Proglottids (Functional gonads)', 'Gravid Proglottids (Branched uterus + eggs)', 'Apolysis (Detachment in feces)'],
      description: 'Continuous budding at the neck generates hundreds of progressively maturing proglottids that become egg-filled sacs released by apolysis.'
    }
  },

  // ================= NEMATHELMINTHES =================
  {
    id: 'ascaris',
    commonName: 'Giant Intestinal Roundworm',
    scientificName: 'Ascaris lumbricoides',
    phylumId: 'nemathelminthes',
    classification: {
      kingdom: 'Animalia',
      phylum: 'Nemathelminthes (Nematoda)',
      class: 'Secernentea (Phasmida)',
      order: 'Ascaridida',
      genus: 'Ascaris',
      species: 'lumbricoides'
    },
    accessionNo: 'INV-NEM-001',
    spotlightQuote: 'A cylindrical pseudocoelomate endoparasite encased in a collagenous cuticle, embarking on an extraordinary migratory journey through host lungs.',
    shortDescription: 'Large, unsegmented cylindrical roundworm living as an endoparasite in the human small intestine, exhibiting pronounced sexual dimorphism.',
    identification: 'Cylindrical unsegmented roundworm with three anterior lips, tough collagenous cuticle, and pronounced sexual dimorphism.',
    habitat: 'Lumen of the human small intestine (jejunum and ileum); free-living eggs develop in warm, moist, contaminated soil.',
    morphology: 'Elongated, cylindrical, pale yellowish-pink body tapering at both anterior and posterior extremities. Marked sexual dimorphism: females are longer (20–40 cm) and thicker with a straight conical posterior end; males are distinctly smaller (15–30 cm) with a ventrally curved posterior tail bearing two equal chitinous copulatory spicules (penial setae) projecting from the cloaca. Body wall displays four longitudinal streaks (one dorsal, one ventral, two lateral).',
    anatomy: 'Body wall composed of: 1) Non-living tough cuticle with lipid and collagen layers; 2) Syncytial hypodermis bulging inward to form four chords; 3) Single layer of longitudinal muscle fibers divided into four quadrants (circular muscles absent). Body cavity is a fluid-filled pseudocoelom under high turgor pressure. Alimentary canal is complete: anterior mouth guarded by three sensory lips (one dorsal, two subventral), muscular pharynx, straight non-muscular tubular intestine, and posterior anus (or cloaca in males).',
    nutrition: 'Holozoic saprozoic: feeds on host pre-digested food pulp present in the intestinal lumen, pumped inward by the rhythmic swallowing action of its muscular triradiate pharynx.',
    reproduction: 'Dioecious (unisexual) with internal fertilization. Female reproductive system is didelphic (paired ovaries, oviducts, and uteri opening into a single vulva at the anterior third). A single female produces up to 200,000 mamillated eggs per day.',
    lifeCycle: 'Monogenetic (single host): Adult in human intestine → Fertilized eggs passed in stool → Embryonate in soil (rhabditiform larva develops inside egg shell) → Contaminated food/water ingested by human → Larva hatches in duodenum, penetrates mucosa into mesenteric venules → Liver (hepatic portal system) → Right heart → Pulmonary capillaries → Alveoli of lungs (grows and molts) → Ascends trachea and larynx → Swallowed down esophagus into stomach → Small intestine, maturing into adult worm.',
    specialFeatures: 'Complete digestive tract with 3 sensory lips; high-pressure pseudocoelom; absence of circular muscles; elaborate pulmonary migration cycle of larvae through the host circulatory system and lungs.',
    importance: 'Causes Ascariasis worldwide; causes intestinal blockage, malnutrition in children, appendicitis, and Loeffler’s syndrome (verminous pneumonia during lung migration).',
    interestingFacts: [
      'A female Ascaris can lay up to 200,000 eggs every single day—over 60 million eggs in her lifetime!',
      'The microscopic larva travels over 3,000 miles inside the human bloodstream, passing through liver, heart, and lungs before being coughed up and swallowed back into the belly.',
      'The thick chitinous and proteinaceous egg shell can survive in soil soaked in 10% formalin for months.'
    ],
    examPoints: [
      'Class: Secernentea (Phasmida) — possesses caudal sensory phasmids.',
      'Pronounced sexual dimorphism: Male smaller with curved tail and 2 equal copulatory spicules; Female larger with straight tail and vulva at anterior third.',
      'Body wall contains ONLY longitudinal muscles (polymyarian/meromyarian condition); circular muscles are absent.',
      'Pseudocoelomate body cavity filled with pressurized pseudocoelomic fluid.',
      'Mouth surrounded by 3 sensory lips: 1 median dorsal lip and 2 ventrolateral lips.',
      'Larval pulmonary migration: Intestine → Mesenteric veins → Liver → Heart → Lungs (alveoli) → Trachea → Pharynx → Intestine.'
    ],
    anatomicalFlow: {
      title: 'Ascaris Larval Pulmonary Migration Pathway',
      path: ['Duodenum (Hatching)', 'Hepatic Portal Vein', 'Liver Tissue', 'Post-Caval Vein & Right Heart', 'Pulmonary Arteries & Lungs', 'Trachea & Larynx (Swallowed)', 'Intestine (Adult Maturity)'],
      description: 'The hatched rhabditiform larva embarks on an obligate circulatory-pulmonary transit through the host lungs before attaining maturity in the gut.'
    }
  }
];

export const quickZoologyFacts = [
  {
    fact: 'Euplectella (Venus\' flower basket) is presented as a traditional wedding gift in Japan because a pair of commensal shrimp spend their entire adult lives enclosed together inside its glass lattice.',
    specimenId: 'euplectella',
    phylumId: 'porifera'
  },
  {
    fact: 'Physalia physalis (Portuguese man-of-war) is not a single animal, but a floating colony composed of thousands of genetically identical specialized zooids sharing one continuous stomach.',
    specimenId: 'physalia',
    phylumId: 'cnidaria'
  },
  {
    fact: 'The flashing rainbow bands along the body of Beroe are not bioluminescence, but the physical refraction of ambient light by millions of coordinated beating cilia in its comb rows.',
    specimenId: 'beroe',
    phylumId: 'ctenophora'
  },
  {
    fact: 'Tapeworms have completely lost their mouth, stomach, and digestive tract through evolution. They absorb all nutrients directly through microscopic folds (microtriches) covering their outer skin.',
    specimenId: 'taenia',
    phylumId: 'platyhelminthes'
  },
  {
    fact: 'A single female Ascaris roundworm produces up to 200,000 eggs every single day, protected by an indestructible triple-layered shell that resists acids and bleach.',
    specimenId: 'ascaris',
    phylumId: 'nemathelminthes'
  },
  {
    fact: 'Millepora (Fire coral) is not a true coral, but a hydrozoan closely related to Hydra. Its stinging dactylozooids cause intense burning contact dermatitis in divers.',
    specimenId: 'millepora',
    phylumId: 'cnidaria'
  },
  {
    fact: 'Corallium rubrum (Precious red coral) has been harvested from the Mediterranean for over 3,000 years for royal jewelry; its deep red color comes from iron salts embedded in calcite.',
    specimenId: 'corallium',
    phylumId: 'cnidaria'
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Which characteristic cell type is exclusively found in Phylum Porifera and functions in generating water current and capturing food?',
    options: ['Cnidocytes', 'Choanocytes', 'Colloblasts', 'Flame cells'],
    correctIndex: 1,
    explanation: 'Choanocytes (flagellated collar cells) are unique to Porifera. Their flagellar beats drive water through the canal system, trapping food particles on their microvilli collars.',
    phylumId: 'porifera',
    type: 'mcq'
  },
  {
    id: 'q2',
    question: 'Which of the following organisms is known as the "Venus\' flower basket" and is made of a fused silicious spicule framework?',
    options: ['Hyalonema', 'Spongilla', 'Euplectella', 'Sycon'],
    correctIndex: 2,
    explanation: 'Euplectella aspergillum (Venus\' flower basket) belongs to Hexactinellida and possesses a remarkable curved cylindrical skeleton of fused silicious spicules.',
    specimenId: 'euplectella',
    phylumId: 'porifera',
    type: 'spotter'
  },
  {
    id: 'q3',
    question: 'The polymorphic floating colony Physalia physalis (Portuguese man-of-war) belongs to which cnidarian class?',
    options: ['Scyphozoa', 'Hydrozoa', 'Anthozoa', 'Cubozoa'],
    correctIndex: 1,
    explanation: 'Physalia belongs to Class Hydrozoa, Order Siphonophorae. It is an integrated colony of polypoid and medusoid zooids suspended from an air-filled pneumatophore.',
    specimenId: 'physalia',
    phylumId: 'cnidaria',
    type: 'identify_phylum'
  },
  {
    id: 'q4',
    question: 'What is the correct sequence of water flow through the syconoid canal system in Sycon?',
    options: [
      'Ostia → Radial Canal → Incurrent Canal → Spongocoel → Osculum',
      'Ostia → Incurrent Canal → Prosopyle → Radial Canal → Apopyle → Spongocoel → Osculum',
      'Osculum → Spongocoel → Radial Canal → Incurrent Canal → Ostia',
      'Ostia → Prosopyle → Spongocoel → Radial Canal → Osculum'
    ],
    correctIndex: 1,
    explanation: 'Water enters through dermal ostia into incurrent canals, passes via prosopyles into radial canals (lined with choanocytes), exits via apopyles into the central spongocoel, and leaves through the osculum.',
    specimenId: 'sycon',
    phylumId: 'porifera',
    type: 'mcq'
  },
  {
    id: 'q5',
    question: 'How do comb jellies (Ctenophora) differ primarily from Cnidaria regarding prey capture organelles?',
    options: [
      'Ctenophores possess venomous nematocysts',
      'Ctenophores possess adhesive colloblasts and lack nematocysts',
      'Ctenophores possess radular teeth',
      'Ctenophores do not capture living prey'
    ],
    correctIndex: 1,
    explanation: 'Ctenophores lack stinging nematocysts (which are characteristic of Cnidaria) and instead utilize adhesive colloblast (lasso) cells that secrete glue to ensnare prey.',
    phylumId: 'ctenophora',
    type: 'mcq'
  },
  {
    id: 'q6',
    question: 'In Fasciola hepatica (Sheep liver fluke), which larval stage directly penetrates the intermediate host snail Lymnaea?',
    options: ['Cercaria', 'Metacercaria', 'Miracidium', 'Redia'],
    correctIndex: 2,
    explanation: 'The free-swimming ciliated Miracidium larva hatches from the egg in water and actively seeks and penetrates the tissues of the intermediate snail host.',
    specimenId: 'fasciola',
    phylumId: 'platyhelminthes',
    type: 'mcq'
  },
  {
    id: 'q7',
    question: 'True or False: Adult tapeworms (Taenia solium) possess a complete digestive system with a muscular pharynx and straight intestine.',
    options: ['True', 'False'],
    correctIndex: 1,
    explanation: 'False! Tapeworms (Class Cestoda) completely lack any digestive tract, mouth, or anus. They absorb pre-digested nutrients directly through microtriches across their syncytial tegument.',
    specimenId: 'taenia',
    phylumId: 'platyhelminthes',
    type: 'true_false'
  },
  {
    id: 'q8',
    question: 'Which feature distinguishes male Ascaris lumbricoides from the female worm?',
    options: [
      'Male is larger and possesses a straight posterior tail',
      'Male is smaller with a ventrally curved tail and two copulatory spicules',
      'Male lacks a digestive system',
      'Male possesses circular muscles in the body wall'
    ],
    correctIndex: 1,
    explanation: 'Male Ascaris worms are noticeably smaller than females and exhibit a sharp, ventrally curved posterior tail armed with two chitinous copulatory spicules (penial setae) used during mating.',
    specimenId: 'ascaris',
    phylumId: 'nemathelminthes',
    type: 'spotter'
  },
  {
    id: 'q9',
    question: 'What is the characteristic excretory / osmoregulatory organ of Phylum Platyhelminthes?',
    options: ['Nephridia', 'Flame cells (Protonephridia)', 'Malpighian tubules', 'Renette cells'],
    correctIndex: 1,
    explanation: 'Platyhelminthes possess specialized terminal flame cells (solenocytes/protonephridia) with flickering ciliary tufts that draw fluid through filtration slits for osmoregulation and excretion.',
    phylumId: 'platyhelminthes',
    type: 'mcq'
  },
  {
    id: 'q10',
    question: 'The mutualistic cloak anemone Adamsia palliata is famously found living in association with which animal?',
    options: ['Hermit crab', 'Clownfish', 'Sea urchin', 'Sponge'],
    correctIndex: 0,
    explanation: 'Adamsia palliata lives in mutualistic symbiosis with the hermit crab Pagurus prideaux, enveloping its shell and secreting a membrane that extends the shell as the crab grows.',
    specimenId: 'adamsia',
    phylumId: 'cnidaria',
    type: 'spotter'
  }
];

export const comparativeZoologyData = [
  {
    feature: 'Level of Organization',
    porifera: 'Cellular grade (Parazoa)',
    cnidaria: 'Tissue grade (Eumetazoa)',
    ctenophora: 'Tissue-organ grade',
    platyhelminthes: 'Organ-system grade',
    nemathelminthes: 'Organ-system grade'
  },
  {
    feature: 'Symmetry',
    porifera: 'Mostly asymmetrical, rare radial',
    cnidaria: 'Radial or biradial',
    ctenophora: 'Biradial',
    platyhelminthes: 'Bilateral',
    nemathelminthes: 'Bilateral (triradiate mouth)'
  },
  {
    feature: 'Germ Layers',
    porifera: 'Absent (Pinacoderm & Choanoderm)',
    cnidaria: 'Diploblastic (Ectoderm, Endoderm)',
    ctenophora: 'Diploblastic / Triploblastic',
    platyhelminthes: 'Triploblastic',
    nemathelminthes: 'Triploblastic'
  },
  {
    feature: 'Body Cavity (Coelom)',
    porifera: 'Acoelomate (Spongocoel)',
    cnidaria: 'Acoelomate (Coelenteron)',
    ctenophora: 'Acoelomate',
    platyhelminthes: 'Acoelomate (Parenchyma)',
    nemathelminthes: 'Pseudocoelomate'
  },
  {
    feature: 'Digestive Tract',
    porifera: 'Intracellular only (Choanocytes)',
    cnidaria: 'Incomplete (Gastrovascular cavity)',
    ctenophora: 'Incomplete with anal pores',
    platyhelminthes: 'Incomplete (Blind caeca) or absent',
    nemathelminthes: 'Complete (Mouth to Anus)'
  },
  {
    feature: 'Distinctive Cell / Feature',
    porifera: 'Choanocytes & Spicules',
    cnidaria: 'Cnidocytes with Nematocysts',
    ctenophora: '8 Comb rows & Colloblasts',
    platyhelminthes: 'Flame cells & Flat body',
    nemathelminthes: 'Cuticle, Pseudocoel & Renette cells'
  },
  {
    feature: 'Excretory Organs',
    porifera: 'Diffusion across cell membranes',
    cnidaria: 'General body surface diffusion',
    ctenophora: 'Body surface & anal pores',
    platyhelminthes: 'Protonephridia (Flame cells)',
    nemathelminthes: 'Renette cells / H-canal system'
  },
  {
    feature: 'Representative Larva',
    porifera: 'Amphiblastula / Parenchymula',
    cnidaria: 'Planula / Ephyra',
    ctenophora: 'Cydippid larva',
    platyhelminthes: 'Miracidium, Cercaria, Cysticercus',
    nemathelminthes: 'Rhabditiform juvenile (4 molts)'
  }
];
