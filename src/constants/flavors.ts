export interface FlavorData {
  id: string
  name: string
  shortTitle: string
  color: string          // Primary accent color (hex)
  bgHero: string         // Full-bleed hero background color
  bgSection: string      // Deep tinted background for dark sections
  glowColor: string      // CSS box-shadow / drop-shadow glow
  stripColor: string     // 3D physical strip hex
  lightColor: string     // 3D bounce light hex
  note: string           // Short sensory note
  tagline: string
  actives: string
}

export const FLAVORS: FlavorData[] = [
  {
    id: 'orange',
    name: 'Blood Orange',
    shortTitle: 'ORANGE',
    color: '#FF5722',
    bgHero: '#E63E00',
    bgSection: '#240A04',
    glowColor: 'rgba(255, 87, 34, 0.4)',
    stripColor: '#FFA066',
    lightColor: '#FF5722',
    note: 'Citrus Punch',
    tagline: 'Sun-Drenched Valencia & Citrus Peel',
    actives: '50mg Micro-Encapsulated Caffeine'
  },
  {
    id: 'mint',
    name: 'Mint Breeze',
    shortTitle: 'MINT BREEZE',
    color: '#00E5C0',
    bgHero: '#08554C',
    bgSection: '#042420',
    glowColor: 'rgba(0, 229, 192, 0.35)',
    stripColor: '#5CE8D6',
    lightColor: '#00E5C0',
    note: 'Peppermint Chill',
    tagline: 'Arctic Spearmint & Crisp Peppermint',
    actives: '50mg Caffeine + 25mg L-Theanine'
  },
  {
    id: 'lemon',
    name: 'Yuzu Citrus',
    shortTitle: 'LEMON CITRUS',
    color: '#FACC15',
    bgHero: '#9E6E00',
    bgSection: '#241902',
    glowColor: 'rgba(250, 204, 21, 0.35)',
    stripColor: '#FFE566',
    lightColor: '#FACC15',
    note: 'Lemon Citrus',
    tagline: 'Sparkling Amalfi Lemon & Yuzu Zest',
    actives: '50mg Fast-Release Caffeine + B-Vitamins'
  },
  {
    id: 'berry',
    name: 'Wild Berry',
    shortTitle: 'WILD BERRY',
    color: '#F43F5E',
    bgHero: '#6A0E3C',
    bgSection: '#260415',
    glowColor: 'rgba(244, 63, 94, 0.35)',
    stripColor: '#FF6699',
    lightColor: '#F43F5E',
    note: 'Berry Medley',
    tagline: 'Blackcurrant & Macerated Bramble',
    actives: '50mg Clean Natural Caffeine'
  },
  {
    id: 'tropical',
    name: 'Tropical Sol',
    shortTitle: 'TROPICAL',
    color: '#FF9100',
    bgHero: '#C75100',
    bgSection: '#261002',
    glowColor: 'rgba(255, 145, 0, 0.4)',
    stripColor: '#FFAE42',
    lightColor: '#FF9100',
    note: 'Passionfruit & Mango',
    tagline: 'Passionfruit, Guava & Island Mango',
    actives: '50mg Sustained-Melt Caffeine'
  }
]

