export interface TreeSpecies {
  id: string;
  name: string;
  scientificName: string;
  type: 'deciduous' | 'evergreen';
  soilPreference: string;
  commonPests: string[];
  pruningSeason: string;
  ecoBenefit: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  ecoHighlight: string;
  iconName: string;
  basePrice: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  review: string;
  rating: number;
  service: string;
  date: string;
}

export interface AdvisorMessage {
  sender: 'user' | 'ingrid';
  text: string;
  timestamp: Date;
}
