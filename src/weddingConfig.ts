import { WeddingConfig } from './types';
import heroCouplePhoto from './assets/images/regenerated_image_1787953048353.jpg';
import groomPhoto from './assets/images/regenerated_image_1787953049111.jpg';

/**
 * =========================================================================
 * WEDDING INVITATION CONFIGURATION FILE
 * =========================================================================
 * You can customize names, dates, quotes, venue locations, dress code,
 * background songs, gift/bank accounts, photo gallery, and themes here.
 * 
 * All changes will automatically reflect across the entire digital invitation!
 */

export const weddingConfig: WeddingConfig = {
  meta: {
    siteTitle: 'The Wedding of Alexander & Vivienne',
    welcomeGreeting: 'Together with their families, joyfully invite you to celebrate their wedding',
  },

  // 1. THE COUPLE DETAILS
  couple: {
    hashtag: '#AlexFoundHisViv',
    quote: {
      text: 'And above all these put on love, which binds everything together in perfect harmony.',
      source: 'Colossians 3:14',
    },
    groom: {
      name: 'Alexander Christian',
      shortName: 'Alexander',
      role: 'Groom',
      fullNameWithTitle: 'Alexander Christian Pratama, B.Eng',
      fatherName: 'Mr. Robert Christian Pratama',
      motherName: 'Mrs. Eleanor Sandra Wijaya',
      bio: 'An architectural designer with an obsession for classic jazz, morning pour-overs, and Vivienne’s laughter.',
      instagram: '@alexchristian',
      photoUrl: groomPhoto,
    },
    bride: {
      name: 'Vivienne Claire',
      shortName: 'Vivienne',
      role: 'Bride',
      fullNameWithTitle: 'Vivienne Claire Danuwidjaja, B.A',
      fatherName: 'Mr. David Danuwidjaja',
      motherName: 'Mrs. Cynthia Beatrice Halim',
      bio: 'A botanical illustrator with a heart for vintage novels, tea ceremonies, and traveling the world with Alexander.',
      instagram: '@vivienneclaire',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
  },

  // 2. WEDDING DATE & COUNTDOWN TARGET
  weddingDate: {
    targetIso: '2026-10-24T10:00:00', // Format: YYYY-MM-DDTHH:mm:ss
    displayDate: 'Saturday, 24 October 2026',
    dayOfWeek: 'Saturday',
  },

  // 3. EVENT AGENDAS & VENUES (Wedding Reception)
  events: [
    {
      id: 'reception',
      title: 'Wedding Reception',
      subtitle: 'Celebration, Dining & Toast',
      date: 'Saturday, 24 October 2026',
      dateIso: '2026-10-24T18:30:00',
      startTime: '06:30 PM',
      endTime: '09:30 PM',
      timezone: 'GMT+7',
      venueName: 'The Glasshouse Ballroom - Ayana Midplaza',
      venueAddress: 'Jl. Jenderal Sudirman Kav. 10-11, Karet Tengsin, Jakarta Pusat',
      mapUrl: 'https://goo.gl/maps/DQqiWWjZxNLdpK739?g_st=aw',
      mapEmbedQuery: 'AYANA Midplaza JAKARTA',
      notes: 'Valet parking available at Main Lobby. Formal & Cocktail Attire.',
      iconType: 'celebration',
    },
  ],

  // 4. LOVE STORY TIMELINE
  timeline: [
    {
      year: '2019',
      title: 'First Encounter',
      description: 'Met by serendipity at an indie bookstore café on a rainy Sunday afternoon in Kyoto.',
      imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
    },
    {
      year: '2021',
      title: 'The First Adventure',
      description: 'Taking our first road trip together along the coast, discovering a mutual love for sunsets and road playlists.',
      imageUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80',
    },
    {
      year: '2024',
      title: 'She Said Yes! 💍',
      description: 'Under a canopy of fairy lights and blooming wisteria in Florence, Alexander asked the question that changed forever.',
      imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80',
    },
    {
      year: '2026',
      title: 'Our New Beginning',
      description: 'Surrounded by our dearest loved ones, we step into a lifetime of adventure, devotion, and joy.',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    },
  ],

  // 5. DRESS CODE & COLOR PALETTE (Cooler / Early Winter Romantic Palette)
  dressCode: {
    title: 'Winter Elegance & Black Tie Optional',
    description: 'We kindly invite our beloved guests to dress in our early winter romantic palette featuring frosted rose, ice slate, silver mist, deep evergreen, and winter champagne.',
    colorPalette: [
      { name: 'Frosted Rose', hex: '#D8A4B0' },
      { name: 'Ice Silver', hex: '#D8E2E8' },
      { name: 'Slate Blue', hex: '#587B99' },
      { name: 'Deep Evergreen', hex: '#2C4A42' },
      { name: 'Winter Pearl', hex: '#F2F6F8' },
    ],
    guidelines: [
      'Ladies: Floor-length evening gown, velvet cocktail dress, or tailored winter formal attire with elegant wraps or stoles.',
      'Gentlemen: Classic tuxedo, dark charcoal, midnight blue, or crisp lounge suit with a silk tie or bow tie.',
      'Please refrain from wearing solid white or bright summer neon colors.',
    ],
  },

  // 6. BACKGROUND MUSIC PLAYLIST (Royalty-free high quality wedding piano & acoustic tracks)
  musicTracks: [
    {
      id: 'canon-piano',
      title: 'Canon in D (Romantic Piano)',
      artist: 'Johann Pachelbel (Acoustic)',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-piano-112191.mp3',
    },
    {
      id: 'acoustic-love',
      title: 'Acoustic Serenade for Lovers',
      artist: 'Melodic Strings & Guitar',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=warm-memories-romantic-acoustic-guitar-10974.mp3',
    },
    {
      id: 'cinematic-strings',
      title: 'Everlasting Vow (Orchestral)',
      artist: 'Symphonic Romance',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_276a75f854.mp3?filename=love-ambient-piano-124376.mp3',
    },
  ],
  defaultTrackIndex: 0,

  // 7. DIGITAL WEDDING ENVELOPE / BANK ACCOUNTS / QRIS
  giftAccounts: [
    {
      id: 'bank-bca',
      bankName: 'Bank Central Asia (BCA)',
      accountNumber: '8830192837',
      accountHolder: 'Alexander Christian',
      badge: 'Groom Account',
      qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=BCA-8830192837-AlexanderChristian',
    },
    {
      id: 'bank-mandiri',
      bankName: 'Bank Mandiri',
      accountNumber: '1370018294821',
      accountHolder: 'Vivienne Claire D',
      badge: 'Bride Account',
      qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Mandiri-1370018294821-VivienneClaire',
    },
  ],

  giftRegistries: [
    {
      title: 'Amazon Wedding Registry',
      description: 'Curated home essentials and kitchenware for our new home.',
      link: 'https://www.amazon.com/wedding',
      iconName: 'gift',
    },
    {
      title: 'Honeymoon Wish Fund',
      description: 'Help us make memories on our dream trip to Amalfi Coast.',
      link: 'https://paypal.me',
      iconName: 'plane',
    },
  ],

  // 8. PHOTO GALLERY (High resolution curated engagement photoshoot)
  gallery: [
    {
      id: 'g1',
      url: heroCouplePhoto,
      caption: 'Golden hour sunset stroll by the countryside.',
      featured: true,
    },
    {
      id: 'g2',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
      caption: 'The moment forever began.',
    },
    {
      id: 'g3',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
      caption: 'Laughter, whispers, and endless coffee dates.',
    },
    {
      id: 'g4',
      url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
      caption: 'Whispering promises under the olive trees.',
    },
    {
      id: 'g5',
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80',
      caption: 'Hand in hand towards our next chapter.',
    },
    {
      id: 'g6',
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
      caption: 'Every love story is beautiful, but ours is our favorite.',
    },
  ],

  // 9. RSVP SETTINGS
  rsvpConfig: {
    deadlineDate: '10 October 2026',
    maxGuestsPerInvite: 4,
    allowPlusOne: true,
    dietaryOptions: ['No Restrictions', 'Vegetarian / Vegan', 'Halal Only', 'Gluten Free', 'Nut Allergies'],
  },

  // 10. ACTIVE THEME & THEME PRESETS (Cooler / Early Winter Romantic Themes)
  activeThemeId: 'frosty-winter',
  themes: [
    {
      id: 'frosty-winter',
      name: 'Frosty Winter Rose & Ice Slate',
      primaryColor: '#43657D',
      accentColor: '#B69A5E',
      badgeBg: '#E9F1F6',
      paperBg: '#F5F9FB',
      accentBorder: '#8CAEC7',
      floralTone: 'frostyWinter',
    },
    {
      id: 'frosted-rose',
      name: 'Frosted Rose & Winter Mist',
      primaryColor: '#8C5A6B',
      accentColor: '#C5A059',
      badgeBg: '#F3E8EC',
      paperBg: '#FAF6F8',
      accentBorder: '#C99EAE',
      floralTone: 'frostedRose',
    },
    {
      id: 'icy-slate',
      name: 'Icy Slate & Silver Evergreen',
      primaryColor: '#36535F',
      accentColor: '#9FAEB8',
      badgeBg: '#E3ECF0',
      paperBg: '#F3F7FA',
      accentBorder: '#7895A2',
      floralTone: 'icySlate',
    },
    {
      id: 'dusty-blue',
      name: 'Dusty Blue & Silver Slate',
      primaryColor: '#4A6B82',
      accentColor: '#C0A060',
      badgeBg: '#EAF1F7',
      paperBg: '#F9FBFC',
      accentBorder: '#9BB1C9',
      floralTone: 'dustyBlue',
    },
    {
      id: 'blush-romance',
      name: 'Blush Rose & Gold',
      primaryColor: '#C38D9E',
      accentColor: '#D4AF37',
      badgeBg: '#F9ECEF',
      paperBg: '#FDFBF7',
      accentBorder: '#E8B4B8',
      floralTone: 'blush',
    },
    {
      id: 'sage-garden',
      name: 'Botanical Sage & Olive',
      primaryColor: '#588157',
      accentColor: '#C5A059',
      badgeBg: '#E9EFE6',
      paperBg: '#FAFBF9',
      accentBorder: '#A3B18A',
      floralTone: 'sage',
    },
    {
      id: 'champagne-luxury',
      name: 'Champagne Gold & Ivory',
      primaryColor: '#8C6D3B',
      accentColor: '#DFC186',
      badgeBg: '#FBF5EB',
      paperBg: '#FFFDF9',
      accentBorder: '#D9C29A',
      floralTone: 'champagne',
    },
    {
      id: 'burgundy-velvet',
      name: 'Deep Burgundy & Rosewood',
      primaryColor: '#722F37',
      accentColor: '#C5A059',
      badgeBg: '#F7EBEF',
      paperBg: '#FCF8F9',
      accentBorder: '#9E3D48',
      floralTone: 'burgundy',
    },
  ],
};
