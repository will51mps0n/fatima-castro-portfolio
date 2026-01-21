export type Project = {
  id: number;
  slug: string;
  title: string;
  location: string;
  year: string;
  category: string;
  image: string;
  size: string;
  images: string[];
  description: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "void-house",
    title: "Void House",
    location: "Kyoto, Japan",
    year: "2023",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop",
    size: "240m²",
    images: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2400&auto=format&fit=crop",
    ],
    description: "A meditation on absence and presence in residential architecture.",
  },
  {
    id: 2,
    slug: "mono-tower",
    title: "Mono Tower",
    location: "Berlin, Germany",
    year: "2022",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2400&auto=format&fit=crop",
    size: "12,500m²",
    images: [
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464938050520-ef2571f44b27?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2400&auto=format&fit=crop",
    ],
    description: "Redefining the commercial skyline with monolithic simplicity.",
  },
  {
    id: 3,
    slug: "gallery-x",
    title: "Gallery X",
    location: "Copenhagen, Denmark",
    year: "2024",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2400&auto=format&fit=crop",
    size: "1,200m²",
    images: [
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565060169194-19fabf2d1ece?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2400&auto=format&fit=crop",
    ],
    description: "A cultural space where art and architecture become one.",
  },
  {
    id: 4,
    slug: "desert-pavilion",
    title: "Desert Pavilion",
    location: "Joshua Tree, USA",
    year: "2021",
    category: "Public",
    image: "https://images.unsplash.com/photo-1506126335919-80d23d11fca6?q=80&w=2400&auto=format&fit=crop",
    size: "450m²",
    images: [
      "https://images.unsplash.com/photo-1506126335919-80d23d11fca6?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2400&auto=format&fit=crop",
    ],
    description: "Embracing the stark beauty of the desert landscape.",
  },
  {
    id: 5,
    slug: "concrete-villa",
    title: "Concrete Villa",
    location: "Zurich, Switzerland",
    year: "2023",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1628611225249-6c0580a9324c?q=80&w=2400&auto=format&fit=crop",
    size: "680m²",
    images: [
      "https://images.unsplash.com/photo-1628611225249-6c0580a9324c?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2400&auto=format&fit=crop",
    ],
    description: "Raw concrete meets refined living in the Swiss Alps.",
  },
  {
    id: 6,
    slug: "harbor-office",
    title: "Harbor Office",
    location: "Oslo, Norway",
    year: "2022",
    category: "Workspace",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
    size: "3,400m²",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2400&auto=format&fit=crop",
    ],
    description: "Where work meets water in Nordic design tradition.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
