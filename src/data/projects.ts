import { Hotel, ShoppingCart, Briefcase, LayoutDashboard } from 'lucide-react';

export const projects = {
  hotels: {
    id: "hotels",
    title: "HÔTELLERIE & TOURISME",
    description: "Expériences immersives et systèmes de réservation optimisés.",
    icon: Hotel,
    items: [
      { name: "Park Suites Hotel", action: "Consulter le site", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800", url: "https://parksuiteshotel.com/", details: "Un site d'hôtellerie de luxe avec système de réservation complet." },
      { name: "Bab Errih", action: "Consulter le site", image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800", url: "https://baberrih.ma/", details: "Portail touristique immersif pour la maison d'hôte Bab Errih." },
      { name: "Aday Hotel", action: "Consulter le site", image: "https://images.unsplash.com/photo-1540544660406-6a69dacb2804?auto=format&fit=crop&q=80&w=800", url: "https://www.adayhotel.com/", details: "Solution web élégante pour l'hôtel Aday." },
      { name: "Sahara Hotel Agadir", action: "Consulter le site", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800", url: "https://www.saharahotelagadir.com", details: "Site officiel de l'hôtel Sahara à Agadir." },
      { name: "Dar Omar Khayam", action: "Consulter le site", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", url: "https://daromarkhayam.com/", details: "Maison d'hôtes traditionnelle avec interface moderne." },
    ]
  },
  ecommerce: {
    id: "ecommerce",
    title: "E-COMMERCE & RETAIL",
    description: "Plateformes de vente performantes et parcours d'achat fluides.",
    icon: ShoppingCart,
    items: [
      { name: "55 Pens", action: "Consulter la boutique", image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=800", url: "https://55pens.com", details: "Plateforme e-commerce spécialisée dans les stylos haut de gamme." },
      { name: "Merinos Shop", action: "Consulter la boutique", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", url: "https://shop.merinos.ma/", details: "Boutique en ligne pour la célèbre marque Merinos." },
    ]
  },
  vitrines: {
    id: "vitrines",
    title: "VITRINES & CORPORATE",
    description: "Présence digitale stratégique pour leaders d'industrie.",
    icon: Briefcase,
    items: [
      { name: "Mind Bridge Education", action: "Découvrir le projet", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", url: "https://mind-bridge.education/", details: "Site institutionnel pour l'éducation et la formation." },
      { name: "Solar Power", action: "Découvrir le projet", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800", url: "https://solarpower.ma", details: "Vitrine technologique pour l'énergie solaire au Maroc." },
      { name: "Polytel", action: "Découvrir le projet", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", url: "https://www.polytel.ma", details: "Présence corporate pour Polytel." },
      { name: "Hydrocanal", action: "Découvrir le projet", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", url: "https://hydrocanal.com/", details: "Site industriel de référence pour Hydrocanal." },
    ]
  },
  solutions: {
    id: "solutions",
    title: "SOLUTIONS",
    description: "Applications web sur-mesure et outils métiers performants.",
    icon: LayoutDashboard,
    items: [
      { name: "Geo Sales", action: "Découvrir le projet", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", url: "https://geo-sales.vercel.app/", details: "Application de gestion commerciale et cartographie." },
      { name: "Onessta Livraison", action: "Découvrir le projet", image: "https://images.unsplash.com/photo-1549194388-2469d59ec75c?auto=format&fit=crop&q=80&w=800", url: "https://onessta.com/login", details: "Système complexe de gestion logistique et livraison." },
    ]
  }
};
