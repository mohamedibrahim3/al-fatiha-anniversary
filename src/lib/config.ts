/**
 * Central configuration for the romantic birthday invitation.
 * Edit this file to customize any text, dates, schedules, or locations.
 */

export const BIRTHDAY_CONFIG = {
  /** Name of the birthday person */
  name: 'Toti',

  /** Headline titles */
  eyebrow: 'A Special Celebration of Love & Life',
  heroTitle: 'Happy Birthday, My Love',
  heroSubtitle: 'Toti',

  /** Target date for countdown (ISO 8601) */
  targetDate: '2027-01-01T00:00:00',

  /** Formatted date parts */
  date: {
    day: 1,
    month: 'January',
    monthArabic: 'يناير',
    year: 2027,
    display: '1 · January · 2027',
    short: '1 January 2027',
  },

  /** Media assets */
  assets: {
    heroPoster: '/assets/hero-poster.jpg',
    envelopeBg: '/assets/envelope-bg.jpg',
    musicSrc: '/assets/birthday-music.mp3',
  },

  /** Welcome letter section */
  welcome: {
    tag: 'With All My Heart',
    heading: 'To My Everything,<br />Happy Birthday',
    arabicHeading: 'إلى من ملكت روحي وقلبي',
    body1:
      'On this magical night, we gather to celebrate the most radiant light in my life. Every smile of yours brings warmth to my world, and every shared moment is a treasure I cherish deeply.',
    body2:
      "My love, you are the most beautiful gift life has given me. With you, every day feels like a dream I never want to wake up from. I can't wait to celebrate this special night together.",
    arabicQuote: 'كل عام وأنتِ لعمري أجمل أعياده، ولروحي نبضها وسر سعادتها ♡',
  },

  /** Countdown section */
  countdown: {
    tag: 'Counting Every Moment',
    heading: 'The Countdown',
    subtitle: 'Until the celebration begins',
  },

  /** Memories gallery */
  memories: [
    {
      src: '/assets/memories/memory-1.jpg',
      title: 'Golden Sunset Together',
      caption: 'Walking hand in hand through our favorite memories',
    },
    {
      src: '/assets/memories/memory-2.jpg',
      title: 'Romantic Candlelit Dinner',
      caption: 'Surrounded by roses, love, and sweet whispers',
    },
    {
      src: '/assets/memories/memory-3.jpg',
      title: 'Wishes & Celebrations',
      caption: 'Sparklers, laughter, and a night of endless dreams',
    },
    {
      src: '/assets/memories/memory-4.jpg',
      title: 'Gifts from the Heart',
      caption: 'Every little thing reminds me of how precious you are',
    },
  ],

  /** Evening Program / Schedule */
  program: [
    {
      icon: '◈',
      time: '6:30',
      period: 'PM',
      title: 'Candlelight Welcome',
      desc: 'Arrival of guests & welcome drinks amidst starlight and roses',
    },
    {
      icon: '✦',
      time: '8:00',
      period: 'PM',
      title: 'Grand Birthday Entrance & Cake Cutting',
      desc: 'Lighting the candles, making wishes, and the birthday toast',
    },
    {
      icon: '◈',
      time: '9:30',
      period: 'PM',
      title: 'Romantic Dinner & Music',
      desc: 'An exquisite dining experience accompanied by gentle violin tunes',
    },
    {
      icon: '✦',
      time: '11:00',
      period: 'PM',
      title: 'Starlight Wishes & Dance',
      desc: 'Dancing under the stars, fireworks, and cherished memories',
    },
  ],

  /** Venue Details */
  venue: {
    tag: 'Where Love Gathers',
    heading: 'The Venue',
    name: 'The Rosewood Villa & Gardens',
    address: 'Private Sunset Estate, Cairo - Alexandria Desert Road',
    city: 'Cairo, Egypt',
    mapsUrl: 'https://maps.google.com',
    dressCodeSummary: 'Rose Pink, Champagne Gold, or Black-Tie Formal',
  },

  /** Guidelines */
  guidelines: [
    {
      tag: 'Formal Attire',
      title: 'Dress Code',
      body:
        'Ladies are warmly invited to wear elegant evening dresses in soft pink, blush, or champagne tones. Gentlemen are requested to wear formal dark suits.',
      arabicNote: [
        'نتمنى من الجميع الحضور بأزياء رسمية أنيقة تليق بالليلة المميزة',
        'للسيدات: فساتين راقية بدرجات الوردي أو البيج الذهبي',
        'للرجال: بدلات رسمية أنيقة',
      ],
    },
    {
      tag: 'Special Note',
      title: 'Gifts & Wishes',
      body:
        'Your presence, warm laughter, and loving wishes are the most precious gifts of all to celebrate this milestone together.',
      arabicNote: [
        'حضوركم الغالي وابتسامتكم الصادقة هي أجمل هدية لقلوبنا',
        'نتطلع لقضاء ليلة استثنائية لا تُنسى بصحبتكم',
      ],
    },
  ],

  /** Closing quote */
  closing: {
    quote: '"You are my today and all of my tomorrows. Happy Birthday, my love."',
    arabicQuote: '«أنتِ حكاية عمري وأجمل أقداره.. كل عام وأنتِ بقلبي»',
  },

  /** UP-inspired Love Story & Game */
  upLoveStory: {
    tag: '🎈 Our Adventure Book · كتاب مغامراتنا',
    heading: 'From Childhood Dreams to Forever Together',
    subtitle: 'حكايتنا المستوحاة من كرتون UP · من أول حلم لحد ما اتجوزنا',
    description:
      '«زي حكاية كارل وإيلي.. رحلتنا بدأت ببلالين وأحلام بريئة، وكبرت في قلوبنا يوم ورا يوم، لحد ما بقت أجمل حقيقة في عمري: عروستي وحبيبتي Toti ♡»',
    chapters: [
      {
        id: 1,
        title: 'The First Spark',
        arabicTitle: 'شرارة البداية وبداية الحلم',
        period: 'Childhood & Big Dreams · مرحلة الطفولة',
        badge: '🎈 شارة المغامر الأول',
        image: '/assets/story/scene-1.jpg',
        quote:
          '«في بيت الشجرة الصغير بدأت الحكاية.. شوية بلالين طايرة في السما، وكتاب مغامرات، ووعد طفولي إننا نفضل سوا للأبد.»',
        englishQuote:
          'In our little clubhouse, our adventure began with colorful balloons, a handmade scrapbook, and big dreams.',
      },
      {
        id: 2,
        title: 'Dreaming on the Hill',
        arabicTitle: 'قلوب في السما وأحلام بتكبر',
        period: 'Youth & Golden Sunsets · أحلام الشباب',
        badge: '☁️ شارة غيوم القلوب',
        image: '/assets/story/scene-2.jpg',
        quote:
          '«كبرنا وكبر حبنا معانا.. قعدنا على تلة الأحلام نرسم في السحاب قلوب طايرة، وكل غيمة كانت شايلة أمنية إني أشوفك بالفستان الأبيض.»',
        englishQuote:
          'As we grew, our love bloomed like wildflowers. We watched heart-shaped clouds drift across the golden sky.',
      },
      {
        id: 3,
        title: 'Building Our Paradise',
        arabicTitle: 'بنبني بيتنا وبرطمان الجنة',
        period: 'Promises & Building Together · خطوة بخطوة',
        badge: '🏡 شارة بيت الأحلام',
        image: '/assets/story/scene-3.jpg',
        quote:
          '«بأيدينا حطينا طوبة فوق طوبة.. برطمان تحويشة الجنة وكل تفصيلة بنرسمها سوا، بنسجل كل ضحكة في كتاب مغامراتنا.»',
        englishQuote:
          'Hand in hand, painting our dream home. Every coin in our Paradise Fund was a step toward our forever.',
      },
      {
        id: 4,
        title: 'Our Happily Ever After',
        arabicTitle: 'حلم العمر حقيقة · ليلة العمر وفرحتنا',
        period: 'Now & Forever · فرحة العمر',
        badge: '💍 شارة حب للأبد',
        image: '/assets/story/scene-4.jpg',
        quote:
          '«والنهاردة.. البلالين والأحلام كلها بقت حقيقة! ليلة العمر وقمرها اللي نوّر دنيتي. كل سنة وأنتِ أجمل مغامرة وسر سعادتي يا Toti ♡»',
        englishQuote:
          'And today, all our dreams became our breathtaking reality. Under the stars, my forever bride, happy birthday my love!',
      },
    ],
  },

  /** Footer details */
  footer: {
    brand: 'ذِكــرى',
    brandSubtitle: 'Crafted with Love for Toti',
    year: '2027',
  },

  /** Meta / SEO */
  meta: {
    title: 'Happy Birthday, My Love — January 1, 2027',
    description: 'An exclusive and romantic birthday celebration invitation for Toti on January 1, 2027.',
    ogImage: '/assets/hero-poster.jpg',
  },
} as const;
