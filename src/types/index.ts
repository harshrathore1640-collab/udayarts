export type ProjectCategory = 
  | 'all'
  | 'sacred-idols'
  | 'architectural-engraving'
  | '3d-craftsmanship'
  | 'temple-sanctums';

export interface CraftCategory {
  id: string;
  slug: ProjectCategory;
  title: string;
  subtitle: string;
  description: string;
  materials: string[];
  techniques: string[];
  dimensionsRange: string;
  leadTime: string;
  image: string;
  fallbackGradient: string;
  artworkType?: 'sacred-deity' | 'architectural-jaali' | 'temple-sanctum' | '3d-relief' | 'carved-pillar' | 'stone-mural';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  material: string;
  technique: string;
  dimensions: string;
  finish: string;
  description: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  fallbackTone: string;
  artworkType?: 'sacred-deity' | 'architectural-jaali' | 'temple-sanctum' | '3d-relief' | 'carved-pillar' | 'stone-mural';
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

export interface SignatureProject {
  id: string;
  title: string;
  clientType: string;
  locationScope: string;
  category: string;
  materials: string;
  timeline: string;
  overview: string;
  highlights: string[];
  image: string;
  artworkType?: 'sacred-deity' | 'architectural-jaali' | 'temple-sanctum' | '3d-relief' | 'carved-pillar' | 'stone-mural';
}

export interface MaterialSpec {
  name: string;
  origin: string;
  character: string;
  applications: string;
  durability: string;
  colorTone: string;
}

export interface ProjectSector {
  id: string;
  name: string;
  tagline: string;
  description: string;
  craftHighlights: string[];
  image: string;
  scopeExample: string;
  artworkType?: 'sacred-deity' | 'architectural-jaali' | 'temple-sanctum' | '3d-relief' | 'carved-pillar' | 'stone-mural';
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  dimensionsOrScale: string;
  details: string;
  preferredMaterial: string;
}

export interface FormValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  location?: string;
  details?: string;
}
