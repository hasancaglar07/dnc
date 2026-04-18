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
  clientUrl?: string;
  duration?: string;
  team?: string[];
  technologies?: string[];
  gallery?: string[];
  features?: string[];
  challenges?: string;
  solutions?: string;
  results?: string;
  videoUrl?: string;
  metrics?: { label: string; value: string; period: string }[];
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
    name: 'CW Enerji — Kurumsal Tanıtım Filmi',
    category: 'video',
    year: '2025',
    image: '/assets/images/work/cw-energy/home.png',
    videoUrl: 'https://player.vimeo.com/video/1116741515',
    tags: ['Video Prodüksiyon', 'Kurumsal Film', 'Drone Çekim', 'Enerji Sektörü'],
    accent: '#F97316',
    description: 'CW Enerji için üretim gücünü ve kurumsal ölçeği yansıtan profesyonel tanıtım filmini uçtan uca hazırladık.',
    longDescription: 'CW Enerji projesinde hedefimiz; markanın üretim kapasitesini, teknolojik altyapısını ve kurumsal güvenini tek bir sinematik anlatıda birleştirmekti. Konsept geliştirme, çekim planı, drone/gimbal görüntü yönetimi, post-prodüksiyon, renk düzenleme ve final teslim sürecini uçtan uca yönettik. Film, hem kurumsal sunumlarda hem dijital mecralarda kullanılabilecek güçlü bir marka anlatı varlığı olarak konumlandırıldı.',
    client: 'CW Energy',
    clientUrl: 'https://cw-enerji.com/tr/index.html',
    duration: '2 ay',
    team: ['Yönetmen', 'Yapım Koordinatörü', 'Drone Operatörü', 'Görüntü Yönetmeni', 'Kurgu & Color Uzmanı'],
    technologies: ['4K Sinematik Çekim', 'Drone Prodüksiyon', 'Premiere Pro', 'DaVinci Resolve'],
    features: [
      '4K sinematik ve drone çekimler',
      'Sinematik kamera hareketleri',
      'Kurumsal anlatı kurgusu',
      'Profesyonel ses tasarımı',
      'Renk grading ve final mastering',
      'Dijital ve kurumsal kullanım için çoklu teslim formatı'
    ],
    challenges: 'Büyük ölçekli endüstriyel üretim ortamını teknik karmaşıklığa boğmadan, izleyiciye net ve etkileyici bir marka hikayesi olarak aktarmak.',
    solutions: 'Çekim dilini üç katmanda kurguladık: tesis ölçeğini gösteren geniş drone planları, üretim detaylarını anlatan yakın planlar ve kurumsal güveni güçlendiren ritmik kurgu. Böylece hem teknik kapasite hem marka algısı aynı anda görünür hale geldi.',
    results: 'Vimeo yayını ile dijital vitrine taşınan güçlü kurumsal film, Marka sunumlarında ana tanıtım içeriği olarak konumlandı, Üretim kapasitesini anlatan yüksek etkili görsel anlatı elde edildi',
    gallery: [
      '/assets/images/work/cw-energy/home.png',
      '/assets/images/work/cw-energy/about.png',
      '/assets/images/work/cw-energy/product-solar-panel.png',
      '/assets/images/work/cw-energy/video-page.png',
      '/assets/images/work/cw-energy/vimeo-film.png'
    ],
    metrics: [
      { label: 'Video Platformu', value: 'Vimeo', period: 'Kurumsal yayın' },
      { label: 'Çekim Kalitesi', value: '4K', period: 'Sinematik prodüksiyon' },
      { label: 'Kapsam', value: 'A’dan Z’ye', period: 'Konsept + Çekim + Post' },
      { label: 'Sektör', value: 'Enerji', period: 'Kurumsal iletişim filmi' },
    ],
  },
  {
    id: 10,
    name: 'BabyNest — 10 Yıllık E-Ticaret Vaka Çalışması',
    category: 'web',
    year: '2025',
    image: '/assets/images/work/babynest/homepage.png',
    tags: ['E-Ticaret', 'Vaka Çalışması', 'Logo', 'Kurumsal Kimlik', 'Reklam Yönetimi'],
    accent: '#F9A8D4',
    description: 'BabyNest ile 10 yıllık iş ortaklığında e-ticaret danışmanlığı, logo, kurumsal kimlik ve performans reklam yönetimini uçtan uca yönettik.',
    longDescription: 'BabyNest ile 2015 yılında başlayan iş ortaklığımızda markanın dijital büyümesini 360 derece ele aldık. İlk etapta logo ve kurumsal kimlik sistemini tasarlayıp markanın güven veren görsel dilini oluşturduk. Sonraki fazda e-ticaret deneyimini yeniden kurgulayarak kategori mimarisi, ürün sayfası yapısı, ödeme akışı ve mobil kullanıcı yolculuğunu optimize ettik. Eş zamanlı olarak Meta Ads ve Google Ads tarafında sürdürülebilir ölçeklenebilir kampanya yapısı kurduk; içerik stratejisi, sosyal medya yönetimi ve sezonsal kampanyalarla marka bilinirliği ile satış performansını birlikte büyüttük.',
    client: 'BabyNest',
    clientUrl: 'https://www.babynest.com.tr',
    duration: '10 yıl (2015–2025)',
    team: [
      'Marka Stratejisti',
      'UI/UX Tasarımcı',
      'E-Ticaret Uzmanı',
      'İçerik Stratejisti',
      'Sosyal Medya Yöneticisi',
      'Reklam Uzmanı',
      'Fotoğrafçı / Görsel Yönetmen'
    ],
    technologies: [
      'Shopify',
      'Meta Ads',
      'Google Ads',
      'Trendyol / Hepsiburada / n11 API',
      'Figma',
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Google Analytics 4',
      'Meta Business Suite'
    ],
    features: [
      'Sıfırdan marka kimliği ve logo tasarımı',
      '200+ ürün için ambalaj & görsel tasarım',
      'Yüksek dönüşümlü e-ticaret site tasarımı',
      'Pazaryeri entegrasyon yönetimi (Trendyol, Hepsiburada, n11)',
      '180.000+ organik sosyal medya takipçisi',
      'Influencer iş birliği ve UGC kampanyaları',
      'Meta & Google reklam yönetimi (ROAS 8x)',
      'Aylık içerik takvimi ve topluluk yönetimi',
      'Müşteri deneyimi & sadakat programı tasarımı',
      'Sezonsal kampanya ve lansman yönetimi'
    ],
    challenges: 'Bebek ürünleri kategorisinde fiyat odaklı rekabet yüksekken marka güvenini koruyup karlı büyüme sağlamak, farklı kanallarda tutarlı bir iletişim dili sürdürmek ve dönüşüm oranını sürdürülebilir şekilde artırmak temel meydan okumalardı.',
    solutions: 'Markayı önce güven ve kalite ekseninde konumlandırdık; logo, renk sistemi, ürün sunum dili ve içerik tonunu tek bir kurumsal çatı altında standardize ettik. E-ticarette kullanıcı akışlarını sadeleştirip ürün sayfalarında karar vermeyi kolaylaştıran içerik blokları kurguladık. Reklam tarafında kanal bazlı kreatif/test yaklaşımıyla bütçeyi en verimli segmentlere yönlendirerek ölçeklenebilir performans yapısı kurduk.',
    results: '10 yılda %1.200 ciro büyümesi, 180.000+ organik sosyal medya takipçisi, ROAS 8x, Dönüşüm oranı sektör ortalamasının 2 katı, 4.8/5 platform müşteri puanı, 3 pazaryerinde kategori top-seller rozeti',
    gallery: [
      '/assets/images/work/babynest/homepage.png',
      '/assets/images/work/babynest/collection-babynest.png',
      '/assets/images/work/babynest/product-detail.png',
      '/assets/images/work/babynest/blog.png'
    ],
    metrics: [
      { label: 'Ciro Büyümesi', value: '%1.200', period: '10 yılda' },
      { label: 'Organik Takipçi', value: '180K+', period: 'Tüm kanallar' },
      { label: 'Reklam ROAS', value: '8x', period: 'Ortalama' },
      { label: 'Müşteri Puanı', value: '4.8/5', period: 'Platform ortalaması' },
    ],
    testimonial: {
      text: 'DNC7 ekibiyle 10 yıldır çalışıyoruz. Sadece bir ajans değil, markamızın gerçek ortağı oldular. Her aşamada proaktif, yaratıcı ve sonuç odaklı bir yaklaşım sergilediler.',
      author: 'BabyNest Yönetim Ekibi',
      role: 'babynest.com.tr'
    }
  },
  {
    id: 11,
    name: 'TARF Akademi — Çok Dilli Kurumsal Platform Vaka Çalışması',
    category: 'web',
    year: '2026',
    image: '/assets/images/work/tarf/homepage.png',
    tags: ['Kurumsal Web', 'Vaka Çalışması', 'UX', 'İçerik Stratejisi', 'Çok Dilli Yapı'],
    accent: '#F97316',
    description: 'TARF Akademi için Türkçe merkezli, çok dilli ve içerik odaklı kurumsal dijital platformu uçtan uca kurguladık.',
    longDescription: 'TARF Akademi projesinde hedefimiz; kurumun eğitim, etkinlik, yayıncılık ve teknoloji odaklı üretimlerini tek bir çatı altında, net bir bilgi mimarisiyle sunmaktı. Bu kapsamda ana sayfa akışını kurumsal anlatı + güncel içerik + aksiyon odaklı bölümlerle yeniden tasarladık. Blog ve etkinlik sayfaları için sürdürülebilir içerik yapısı kurguladık; iletişim ve başvuru akışlarını sadeleştirerek kullanıcıların doğru aksiyona daha hızlı ulaşmasını sağladık. Proje boyunca görsel hiyerarşi, içerik okunabilirliği, mobil uyumluluk ve çok dilli yapı (TR/EN/AR) öncelikli olarak ele alındı.',
    client: 'TARF Akademi',
    clientUrl: 'https://tarf.com.tr/tr',
    duration: 'Uzun dönem dijital ürün geliştirme',
    team: [
      'Dijital Stratejist',
      'UI/UX Tasarımcı',
      'Frontend Geliştirici',
      'İçerik Editörü',
      'SEO & Analitik Uzmanı',
      'Proje Yöneticisi'
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Headless CMS',
      'Vercel',
      'Analytics',
      'SEO / Metadata Yapısı'
    ],
    features: [
      'Çok dilli kurumsal içerik yapısı (TR / EN / AR)',
      'Etkinlik ve blog modülleri ile dinamik içerik akışı',
      'Kurumsal sayfalar için net bilgi mimarisi',
      'İletişim ve başvuru odaklı dönüşüm noktaları',
      'Mobil öncelikli responsive deneyim',
      'SEO uyumlu sayfa başlıkları ve meta yapısı',
      'Modüler bileşen yapısıyla hızlı içerik güncelleme',
      'Kurumsal kimliğe uygun görsel ve tipografik sistem'
    ],
    challenges: 'Kurumun farklı faaliyet alanlarını (eğitim, etkinlik, yayın, teknoloji) tek bir platformda dağınıklık oluşturmadan sunmak; hem kurumsal güveni hem de içerik dinamizmini aynı arayüz içinde dengelemek.',
    solutions: 'İçerik kümelerini kullanıcı niyetine göre yeniden sınıflandırdık ve ana navigasyonu bu mantıkla sadeleştirdik. Hero, içerik kartları ve çağrı alanlarında aksiyon odaklı bir hiyerarşi kurduk. Çok dilli yapıda URL ve içerik kurgusunu standardize ederek hem editoryal yönetimi hem de kullanıcı deneyimini kolaylaştırdık.',
    results: 'Kurumsal konumlandırma daha net bir dijital dile taşındı, İçerik üretimi için sürdürülebilir bir yayın omurgası oluşturuldu, TR/EN/AR çok dilli yapı ile uluslararası erişim zemini kuruldu, Kullanıcıların etkinlik ve blog içeriklerine erişimi sadeleşti, İletişim ve başvuru akışları daha görünür hale getirildi',
    gallery: [
      '/assets/images/work/tarf/homepage.png',
      '/assets/images/work/tarf/about.png',
      '/assets/images/work/tarf/events.png',
      '/assets/images/work/tarf/blog.png',
      '/assets/images/work/tarf/software.png'
    ],
    metrics: [
      { label: 'Dil Altyapısı', value: '3 Dil', period: 'TR / EN / AR' },
      { label: 'İçerik Motoru', value: '2 Modül', period: 'Blog + Etkinlik' },
      { label: 'Ana Akış', value: 'Mobil Öncelikli', period: 'Tüm sayfalar' },
      { label: 'Yayın Modeli', value: 'Modüler', period: 'Sürdürülebilir güncelleme' },
    ],
    testimonial: {
      text: 'Kurumun dijital varlığını daha anlaşılır, daha güçlü ve daha sürdürülebilir bir yapıya taşıdık. İçerik, tasarım ve teknoloji aynı çatı altında uyumlu bir biçimde çalışıyor.',
      author: 'TARF İletişim Ekibi',
      role: 'tarf.com.tr'
    }
  },
  {
    id: 12,
    name: 'Verenel Mobil Uygulama — A’dan Z’ye iOS & Android',
    category: 'mobil',
    year: '2026',
    image: '/assets/images/work/verenel/web-home.png',
    tags: ['Mobil Uygulama', 'iOS', 'Android', 'Fintech', 'Bağış Altyapısı'],
    accent: '#0EA5E9',
    description: 'Verenel Derneği için iOS ve Android mobil uygulamasını uçtan uca tasarlayıp geliştirerek canlıya aldık.',
    longDescription: 'Verenel projesinde amaç; bağış süreçlerini mobilde hızlı, güvenilir ve şeffaf hale getiren, aynı zamanda kullanıcıların yaptığı katkıları takip edebildiği güçlü bir dijital ürün oluşturmaktı. Projede ürün stratejisi, UX akışları, arayüz tasarımı, ödeme adımları, güvenlik katmanları, panel/API entegrasyonları, App Store ve Google Play yayın süreçleri dahil A’dan Z’ye tüm geliştirme sürecini üstlendik. Sonuç olarak hem iOS hem Android tarafında tutarlı bir kullanıcı deneyimi ve sürdürülebilir ürün altyapısı kuruldu.',
    client: 'Verenel Derneği',
    clientUrl: 'https://verenel.org/tr',
    duration: 'Uçtan uca ürün geliştirme ve yayın süreci',
    team: [
      'Product Manager',
      'UI/UX Tasarımcı',
      'iOS Geliştirici',
      'Android Geliştirici',
      'Backend Geliştirici',
      'QA Mühendisi'
    ],
    technologies: [
      'iOS Native',
      'Android Native',
      'REST API',
      'SSL / Güvenli Ödeme Altyapısı',
      'App Store Connect',
      'Google Play Console',
      'Push Notification'
    ],
    features: [
      'iOS ve Android için tam uyumlu native deneyim',
      'Hızlı ve güvenli bağış akışları',
      'Bağış süreci takibi ve şeffaf işlem görünürlüğü',
      'Zekat hesaplama ve bağış senaryoları modülü',
      'Bildirim altyapısı ile kampanya/duyuru iletişimi',
      'Yüksek erişilebilirlik ve sade kullanıcı arayüzü',
      'App Store ve Google Play yayın süreçlerinin uçtan uca yönetimi'
    ],
    challenges: 'Mobilde bağış gibi güven odaklı bir işlemi kullanıcıyı yormadan tamamlatmak, farklı cihazlarda tutarlı performans sağlamak ve iOS/Android mağaza gereksinimlerine tam uyumlu bir ürün çıkarmak.',
    solutions: 'Kritik akışları (bağış seçimi, ödeme, doğrulama, işlem sonucu) minimum adım prensibiyle yeniden tasarladık. UI katmanında sade ve anlaşılır bir dil kullanırken teknik tarafta güvenlik, hata yönetimi ve performans optimizasyonlarını önceliklendirdik. Yayın öncesi test matrisiyle farklı cihaz/sürüm kombinasyonlarında stabilite doğrulaması gerçekleştirdik.',
    results: 'Uygulama iOS ve Android mağazalarında başarılı şekilde yayınlandı, Bağış süreçleri mobilde daha hızlı ve daha anlaşılır hale geldi, Kullanıcı güvenini artıran şeffaf takip deneyimi oluşturuldu, Kurumun dijital erişimi web + mobil ekosisteme taşındı',
    gallery: [
      '/assets/images/work/verenel/web-home.png',
      '/assets/images/work/verenel/web-en.png',
      '/assets/images/work/verenel/web-ar.png',
      '/assets/images/work/verenel/ios-store.png',
      '/assets/images/work/verenel/android-store.png'
    ],
    metrics: [
      { label: 'Platform', value: 'iOS + Android', period: 'Çift mağaza yayını' },
      { label: 'Teslim Modeli', value: 'A’dan Z’ye', period: 'Strateji + Tasarım + Geliştirme' },
      { label: 'Kanal', value: '3 Uç', period: 'Web + App Store + Google Play' },
      { label: 'Odak', value: 'Şeffaf Bağış', period: 'Güvenli mobil deneyim' },
    ],
    testimonial: {
      text: 'Verenel mobil ürününü fikir aşamasından mağaza yayınına kadar bütünsel bir yaklaşımla hayata geçirdik. Kullanıcı güvenini ve kullanım kolaylığını merkeze alan bir ürün ortaya çıktı.',
      author: 'DNC7 Mobil Ürün Ekibi',
      role: 'verenel.org'
    }
  },
  {
    id: 13,
    name: 'KYP Okul Yönetim Sistemi — Web + Mobil + Performans Pazarlama',
    category: 'web',
    year: '2026',
    image: '/assets/images/work/kyp/web-home.png',
    tags: ['Web Platform', 'Mobil Uygulama', 'SaaS', 'Pazarlama', 'Reklam Yönetimi'],
    accent: '#22C55E',
    description: 'KYP için web ürününü, iOS/Android mobil deneyimini ve reklam yönetimini entegre bir büyüme modeliyle yönettik.',
    longDescription: 'KYP projesinde temel hedefimiz; okul ve kurs yönetim süreçlerini tek bir dijital ekosistemde toplayan, hem kurum yöneticileri hem öğretmen/veli tarafında kolay kullanılan bir ürün mimarisi oluşturmaktı. Bu kapsamda web platform bilgi mimarisi ve modül akışlarını yeniden kurguladık; mobil uygulama deneyiminde kritik kullanıcı senaryolarını sadeleştirerek günlük operasyonların cep telefonundan yönetilebilir hale gelmesini sağladık. Ürün geliştirme katmanına ek olarak performans pazarlama ve reklam yönetimi tarafında segment bazlı kampanya yapısı kurup demo talebi üreten, ölçümlenebilir bir büyüme yaklaşımı geliştirdik.',
    client: 'KYP Okul Yönetim Sistemi',
    clientUrl: 'https://www.kyp.net.tr/tr',
    duration: 'Ürün geliştirme + pazarlama yönetimi',
    team: [
      'Product Manager',
      'UI/UX Tasarımcı',
      'Frontend Developer',
      'Mobile Developer',
      'Growth Marketing Specialist',
      'Performance Ads Manager'
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Mobil Uygulama Altyapısı (iOS / Android)',
      'Analytics & Funnel Tracking',
      'Meta Ads',
      'Google Ads',
      'CRM / Lead Yönetimi Entegrasyonu'
    ],
    features: [
      'Modüler okul yönetim web arayüzü',
      'Kayıt, tahsilat, devamsızlık ve sınav süreçlerini destekleyen akışlar',
      'Mobilde operasyonel süreç takibi',
      'Demo talep odaklı dönüşüm sayfaları',
      'Çoklu iletişim/başvuru noktalarının sadeleştirilmesi',
      'Reklam kampanyaları için hedef kitle ve kreatif varyasyon yönetimi',
      'Performans ölçümü için uçtan uca dönüşüm takibi'
    ],
    challenges: 'Eğitim kurumlarının farklı operasyonel ihtiyaçlarını tek üründe dengeli sunmak, web ve mobil deneyimi birlikte optimize etmek ve pazarlama bütçesini doğrudan nitelikli lead üretimine dönüştürmek.',
    solutions: 'Kullanıcı rollerine göre (yönetici/öğretmen/veli) içerik ve aksiyon hiyerarşisini yeniden tasarladık. Web ve mobilde ortak bir deneyim dili oluşturarak kritik işlemleri daha kısa adımlarla tamamlanabilir hale getirdik. Pazarlama tarafında kampanyaları ürün modülleri ve hedef persona bazında ayrıştırıp A/B testlerle sürekli optimize ettik.',
    results: 'Web + mobil ekosistemde tutarlı ürün deneyimi oluşturuldu, Demo talep akışı daha görünür ve ölçülebilir hale geldi, Reklam yönetiminde hedef kitle bazlı verimlilik artırıldı, Ürün iletişimi modül bazlı anlatımla daha anlaşılır bir yapıya kavuştu',
    gallery: [
      '/assets/images/work/kyp/web-home.png',
      '/assets/images/work/kyp/web-modules.png',
      '/assets/images/work/kyp/web-demos.png',
      '/assets/images/work/kyp/web-contact.png',
      '/assets/images/work/kyp/web-about.png'
    ],
    metrics: [
      { label: 'Ürün Yapısı', value: 'Web + Mobil', period: 'Entegre deneyim' },
      { label: 'Dönüşüm Odağı', value: 'Demo Lead', period: 'Pazarlama ana KPI' },
      { label: 'Kapsam', value: 'A’dan Z’ye', period: 'Ürün + Growth + Reklam' },
      { label: 'Sektör', value: 'EdTech SaaS', period: 'Okul/Kurs yönetimi' },
    ],
    testimonial: {
      text: 'KYP projesinde sadece arayüz değil, ürün, iletişim ve büyüme tarafını birlikte ele alarak ölçülebilir iş çıktıları üreten bütünleşik bir yapı kurduk.',
      author: 'DNC7 Growth & Product Team',
      role: 'kyp.net.tr'
    }
  },
  {
    id: 14,
    name: 'Mihmandar — 3 Platform Dijital Ürün ve AI Entegrasyonu',
    category: 'mobil',
    year: '2026',
    image: '/assets/images/work/mihmandar/web-home.png',
    tags: ['Web Platform', 'iOS', 'Android', 'AI Entegrasyon', 'Ürün Geliştirme'],
    accent: '#8B5CF6',
    description: 'Mihmandar için web, iOS ve Android platformlarını AI destekli modüllerle entegre ederek uçtan uca dijital ürün ekosistemi oluşturduk.',
    longDescription: 'Mihmandar projesinde hedefimiz; içerik odaklı bir dijital kütüphane deneyimini 3 platformda (web, iOS, Android) tutarlı, hızlı ve ölçeklenebilir hale getirmekti. Ürün geliştirme sürecinde bilgi mimarisi, arama/keşif deneyimi, içerik akışları ve kullanıcı etkileşim noktaları yeniden yapılandırıldı. Projenin kritik farkı ise AI destekli modüllerin (video analizi ve akıllı YouTube arama senaryoları) ürün içerisine operasyonel olarak entegre edilmesiydi. Böylece kullanıcılar içeriklere yalnızca erişmekle kalmayıp daha akıllı şekilde keşfetme ve analiz etme imkanına kavuştu.',
    client: 'Mihmandar',
    clientUrl: 'https://mihmandar.org/',
    duration: '3 platform ürün geliştirme ve entegrasyon',
    team: [
      'Product Manager',
      'UI/UX Tasarımcı',
      'Frontend Developer',
      'iOS Developer',
      'Android Developer',
      'AI Integration Engineer',
      'QA Engineer'
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'iOS / Android Mobil Uygulama Altyapısı',
      'AI API Entegrasyonları',
      'İçerik Arama & Sıralama Servisleri',
      'Analytics'
    ],
    features: [
      'Web + iOS + Android için ortak ürün deneyimi',
      'İçerik odaklı dijital kütüphane mimarisi',
      'AI destekli video analiz modülü',
      'AI destekli akıllı YouTube arama modülü',
      'Ses kayıtları ve metin içerikleri için keşif akışları',
      'Mobilde hızlı gezinme ve erişilebilir arayüz',
      'Modüler ürün yapısı ile sürdürülebilir geliştirme'
    ],
    challenges: 'Farklı içerik türlerini tek deneyimde birleştirirken performansı korumak, 3 platformda tutarlı UX sağlamak ve AI modüllerini kullanıcıya net fayda üretecek şekilde konumlandırmak.',
    solutions: 'Önce içerik tiplerini kullanım niyetine göre yeniden grupladık, ardından web ve mobilde ortak bir tasarım dili kurduk. AI modüllerini ana ürün akışından koparmadan, kullanıcı görevlerini hızlandıran yardımcı katmanlar olarak entegre ettik. Teknik tarafta modüler servis yaklaşımıyla bakım ve ölçeklenebilirliği iyileştirdik.',
    results: '3 platformda tutarlı dijital ürün deneyimi sağlandı, AI özellikleri ürünün aktif kullanım senaryolarına entegre edildi, İçerik keşif ve erişim akışları sadeleştirildi, Ürün mimarisi sürdürülebilir geliştirme için modüler yapıya taşındı',
    gallery: [
      '/assets/images/work/mihmandar/web-home.png',
      '/assets/images/work/mihmandar/web-books.png',
      '/assets/images/work/mihmandar/web-audio.png',
      '/assets/images/work/mihmandar/ai-video-analysis.png',
      '/assets/images/work/mihmandar/ai-youtube-search.png'
    ],
    metrics: [
      { label: 'Platform', value: '3', period: 'Web + iOS + Android' },
      { label: 'AI Modülü', value: '2', period: 'Video Analizi + YouTube Arama' },
      { label: 'Teslim Modeli', value: 'Uçtan Uca', period: 'Ürün + Entegrasyon + Yayın' },
      { label: 'Odak', value: 'İçerik Keşfi', period: 'Akıllı erişim deneyimi' },
    ],
    testimonial: {
      text: 'Mihmandar projesinde web ve mobil ürünleri tek bir strateji altında birleştirip AI entegrasyonunu gerçek kullanıcı değerine dönüştüren bir yapı kurduk.',
      author: 'DNC7 Product & AI Team',
      role: 'mihmandar.org'
    }
  },
  {
    id: 15,
    name: 'BookGenerator — Global AI ile A’dan Z’ye Kitap Yazma Platformu',
    category: 'web',
    year: '2026',
    image: '/assets/images/work/bookgenerator/home.png',
    tags: ['AI SaaS', 'Global Product', 'KDP', 'Content Generation', 'Growth Product'],
    accent: '#F59E0B',
    description: 'BookGenerator’da uzmanlığı 15 dakikada KDP’ye hazır kitaba dönüştüren global AI ürününü uçtan uca tasarlayıp geliştirdik.',
    longDescription: 'BookGenerator projesinde hedefimiz, fikirden yayına giden kitap üretim sürecini radikal şekilde kısaltan global bir AI ürün deneyimi oluşturmaktı. Kullanıcıların yalnızca birkaç adımda konu belirleyip kitap taslağı, bölüm yapısı, kapak önerileri ve EPUB/PDF çıktısına ulaşabildiği bir ürün akışı tasarladık. Platform; bireysel uzmanlar, danışmanlar, creator ekonomisi profesyonelleri ve içerik ekipleri için ölçeklenebilir bir üretim altyapısı sunuyor. Üründe çok dilli kullanım, farklı use-case sayfaları, pricing katmanı, örnek çıktılar ve onboarding akışı tek bir dönüşüm odaklı sistemde birleştirildi.',
    client: 'BookGenerator',
    clientUrl: 'https://bookgenerator.net/',
    duration: 'A’dan Z’ye ürün stratejisi, geliştirme ve ölçekleme',
    team: [
      'Product Lead',
      'AI Engineer',
      'Frontend Engineer',
      'Backend Engineer',
      'UX Writer',
      'Growth Product Manager'
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'LLM API Entegrasyonları',
      'Prompt Orchestration',
      'EPUB / PDF Export Pipeline',
      'Stripe Billing',
      'Analytics & Funnel Tracking'
    ],
    features: [
      '5 soruluk kısa akışla kitap üretim başlangıcı',
      'AI destekli bölüm planı ve içerik taslağı üretimi',
      'KDP uyumlu EPUB / PDF çıktı alma',
      'Otomatik kapak ve başlık öneri akışları',
      'Use-case bazlı onboarding (uzman, creator, ekip)',
      'Çok dilli deneyim ve global URL yapısı',
      'Pricing ve deneme akışlarının ürünle entegre yönetimi',
      'Örnek kitap vitrinleri ile dönüşüm destekleme'
    ],
    challenges: 'AI içerik üretiminde kalite/tutarlılık dengesini korurken kullanıcıyı karmaşık ayarlara boğmamak, aynı anda hem hızlı ilk değer (time-to-first-book) hem de profesyonel çıktı standardı sağlamak.',
    solutions: 'Üretim sürecini adım adım yöneten akıllı bir akış tasarladık: konu netleştirme, çerçeve çıkarma, içerik derinliği ayarı ve çıktı formatı seçimi. Prompt katmanında kalite kontrol mekanizmaları kurgulayarak farklı tarzlarda tutarlı çıktı üretilmesini sağladık. Ürün tarafında örnekler, pricing ve “nasıl çalışır” bölümlerini funnel mantığında konumlandırarak denemeden satın almaya giden yolu sadeleştirdik.',
    results: 'Kitap üretim süreci dakikalar seviyesine indirildi, KDP-ready çıktı akışıyla yayına geçiş bariyeri düşürüldü, Global pazara uygun çok dilli ürün yapısı kuruldu, Ürün-funnel bütünleşmesi ile dönüşüm odaklı büyüme altyapısı oluşturuldu',
    gallery: [
      '/assets/images/work/bookgenerator/home.png',
      '/assets/images/work/bookgenerator/how-it-works.png',
      '/assets/images/work/bookgenerator/examples.png',
      '/assets/images/work/bookgenerator/pricing.png',
      '/assets/images/work/bookgenerator/product-flow.png'
    ],
    metrics: [
      { label: 'Değer Vaadi', value: '15 Dakika', period: 'KDP-ready kitap akışı' },
      { label: 'Platform Tipi', value: 'Global AI SaaS', period: 'Çok dilli yapı' },
      { label: 'Çıktı', value: 'EPUB + PDF', period: 'Yayına hazır formatlar' },
      { label: 'Teslimat', value: 'A’dan Z’ye', period: 'Strateji + Ürün + Growth' },
    ],
    testimonial: {
      text: 'BookGenerator’da AI üretim motorunu ürün deneyimiyle birleştirerek kullanıcıların fikirden yayınlanabilir kitaba çok daha hızlı ulaşabildiği global bir platform inşa ettik.',
      author: 'DNC7 AI Product Team',
      role: 'bookgenerator.net'
    }
  },
  {
    id: 16,
    name: 'Rehnüma Dergisi — Web Tasarım, Geliştirme ve E-Ticaret Danışmanlığı',
    category: 'web',
    year: '2026',
    image: '/assets/images/work/rehnuma/home.png',
    tags: ['Web Tasarım', 'Web Geliştirme', 'Satış Stratejisi', 'E-Ticaret Danışmanlığı', 'Abonelik Modeli'],
    accent: '#EC4899',
    description: 'Rehnüma Dergisi için dijital dergi platformunu tasarım, geliştirme ve abonelik/satış danışmanlığı ile uçtan uca konumlandırdık.',
    longDescription: 'Rehnüma projesinde hedefimiz; içerik zenginliğini koruyan, marka estetiğini öne çıkaran ve aynı zamanda ticari dönüşüm üreten modern bir dijital yayın platformu oluşturmaktı. Bu kapsamda web tasarım dilini derginin editorial kimliğine uygun şekilde yeniden kurguladık; sayfalar, kategoriler, dergi/sayı yapısı ve kullanıcı yolculuklarını performans odaklı geliştirdik. E-ticaret danışmanlığı tarafında abonelik modeli, satış sözleşmesi akışları, üyelik geçiş senaryoları ve ödeme karar noktaları optimize edildi. Sonuçta hem içerik tüketimi hem abonelik dönüşümü aynı platformda dengeli biçimde iyileştirildi.',
    client: 'Rehnüma Kadın Dergisi',
    clientUrl: 'https://rehnumadergisi.com/',
    duration: 'Tasarım + geliştirme + satış danışmanlığı',
    team: [
      'UI/UX Designer',
      'Frontend Developer',
      'Fullstack Developer',
      'E-Ticaret Danışmanı',
      'Conversion Specialist',
      'İçerik Stratejisti'
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Üyelik / Abonelik Altyapısı',
      'Ödeme ve satış akışı entegrasyonları',
      'SEO ve içerik yapılandırması',
      'Analytics & Conversion Tracking'
    ],
    features: [
      'Editorial kimliğe uygun premium web tasarım dili',
      'Dergi, sayı, kategori ve yazar bazlı içerik mimarisi',
      'Abonelik odaklı satış akışları',
      'Mesafeli satış ve abonelik sözleşmesi entegrasyonlu yapı',
      'Blog ve dergi sayfaları için yüksek okunabilirlik deneyimi',
      'İletişim ve dönüşüm noktalarının görünür hale getirilmesi',
      'Satış kararını destekleyen içerik ve üyelik geçiş senaryoları'
    ],
    challenges: 'Dergi deneyimini bozmadan ticari dönüşüm üretmek, içerik yoğun platformda kullanıcıyı kaybetmeden abonelik adımına taşımak ve hukuki/satış süreçlerini teknik akışa doğru entegre etmek.',
    solutions: 'Navigasyon ve içerik hiyerarşisini okuyucu niyetine göre sadeleştirdik. Abonelik sayfası, dergi/sayı sayfaları ve blog akışı arasında funnel ilişkisi kurduk. E-ticaret danışmanlığı kapsamında teklifleme, üyelik segmentasyonu ve satış metni konumlamasını optimize ederek dönüşüm odaklı bir yapı oluşturduk.',
    results: 'Dijital dergi deneyimi daha modern ve okunabilir bir yapıya taşındı, Abonelik/satış akışları daha net bir dönüşüm hattına dönüştü, İçerik ve ticari hedefler aynı platformda dengelendi, Web altyapısı sürdürülebilir içerik yayın modeline uygun hale getirildi',
    gallery: [
      '/assets/images/work/rehnuma/home.png',
      '/assets/images/work/rehnuma/subscription.png',
      '/assets/images/work/rehnuma/issues.png',
      '/assets/images/work/rehnuma/blog.png',
      '/assets/images/work/rehnuma/magazine.png'
    ],
    metrics: [
      { label: 'Model', value: 'Dijital Dergi + Abonelik', period: 'İçerik ve satış entegre' },
      { label: 'Kapsam', value: 'A’dan Z’ye', period: 'Tasarım + Dev + Danışmanlık' },
      { label: 'Odak', value: 'Dönüşüm', period: 'Abonelik/satış optimizasyonu' },
      { label: 'Platform', value: 'Web', period: 'Editorial e-ticaret yaklaşımı' },
    ],
    testimonial: {
      text: 'Rehnüma’da marka ruhunu koruyan, içerik gücünü satış performansına bağlayan ve sürdürülebilir yayın akışını destekleyen bütünleşik bir dijital yapı kurduk.',
      author: 'DNC7 Web & Commerce Team',
      role: 'rehnumadergisi.com'
    }
  },
  {
    id: 17,
    name: 'Spice Hotel & SPA — Kurumsal Tanıtım Filmi',
    category: 'video',
    year: '2026',
    image: '/assets/images/work/spice/home.png',
    videoUrl: 'https://player.vimeo.com/video/1116760970',
    tags: ['Tanıtım Filmi', 'Video Prodüksiyon', 'Otel & Turizm', 'Drone Çekim'],
    accent: '#0EA5E9',
    description: 'Spice Hotel & SPA için marka atmosferini ve tesis deneyimini yansıtan sinematik tanıtım filmini uçtan uca ürettik.',
    longDescription: 'Spice Hotel & SPA projesinde amacımız; tesisin lüks konaklama deneyimini, mekan estetiğini ve hizmet çeşitliliğini güçlü bir görsel anlatıya dönüştürmekti. Çekim planı, sahne kurgusu, drone ve ground çekimler, post-prodüksiyon, renk düzenleme ve final teslim süreçlerini A’dan Z’ye yönettik. Film hem web ve sosyal medya kanallarında hem de satış/sunum süreçlerinde kullanılabilecek kurumsal bir ana içerik olarak konumlandırıldı.',
    client: 'Spice Hotel & SPA',
    clientUrl: 'https://spice.com.tr/tr',
    duration: 'Prodüksiyon + post-prodüksiyon',
    team: [
      'Yönetmen',
      'Yapım Sorumlusu',
      'Drone Operatörü',
      'Görüntü Yönetmeni',
      'Kurgu Uzmanı',
      'Colorist'
    ],
    technologies: [
      '4K Video Prodüksiyon',
      'Drone Çekim',
      'Sinematik Kurgu',
      'Color Grading',
      'Vimeo Yayın Optimizasyonu'
    ],
    features: [
      'Tesis deneyimini öne çıkaran sinematik anlatı',
      'Mekan ve hizmet çeşitliliğini gösteren çok katmanlı çekim planı',
      'Drone + yer seviyesinde dinamik görüntü dili',
      'Kurumsal kullanım için optimize edilmiş final video',
      'Web ve dijital kampanyalara uyumlu yayın formatları'
    ],
    challenges: 'Turizm sektöründe benzer görsel dil kullanan rakipler arasında markanın premium algısını ayrıştıran, aynı zamanda satış ekiplerinin kullanabileceği net bir tanıtım filmi üretmek.',
    solutions: 'Film dilini “deneyim odaklı” kurguladık; yalnızca mekan gösterimi yerine misafir yolculuğunu öne çıkaran plan akışı tasarladık. Ritmik kurgu, renk tonu ve sahne geçişleriyle markanın lüks/konfor algısını güçlendiren bütünsel bir anlatı kurduk.',
    results: 'Vimeo yayını ile dijitalde güçlü tanıtım varlığı oluşturuldu, Tesisin premium konumlandırmasını destekleyen ana film üretildi, Satış ve pazarlama sunumlarında kullanılabilir yüksek etkili görsel içerik sağlandı',
    gallery: [
      '/assets/images/work/spice/home.png',
      '/assets/images/work/spice/about.png',
      '/assets/images/work/spice/rooms.png',
      '/assets/images/work/spice/gallery-page.png',
      '/assets/images/work/spice/vimeo-film.png'
    ],
    metrics: [
      { label: 'Yayın Platformu', value: 'Vimeo', period: 'vimeo.com/1116760970' },
      { label: 'Format', value: '4K', period: 'Kurumsal tanıtım filmi' },
      { label: 'Kapsam', value: 'A’dan Z’ye', period: 'Planlama + Çekim + Post' },
      { label: 'Sektör', value: 'Turizm', period: 'Otel tanıtım filmi' },
    ],
    testimonial: {
      text: 'Spice Hotel için hazırlanan film, markanın atmosferini ve deneyim vaadini tek içerikte toplayan güçlü bir kurumsal anlatı haline geldi.',
      author: 'DNC7 Video Team',
      role: 'spice.com.tr'
    }
  },
  {
    id: 18,
    name: 'Tarf Yazılım — Web Ürün ve SaaS Destek Ekosistemi',
    category: 'web',
    year: '2026',
    image: '/assets/images/work/tarfyazilim/home.png',
    tags: ['Yazılım Geliştirme', 'Web Platform', 'SaaS Destek', 'Entegrasyon', 'Kurumsal Dijitalleşme'],
    accent: '#10B981',
    description: 'Tarf Yazılım için web ürün mimarisi, SaaS odaklı çözümler ve sürekli teknik destek süreçlerini uçtan uca yönettik.',
    longDescription: 'Tarf Yazılım projesinde amaç; kurumsal yazılım servislerini net anlatan, ürün ve hizmet katmanlarını ayrıştıran, aynı zamanda lead ve destek süreçlerini hızlandıran bir dijital yapı oluşturmaktı. Bu kapsamda web bilgi mimarisi yeniden düzenlendi; hizmetler, ürünler, başarı hikayeleri ve destek sayfaları kullanıcı niyetine göre kurgulandı. SaaS desteği tarafında entegrasyon senaryoları, destek akışları ve ölçeklenebilir teknik operasyon yaklaşımıyla platformun sürdürülebilirliği güçlendirildi.',
    client: 'Tarf Yazılım Teknoloji',
    clientUrl: 'https://www.tarfyazilim.com/',
    duration: 'Ürün geliştirme + SaaS destek yönetimi',
    team: [
      'Product Manager',
      'Frontend Developer',
      'Backend Developer',
      'SaaS Integration Specialist',
      'Support Operations Specialist',
      'Technical Writer'
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'API Entegrasyonları',
      'SaaS Operasyon Altyapısı',
      'Destek ve ticket süreçleri',
      'Analytics & Funnel Tracking'
    ],
    features: [
      'Hizmetler ve ürünler için net segmentlenmiş web mimarisi',
      'SaaS ürün katmanları için ölçeklenebilir sayfa kurgusu',
      'Başarı hikayeleri ile güven artıran dönüşüm desteği',
      'Destek süreçlerini görünür kılan kullanıcı akışları',
      'Kurumsal iletişimden lead toplama noktalarına optimize geçişler',
      'Entegrasyon ve dijital dönüşüm anlatısını güçlendiren içerik yapısı'
    ],
    challenges: 'Kurumsal yazılım hizmetlerini teknik karmaşıklığa düşmeden anlatmak, farklı persona’ların (karar verici, teknik ekip, operasyon) tek platformda hızlı aksiyon almasını sağlamak.',
    solutions: 'Bilgi mimarisini kullanıcı niyetine göre sadeleştirip hizmet-ürün-destek akışını birbirine bağlı bir funnel halinde tasarladık. SaaS destek tarafında süreç görünürlüğünü artırarak talep yönetimini ve çözüm hızını iyileştiren bir operasyon dili oluşturduk.',
    results: 'Web platformu hizmet ve ürün anlatımında daha güçlü bir yapıya taşındı, SaaS destek akışları daha anlaşılır ve erişilebilir hale geldi, Lead ve iletişim noktaları daha ölçülebilir bir dönüşüm hattına dönüştürüldü, Teknik operasyon süreçleri sürdürülebilir bir destek modeline kavuştu',
    gallery: [
      '/assets/images/work/tarfyazilim/home.png',
      '/assets/images/work/tarfyazilim/services.png',
      '/assets/images/work/tarfyazilim/products.png',
      '/assets/images/work/tarfyazilim/case-stories.png',
      '/assets/images/work/tarfyazilim/support.png'
    ],
    metrics: [
      { label: 'Odak', value: 'Web + SaaS', period: 'Ürün ve destek entegrasyonu' },
      { label: 'Kapsam', value: 'A’dan Z’ye', period: 'Mimari + Geliştirme + Operasyon' },
      { label: 'Yapı', value: 'Ölçeklenebilir', period: 'Kurumsal yazılım servisi' },
      { label: 'Sonuç', value: 'Dönüşüm & Destek', period: 'Çift eksenli iyileştirme' },
    ],
    testimonial: {
      text: 'Tarf Yazılım’da sadece web arayüzü değil, SaaS destek ve entegrasyon süreçlerini de ürün yaklaşımıyla ele alarak sürdürülebilir bir dijital operasyon yapısı kurduk.',
      author: 'DNC7 Software Team',
      role: 'tarfyazilim.com'
    }
  },
  {
    id: 19,
    name: 'Delail-i Hayrat — Web + iOS + Android Dua Uygulaması Desteği',
    category: 'mobil',
    year: '2026',
    image: '/assets/images/work/delail/home.png',
    tags: ['Web Uygulaması', 'iOS Destek', 'Android Destek', 'SaaS Operasyon', 'Topluluk Ürünü'],
    accent: '#0EA5E9',
    description: 'Delail-i Hayrat platformunda web, iOS ve Android uygulama ekosistemi için ürün ve teknik destek süreçlerini uçtan uca yönettik.',
    longDescription: 'Delail-i Hayrat projesinde hedefimiz; günlük dua/okuma takibini düzenli hale getiren dijital deneyimi 3 platformda (web, iOS, Android) sürdürülebilir şekilde desteklemekti. Bu kapsamda kullanıcı akışları, okuma planı ve takip modüllerini operasyonel olarak iyileştirdik; platformlar arası tutarlılık, performans ve destek süreçlerini güçlendirdik. Ürünün topluluk, devamlılık (streak), sıralama ve kaza takibi gibi mekaniklerinin kararlı çalışması için teknik destek ve ürün optimizasyonu birlikte ele alındı.',
    client: 'Delail-i Hayrat',
    clientUrl: 'https://www.delailalkhayrat.com/tr',
    duration: 'Sürekli ürün ve uygulama desteği',
    team: [
      'Product Support Lead',
      'Frontend Developer',
      'Mobile Support Engineer',
      'QA Specialist',
      'Analytics Specialist'
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Mobil Uygulama Destek Altyapısı',
      'Kullanıcı akışı izleme ve analiz',
      'Bug triage ve release desteği'
    ],
    features: [
      'Günlük okuma planı ve takip akışları',
      'Streak ve puan mekanikleri desteği',
      'Sıralama (ranking) ekranlarının operasyonel iyileştirilmesi',
      'Kaza/missed day yönetimi için kullanıcı deneyimi desteği',
      'Web, iOS ve Android arasında tutarlı ürün davranışı',
      'Topluluk odaklı kullanım senaryolarına destek'
    ],
    challenges: 'İçerik ve ibadet takibi gibi düzenli kullanım gerektiren bir üründe platformlar arası tutarlılığı korumak, kullanıcı devamlılığını artırmak ve destek süreçlerini kesintisiz yönetmek.',
    solutions: 'Kritik kullanıcı akışlarını (okuma, takip, sıralama, missed day) önceliklendirdik ve web-mobil senkron deneyimi için destek modelini standardize ettik. Ürün davranışındaki kırılmaları erken tespit edecek izleme/geri bildirim döngüleri kurarak iyileştirmeleri hızlı yayına aldık.',
    results: '3 platformda daha tutarlı kullanıcı deneyimi sağlandı, Günlük kullanım mekaniklerinin sürdürülebilirliği artırıldı, Destek operasyonları daha hızlı ve ölçülebilir hale getirildi, Ürün sürekliliğini destekleyen teknik omurga güçlendirildi',
    gallery: [
      '/assets/images/work/delail/home.png',
      '/assets/images/work/delail/app-dashboard.png',
      '/assets/images/work/delail/read-flow.png',
      '/assets/images/work/delail/ranking.png'
    ],
    metrics: [
      { label: 'Platform', value: '3', period: 'Web + iOS + Android' },
      { label: 'Destek Modeli', value: 'Sürekli', period: 'Operasyonel ürün desteği' },
      { label: 'Odak', value: 'Devamlılık', period: 'Okuma takibi ve streak' },
      { label: 'Topluluk', value: 'Ranking', period: 'Etkileşim mekanikleri' },
    ],
    testimonial: {
      text: 'Delail-i Hayrat ürününde web ve mobil platformları aynı kalite standardında çalıştıran, kullanıcı sürekliliğini destekleyen güçlü bir teknik destek modeli kurduk.',
      author: 'DNC7 Product Support Team',
      role: 'delailalkhayrat.com'
    }
  },
  {
    id: 20,
    name: 'Dr.Sufi — Ürün Tasarımı, E-Ticaret Danışmanlığı ve Şişe Tasarımı',
    category: 'web',
    year: '2026',
    image: '/assets/images/work/work-img-2.jpg',
    tags: ['Ürün Tasarımı', 'E-Ticaret Danışmanlığı', 'Ambalaj & Şişe Tasarımı', 'Marka Konumlandırma', 'Dijital Büyüme'],
    accent: '#14B8A6',
    description: 'Dr.Sufi markası için ürün tasarımından e-ticaret stratejisine, şişe/ambalaj tasarımından satış odaklı dijital yapılanmaya kadar uçtan uca destek verdik.',
    longDescription: 'Dr.Sufi projesinde ana hedef; ürün değerini rafta ve dijitalde aynı güçte anlatan bütünleşik bir marka ve satış altyapısı kurmaktı. Bu kapsamda ürün tasarımı ve şişe tasarımı tarafında fonksiyonel, premium ve marka diliyle uyumlu çözümler geliştirildi. E-ticaret danışmanlığı tarafında ise kategori kurgusu, ürün sayfası mesajları, fiyatlandırma sunumu, kampanya ve paketleme stratejileri optimize edilerek satın alma kararını hızlandıran bir yapı oluşturuldu.',
    client: 'Dr.Sufi',
    duration: 'Tasarım + geliştirme + e-ticaret danışmanlığı',
    team: [
      'Brand Strategist',
      'Ürün Tasarımcısı',
      'Ambalaj/Şişe Tasarımcısı',
      'E-Ticaret Danışmanı',
      'UI/UX Designer',
      'Growth Specialist'
    ],
    technologies: [
      'Ürün ve ambalaj tasarım sistemi',
      'E-ticaret dönüşüm optimizasyonu',
      'Landing ve ürün sayfası CRO',
      'Kampanya ve bundle kurguları',
      'Analytics ve satış funnel takibi'
    ],
    features: [
      'Marka kimliğiyle uyumlu şişe/ambalaj tasarım dili',
      'Ürün değer önerisini güçlendiren paket ve varyant kurguları',
      'E-ticarette satış odaklı kategori ve ürün sayfası yapısı',
      'Fiyat, teklif ve kampanya iletişimini netleştiren danışmanlık yaklaşımı',
      'Sepet ve satın alma kararını hızlandıran deneyim iyileştirmeleri',
      'Büyüme hedeflerine bağlı performans ve içerik optimizasyonu'
    ],
    challenges: 'Fiziksel ürün deneyimini dijital satış kanallarında doğru yansıtmak, premium algıyı korurken dönüşüm odaklı bir e-ticaret yapısı kurmak ve marka anlatısını ürün ambalajında tutarlı şekilde taşımak.',
    solutions: 'Ürün/şişe tasarımını yalnızca estetik değil, marka konumlandırması ve satın alma psikolojisiyle birlikte ele aldık. E-ticaret danışmanlığı kapsamında ürün hiyerarşisi, teklif yapısı ve satış metinlerini yeniden kurgulayarak kullanıcıyı daha hızlı karar noktasına taşıyan bir dönüşüm sistemi kurduk.',
    results: 'Marka dili ürün tasarımı ve ambalajda daha net hale geldi, E-ticaret akışları satış odağında yeniden yapılandırıldı, Ürün değer algısı dijitalde daha güçlü yansıtıldı, Danışmanlık ve tasarım çıktıları tek bir büyüme stratejisinde birleşti',
    gallery: [
      '/assets/images/work/work-img-2.jpg',
      '/assets/images/work/work-img-4.jpg',
      '/assets/images/work/work-img-6.jpg',
      '/assets/images/work/work-img-8.jpg'
    ],
    metrics: [
      { label: 'Kapsam', value: '360° Destek', period: 'Tasarım + E-Ticaret + Danışmanlık' },
      { label: 'Odak', value: 'Ürün & Satış', period: 'Raf + dijital deneyim uyumu' },
      { label: 'Teslimat', value: 'A’dan Z’ye', period: 'Konseptten optimizasyona' },
      { label: 'Model', value: 'Büyüme Odaklı', period: 'Sürekli iyileştirme yaklaşımı' },
    ],
    testimonial: {
      text: 'Dr.Sufi için ürün tasarımı, şişe/ambalaj geliştirme ve e-ticaret danışmanlığını tek bir stratejik çatı altında birleştirerek markanın satış performansını destekleyen sürdürülebilir bir yapı oluşturduk.',
      author: 'DNC7 Product & Commerce Team',
      role: 'dr.sufi'
    }
  },
  {
    id: 21,
    name: 'Tulu Çocuk Vakfı — Mobil Oyun Geliştirme',
    category: 'oyun',
    year: '2026',
    image: '/assets/images/work/work-img-4.jpg',
    tags: ['Mobil Oyun', 'Çocuk Odaklı Ürün', 'Eğitsel Deneyim', 'Oyun Tasarımı', 'Prototipleme'],
    accent: '#F59E0B',
    description: 'Tulu Çocuk Vakfı için çocuklara yönelik mobil oyun ürününü konseptten geliştirme aşamasına kadar uçtan uca tasarlıyoruz.',
    longDescription: 'Tulu Çocuk Vakfı projesinde hedefimiz; çocukların güvenli, eğitici ve etkileşimli bir dijital deneyim yaşamasını sağlayan mobil oyun ekosistemi kurmak. Oyun mekanikleri, seviye akışı, görsel dil ve ebeveyn/kurum beklentileri birlikte ele alınarak sürdürülebilir bir ürün yapısı geliştiriliyor. Bu kayıt, proje geliştirme sürecini ve teslimat yaklaşımını vaka çalışması formatında temsil eder.',
    client: 'Tulu Çocuk Vakfı',
    duration: 'Devam eden geliştirme',
    team: [
      'Game Designer',
      'Mobile Game Developer',
      'UI Artist',
      'Level Designer',
      'QA Tester'
    ],
    technologies: [
      'Unity',
      'C#',
      'Mobil oyun optimizasyonu',
      'Oyun ekonomisi ve ödül kurguları',
      'Çocuk güvenliği odaklı UX'
    ],
    features: [
      'Çocuklara uygun güvenli oyun akışı',
      'Eğitsel hedeflerle uyumlu görev ve seviye yapısı',
      'Kolay öğrenilen, yaş grubuna uygun arayüz',
      'Motivasyonu artıran ödül ve ilerleme sistemi',
      'iOS ve Android için performans odaklı geliştirme'
    ],
    challenges: 'Çocuk yaş gruplarına uygun deneyimi sağlarken eğitsel hedefleri korumak, oyun keyfi ile öğrenme dengesini doğru kurmak ve mobil performansı sürdürülebilir tutmak.',
    solutions: 'Oyun döngüsünü kısa ve anlaşılır etkileşimlerle kurguladık. Seviye zorluğunu kademeli tasarlayarak erişilebilirliği artırdık. Geri bildirim ve test çıktılarıyla iteratif geliştirme modeli uygulayarak ürün kalitesini adım adım yükseltiyoruz.',
    results: 'MVP oyun yapısı netleştirildi, Seviye ve görev mimarisi oluşturuldu, Mobil performans kriterleri proje başında tanımlandı, Geliştirme süreci vaka bazlı raporlanabilir hale getirildi',
    gallery: [
      '/assets/images/work/work-img-4.jpg',
      '/assets/images/work/work-img-3.jpg',
      '/assets/images/work/work-img-7.jpg',
      '/assets/images/work/work-img-9.jpg'
    ],
    metrics: [
      { label: 'Platform', value: 'iOS + Android', period: 'Mobil oyun geliştirme' },
      { label: 'Durum', value: 'Devam Ediyor', period: 'Aktif üretim süreci' },
      { label: 'Odak', value: 'Çocuk Deneyimi', period: 'Eğitsel + etkileşimli model' },
      { label: 'Model', value: 'Iteratif', period: 'Test ve geri bildirim döngüsü' },
    ],
    testimonial: {
      text: 'Tulu Çocuk Vakfı için geliştirilen mobil oyunda çocuk deneyimi, eğitsel yaklaşım ve teknik sürdürülebilirliği aynı potada birleştiren ürün odaklı bir geliştirme modeli yürütüyoruz.',
      author: 'DNC7 Game Team',
      role: 'tulu çocuk vakfı'
    }
  },
  {
    id: 22,
    name: 'CoinFeedback.io — Resmi Tanıtım Videoları ve Pazarlama Desteği',
    category: 'video',
    year: '2026',
    image: '/assets/images/work/work-img-1.jpg',
    tags: ['Resmi Tanıtım Videosu', 'Video Prodüksiyon', 'Pazarlama Desteği', 'Web3', 'Büyüme Stratejisi'],
    accent: '#22C55E',
    description: 'CoinFeedback.io için resmi tanıtım videoları üretimi ve dijital pazarlama destek süreçlerini uçtan uca yürüttük.',
    longDescription: 'CoinFeedback.io projesinde marka anlatısını sade, güven veren ve dönüşüm odaklı bir video diline taşımayı hedefledik. Resmi tanıtım video serilerinde ürünün değer önerisini netleştiren kurgu, senaryo, motion ve teslim süreçlerini yönettik. Pazarlama desteği tarafında içerik konumlandırması, kampanya mesajları, hedef kitle segmentasyonu ve performans odaklı optimizasyonlarla video içeriklerini büyüme kanalına dönüştürdük.',
    client: 'CoinFeedback.io',
    clientUrl: 'https://coinfeedback.io',
    duration: 'Video prodüksiyon + pazarlama desteği',
    team: [
      'Creative Director',
      'Video Producer',
      'Motion Designer',
      'Performance Marketing Specialist',
      'Growth Strategist'
    ],
    technologies: [
      'Kurumsal video prodüksiyon',
      'Motion graphics',
      'Kampanya mesaj mimarisi',
      'Paid & organic dağıtım stratejileri',
      'Performans ölçümleme ve raporlama'
    ],
    features: [
      'Marka mesajını netleştiren resmi tanıtım video serileri',
      'Ürün faydalarını sade anlatan senaryo ve kurgu yaklaşımı',
      'Platform bazlı video versiyonlama (reklam/sosyal/web)',
      'Pazarlama funnelına entegre video dağıtım planı',
      'Kreatif ve performans ekipleri arasında tek hat yönetim'
    ],
    challenges: 'Web3/fintech benzeri teknik anlatımı geniş kitleye anlaşılır şekilde aktarmak, kurumsal güven algısını korumak ve videoları yalnızca vitrin değil performans üreten içeriklere dönüştürmek.',
    solutions: 'Video içeriklerini hedef kitle segmentlerine göre farklı mesaj katmanlarıyla tasarladık. Pazarlama desteğinde kreatif test, kanal bazlı dağıtım ve performans geri bildirim döngüsü kurarak içeriklerin dönüşüm etkisini artırdık.',
    results: 'Marka iletişimi daha net ve profesyonel bir anlatı kazandı, Tanıtım videoları pazarlama kanalında aktif kullanılan varlıklara dönüştü, Kampanya süreçlerinde içerik üretim ve yayın hızı arttı, Video ve pazarlama operasyonu tek stratejide birleşti',
    gallery: [
      '/assets/images/work/work-img-1.jpg',
      '/assets/images/work/work-img-5.jpg',
      '/assets/images/work/work-img-6.jpg',
      '/assets/images/work/work-img-10.jpg'
    ],
    metrics: [
      { label: 'Teslimat', value: 'Resmi Video Serisi', period: 'Kurumsal tanıtım odağı' },
      { label: 'Kapsam', value: 'Video + Pazarlama', period: 'Uçtan uca destek' },
      { label: 'Odak', value: 'Büyüme', period: 'Dağıtım ve performans optimizasyonu' },
      { label: 'Sektör', value: 'Web3/Fintech', period: 'Global hedef kitle' },
    ],
    testimonial: {
      text: 'CoinFeedback.io için resmi video prodüksiyonunu pazarlama performans hedefleriyle birleştirerek markanın görünürlüğünü ve anlatım gücünü aynı anda yükselttik.',
      author: 'DNC7 Video & Growth Team',
      role: 'coinfeedback.io'
    }
  }
];

export const projectCategories = ['Tümü', 'Video', 'Web', 'Mobil', 'Oyun'];
