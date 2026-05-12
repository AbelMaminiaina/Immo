import type { Property } from '../types'

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Villa moderne avec piscine a Ivandry',
    slug: 'villa-moderne-piscine-ivandry',
    type: 'vente',
    category: 'villa',
    price: 850000000,
    surface: 280,
    rooms: 7,
    bedrooms: 4,
    bathrooms: 3,
    description: `Magnifique villa moderne de 280m2 situee dans le quartier residentiel d'Ivandry. Piscine privee et jardin arbore de 800m2.

La villa comprend un grand sejour de 60m2 avec baies vitrees, une cuisine americaine entierement equipee, 4 chambres dont une suite parentale avec dressing, 3 salles de bain modernes.

Prestations haut de gamme: climatisation, groupe electrogene, citerne d'eau, gardien 24h/24.`,
    shortDescription: 'Villa 280m2 avec piscine, jardin 800m2, securisee 24h/24.',
    address: 'Lot IVG 234 Ivandry',
    city: 'Antananarivo',
    latitude: -18.8792,
    longitude: 47.5079,
    images: [
      { id: '1-1', url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80', alt: 'Villa avec piscine' },
      { id: '1-2', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Salon moderne' },
      { id: '1-3', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Chambre principale' },
    ],
    features: ['Piscine', 'Gardien', 'Groupe electrogene', 'Citerne', 'Parking'],
    state: 'excellent',
    yearBuilt: 2020,
    energyClass: 'A',
    isFeatured: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z',
  },
  {
    id: '2',
    title: 'Appartement T4 centre-ville Analakely',
    slug: 'appartement-t4-analakely',
    type: 'vente',
    category: 'appartement',
    price: 180000000,
    surface: 120,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    description: `Bel appartement T4 de 120m2 au 3eme etage d'un immeuble securise en plein centre d'Analakely. Proximite immediate des commerces et transports.

L'appartement comprend un sejour lumineux de 35m2, une cuisine equipee, 3 chambres spacieuses, 2 salles de bain et un balcon avec vue sur la ville.

Immeuble avec ascenseur, gardien et parking souterrain.`,
    shortDescription: 'T4 de 120m2 en centre-ville, balcon avec vue, parking securise.',
    address: 'Immeuble Tana Plaza, Analakely',
    city: 'Antananarivo',
    latitude: -18.9149,
    longitude: 47.5260,
    images: [
      { id: '2-1', url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', alt: 'Salon appartement' },
      { id: '2-2', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', alt: 'Cuisine moderne' },
      { id: '2-3', url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80', alt: 'Chambre' },
    ],
    features: ['Ascenseur', 'Gardien', 'Parking', 'Balcon', 'Vue ville'],
    state: 'bon',
    yearBuilt: 2015,
    energyClass: 'B',
    isFeatured: true,
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-01-18T11:00:00Z',
  },
  {
    id: '3',
    title: 'Studio meuble Ampefiloha',
    slug: 'studio-meuble-ampefiloha',
    type: 'location',
    category: 'appartement',
    price: 800000,
    surface: 30,
    rooms: 1,
    bedrooms: 0,
    bathrooms: 1,
    description: `Studio entierement meuble et equipe de 30m2, ideal pour etudiant ou jeune professionnel. Situe a Ampefiloha, proche des universites.

Le studio comprend une piece principale avec coin cuisine equipee (plaques, refrigerateur, micro-ondes), une salle d'eau avec douche et WC.

Eau et electricite inclus dans le loyer. Connexion internet disponible.`,
    shortDescription: 'Studio 30m2 meuble, charges incluses, proche universites.',
    address: 'Lot 45 Ampefiloha',
    city: 'Antananarivo',
    latitude: -18.9080,
    longitude: 47.5180,
    images: [
      { id: '3-1', url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', alt: 'Studio meuble' },
      { id: '3-2', url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80', alt: 'Coin cuisine' },
    ],
    features: ['Meuble', 'Cuisine equipee', 'Internet', 'Charges incluses'],
    state: 'bon',
    yearBuilt: 2010,
    energyClass: 'C',
    isFeatured: false,
    createdAt: '2024-01-12T09:00:00Z',
    updatedAt: '2024-01-12T09:00:00Z',
  },
  {
    id: '4',
    title: 'Maison coloniale renovee Isoraka',
    slug: 'maison-coloniale-renovee-isoraka',
    type: 'vente',
    category: 'maison',
    price: 450000000,
    surface: 200,
    rooms: 6,
    bedrooms: 4,
    bathrooms: 2,
    description: `Superbe maison coloniale entierement renovee de 200m2 sur un terrain de 600m2 dans le quartier historique d'Isoraka.

La maison comprend un grand sejour avec cheminee, une salle a manger, une cuisine moderne, 4 chambres spacieuses, 2 salles de bain. Veranda couverte donnant sur le jardin.

Cachet de l'ancien preserve: parquet d'origine, moulures, hauts plafonds.`,
    shortDescription: 'Maison coloniale 200m2 renovee, jardin 600m2, charme authentique.',
    address: 'Rue Rainitovo, Isoraka',
    city: 'Antananarivo',
    latitude: -18.9100,
    longitude: 47.5200,
    images: [
      { id: '4-1', url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80', alt: 'Maison coloniale' },
      { id: '4-2', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80', alt: 'Interieur' },
      { id: '4-3', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Jardin' },
    ],
    features: ['Jardin', 'Veranda', 'Cheminee', 'Parquet', 'Gardien'],
    state: 'excellent',
    yearBuilt: 1925,
    energyClass: 'C',
    isFeatured: true,
    createdAt: '2024-01-08T14:00:00Z',
    updatedAt: '2024-01-15T16:00:00Z',
  },
  {
    id: '5',
    title: 'T3 vue mer a Toamasina',
    slug: 't3-vue-mer-toamasina',
    type: 'location',
    category: 'appartement',
    price: 1500000,
    surface: 75,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    description: `Appartement T3 de 75m2 au 5eme etage avec vue imprenable sur l'ocean Indien. Residence securisee en front de mer.

L'appartement comprend un sejour lumineux de 25m2 avec balcon vue mer, une cuisine equipee, 2 chambres climatisees, une salle de bain moderne.

Ideal pour profiter du cadre de vie de la cote Est. Plage a 100m.`,
    shortDescription: 'T3 75m2 vue ocean, balcon, residence securisee, plage a 100m.',
    address: 'Boulevard de la Plage',
    city: 'Toamasina',
    latitude: -18.1443,
    longitude: 49.3958,
    images: [
      { id: '5-1', url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80', alt: 'Vue mer' },
      { id: '5-2', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', alt: 'Sejour' },
    ],
    features: ['Vue mer', 'Balcon', 'Climatisation', 'Securise', 'Parking'],
    state: 'bon',
    yearBuilt: 2018,
    energyClass: 'B',
    isFeatured: false,
    createdAt: '2024-01-05T11:00:00Z',
    updatedAt: '2024-01-05T11:00:00Z',
  },
  {
    id: '6',
    title: 'Villa de luxe pieds dans l\'eau a Nosy Be',
    slug: 'villa-luxe-pieds-eau-nosy-be',
    type: 'vente',
    category: 'villa',
    price: 1200000000,
    surface: 350,
    rooms: 8,
    bedrooms: 5,
    bathrooms: 5,
    description: `Exceptionnelle villa pieds dans l'eau de 350m2 sur un terrain de 2000m2 avec plage privee a Nosy Be.

La villa comprend un vaste sejour de 80m2 ouvert sur la terrasse, une cuisine professionnelle, 5 suites avec salle de bain privative, chacune avec vue mer.

Piscine a debordement, ponton prive, bungalow pour le personnel, groupe electrogene, dessalinisateur.`,
    shortDescription: 'Villa 350m2 pieds dans l\'eau, plage privee, piscine, ponton.',
    address: 'Ambatoloaka',
    city: 'Nosy Be',
    latitude: -13.4070,
    longitude: 48.2592,
    images: [
      { id: '6-1', url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80', alt: 'Villa vue mer' },
      { id: '6-2', url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80', alt: 'Piscine' },
      { id: '6-3', url: 'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=800&q=80', alt: 'Plage privee' },
    ],
    features: ['Plage privee', 'Piscine', 'Ponton', 'Personnel', 'Groupe electrogene', 'Vue mer'],
    state: 'neuf',
    yearBuilt: 2022,
    energyClass: 'A',
    isFeatured: true,
    createdAt: '2024-01-02T10:00:00Z',
    updatedAt: '2024-01-10T09:00:00Z',
  },
  // TERRAINS
  {
    id: '16',
    title: 'Terrain constructible 1000m2 Ivato',
    slug: 'terrain-constructible-ivato',
    type: 'vente',
    category: 'terrain',
    price: 150000000,
    surface: 1000,
    rooms: 0,
    bedrooms: 0,
    bathrooms: 0,
    description: `Terrain plat et constructible de 1000m2 situe a Ivato, proche de l'aeroport international.

Terrain cloture avec acces route bitumee. Eau et electricite a proximite. Zone residentielle calme.

Ideal pour construction villa ou immeuble. Titre foncier disponible.`,
    shortDescription: 'Terrain 1000m2 constructible, cloture, proche aeroport Ivato.',
    address: 'Zone residentielle Ivato',
    city: 'Antananarivo',
    latitude: -18.8050,
    longitude: 47.4750,
    images: [
      { id: '16-1', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', alt: 'Terrain' },
      { id: '16-2', url: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&q=80', alt: 'Vue terrain' },
    ],
    features: ['Cloture', 'Titre foncier', 'Acces bitume', 'Eau proximite', 'Electricite proximite'],
    state: 'bon',
    isFeatured: true,
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z',
  },
  {
    id: '17',
    title: 'Terrain agricole 5 hectares Antsirabe',
    slug: 'terrain-agricole-antsirabe',
    type: 'vente',
    category: 'terrain',
    price: 80000000,
    surface: 50000,
    rooms: 0,
    bedrooms: 0,
    bathrooms: 0,
    description: `Terrain agricole de 5 hectares dans la region d'Antsirabe, ideal pour cultures maraicheres ou projet agro-industriel.

Terres fertiles avec source d'eau naturelle. Acces par piste carrossable. Relief plat, bien expose.

Possibilite d'extension avec terrains adjacents disponibles.`,
    shortDescription: 'Terrain agricole 5 hectares, terres fertiles, source d\'eau.',
    address: 'Route de Betafo',
    city: 'Antsirabe',
    latitude: -19.8800,
    longitude: 47.0200,
    images: [
      { id: '17-1', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', alt: 'Terrain agricole' },
      { id: '17-2', url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80', alt: 'Vue panoramique' },
    ],
    features: ['Source d\'eau', 'Terres fertiles', 'Acces piste', 'Extension possible'],
    state: 'bon',
    isFeatured: false,
    createdAt: '2024-01-18T14:00:00Z',
    updatedAt: '2024-01-18T14:00:00Z',
  },
  {
    id: '18',
    title: 'Terrain vue mer 2000m2 Nosy Be',
    slug: 'terrain-vue-mer-nosy-be',
    type: 'vente',
    category: 'terrain',
    price: 450000000,
    surface: 2000,
    rooms: 0,
    bedrooms: 0,
    bathrooms: 0,
    description: `Terrain exceptionnel de 2000m2 avec vue panoramique sur la mer a Nosy Be. Emplacement rare a 50m de la plage.

Terrain en pente douce offrant une vue imprenable. Acces par route goudronnee. Zone touristique prisee.

Ideal pour projet hotelier ou villa de prestige. Tous documents en regle.`,
    shortDescription: 'Terrain 2000m2 vue mer, 50m de la plage, zone touristique.',
    address: 'Madirokely',
    city: 'Nosy Be',
    latitude: -13.3950,
    longitude: 48.2500,
    images: [
      { id: '18-1', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', alt: 'Vue mer terrain' },
      { id: '18-2', url: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80', alt: 'Plage proximite' },
    ],
    features: ['Vue mer', 'Proche plage', 'Zone touristique', 'Route goudronnee', 'Documents OK'],
    state: 'bon',
    isFeatured: true,
    createdAt: '2024-01-15T09:00:00Z',
    updatedAt: '2024-01-15T09:00:00Z',
  },
  {
    id: '19',
    title: 'Terrain 500m2 Andraharo',
    slug: 'terrain-andraharo',
    type: 'vente',
    category: 'terrain',
    price: 95000000,
    surface: 500,
    rooms: 0,
    bedrooms: 0,
    bathrooms: 0,
    description: `Terrain de 500m2 bien situe a Andraharo, quartier en plein developpement d'Antananarivo.

Terrain plat et cloture. Eau et electricite sur place. Proche commerces et ecoles.

Ideal pour construction maison individuelle. Titre foncier en cours.`,
    shortDescription: 'Terrain 500m2 Andraharo, cloture, eau et electricite sur place.',
    address: 'Andraharo',
    city: 'Antananarivo',
    latitude: -18.8900,
    longitude: 47.5350,
    images: [
      { id: '19-1', url: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&q=80', alt: 'Terrain Andraharo' },
    ],
    features: ['Cloture', 'Eau sur place', 'Electricite', 'Proche commerces'],
    state: 'bon',
    isFeatured: false,
    createdAt: '2024-01-12T11:00:00Z',
    updatedAt: '2024-01-12T11:00:00Z',
  },
  {
    id: '20',
    title: 'Terrain bord de mer 3000m2 Diego Suarez',
    slug: 'terrain-bord-mer-diego-suarez',
    type: 'vente',
    category: 'terrain',
    price: 380000000,
    surface: 3000,
    rooms: 0,
    bedrooms: 0,
    bathrooms: 0,
    description: `Terrain d'exception de 3000m2 en bord de mer a Ramena, Diego Suarez. Vue sur la baie de Diego, l'une des plus belles baies du monde.

Acces direct a la plage de sable blanc. Terrain plat avec quelques cocotiers. Eau et electricite a proximite.

Opportunite rare pour projet eco-lodge ou resort boutique.`,
    shortDescription: 'Terrain 3000m2 bord de mer Ramena, vue baie de Diego.',
    address: 'Ramena',
    city: 'Diego Suarez',
    latitude: -12.2600,
    longitude: 49.3750,
    images: [
      { id: '20-1', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', alt: 'Terrain bord de mer' },
      { id: '20-2', url: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80', alt: 'Vue baie' },
    ],
    features: ['Bord de mer', 'Plage privee', 'Vue baie', 'Cocotiers', 'Zone touristique'],
    state: 'bon',
    isFeatured: true,
    createdAt: '2024-01-08T08:00:00Z',
    updatedAt: '2024-01-08T08:00:00Z',
  },
  // Autres proprietes
  {
    id: '7',
    title: 'Appartement T2 Ankorondrano',
    slug: 'appartement-t2-ankorondrano',
    type: 'vente',
    category: 'appartement',
    price: 95000000,
    surface: 55,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    description: `Appartement T2 de 55m2 au 2eme etage dans le quartier dynamique d'Ankorondrano. Proche des bureaux et centres commerciaux.

L'appartement comprend un sejour de 20m2, une cuisine ouverte equipee, une chambre de 14m2 avec placard integre, une salle de bain.

Residence securisee avec gardien. Place de parking incluse.`,
    shortDescription: 'T2 55m2 Ankorondrano, parking inclus, proche commerces.',
    address: 'Residence Galaxy, Ankorondrano',
    city: 'Antananarivo',
    latitude: -18.8850,
    longitude: 47.5150,
    images: [
      { id: '7-1', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', alt: 'Sejour' },
      { id: '7-2', url: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80', alt: 'Chambre' },
    ],
    features: ['Parking', 'Gardien', 'Cuisine equipee', 'Placard'],
    state: 'bon',
    yearBuilt: 2019,
    energyClass: 'B',
    isFeatured: false,
    createdAt: '2024-01-14T13:00:00Z',
    updatedAt: '2024-01-14T13:00:00Z',
  },
  {
    id: '8',
    title: 'Maison de ville a Antsirabe',
    slug: 'maison-ville-antsirabe',
    type: 'vente',
    category: 'maison',
    price: 120000000,
    surface: 150,
    rooms: 5,
    bedrooms: 3,
    bathrooms: 2,
    description: `Belle maison de ville de 150m2 sur un terrain de 400m2 dans le centre d'Antsirabe, la ville d'eau.

La maison comprend un sejour de 30m2, une salle a manger, une cuisine, 3 chambres, 2 salles de bain. Jardin avec arbres fruitiers.

Climat agreable toute l'annee. Proche thermes et lac Ranomafana.`,
    shortDescription: 'Maison 150m2, jardin 400m2, climat ideal, proche thermes.',
    address: 'Avenue de l\'Independance',
    city: 'Antsirabe',
    latitude: -19.8659,
    longitude: 47.0333,
    images: [
      { id: '8-1', url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80', alt: 'Maison exterieur' },
      { id: '8-2', url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', alt: 'Sejour' },
      { id: '8-3', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', alt: 'Jardin' },
    ],
    features: ['Jardin', 'Arbres fruitiers', 'Garage', 'Cheminee'],
    state: 'bon',
    yearBuilt: 1980,
    energyClass: 'C',
    isFeatured: true,
    createdAt: '2024-01-11T15:00:00Z',
    updatedAt: '2024-01-16T10:00:00Z',
  },
  {
    id: '9',
    title: 'Studio equipe Behoririka',
    slug: 'studio-equipe-behoririka',
    type: 'location',
    category: 'appartement',
    price: 600000,
    surface: 25,
    rooms: 1,
    bedrooms: 0,
    bathrooms: 1,
    description: `Studio de 25m2 entierement equipe et renove, situe a Behoririka proche du marche et des transports.

Le studio comprend une piece principale avec coin cuisine (plaques, frigo), une salle d'eau avec douche.

Ideal premier logement. Eau incluse dans le loyer.`,
    shortDescription: 'Studio 25m2 renove, equipe, eau incluse, proche marche.',
    address: 'Lot 123 Behoririka',
    city: 'Antananarivo',
    latitude: -18.9050,
    longitude: 47.5300,
    images: [
      { id: '9-1', url: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80', alt: 'Studio' },
      { id: '9-2', url: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=800&q=80', alt: 'Cuisine' },
    ],
    features: ['Meuble', 'Cuisine equipee', 'Eau incluse'],
    state: 'bon',
    yearBuilt: 2000,
    energyClass: 'D',
    isFeatured: false,
    createdAt: '2024-01-13T08:00:00Z',
    updatedAt: '2024-01-13T08:00:00Z',
  },
  {
    id: '10',
    title: 'Penthouse avec terrasse Ivandry',
    slug: 'penthouse-terrasse-ivandry',
    type: 'vente',
    category: 'appartement',
    price: 650000000,
    surface: 180,
    rooms: 5,
    bedrooms: 3,
    bathrooms: 3,
    description: `Exceptionnel penthouse de 180m2 au dernier etage avec terrasse de 80m2 offrant une vue panoramique sur Antananarivo.

L'appartement comprend un double sejour de 60m2 avec baies vitrees, une cuisine equipee haut de gamme, 3 suites avec salle de bain privative.

Terrasse amenagee avec jacuzzi. Residence de standing avec piscine commune, salle de sport, gardiennage 24h/24.`,
    shortDescription: 'Penthouse 180m2, terrasse 80m2 avec jacuzzi, vue panoramique.',
    address: 'Tour Prestige Ivandry',
    city: 'Antananarivo',
    latitude: -18.8800,
    longitude: 47.5100,
    images: [
      { id: '10-1', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Terrasse' },
      { id: '10-2', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Sejour' },
      { id: '10-3', url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80', alt: 'Vue panoramique' },
    ],
    features: ['Terrasse', 'Jacuzzi', 'Piscine', 'Salle de sport', 'Gardien 24h', 'Vue panoramique'],
    state: 'neuf',
    yearBuilt: 2023,
    energyClass: 'A',
    isFeatured: true,
    createdAt: '2024-01-06T12:00:00Z',
    updatedAt: '2024-01-12T14:00:00Z',
  },
  {
    id: '11',
    title: 'Maison familiale Andoharanofotsy',
    slug: 'maison-familiale-andoharanofotsy',
    type: 'vente',
    category: 'maison',
    price: 85000000,
    surface: 100,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 1,
    description: `Maison familiale de 100m2 sur un terrain de 300m2 dans le quartier calme d'Andoharanofotsy.

La maison comprend un sejour de 25m2, une cuisine, 3 chambres, une salle de bain. Cour avec possibilite de jardin potager.

Quartier residentiel, proche ecoles et commerces. Ideal pour famille.`,
    shortDescription: 'Maison 100m2 avec terrain 300m2, quartier calme, proche ecoles.',
    address: 'Lot 456 Andoharanofotsy',
    city: 'Antananarivo',
    latitude: -18.9400,
    longitude: 47.5400,
    images: [
      { id: '11-1', url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', alt: 'Maison' },
      { id: '11-2', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Interieur' },
    ],
    features: ['Terrain', 'Cour', 'Proche ecoles', 'Quartier calme'],
    state: 'bon',
    yearBuilt: 2005,
    energyClass: 'C',
    isFeatured: false,
    createdAt: '2024-01-09T10:00:00Z',
    updatedAt: '2024-01-09T10:00:00Z',
  },
  {
    id: '12',
    title: 'Bungalow bord de plage Ifaty',
    slug: 'bungalow-bord-plage-ifaty',
    type: 'location',
    category: 'maison',
    price: 2000000,
    surface: 45,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    description: `Charmant bungalow de 45m2 directement sur la plage d'Ifaty. Ideal pour vacances ou sejour longue duree.

Le bungalow comprend un sejour avec cuisine ouverte, une chambre avec moustiquaire, une salle d'eau. Terrasse avec vue sur le lagon.

Acces direct a la plage. Location saisonniere ou annuelle possible.`,
    shortDescription: 'Bungalow 45m2 sur la plage, terrasse vue lagon, acces direct mer.',
    address: 'Village Ifaty',
    city: 'Toliara',
    latitude: -23.1500,
    longitude: 43.6167,
    images: [
      { id: '12-1', url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80', alt: 'Bungalow plage' },
      { id: '12-2', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', alt: 'Plage' },
    ],
    features: ['Bord de plage', 'Terrasse', 'Vue mer', 'Moustiquaire'],
    state: 'bon',
    yearBuilt: 2015,
    energyClass: 'D',
    isFeatured: false,
    createdAt: '2024-01-07T09:00:00Z',
    updatedAt: '2024-01-07T09:00:00Z',
  },
  {
    id: '13',
    title: 'Villa avec vue sur la baie Diego Suarez',
    slug: 'villa-vue-baie-diego-suarez',
    type: 'vente',
    category: 'villa',
    price: 380000000,
    surface: 220,
    rooms: 6,
    bedrooms: 4,
    bathrooms: 3,
    description: `Magnifique villa de 220m2 avec vue imprenable sur la baie de Diego Suarez (Antsiranana), l'une des plus belles baies du monde.

La villa comprend un sejour de 50m2 ouvert sur la terrasse, une cuisine equipee, 4 chambres dont 2 suites, 3 salles de bain.

Jardin de 1500m2 avec piscine. Groupe electrogene et citerne.`,
    shortDescription: 'Villa 220m2, piscine, vue baie exceptionnelle, jardin 1500m2.',
    address: 'Ramena',
    city: 'Diego Suarez',
    latitude: -12.2685,
    longitude: 49.2913,
    images: [
      { id: '13-1', url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80', alt: 'Villa vue baie' },
      { id: '13-2', url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80', alt: 'Piscine' },
      { id: '13-3', url: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80', alt: 'Terrasse' },
    ],
    features: ['Piscine', 'Vue mer', 'Jardin', 'Groupe electrogene', 'Citerne'],
    state: 'excellent',
    yearBuilt: 2018,
    energyClass: 'B',
    isFeatured: true,
    createdAt: '2024-01-04T11:00:00Z',
    updatedAt: '2024-01-11T15:00:00Z',
  },
  {
    id: '14',
    title: 'T3 meuble residence securisee Ivato',
    slug: 't3-meuble-ivato',
    type: 'location',
    category: 'appartement',
    price: 2500000,
    surface: 85,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    description: `Appartement T3 de 85m2 entierement meuble dans residence securisee proche de l'aeroport d'Ivato.

L'appartement comprend un sejour de 30m2, une cuisine equipee, 2 chambres meublees, une salle de bain. Balcon avec vue sur le jardin de la residence.

Piscine commune, gardiennage 24h, parking securise. Ideal expatries.`,
    shortDescription: 'T3 85m2 meuble, piscine, gardien 24h, proche aeroport.',
    address: 'Residence Palm, Ivato',
    city: 'Antananarivo',
    latitude: -18.8000,
    longitude: 47.4800,
    images: [
      { id: '14-1', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', alt: 'Sejour meuble' },
      { id: '14-2', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', alt: 'Chambre' },
    ],
    features: ['Meuble', 'Piscine', 'Gardien 24h', 'Parking', 'Proche aeroport'],
    state: 'excellent',
    yearBuilt: 2020,
    energyClass: 'A',
    isFeatured: false,
    createdAt: '2024-01-03T14:00:00Z',
    updatedAt: '2024-01-08T10:00:00Z',
  },
  {
    id: '15',
    title: 'Domaine agricole avec maison Ambositra',
    slug: 'domaine-agricole-ambositra',
    type: 'vente',
    category: 'terrain',
    price: 250000000,
    surface: 50000,
    rooms: 6,
    bedrooms: 4,
    bathrooms: 2,
    description: `Domaine agricole de 5 hectares avec maison principale de 180m2 dans la region d'Ambositra, capitale de l'artisanat malgache.

La maison comprend un grand sejour avec cheminee, une cuisine, 4 chambres, 2 salles de bain. Dependances pour le personnel et stockage.

Terres cultivables, verger, source d'eau naturelle. Ideal projet agricole ou residence secondaire.`,
    shortDescription: 'Domaine 5 hectares, maison 180m2, terres cultivables, verger.',
    address: 'Route de Fandriana',
    city: 'Ambositra',
    latitude: -20.5167,
    longitude: 47.2333,
    images: [
      { id: '15-1', url: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80', alt: 'Domaine' },
      { id: '15-2', url: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80', alt: 'Maison principale' },
      { id: '15-3', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', alt: 'Terres' },
    ],
    features: ['Terrain', 'Verger', 'Source d\'eau', 'Dependances', 'Cheminee'],
    state: 'bon',
    yearBuilt: 1970,
    energyClass: 'D',
    isFeatured: true,
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-05T12:00:00Z',
  },
]

export const getCities = (): string[] => {
  const cities = [...new Set(mockProperties.map((p) => p.city))]
  return cities.sort()
}

export const getCategories = (): string[] => {
  const categories = [...new Set(mockProperties.map((p) => p.category))]
  return categories.sort()
}
