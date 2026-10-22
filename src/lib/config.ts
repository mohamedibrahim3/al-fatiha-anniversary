/**
 * Central configuration for the 1st Anniversary of Reading Al-Fatiha (قراءة الفاتحة).
 * Celebrates Sohaila & Hassan (سُهيلة وحَسَن) on October 24, 2026.
 */

export const BIRTHDAY_CONFIG = {
  /** Bride and Groom Names */
  name: 'سُـهَـيـلَـة',
  groomName: 'مُـحَـمَّـد',
  fatherName: 'عَـلِيّ',
  familyName: 'الشَّريف',
coupleDisplay: 'مُـحَـمَّـد ♡ سُـهَـيـلَـة',
  /** Headline titles */
  eyebrow: 'ذكرى قراءة الفاتحة · عامٌ من النور والمودّة',
  heroTitle: 'عامٌ من النور والمحبة',
  heroSubtitle: 'مُـحَـمَّـد & سُـهَـيـلَـة',

  /** Target date for countdown (ISO 8601: October 24, 2026) */
  targetDate: '2026-10-24T00:00:00',

  /** Formatted date parts */
  date: {
    day: 24,
    month: 'October',
    monthArabic: 'أكتوبر',
    year: 2026,
    display: '24 · October · 2026',
    short: '24 أكتوبر 2026',
    arabicDisplay: 'السبت، 24 أكتوبر 2026',
  },

  /** Media assets */
  assets: {
    heroPoster: '/One-Year Al-Fatiha Celebration.png',
    envelopeBg: '/assets/envelope-bg.jpg',
    musicSrc: '/assets/birthday-music.mp3',
  },

  /** Custom Poem Section (قصيدة ذكرى قراءة الفاتحة) */
  poem: {
    tag: 'أبيات الوفاء والمودة',
    heading: 'بِقراءةِ الفاتحةِ الزهراءِ في المُلتقى',
    subtitle: 'أبياتٌ شِعرية كُتبت بمداد القلب احتفالاً بمرور عام كامل على قراءة فاتحتنا المباركة',
    verses: [
      {
        shatr1: 'بِقراءةِ الفاتحةِ الزهراءِ في المُلتقى',
        shatr2: 'مرّت سنةٌ كالنورِ والحبُّ ارتقى',
      },
      {
        shatr1: 'يـا "سُـهَـيـلَـةُ" يا بدراً تراءى لنا',
        shatr2: 'بـنـورِ جـمـالِـكِ الـقَـلـبُ الـمُـعَـنّـى سَـقَـى',
      },
      {
        shatr1: 'و"حَـسَـنُ" الخصالِ أتاكِ مكرمةً',
        shatr2: 'فـكُـنـتِ لِـحُـسـنِـهِ طَـيـراً رَوَى وبَـقَـى',
      },
      {
        shatr1: 'مِنْ شَفّةِ المنى "عَـلِيٌّ" أبٌ عظيمُ الهُدى',
        shatr2: 'وفي سيرةِ الطُّهرِ نلتِ الرِّضا والتقى',
      },
      {
        shatr1: 'و"الشَّريفُ" أصلٌ نبيلٌ زادَكِ شرفاً',
        shatr2: 'طـوبـى لِـقَـلـبٍ بِـحُـبِّ الـطُّـهـرِ استسقى',
      },
      {
        shatr1: 'عـامٌ مَـضَـى والعمرُ بكِ يبتسمُ',
        shatr2: 'ودامت عُرى الوصلِ بيننا عهداً وثيقاً نَثقى',
      },
    ],
  },

  /** Welcome letter section */
  welcome: {
    tag: 'بين قلبي وقلبكِ عهدٌ ومودة',
    heading: 'إلى خطيبتي وسر سعادتي،<br />سُـهَـيـلَـة',
    arabicHeading: 'إلى من ملكت روحي وقلبي',
    body1:
      'في مثل هذا اليوم المبارك، تعاهدنا بقراءة الفاتحة على المحبة والوفاء، وبدأت أجمل وأطهر حكاية في حياتي. عامٌ كامل مرّ كطيف نورٍ، كبرت فيه محبتكِ في وجداني، وتأكدت فيه كل يوم أنكِ أجمل أقدار عمري ونعمة ربي الكبرى.',
    body2:
      'يا سهيلة، أنتِ السكن والأمان والبهجة التي تضيء دربي. كل لحظة جمعتنا في هذا العام كانت شاهداً على صدق العهد والمودة، وأتمنى من الله أن يديم بيننا الود والسكينة عهداً وثيقاً حتى الأبد.',
  },

  /** Countdown section */
  countdown: {
    tag: 'نحتفل بكل ثانية في حكايتنا',
    heading: 'العد التنازلي ليوم الذكرى',
    subtitle: 'يوم 24 أكتوبر 2026 · مرور عام على قراءة فاتحتنا المباركة',
  },

  /** Memories gallery */
  memories: [
    {
      src: '/IMG-20251025-WA0426.jpg',
      title: 'لحظة من أجمل لحظاتنا',
      caption: 'ذكرى غالية تجمع بين قلوبنا',
    },
    {
      src: '/Anime Wedding Moment on a Rose Sofa.png',
      title: 'على كنبة الورد',
      caption: 'لحظة حب من خيال الأنيمي تشبه واقعنا',
    },
    {
      src: '/IMG-20251025-WA0266.jpg',
      title: 'ضحكات ولمّة حلوة',
      caption: 'أجمل اللحظات هي اللي بنعيشها سوا',
    },
    {
      src: '/Warm Family Gathering Portrait.png',
      title: 'لمّة العيلة الدافية',
      caption: 'دفء الحب والمودة في لحظة عائلية',
    },
    {
      src: '/IMG-20251025-WA0256.jpg',
      title: 'ابتسامة من القلب',
      caption: 'كل ابتسامة منكِ كانت وطناً دافئاً لروحي',
    },
    {
      src: '/5120d63b-7168-478d-b980-e2bf2469f345.png',
      title: 'ذكرى تستحق الاحتفال',
      caption: 'عامٌ مضى والعمرُ بكِ يبتسم',
    },
    {
      src: '/IMG-20251025-WA0359.jpg',
      title: 'فرحة وسعادة',
      caption: 'طوبى لقلبٍ بحب الطهر استسقى',
    },
    {
      src: '/Celebratory Living Room Portrait.png',
      title: 'احتفال بأجمل ذكرى',
      caption: 'مرّت سنةٌ كالنورِ والحبُّ ارتقى ♡',
    },
  ],

  /** Evening Program / Schedule */
  program: [
    {
      icon: '◈',
      time: '6:30',
      period: 'PM',
      title: 'استقبال الذكرى بأضواء الشموع',
      desc: 'لحظات هادئة على أضواء الشموع وألحان الكمان الرومانسية',
    },
    {
      icon: '✦',
      time: '8:00',
      period: 'PM',
      title: 'تجديد العهد وتقطيع الكيك',
      desc: 'الاحتفال بمرور 365 يوماً على قراءة الفاتحة وعهد الحب المستمر',
    },
    {
      icon: '◈',
      time: '9:30',
      period: 'PM',
      title: 'عشاء رومانسي وموسيقى ساحرة',
      desc: 'جلسة خاصة وتناول العشاء مع استرجاع أجمل ذكريات العام الماضي',
    },
    {
      icon: '✦',
      time: '11:00',
      period: 'PM',
      title: 'أمنيات تحت أضواء النجوم',
      desc: 'دعوات مباركة بأن يديم الله بيننا المودة حتى تمام الفرحة الكبرى',
    },
  ],

  /** Venue Details */
  venue: {
    tag: 'حيث يلتقي الحب والوفاء',
    heading: 'مكان الاحتفال',
    name: 'The Rosewood Villa & Gardens',
    address: 'Private Sunset Estate, Cairo - Alexandria Desert Road',
    city: 'Cairo, Egypt',
    mapsUrl: 'https://maps.google.com',
    dressCodeSummary: 'Rose Pink, Champagne Gold, or Black-Tie Formal',
  },

  /** Guidelines */
  guidelines: [
    {
      tag: 'أزياء الاحتفال',
      title: 'Dress Code',
      body:
        'نحتفل بذكرى قراءة الفاتحة في أجواء راقية مليئة بالحب والأناقة الوردية والذهبية.',
      arabicNote: [
        'نتمنى من الجميع الحضور بأزياء رسمية أنيقة تليق بالليلة المباركة',
        'للسيدات: فساتين راقية بدرجات الوردي أو البيج الذهبي',
        'للرجال: بدلات رسمية أنيقة',
      ],
    },
    {
      tag: 'دعوات وأمنيات',
      title: 'دعواتكم الصادقة',
      body:
        'حضوركم ودعواتكم الطيبة بالبركة ودوام الألفة والمودة هي أغلى الهدايا لقلوبنا.',
      arabicNote: [
        'دعواتكم القلبية المباركة سر سعادتنا وتمام فرحتنا',
        'عام مضى وعمر قادم يجمعنا بالخير والوفاء إن شاء الله',
      ],
    },
  ],

  /** Closing quote */
  closing: {
    quote: '"عامٌ مضى والعمرُ بكِ يبتسمُ.. ودامت عُرى الوصلِ بيننا عهداً وثيقاً نَثقى."',
    arabicQuote: '«بِقراءةِ الفاتحةِ الزهراءِ في المُلتقى.. مرّت سنةٌ كالنورِ والحبُّ ارتقى ♡»',
  },

  /** UP-inspired Love Story & Game */
  upLoveStory: {
    tag: '🎈 Our Adventure Book · كتاب مغامراتنا',
    heading: 'From Childhood Dreams to Forever Together',
    subtitle: 'حكايتنا المستوحاة من كرتون UP · من أول وعد وقراءة فاتحة لحد ما نكمل العمر سوا',
    description:
      '«زي حكاية كارل وإيلي.. رحلتنا بدأت بوعد طاهر وبلالين وأحلام بريئة، وقراءة الفاتحة اللي جمعت بين قلوبنا، لحد ما كملنا سنة من الحب وبنرسم سوا بيت أحلامنا: سُهيلة ومُـحَـمَّـد ♡»',
    chapters: [
      {
        id: 1,
        title: 'The First Spark',
        arabicTitle: 'شرارة البداية وبداية الحلم',
        period: 'First Glance & Big Dreams · بداية التعارف',
        badge: '🎈 شارة البداية الطاهرة',
        image: '/assets/story/scene-1.jpg',
        quote:
          '«في هدوء البدايات، بدأت أحلى حكاية.. نظرة صادقة وأمنية نقية في القلب، وإحساس جميل إن الأيام الجاية مخبية سر السعادة.»',
        englishQuote:
          'In the quiet moments of the beginning, an honest dream sparked in our hearts.',
      },
      {
        id: 2,
        title: 'Love Blossoming',
        arabicTitle: 'قلوب تتلاقى وأحلام تكبر',
        period: 'Growing Love & Affection · تلاقي الأرواح',
        badge: '☁️ شارة المودة والرحمة',
        image: '/assets/story/scene-2.jpg',
        quote:
          '«كبرت المودة يوم ورا يوم.. تلاقت الأرواح في نقاء، وكل يوم كان بيأكد إن "سُهيلة" هي البدر اللي نوّر دنيتي وسر ابتسامتي.»',
        englishQuote:
          'Day by day, our affection blossomed like spring flowers in the sunlight.',
      },
      {
        id: 3,
        title: 'Reading Al-Fatiha',
        arabicTitle: 'قراءة الفاتحة والعهد المقدس (24 أكتوبر)',
        period: '24 October · يوم قراءة الفاتحة المبارك',
        badge: '📖 شارة الفاتحة والعهد',
        image: '/assets/story/scene-3.jpg',
        quote:
          '«يوم 24 أكتوبر.. وضعنا أيدينا في أيدي بعض وتلونا الفاتحة عهداً وثيقاً على المودة والرحمة، وبدأت رسمياً حكايتنا النورانية.»',
        englishQuote:
          'On 24 October, our hands joined and Al-Fatiha was recited — a sacred promise for eternity.',
      },
      {
        id: 4,
        title: 'One Year of Light',
        arabicTitle: 'مرّت سنةٌ كالنورِ والحبُّ ارتقى',
        period: '1st Anniversary · عامٌ كامل من الوفاء',
        badge: '💍 شارة عام من النور',
        image: '/assets/story/scene-4.jpg',
        quote:
          '«والنهاردة كملنا سنة كاملة من الحب والسكينة! عـامٌ مَـضَـى والعمرُ بكِ يبتسمُ، وخطوة بخطوة مكملين لحد ما نوصل لبيت أحلامنا يا سُهيلة ♡»',
        englishQuote:
          'Today marks one year of radiant love and laughter. Hand in hand towards our forever home!',
      },
    ],
  },

  /** Footer details */
  footer: {
    brandSubtitle: 'ذكرى مرور عام على قراءة الفاتحة · 24 أكتوبر 2026',
    year: '2026',
  },

  /** Meta / SEO */
  meta: {
    title: 'ذكرى مرور عام على قراءة الفاتحة — سُهيلة وحَسَن · 24 أكتوبر 2026',
    description: 'احتفال خاص بذكرى مرور عام على قراءة الفاتحة والعهد المقدس بين سُهيلة وحَسَن في 24 أكتوبر 2026.',
    ogImage: '/assets/anniversary-hero.jpg',
  },
} as const;
