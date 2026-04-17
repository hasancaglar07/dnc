export interface ServiceCROData {
  slug: string;
  painPoints: { icon: string; title: string; desc: string }[];
  caseStudy: {
    company: string;
    problem: string;
    solution: string;
    results: { metric: string; value: string }[];
    quote: string;
    author: string;
    role: string;
  };
  faqs: { q: string; a: string }[];
}

export const serviceCROData: Record<string, ServiceCROData> = {
  'web-tasarim': {
    slug: 'web-tasarim',
    painPoints: [
      { icon: 'bi-emoji-frown', title: 'Web siteniz dönüşüm getirmiyor mu?', desc: 'Trafiğiniz var ama formlar dolmuyor, telefon çalmıyor.' },
      { icon: 'bi-phone-flip', title: 'Mobilde kötü görünüyor mu?', desc: 'Ziyaretçilerin %70\'i mobilde — responsive olmayan site müşteri kaybettirir.' },
      { icon: 'bi-speedometer', title: 'Yavaş yükleniyor mu?', desc: '3 saniyeden uzun yüklenme her saniye %7 dönüşüm kaybı demek.' },
    ],
    caseStudy: {
      company: 'ModaHub',
      problem: 'Eski web sitesiyle aylık 50 lead, dönüşüm oranı %0.8',
      solution: 'UI/UX yeniden tasarım, Core Web Vitals optimizasyonu, SEO altyapı',
      results: [
        { metric: 'Dönüşüm Oranı', value: '%80 artış' },
        { metric: 'Sayfa Hızı', value: '1.2 sn' },
        { metric: 'Organik Trafik', value: '%120 artış' },
      ],
      quote: 'Web sitemiz için yaptıkları çalışma ile dönüşüm oranlarımızı %80 artırdık.',
      author: 'Elif Demir',
      role: 'CMO, ModaHub',
    },
    faqs: [
      { q: 'Web sitesi ne kadar sürede teslim edilir?', a: 'Basit kurumsal site 2-4 hafta, e-ticaret 4-8 hafta, özel projeler 8-12 hafta.' },
      { q: 'SEO dahil mi?', a: 'Evet, tüm web sitelerimiz teknik SEO altyapısı ile teslim edilir. İsteğe bağlı aylık SEO yönetimi de sunuyoruz.' },
      { q: 'Hosting ve domain kim sağlıyor?', a: 'Vercel veya AWS üzerinde hosting kurulumu yapıyoruz. Domain yönetimi dahildir.' },
    ],
  },
  'ai-entegrasyonu': {
    slug: 'ai-entegrasyonu',
    painPoints: [
      { icon: 'bi-headset', title: 'Müşteri hizmetleri maliyetleri yüksek mi?', desc: 'Her tekrar eden soru için insan gücü kullanıyorsanız, AI chatbot maliyeti %60 düşürür.' },
      { icon: 'bi-file-earmark-text', title: 'İçerik üretimi çok yavaş mı?', desc: 'Haftalarca süren içerik süreçlerini AI ile saatlere indirin.' },
      { icon: 'bi-graph-down', title: 'Verilerinizden içgörü çıkaramıyor musunuz?', desc: 'Tonlarca veri ama karar veremiyor — AI analitik bunu çözer.' },
    ],
    caseStudy: {
      company: 'FinTech',
      problem: '7/24 müşteri desteği için 12 kişilik ekip, yüksek maliyet',
      solution: 'GPT-4 tabanlı chatbot + ticket routing sistemi',
      results: [
        { metric: 'Destek Maliyeti', value: '%60 düşüş' },
        { metric: 'Yanıt Süresi', value: '2 dk → 5 sn' },
        { metric: 'Müşteri Memnuniyeti', value: '%94' },
      ],
      quote: 'AI chatbot entegrasyonumuz, müşteri hizmetleri maliyetlerimizi %60 düşürdü.',
      author: 'Mehmet Kaya',
      role: 'CTO, FinTech',
    },
    faqs: [
      { q: 'Mevcut sistemlerimize entegre edilebilir mi?', a: 'Evet, REST API üzerinden CRM, ERP ve mevcut yazılımlarınıza entegre ediyoruz.' },
      { q: 'Verilerimiz güvende mi?', a: 'Tüm veriler şifrelenmiş olarak işlenir. KVKK uyumlu altyapı sağlıyoruz.' },
      { q: 'Eğitim veriyor musunuz?', a: 'Evet, ekibinize AI araçlarını kullanma eğitimi ve dokümantasyon sağlıyoruz.' },
    ],
  },
  'produksiyon-filmleri': {
    slug: 'produksiyon-filmleri',
    painPoints: [
      { icon: 'bi-camera-video-off', title: 'Tanıtım videonuz yok mu?', desc: 'Video içerikli sayfalar %80 daha fazla dönüşüm sağlar.' },
      { icon: 'bi-emoji-neutral', title: 'Mevcut videonuz amatör mü görünüyor?', desc: 'Düşük kalite video marka güvenilirliğinizi zedeler.' },
      { icon: 'bi-megaphone', title: 'Hikayenizi anlatamıyor musunuz?', desc: 'Doğru senaryo ve prodüksiyon ile marka hikayeniz canlansın.' },
    ],
    caseStudy: {
      company: 'TechStart',
      problem: 'Yatırımcı sunumu için profesyonel tanıtım filmi ihtiyacı',
      solution: '4K kurumsal film, senaryo yazımı, post-prodüksiyon, motion graphics',
      results: [
        { metric: 'Yatırım Turu', value: 'Başarılı kapanış' },
        { metric: 'Video Görüntülenme', value: '50K+' },
        { metric: 'Marka Bilinirliği', value: '%200 artış' },
      ],
      quote: 'Kurumsal tanıtım filmimizi hayal ettiğimizden daha iyi bir kaliteyle teslim etti.',
      author: 'Ahmet Yılmaz',
      role: 'CEO, TechStart',
    },
    faqs: [
      { q: 'Çekim süresi ne kadar?', a: 'Senaryo onayından sonra çekim 1-3 gün, post-prodüksiyon 1-2 hafta sürer.' },
      { q: 'Senaryoyu siz mi yazıyorsunuz?', a: 'Evet, profesyonel senaristlerimiz brief\'e göre senaryo yazar, onayınızla çekime geçeriz.' },
      { q: 'Hangi formatları teslim ediyorsunuz?', a: '4K/8K master, sosyal medya versiyonları (16:9, 9:16, 1:1), web optimized MP4.' },
    ],
  },
  'drone-cekim': {
    slug: 'drone-cekim',
    painPoints: [
      { icon: 'bi-building', title: 'Projenizi yukarıdan gösteremiyorsunuz mu?', desc: 'İnşaat, emlak ve etkinliklerde drone çekim fark yaratır.' },
      { icon: 'bi-shield-x', title: 'Lisanssız drone uçuruyor musunuz?', desc: 'Yasal risk almayın — SHGM lisanslı profesyonel operatörlerle çalışın.' },
      { icon: 'bi-thermometer-half', title: 'Thermal analiz mi lazım?', desc: 'Enerji kaybı, çatı kontrolü ve tarım analizleri için thermal kamera.' },
    ],
    caseStudy: {
      company: 'Belediye',
      problem: 'Şehir tanıtım filmi için profesyonel hava çekimi gereksinimi',
      solution: 'DJI Inspire 3 ile 4K sinematik drone çekim, color grading, post-prodüksiyon',
      results: [
        { metric: 'Çekim Süresi', value: '2 gün' },
        { metric: 'Video Kalitesi', value: '4K HDR' },
        { metric: 'Sosyal Medya Etkileşim', value: '%300 artış' },
      ],
      quote: 'Drone çekimlerimiz şehrimizin tanıtım filmlerini profesyonel seviyeye taşıdı.',
      author: 'Zeynep Arslan',
      role: 'Proje Koordinatörü, Belediye',
    },
    faqs: [
      { q: 'Drone çekim için izin gerekli mi?', a: 'Ticari uçuş izinlerimiz mevcut. Özel alanlar için gerekli başvuruları biz yapıyoruz.' },
      { q: 'Kötü havada çekim yapılabilir mi?', a: 'Rüzgar ve yağmur durumunda alternatif gün planlaması yapıyoruz. Ekstra maliyet yok.' },
      { q: 'Kaç metre yüksekliğe çıkabiliyorsunuz?', a: 'Yasal sınır olan 120 metreye kadar çıkabiliyoruz. Özel izinlerle daha yükseğe de çıkılabilir.' },
    ],
  },
  'mobil-uygulama': {
    slug: 'mobil-uygulama',
    painPoints: [
      { icon: 'bi-phone-vibrate', title: 'Mobil uygulamanız yok mu?', desc: 'Müşterileriniz her gün telefonlarında — orada olmazsanız rakibiniz olur.' },
      { icon: 'bi-bug', title: 'Mevcut uygulamanız sorunlu mu?', desc: 'Crash\'ler, yavaş performans, kötü UX — kullanıcılar silip gider.' },
      { icon: 'bi-shop', title: 'App Store\'da bulunamıyor musunuz?', desc: 'ASO optimizasyonu olmadan indirme sayınız düşük kalır.' },
    ],
    caseStudy: {
      company: 'FitLife',
      problem: 'Fitness uygulaması fikri var, teknik ekip yok',
      solution: 'React Native ile cross-platform uygulama, backend, App Store yayın',
      results: [
        { metric: 'App Store Puanı', value: '4.8/5' },
        { metric: 'İlk Ay İndirme', value: '10K+' },
        { metric: 'Aktif Kullanıcı', value: '%65 retention' },
      ],
      quote: 'Mobil uygulamamız hem iOS hem Android\'de sorunsuz çalışıyor.',
      author: 'Can Öztürk',
      role: 'Founder, FitLife',
    },
    faqs: [
      { q: 'iOS ve Android ayrı mı geliştiriliyor?', a: 'React Native ile tek kod tabanından her iki platforma deploy ediyoruz. Maliyet %40 düşer.' },
      { q: 'App Store yayın sürecini siz mi yönetiyorsunuz?', a: 'Evet, developer hesap kurulumundan onay sürecine kadar her şeyi biz yönetiyoruz.' },
      { q: 'Bakım ve güncelleme dahil mi?', a: 'Teslim sonrası 30 gün ücretsiz destek. Sonrasında aylık bakım paketlerimiz mevcut.' },
    ],
  },
  'mobil-oyun': {
    slug: 'mobil-oyun',
    painPoints: [
      { icon: 'bi-controller', title: 'Oyun fikriniz var ama ekibiniz yok mu?', desc: 'Unity uzmanlarımız konseptten yayına kadar yanınızda.' },
      { icon: 'bi-currency-dollar', title: 'Monetizasyon stratejiniz belirsiz mi?', desc: 'Reklam, IAP ve hybrid modeller ile gelir maximizasyonu.' },
      { icon: 'bi-graph-down-arrow', title: 'İndirme sayınız düşük mü?', desc: 'ASO ve UA stratejisi ile organik indirmeleri artırın.' },
    ],
    caseStudy: {
      company: 'GameStudio',
      problem: 'Hyper-casual oyun fikri, monetizasyon ve ASO bilgisi eksik',
      solution: 'Unity 3D geliştirme, AdMob entegrasyonu, ASO optimizasyonu',
      results: [
        { metric: 'İndirme', value: '500K+' },
        { metric: 'Günlük Gelir', value: '$200+' },
        { metric: 'Retention D7', value: '%18' },
      ],
      quote: 'İlk oyunumuz 3 ayda 500K indirmeye ulaştı. DNC7 ekibi monetizasyonu çok iyi biliyor.',
      author: 'Ali Koç',
      role: 'Founder, GameStudio',
    },
    faqs: [
      { q: 'Oyun geliştirme ne kadar sürer?', a: 'Hyper-casual 4-8 hafta, casual 8-16 hafta, mid-core 16-24 hafta.' },
      { q: 'Hangi platformlar destekleniyor?', a: 'iOS, Android ve isteğe bağlı WebGL. Tek Unity projesinden tüm platformlara deploy.' },
      { q: 'Telif ve fikri mülkiyet kime ait?', a: 'Proje bitiminde tüm kaynak kodlar ve assets size teslim edilir. IP tamamen sizin.' },
    ],
  },
  'sosyal-medya': {
    slug: 'sosyal-medya',
    painPoints: [
      { icon: 'bi-people', title: 'Takipçi artışınız durdu mu?', desc: 'Algoritmalar değişti — stratejik içerik olmadan organik büyüme zor.' },
      { icon: 'bi-clock-history', title: 'İçerik üretmek çok zaman mı alıyor?', desc: 'Profesyonel ekibimiz aylık içerik takvimini hazırlar ve uygular.' },
      { icon: 'bi-bar-chart', title: 'ROI ölçemiyor musunuz?', desc: 'Her paylaşımın etkisini ölçen detaylı raporlama sistemi.' },
    ],
    caseStudy: {
      company: 'EcoBrand',
      problem: 'Organik takipçi sayısı 6 aydır aynı, etkileşim düşük',
      solution: 'İçerik stratejisi, Reels/TikTok üretimi, topluluk yönetimi',
      results: [
        { metric: 'Takipçi Artışı', value: '%200' },
        { metric: 'Etkileşim Oranı', value: '%4.5' },
        { metric: 'Web Trafiği', value: '%150 artış' },
      ],
      quote: 'Sosyal medya yönetimleriyle organik takipçilerimiz 6 ayda %200 arttı.',
      author: 'Ayşe Çelik',
      role: 'Pazarlama Müdürü, EcoBrand',
    },
    faqs: [
      { q: 'Hangi platformları yönetiyorsunuz?', a: 'Instagram, TikTok, LinkedIn, YouTube, X (Twitter) ve Facebook.' },
      { q: 'İçerikleri kim üretiyor?', a: 'Grafik tasarımcı, videographer ve copywriter\'dan oluşan ekibimiz üretir.' },
      { q: 'Reklam yönetimi dahil mi?', a: 'Sosyal medya paketlerimize organik yönetim dahildir. Paid ads ayrı fiyatlandırılır.' },
    ],
  },
  'e-ticaret-danismanligi': {
    slug: 'e-ticaret-danismanligi',
    painPoints: [
      { icon: 'bi-cart-x', title: 'Sepet terk oranınız yüksek mi?', desc: 'E-ticaret sitelerinin %70\'i checkout\'da müşteri kaybeder.' },
      { icon: 'bi-shop-window', title: 'Pazar yerlerinde satışınız düşük mü?', desc: 'Trendyol, Hepsiburada ve Amazon entegrasyonu ile satışları artırın.' },
      { icon: 'bi-cash-stack', title: 'Kâr marjınız eriyor mu?', desc: 'Doğru fiyatlama, kargo optimizasyonu ve stok yönetimi ile karlılığı artırın.' },
    ],
    caseStudy: {
      company: 'ShopTR',
      problem: 'Shopify mağazada düşük dönüşüm, pazar yeri entegrasyonu yok',
      solution: 'UX optimizasyonu, Trendyol/Hepsiburada entegrasyonu, sepet kurtarma e-postaları',
      results: [
        { metric: 'Satış', value: '%120 artış' },
        { metric: 'Sepet Terk', value: '%35 düşüş' },
        { metric: 'Ortalama Sepet', value: '₺180 → ₺260' },
      ],
      quote: 'E-ticaret danışmanlığı ile satışlarımızı 4 ayda ikiye katladık.',
      author: 'Seda Yılmaz',
      role: 'E-Ticaret Müdürü, ShopTR',
    },
    faqs: [
      { q: 'Hangi e-ticaret platformlarını destekliyorsunuz?', a: 'Shopify, WooCommerce, Ticimax, IdeaSoft ve özel e-ticaret çözümleri.' },
      { q: 'Mevcut mağazamı optimize edebilir misiniz?', a: 'Evet, mevcut mağazanızın UX, SEO ve performans optimizasyonunu yapıyoruz.' },
      { q: 'Pazar yeri entegrasyonu ne kadar sürer?', a: 'Trendyol, Hepsiburada ve Amazon entegrasyonu 1-2 hafta içinde tamamlanır.' },
    ],
  },
  'reklam-yonetimi': {
    slug: 'reklam-yonetimi',
    painPoints: [
      { icon: 'bi-cash', title: 'Reklam bütçeniz boşa mı gidiyor?', desc: 'Yanlış hedefleme ve kötü kreatiflerle para yakmayı bırakın.' },
      { icon: 'bi-bullseye', title: 'Doğru kitleye ulaşamıyor musunuz?', desc: 'Data-driven hedefleme ile potansiyel müşterilerinize doğrudan ulaşın.' },
      { icon: 'bi-graph-down', title: 'ROAS düşük mü?', desc: 'Ortalama ROAS 2x altındaysa strateji değişikliği şart.' },
    ],
    caseStudy: {
      company: 'TechShop',
      problem: 'Google Ads\'de ROAS 1.5x, bütçe artışına rağmen satış artmıyor',
      solution: 'Kampanya yeniden yapılandırma, A/B test, remarketing, landing page optimizasyonu',
      results: [
        { metric: 'ROAS', value: '1.5x → 4.2x' },
        { metric: 'CPA', value: '%55 düşüş' },
        { metric: 'Dönüşüm', value: '%180 artış' },
      ],
      quote: 'DNC7 ile çalışmaya başladıktan sonra ROAS\'ımız 3 kat arttı.',
      author: 'Burak Demir',
      role: 'CEO, TechShop',
    },
    faqs: [
      { q: 'Minimum reklam bütçesi ne kadar?', a: 'Etkili sonuçlar için aylık minimum ₺5.000 reklam bütçesi öneriyoruz. Yönetim ücreti ayrıdır.' },
      { q: 'Hangi platformlarda reklam yönetiyorsunuz?', a: 'Google Ads, Meta (Facebook/Instagram), TikTok Ads, LinkedIn Ads ve programatik.' },
      { q: 'Raporlama nasıl yapılıyor?', a: 'Haftalık performans raporu + aylık detaylı analiz. Canlı dashboard erişimi sağlıyoruz.' },
    ],
  },
};
