export interface Project {
  id: number;
  name: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
  accent: string;
  description?: string;
  longDescription?: string;
  client?: string;
  duration?: string;
  team?: string[];
  technologies?: string[];
  gallery?: string[];
  features?: string[];
  challenges?: string;
  solutions?: string;
  results?: string;
  videoUrl?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'TechStartup Tanıtım Filmi',
    category: 'video',
    year: '2025',
    image: '/assets/images/work/work-img-1.jpg',
    tags: ['Video', 'Prodüksiyon'],
    accent: '#F97316',
    description: 'Yeni nesil teknoloji girişimi için dinamik tanıtım filmi',
    longDescription: 'TechStart için 4K çözünürlükte, sinematik kalitede kurumsal tanıtım filmi ürettik. Ürün özelliklerini ve marka değerlerini yaratıcı bir anlatımla hedef kitleye ilettik.',
    client: 'TechStart Inc.',
    duration: '3 ay',
    team: ['Yönetmen', 'Görüntü Yönetmeni', 'Kurgucu', 'Motion Designer'],
    technologies: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Cinema 4D'],
    features: [
      '4K sinematik çekimler',
      '3D animasyonlar',
      'Ses tasarımı',
      'Renk düzenleme',
      'Motion graphics'
    ],
    challenges: 'Teknoloji ürünlerinin karmaşık özelliklerini basit ve anlaşılır bir şekilde görselleştirmek.',
    solutions: 'Karmaşık kavramları basitleştiren metaforlar ve görsel anlatım teknikleri kullandık. Her sahnede ürün faydasını öne çıkardık.',
    results: 'İlk haftada 500K+ views, %85 izlenme oranı, %40 artan web trafiği',
    testimonial: {
      text: "Ekipimiz harika bir iş çıkardı. Video, markamızı tam olarak yansıtıyor ve dönüşüm oranlarımızda belirgin artış sağladı.",
      author: 'Ahmet Yılmaz',
      role: 'CEO, TechStart'
    }
  },
  {
    id: 2,
    name: 'ModaHub E-Ticaret Platformu',
    category: 'web',
    year: '2025',
    image: '/assets/images/work/work-img-2.jpg',
    tags: ['Web', 'E-Ticaret'],
    accent: '#10B981',
    description: 'Modern ve kullanıcı dostu online alışveriş deneyimi',
    longDescription: 'ModaHub için tam ölçekli bir e-ticaret platformu geliştirdik. Kullanıcı deneyimini merkeze alarak, dönüşüm oranlarını optimize eden özellikler entegre ettik.',
    client: 'ModaHub',
    duration: '4 ay',
    team: ['Product Manager', 'UX Designer', 'Frontend Dev', 'Backend Dev', 'DevOps'],
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Akıllı ürün önerileri',
      'Gelişmiş filtreleme',
      'One-page checkout',
      'Mobil uyumlu tasarım',
      'Gerçek zamanlı stok takibi'
    ],
    challenges: 'Yüksek trafik altında performansı korurken, zengin özellikler sunmak.',
    solutions: 'Next.js server-side rendering, edge caching ve veritabanı optimizasyonu kullandık.',
    results: '%45 artan dönüşüm, 2.5s yüklenme süresi, 99.9% uptime',
    testimonial: {
      text: "Satışlarımızda %45 artış gördük. Platform son derece hızlı ve kullanıcılarım da çok memnun.",
      author: 'Elif Demir',
      role: 'Founder, ModaHub'
    }
  },
  {
    id: 3,
    name: 'FitLife Health App',
    category: 'mobil',
    year: '2024',
    image: '/assets/images/work/work-img-3.jpg',
    tags: ['Mobil', 'iOS'],
    accent: '#8B5CF6',
    description: 'Kişiselleştirilmiş fitness ve sağlık takip uygulaması',
    longDescription: 'FitLife için iOS ve Android platformlarında çalışan, AI destekli kişisel antrenör uygulaması geliştirdik.',
    client: 'FitLife',
    duration: '5 ay',
    team: ['Mobile Developer', 'UI/UX Designer', 'Backend Developer', 'AI Engineer'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'TensorFlow', 'HealthKit'],
    features: [
      'AI antrenör tavsiyeleri',
      'Nutrisyon takibi',
      'İlerleme raporları',
      'Sosyal paylaşım',
      'Wearable entegrasyonu'
    ],
    challenges: 'Farklı fitness seviyelerindeki kullanıcılar için kişiselleştirilmiş deneyim sunmak.',
    solutions: 'Machine learning algoritmaları ile kullanıcı davranışlarını analiz edip kişiselleştirilmiş programlar oluşturduk.',
    results: '4.8 App Store rating, 100K+ indirme, %75 kullanıcı retansiyonu',
    testimonial: {
      text: "Uygulamamız, rakiplerimizden ayrışmamızı sağladı. Kullanıcı etkileşimi inanılmaz derecede yüksek.",
      author: 'Can Özkan',
      role: 'CEO, FitLife'
    }
  },
  {
    id: 4,
    name: 'Puzzle Master 3D',
    category: 'oyun',
    year: '2024',
    image: '/assets/images/work/work-img-4.jpg',
    tags: ['Oyun', 'Unity'],
    accent: '#EC4899',
    description: 'Beyin jimnastiği için 3D bulmaca oyunu',
    longDescription: 'Puzzle Master 3D, oyuncuların zihinsel yeteneklerini test eden 100+ seviyeli mobil oyun. Her seviye benzersiz mekanikler sunuyor.',
    client: 'GameStudio',
    duration: '6 ay',
    team: ['Game Designer', 'Unity Developer', '3D Artist', 'Sound Designer'],
    technologies: ['Unity', 'C#', 'Blender', 'FMOD', 'Firebase'],
    features: [
      '100+ özgün seviye',
      'Günlük meydan okumalar',
      'Liderlik tabloları',
      'Başarı sistemi',
      'Haptic feedback'
    ],
    challenges: 'Oyuncuların uzun süre ilgilenmesini sağlayacak zorluk dengesi yaratmak.',
    solutions: 'Adaptive difficulty system ve progression mechanics kullandık.',
    results: '1M+ indirme, 4.6 rating, %15 IAP conversion rate',
    testimonial: {
      text: "Oyunumuz, casual kategorisinde en iyi performans gösteren projemiz oldu.",
      author: 'Zeynep Kaya',
      role: 'Product Lead, GameStudio'
    }
  },
  {
    id: 5,
    name: 'Şehir Panoraması Drone Çekimi',
    category: 'video',
    year: '2024',
    image: '/assets/images/work/work-img-1.jpg',
    tags: ['Video', 'Drone'],
    accent: '#0EA5E9',
    description: 'Şehrin büyüleyici manzaralarını kuş bakışı görünüm',
    longDescription: 'İstanbul\'un simge yapılarını drone ile çekerek belgesel tarzında kısa film ürettik.',
    client: 'Turizm Bakanlığı',
    duration: '2 ay',
    team: ['Drone Operatörü', 'Yönetmen', 'Kurgucu', 'Colorist'],
    technologies: ['DJI Mavic 3 Pro', 'Premiere Pro', 'DaVinci Resolve'],
    features: [
      '8K video',
      'HDR çekimler',
      'Time-lapse sahneler',
      'Ses tasarımı',
      'Renk grading'
    ],
    challenges: 'Hava koşulları ve izin prosedürleri nedeniyle planlama zorluğu.',
    solutions: 'Esnek çekim programı ve gerekli tüm izinleri önceden aldık.',
    results: '2M+ sosyal medya etkileşimi, uluslararası festival ödülü',
    testimonial: {
      text: "Şehrimizi en iyi şekilde yansıtan muhteşem bir işçilik.",
      author: 'Mehmet Şahin',
      role: 'Proje Koordinatörü'
    }
  },
  {
    id: 6,
    name: 'FinTech Corp Kurumsal Site',
    category: 'web',
    year: '2024',
    image: '/assets/images/work/work-img-2.jpg',
    tags: ['Web', 'Kurumsal'],
    accent: '#10B981',
    description: 'Güven veren kurumsal kimlik ve modern web deneyimi',
    longDescription: 'FinTech Corp için güven ve profesyonellik vurgulu, responsive kurumsal web sitesi.',
    client: 'FinTech Corp',
    duration: '2 ay',
    team: ['Art Director', 'Web Developer', 'Copywriter'],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Animasyonlu geçişler',
      'İnteraktif veri görselleştirme',
      'Multi-language desteği',
      'CMS entegrasyonu',
      'SEO optimizasyonu'
    ],
    challenges: 'Kurumsal ciddiyeti yaratıcı tasarımla birleştirmek.',
    solutions: 'Minimal tasarım dili ve güçlü tipografi ile profesyonel görüntü sağladık.',
    results: '%60 artan lead generation, 3.2 saniye ortalama sayfa yüklenme süresi',
    testimonial: {
      text: "Web sitemiz, marka algımızı tam olarak yansıtıyor.",
      author: 'Ayşe Yıldız',
      role: 'CMO, FinTech Corp'
    }
  },
  {
    id: 7,
    name: 'FoodDelivery Express',
    category: 'mobil',
    year: '2023',
    image: '/assets/images/work/work-img-3.jpg',
    tags: ['Mobil', 'Android'],
    accent: '#8B5CF6',
    description: 'Hızlı ve güvenilir yemek siparişi deneyimi',
    longDescription: 'Restoranlar ve müşteriler için seamless bir yemek delivery platformu.',
    client: 'FoodDelivery Inc.',
    duration: '4 ay',
    team: ['Mobile Developers', 'Backend Developers', 'UI/UX Designers', 'QA Engineers'],
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API', 'Stripe'],
    features: [
      'Gerçek zamanlı sipariş takibi',
      'Restoran yönetim paneli',
      'Promo code systems',
      'Push notifications',
      'Rating & reviews'
    ],
    challenges: 'Real-time location tracking ve yüksek concurrency yönetimi.',
    solutions: 'WebSocket entegrasyonu ve scalable backend architecture.',
    results: '50K+ aktif kullanıcı, 4.5 rating, %40 tekrar sipariş oranı',
    testimonial: {
      text: "Operasyonel verimliliğimizde büyük artış yaşadık.",
      author: 'Murat Arslan',
      role: 'Operations Manager'
    }
  },
  {
    id: 8,
    name: 'Stack Runner',
    category: 'oyun',
    year: '2023',
    image: '/assets/images/work/work-img-4.jpg',
    tags: ['Oyun', 'Hyper-Casual'],
    accent: '#EC4899',
    description: 'Addictive hyper-casual stacking game',
    longDescription: 'Basit mekanikler ama derin strateji - Stack Runner, kısa oyun seansları için perfect.',
    client: 'Indie Games Studio',
    duration: '3 ay',
    team: ['Game Developer', '2D Artist', 'Sound Designer'],
    technologies: ['Unity', 'C#', 'Aseprite', 'Unity Ads'],
    features: [
      '1000+ seviye',
      'Power-up systems',
      'Skins ve kostümler',
      'Liderlik tabloları',
      'Günlük ödüller'
    ],
    challenges: 'Replayability ve monetization balance.',
    solutions: 'Level progression sistemi ve rewarded ads mechanics.',
    results: '5M+ indirme, 4.3 rating, %12 IAP conversion',
    testimonial: {
      text: "Hyper-casual kategorisinde en başarılı projemiz.",
      author: 'Emre Koç',
      role: 'Founder, Indie Games'
    }
  },
  {
    id: 9,
    name: 'CW Energy Production Facility',
    category: 'video',
    year: '2025',
    image: '/assets/images/work/work-img-1.jpg',
    videoUrl: 'https://player.vimeo.com/video/1116741515',
    tags: ['Video', 'Prodüksiyon', 'Enerji'],
    accent: '#F97316',
    description: 'CW Energy üretim tesisi için profesyonel tanıtım filmi',
    longDescription: 'CW Energy\'in üretim tesislerinin kapsamlı drone ve sinematik çekimlerini içeren kurumsal tanıtım filmi.',
    client: 'CW Energy',
    duration: '2 ay',
    team: ['Yönetmen', 'Drone Operatörü', 'Görüntü Yönetmeni', 'Kurgucu'],
    technologies: ['Premiere Pro', 'DaVinci Resolve', 'DJI Mavic 3 Pro'],
    features: [
      '4K drone çekimleri',
      'Sinematik kamera hareketleri',
      'Profesyonel ses tasarımı',
      'Renk grading'
    ],
    challenges: 'Büyük ölçekli endüstriyel tesisin etkileyici bir şekilde görselleştirilmesi.',
    solutions: 'Drone ve ground-level çekimleri birleştirerek tesisin boyutunu ve teknolojisini vurguladık.',
    results: 'Kurumsal sunumlarda kullanılan ana tanıtım videosu',
  },
  {
    id: 10,
    name: 'BabyNest E-Ticaret Platformu',
    category: 'web',
    year: '2025',
    image: '/assets/images/work/work-img-2.jpg',
    tags: ['Web', 'E-Ticaret', 'Marka', 'Branding'],
    accent: '#EC4899',
    description: 'Bebek ürünleri için kapsamlı marka ve e-ticaret çözümü',
    longDescription: 'BabyNest için sıfırdan marka kimliği tasarımı, logo, kurumsal kimlik ve tam ölçekli e-ticaret platformu geliştirdik. Anne-bebek ürünleri sektöründe güvenilir ve modern bir marka konumlandırması oluşturduk.',
    client: 'BabyNest',
    duration: '4 ay',
    team: ['Art Director', 'Brand Designer', 'UX/UI Designer', 'Product Manager', 'Frontend Developer', 'Backend Developer', 'Fashion Photographer', 'Copywriter'],
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'Shopify API', 'Google Analytics'],
    features: [
      'Marka kimliği ve logo tasarımı',
      'Kurumsal kimlik seti (kartvizit, kargo paketi, etiketler)',
      'Profesyonel ürün fotoğrafçılığı',
      'Responsive e-ticaret arayüzü',
      'Gelişmiş ürün filtreleme',
      'Güvenli ödeme sistemi',
      'Kargo takibi entegrasyonu',
      'Müşteri hesap yönetimi',
      'Tavsiye ve değerlendirme sistemi',
      'WhatsApp canlı destek entegrasyonu'
    ],
    gallery: [
      '/assets/images/work/work-img-2.jpg',
      '/assets/images/work/work-img-3.jpg',
      '/assets/images/work/work-img-4.jpg'
    ],
    challenges: 'Sektördeki yoğun rekabette öne çıkacak, güven veren ve anne adaylarına hitap eden bir marka kimliği oluşturmak. Ayrıca teknik olarak kullanıcı deneyimini en üst seviyeye taşıyan performanslı bir e-ticaret platformu geliştirmek.',
    solutions: '**Marka & Branding:** Pastel tonlarda, sıcak ve güven veren bir renk paleti ile marka kimliği oluşturduk. Logoda anne-bebek bağını simgeleyen modern ikonik tasarım kullandık. Tüm dokümanlarda, paketlerde ve dijital platformlarda tutarlı bir marka dili uyguladık.\n\n**Fotoğrafçılık:** Profesyonel stüdyo ortamında ürünlerin çekimlerini yaptık. Bebek ürünlerinin güvenilirliğini ve kalitesini yansıtan, detay odaklı fotoğraflarla ürün katalogunu oluşturduk.\n\n**Teknik:** Next.js ile hızlı yüklenen, SEO uyumlu bir platform geliştirdik. Kullanıcı dostu filtreleme sistemi, saniyeler içinde ürün arama imkanı ve basit ödeme adımları ile kullanıcı deneyimini optimize ettik.',
    results: '• Marka lansmanının ilk 3 ayında 10.000+ ziyaretçi\n• %35 dönüşüm oranı (sektör ortalamasının %15 üzerinde)\n• %45 müşteri sadakat oranı\n• 4.8/5 müşteri memnuniyet skoru\n• Instagramda 15.000+ takipçi\n• 250+ ürün kataloğu\n• Mobil kullanıcıların %70\'inden pozitif geri bildirim',
    testimonial: {
      text: "DNC7 ekibi hayallerimizdeki markayı gerçeğe dönüştürdü. Logo, renkler ve genel tasarım dili tam olarak aradığımız gibi oldu. E-ticaret platformumuz son derece hızlı ve kullanıcılarımızdan harika geri bildirimler alıyoruz. Özellikle ürün fotoğraflarımızın kalitesi, satışlarımızı doğrudan etkiledi.",
      author: 'BabyNest Kurucuları',
      role: 'BabyNest'
    }
  }
];

export const projectCategories = ['Tümü', 'Video', 'Web', 'Mobil', 'Oyun'];
