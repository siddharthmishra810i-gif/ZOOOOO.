import heroBanner from '../assets/images/field_guide_hero_1790443534569.jpg';
import poriferaPlate from '../assets/images/porifera_plate_1790443549617.jpg';
import cnidariaPlate from '../assets/images/cnidaria_plate_1790443561774.jpg';
import ctenophoraWormPlate from '../assets/images/ctenophora_worm_plate_1790443575886.jpg';

export const fieldGuideAssets = {
  heroBanner,
  poriferaPlate,
  cnidariaPlate,
  ctenophoraWormPlate,
};

export interface ImageMeta {
  url: string;
  fallbackPlate: string;
  caption: string;
  credit: string;
}

export const phylumImages: Record<string, ImageMeta> = {
  porifera: {
    url: "https://i.postimg.cc/sgy34GXm/Vaasspons2.jpg",
    fallbackPlate: fieldGuideAssets.poriferaPlate,
    caption: "Scientific lithograph of Porifera demonstrating asconoid and syconoid sponges with skeletal spicule structures.",
    credit: "Natural History Archive / Ernst Haeckel Art Forms in Nature"
  },
  cnidaria: {
    url: "https://i.postimg.cc/7LkSgfx6/cnidaria.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Antique naturalist engraving of Hydrozoans, Scyphozoans, and Anthozoan corals in situ.",
    credit: "Zoological Society Naturalist Plates, 1888"
  },
  ctenophora: {
    url: "https://i.postimg.cc/7hWqNKfp/Ctenophore.jpg",
    fallbackPlate: fieldGuideAssets.ctenophoraWormPlate,
    caption: "Delicate pelagic comb jelly (Ctenophora) displaying eight meridional rows of iridescent ciliary ctenes.",
    credit: "Oceanographic Monograph Series"
  },
  platyhelminthes: {
    url: "https://i.postimg.cc/V6NrRt2Y/platyhelminthes.jpg",
    fallbackPlate: fieldGuideAssets.ctenophoraWormPlate,
    caption: "Micro-anatomical copperplate engraving of parasitic flatworms showing branching vitellaria and suckers.",
    credit: "Helminthological Atlas, Leipzig 1894"
  },
  nemathelminthes: {
    url: "https://i.postimg.cc/0jwNW0ng/nemathelminthes.jpg",
    fallbackPlate: fieldGuideAssets.ctenophoraWormPlate,
    caption: "Pseudocoelomate cylindrical roundworm anatomy and bilateral sensory labial papillae.",
    credit: "Comparative Zoology Archives"
  }
};

export const specimenImages: Record<string, ImageMeta> = {
  // PORIFERA
  sycon: {
    url: "https://i.postimg.cc/0Qh1bRsH/sycon.png",
    fallbackPlate: fieldGuideAssets.poriferaPlate,
    caption: "Sycon (Scypha) showing urn-shaped cylindrical body with terminal osculum encircled by monaxon spicules.",
    credit: "Natural History Collection"
  },
  hyalonema: {
    url: "https://i.postimg.cc/7YVtR8WR/Hyalonema.jpg",
    fallbackPlate: fieldGuideAssets.poriferaPlate,
    caption: "Hyalonema (Glass rope sponge) featuring twisted stalk of anchoring silicious spicules.",
    credit: "British Museum Natural History Catalogue"
  },
  euplectella: {
    url: "https://i.postimg.cc/CMCcZpYr/1280px-Euplectella-aspergillum-Okeanos.jpg",
    fallbackPlate: fieldGuideAssets.poriferaPlate,
    caption: "Euplectella aspergillum (Venus' flower basket) with intricate triaxon silica lattice.",
    credit: "Smithsonian National Museum of Natural History"
  },
  spongilla: {
    url: "https://i.postimg.cc/sXN0wpHs/spongilla.webp",
    fallbackPlate: fieldGuideAssets.poriferaPlate,
    caption: "Spongilla lacustris (Freshwater sponge) colonial encrustation harboring symbiotic Zoochlorellae.",
    credit: "Limnological Atlas"
  },

  // CNIDARIA
  obelia: {
    url: "https://i.postimg.cc/HxvvLQbz/obelia.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Obelia colony displaying dimorphic hydranths (nutritive gastrozooids) and blastostyles enclosed by hydrotheca.",
    credit: "Marine Biological Association Laboratory"
  },
  physalia: {
    url: "https://i.postimg.cc/WtLnDStv/physalia.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Physalia physalis (Portuguese man-of-war) showing gas-filled iridescent pneumatophore and dactylozooids.",
    credit: "NOAA Ocean Exploration"
  },
  millepora: {
    url: "https://i.postimg.cc/q75ZJscV/Millepora.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Millepora alcicornis (Fire coral), a hydrocoral producing a calcareous skeleton perforated by dactylopores.",
    credit: "Coral Reef Biological Survey"
  },
  aurelia: {
    url: "https://i.postimg.cc/y8fLjmbS/aurelia.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Aurelia aurita (Moon jellyfish) with four horseshoe-shaped gastric gonads visible through the translucent umbrella.",
    credit: "Aquarium de Paris / Zoological Registry"
  },
  tubipora: {
    url: "https://i.postimg.cc/VsBB49Sd/Tubipora.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Tubipora musica (Organ pipe coral) with parallel crimson calcareous tubes joined by horizontal platforms.",
    credit: "Muséum de Toulouse"
  },
  corallium: {
    url: "https://i.postimg.cc/NFJKS0q0/Corallium.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Corallium rubrum (Precious red coral) showing hard axial skeleton composed of cemented calcium carbonate spicules.",
    credit: "Musée d'Histoire Naturelle"
  },
  alcyonium: {
    url: "https://i.postimg.cc/KjzzPykD/Alcyonium.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Alcyonium digitatum (Dead man's fingers) lobed fleshy octocoral colony with retracted autozooid polyps.",
    credit: "North Sea Marine Biota"
  },
  gorgonia: {
    url: "https://i.postimg.cc/ryPyB3RN/Gorgonia.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Gorgonia flabellum (Venus sea fan) with planar anastomosing reticulate branches of flexible gorgonin protein.",
    credit: "Caribbean Marine Specimen Cabinet"
  },
  adamsia: {
    url: "https://i.postimg.cc/C5B0MMnz/adamsia.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Adamsia palliata (Cloak anemone) living in mutualistic symbiosis wrapped around a hermit crab gastropod shell.",
    credit: "Fauna Europaea Archive"
  },
  pennatula: {
    url: "https://i.postimg.cc/dtCFz1YF/pennatulia.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Pennatula phosphorea (Sea pen) showing quill-like rachis with bilateral lateral pinnules and luminescent capability.",
    credit: "Deep-Sea Benthos Atlas"
  },
  fungia: {
    url: "https://i.postimg.cc/3w8H4FDM/Fungia.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Fungia (Mushroom coral), a large solitary unattached scleractinian polyp with radiating septa resembling mushroom gills.",
    credit: "Indo-Pacific Coral Registry"
  },
  meandrina: {
    url: "https://i.postimg.cc/Ss50P01X/Meandrina.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Meandrina meandrites (Brain coral) showing winding meandroid corallite valleys resembling cerebral gyri.",
    credit: "Reef Scleractinia Collection"
  },
  madrepora: {
    url: "https://i.postimg.cc/05Mry9sZ/Madrepora.jpg",
    fallbackPlate: fieldGuideAssets.cnidariaPlate,
    caption: "Madrepora oculata (Staghorn deep-sea coral) displaying dichotomous zigzag branching and axial corallites.",
    credit: "Oceanographic Museum of Monaco"
  },

  // CTENOPHORA
  beroe: {
    url: "https://i.postimg.cc/BngnV6Tv/Beroe.jpg",
    fallbackPlate: fieldGuideAssets.ctenophoraWormPlate,
    caption: "Beroe cucumis (Melon comb jelly), an active voracious predator devoid of tentacles, propelled by iridescent comb plates.",
    credit: "Arctic Marine Fauna Survey"
  },
  ctenoplana: {
    url: "https://i.postimg.cc/1zXs7KRL/Ctenoplana.png",
    fallbackPlate: fieldGuideAssets.ctenophoraWormPlate,
    caption: "Ctenoplana (Benthic platyctenid comb jelly) modified for creeping along substrate with reduced comb rows and sensory aboral organ.",
    credit: "Zoological Monographs of Japan"
  },

  // PLATYHELMINTHES
  fasciola: {
    url: "https://i.postimg.cc/28CpXx2Q/fasciola.jpg",
    fallbackPlate: fieldGuideAssets.ctenophoraWormPlate,
    caption: "Fasciola hepatica (Sheep liver fluke) whole mount showing conical cephalic cone, oral sucker, acetabulum, and branched gut caeca.",
    credit: "Parasitology Teaching Collection, Cambridge"
  },
  taenia: {
    url: "https://i.postimg.cc/593KjWSK/Taenia.webp",
    fallbackPlate: fieldGuideAssets.ctenophoraWormPlate,
    caption: "Taenia solium (Pork tapeworm) scolex armed with a rostellum of double-row hooks and four hemispherical suckers.",
    credit: "Centers for Disease Control Public Health Image Library"
  },

  // NEMATHELMINTHES
  ascaris: {
    url: "https://i.postimg.cc/yN4yvLyw/ascaris.jpg",
    fallbackPlate: fieldGuideAssets.ctenophoraWormPlate,
    caption: "Ascaris lumbricoides (Giant roundworm) showing sexual dimorphism: larger female and smaller male with curved posterior end and copulatory spicules.",
    credit: "Tropical Medicine Specimen Museum"
  }
};
