import product1 from '../assets/product-1.jpg';
import product2 from '../assets/product-2.jpg';
import product3 from '../assets/product-3.jpg';
import product4 from '../assets/product-4.jpg';
import product5 from '../assets/product-5.jpg';
import product6 from '../assets/product-6.jpg';
import product7 from '../assets/product-7.jpg';
import product8 from '../assets/product-8.jpg';
import category1 from '../assets/category-1.jpg';
import category2 from '../assets/category-2.jpg';
import category3 from '../assets/category-3.jpg';
import category4 from '../assets/category-4.jpg';
import { Product, BlogPost, TeamMember } from '../types';

export const products: Product[] = [
  { id: 1, img: product1, name: 'African Print Crop Top', price: '$100', category: 'Crop Top' },
  { id: 2, img: product2, name: 'African Print Crop Top', price: '$100', category: 'Crop Top' },
  { id: 3, img: product3, name: 'African Print Crop Top', price: '$100', category: 'Crop Top' },
  { id: 4, img: product4, name: 'African Print Crop Top', price: '$100', category: 'Crop Top' },
  { id: 5, img: product5, name: 'African Print Maxi Gown', price: '$100', category: 'Gown' },
  { id: 6, img: product6, name: 'African Print Crop Top', price: '$100', category: 'Crop Top' },
  { id: 7, img: product7, name: 'African Print Off-Shoulder', price: '$100', category: 'Off-Shoulder' },
  { id: 8, img: product8, name: 'African Print Evening Gown', price: '$100', category: 'Gown' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Ankara: Tracing Patterns Across Generations',
    excerpt: 'An exploration of how heritage motifs communicate lineage, celebration, and spiritual meaning throughout West Africa.',
    date: 'October 14, 2026',
    img: category1,
    slug: 'art-of-ankara',
  },
  {
    id: 2,
    title: 'Contemporary Silhouettes in Ceremonial Couture',
    excerpt: 'How our design atelier marries century-old loom techniques with architectural lines for modern wedding and gala wear.',
    date: 'September 28, 2026',
    img: category2,
    slug: 'contemporary-silhouettes',
  },
  {
    id: 3,
    title: 'Concentric Spirals: Symbolism in Royal Fabrics',
    excerpt: 'Unpacking the circular motifs favored by royalty and their renaissance in today’s off-shoulder cutouts.',
    date: 'September 12, 2026',
    img: category3,
    slug: 'concentric-spirals',
  },
  {
    id: 4,
    title: 'Sustainable Sourcing from Artisanal Weaving Cooperatives',
    excerpt: 'Our commitment to ethical fair wages, pure cotton fibers, and botanical low-impact dyes in every seasonal capsule.',
    date: 'August 30, 2026',
    img: category4,
    slug: 'sustainable-sourcing',
  },
];

export const teamMembers: TeamMember[] = [
  {
    role: 'Creative Director & Founder',
    name: 'Folashade Adeleke',
    bio: 'Rooted in Lagos and London, Folashade established Afrorock to celebrate ancestral textiles through tailored modern silhouettes that honor African craftsmanship and elegance.',
  },
  {
    role: 'Master Patternmaker & Artisan Lead',
    name: 'Babatunde Olawale',
    bio: 'With over twenty-five years of bespoke couture experience, Babatunde oversees motif alignment, precision draping, and artisanal finishings across every garment.',
  },
  {
    role: 'Head of Ethical Sourcing & Community',
    name: 'Amina Kudirat',
    bio: 'Amina partners directly with independent textile weavers and dye collectives across Nigeria and Ghana, ensuring fair trade practices and cultural preservation.',
  },
];
