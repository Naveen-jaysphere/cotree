import { TreeSpecies, ServiceDetail, Testimonial } from '../types';

export const NATIVE_NASHVILLE_TREES: TreeSpecies[] = [
  {
    id: 'white-oak',
    name: 'White Oak',
    scientificName: 'Quercus alba',
    type: 'deciduous',
    soilPreference: 'Deep, rich, acidic clay loam (frequent in Bellevue and West Meade)',
    commonPests: ['Oak Lace Bug', 'Gipsy Moth', 'Ganoderma Root Rot'],
    pruningSeason: 'Dormant winter months (December to February)',
    ecoBenefit: 'Provides excellent shade, wind resistance, and enhances property value.',
    description: 'A slow-growing powerhouse of the Tennessee forest canopy, famous for its grand crown. Often lives 200-300 years if properly maintained.'
  },
  {
    id: 'tulip-poplar',
    name: 'Tulip Poplar',
    scientificName: 'Liriodendron tulipifera',
    type: 'deciduous',
    soilPreference: 'Moist, organic-rich soils (looves riverbanks like Harpeth River valleys)',
    commonPests: ['Tuliptree Scale', 'Tulip Spot Gall'],
    pruningSeason: 'Late winter to early spring',
    ecoBenefit: 'The state tree of Tennessee, fast-growing with great structural height.',
    description: 'Fast-growing giant with beautiful green-yellow tulip-like flowers in spring. Susceptible to wind damage, requiring professional structural pruning.'
  },
  {
    id: 'sugar-maple',
    name: 'Sugar Maple',
    scientificName: 'Acer saccharum',
    type: 'deciduous',
    soilPreference: 'Well-drained loams, slightly acidic (ideal for Williamson County slopes)',
    commonPests: ['Maple Borer', 'Aphids', 'Verticillium Wilt'],
    pruningSeason: 'Mid-summer (to prevent sap bleeding) or mid-winter',
    ecoBenefit: 'Strong wood structures and brilliant golden-red fall foliage.',
    description: 'Renowned for its breathtaking golden-red fall display. Sensitive to soil compaction; benefits immensely from professional soil aeration.'
  },
  {
    id: 'eastern-redcedar',
    name: 'Eastern Redcedar',
    scientificName: 'Juniperus virginiana',
    type: 'evergreen',
    soilPreference: 'Shallow, dry limestone soils (classic Cedars of Lebanon and glade ecosystems)',
    commonPests: ['Spider Mites', 'Bagworms', 'Cedar-Apple Rust'],
    pruningSeason: 'Late winter before spring growth spurts',
    ecoBenefit: 'Excellent natural windbreak and year-round green privacy screen.',
    description: 'A tough, highly adaptable evergreen tree that serves as a beautiful natural privacy screen or property border in the Nashville area.'
  },
  {
    id: 'eastern-hemlock',
    name: 'Eastern Hemlock',
    scientificName: 'Tsuga canadensis',
    type: 'evergreen',
    soilPreference: 'Cool, moist valleys & ravine slopes (likes shady hollows around Radnor Lake)',
    commonPests: ['Hemlock Woolly Adelgid (strict monitoring required)', 'Needle Blight'],
    pruningSeason: 'Late spring or dormant winter',
    ecoBenefit: 'Provides year-round shade and dense evergreen canopy protection.',
    description: 'A majestic shade-tolerant giant. Vulnerable to local Woolly Adelgid pests, requiring professional health monitoring and prompt treatment.'
  }
];

export const ECO_SERVICES: ServiceDetail[] = [
  {
    id: 'pruning',
    title: 'Professional Tree Trimming',
    description: 'Safe and precise trimming to remove dead limbs, improve structural integrity, and protect your home from storm damage. We never perform tree-topping.',
    ecoHighlight: 'Enhances tree lifespan, ensures sunlight penetration, and keeps your property safe from falling limbs.',
    iconName: 'Scissors',
    basePrice: '$250+'
  },
  {
    id: 'removal',
    title: 'Safe & Professional Tree Removal',
    description: 'Professional tree removal using specialized rigging equipment to prevent property damage. Complete debris cleaning is included with every job.',
    ecoHighlight: 'Clean and safe tree removal. Entire work area is thoroughly swept and wood is hauled away.',
    iconName: 'AlertTriangle',
    basePrice: '$650+'
  },
  {
    id: 'health_treatment',
    title: 'Tree Health & Disease Treatment',
    description: 'Diagnosis and treatment for common Middle Tennessee pests, clay soil compaction, and root rot. We use tested nutrients and effective disease controls.',
    ecoHighlight: 'Restores tree vigor, treats pests, and aerates compacted Nashville clay for stronger roots.',
    iconName: 'Leaf',
    basePrice: '$150+'
  },
  {
    id: 'stump_grinding',
    title: 'Stump Grinding & Removal',
    description: 'We grind remnants down to 24 inches below grade, clearing the spot for replanting. Clean up of grinding debris included.',
    ecoHighlight: 'Eliminates lawn hazards, clears space for replacement plantings, and levels your property.',
    iconName: 'Compass',
    basePrice: '$180+'
  }
];

export const NEIGHBOR_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Robert Harris',
    location: 'Franklin, TN (Serving Nashville & surrounding areas)',
    review: "C&O Tree Service did a fantastic job trimming our large Oak tree. Ingrid explained exactly what needed to be done for safety and structural health. The crew was fast, respectful, and the clean-up was spotless.",
    rating: 5,
    service: 'Tree Trimming',
    date: 'April 2026'
  },
  {
    id: 'test-2',
    name: 'Melissa Vance',
    location: 'East Nashville, TN',
    review: "Highly recommend C&O. They removed a hollow poplar tree next to our driveway. The job was done safely, and they hauled everything away, leaving the site spotless. Very professional group.",
    rating: 5,
    service: 'Tree Removal',
    date: 'May 2026'
  },
  {
    id: 'test-3',
    name: 'David Sterling',
    location: 'Brentwood, TN',
    review: "Our maples were struggling in the Brentwood limestone clay. Ingrid diagnosed the problem immediately and treated them with professional soil aeration. The foliage looks thick and healthy again.",
    rating: 5,
    service: 'Tree Health Care',
    date: 'March 2026'
  }
];

export const BEFORE_AFTER_GALLERY = [
  {
    title: 'Oak Tree Crown Restoration',
    desc: 'West Meade — Preserved canopy health after lightning strike',
    beforeImg: 'https://picsum.photos/seed/decay1/600/400',
    afterImg: 'https://picsum.photos/seed/bloom1/600/400'
  }
];
