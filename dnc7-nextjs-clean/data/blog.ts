export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export const blogCategories = ['Tümü', 'AI & Teknoloji', 'Web Tasarım', 'Dijital Pazarlama', 'Prodüksiyon', 'E-Ticaret'];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'yapay-zeka-ile-is-sureclerini-otomatiklestirme',
    title: 'Yapay Zeka ile İş Süreçlerini Otomatikleştirme: 2025 Rehberi',
    excerpt: 'GPT-4 ve LLM teknolojileri ile müşteri hizmetlerinden içerik üretimine kadar iş süreçlerinizi nasıl otomatikleştirebilirsiniz? Adım adım uygulama rehberi.',
    content: `
## Neden AI Otomasyonu?

Günümüzde şirketlerin %78'i en az bir iş sürecinde yapay zeka kullanıyor. AI entegrasyonu artık lüks değil, rekabet avantajı için zorunluluk.

### 1. Müşteri Hizmetleri Chatbotları

GPT-4 tabanlı chatbotlar, müşteri sorularının %80'ine anında yanıt verebilir. Bu sayede:

- **Maliyet tasarrufu:** Müşteri hizmetleri maliyetini %60'a kadar düşürün
- **7/24 erişim:** Mesai saatleri dışında da müşterilerinize hizmet verin
- **Tutarlılık:** Her müşteriye aynı kalitede yanıt sağlayın

### 2. İçerik Otomasyonu

Blog yazıları, sosyal medya paylaşımları ve e-posta kampanyaları için AI destekli içerik üretimi:

- SEO uyumlu blog içerikleri
- Sosyal medya takvimi otomasyonu
- Kişiselleştirilmiş e-posta kampanyaları

### 3. Veri Analizi ve Raporlama

AI ile büyük veri setlerinden anlamlı içgörüler çıkarın:

- Satış tahminleri
- Müşteri davranış analizi
- Trend tespit ve erken uyarı sistemleri

## DNC7 ile AI Entegrasyonu

12 yıllık deneyimimiz ve uzman ekibimizle, işletmenize özel AI çözümleri geliştiriyoruz. Ücretsiz danışmanlık için bizimle iletişime geçin.
    `.trim(),
    category: 'AI & Teknoloji',
    tags: ['AI', 'Otomasyon', 'GPT-4', 'Chatbot'],
    author: 'DNC7 Ekibi',
    authorRole: 'AI & Teknoloji',
    date: '2025-03-15',
    readTime: '6 dk',
    image: '/assets/images/work/work-img-1.jpg',
    featured: true,
  },
  {
    id: '2',
    slug: '2025-web-tasarim-trendleri',
    title: '2025 Web Tasarım Trendleri: Dönüşüm Odaklı Tasarım',
    excerpt: 'Minimalizm, mikro-etkileşimler, AI destekli UX ve bento grid — 2025\'te web sitenizi öne çıkaracak tasarım trendleri.',
    content: `
## 2025'in Öne Çıkan Trendleri

Web tasarım dünyası her yıl evrilmeye devam ediyor. 2025'te öne çıkan trendler sadece estetik değil, dönüşüm odaklı.

### 1. Bento Grid Layouts

Apple'ın popülerleştirdiği bento grid yaklaşımı, bilgiyi düzenli ve görsel olarak çekici bir şekilde sunmanın en etkili yolu.

### 2. Mikro-Etkileşimler

Hover efektleri, scroll animasyonları ve buton geçişleri — kullanıcı deneyimini zenginleştiren küçük detaylar büyük fark yaratır.

### 3. AI Destekli Kişiselleştirme

Ziyaretçi davranışına göre dinamik içerik gösterimi, kişiselleştirilmiş CTA'lar ve akıllı form optimizasyonu.

### 4. Dark Mode Tasarım

Kullanıcı tercihine saygı duyan, sistem ayarlarına uyum sağlayan dark mode artık standart.

### 5. Core Web Vitals Odak

Google'ın sayfa deneyimi sinyalleri sıralama faktörü olmaya devam ediyor. LCP, FID ve CLS optimizasyonu kritik.

## Sonuç

Web siteniz markanızın dijital vitrinidir. 2025 trendlerini uygulayarak hem kullanıcı deneyimini hem de dönüşüm oranlarınızı artırabilirsiniz.
    `.trim(),
    category: 'Web Tasarım',
    tags: ['Web Tasarım', 'UX', 'Trendler', '2025'],
    author: 'DNC7 Ekibi',
    authorRole: 'Web & Tasarım',
    date: '2025-02-28',
    readTime: '5 dk',
    image: '/assets/images/work/work-img-2.jpg',
    featured: true,
  },
  {
    id: '3',
    slug: 'sosyal-medya-stratejisi-kucuk-isletmeler',
    title: 'Küçük İşletmeler İçin Sosyal Medya Stratejisi',
    excerpt: 'Sınırlı bütçeyle maksimum etki: Instagram, TikTok ve LinkedIn\'de organik büyüme taktikleri ve içerik stratejisi.',
    content: `
## Bütçe Dostu Sosyal Medya

Küçük işletmelerin %90'ı sosyal medyada aktif, ama sadece %30'u stratejik yaklaşıyor.

### Platform Seçimi

Her platformda olmak zorunda değilsiniz. Hedef kitlenizin olduğu 2-3 platforma odaklanın:

- **Instagram:** Görsel ürünler, lifestyle markalar
- **TikTok:** Genç kitle, viral içerik potansiyeli
- **LinkedIn:** B2B, profesyonel hizmetler

### İçerik Stratejisi

80/20 kuralı: %80 değer veren içerik, %20 satış odaklı içerik.

### Tutarlılık

Haftada 3-5 paylaşım, düzenli hikaye güncellemeleri ve topluluk etkileşimi.

## DNC7 Farkı

Sosyal medya yönetimimizle organik takipçilerinizi 6 ayda %200'e kadar artırıyoruz.
    `.trim(),
    category: 'Dijital Pazarlama',
    tags: ['Sosyal Medya', 'Instagram', 'TikTok', 'Strateji'],
    author: 'DNC7 Ekibi',
    authorRole: 'Dijital Pazarlama',
    date: '2025-02-10',
    readTime: '4 dk',
    image: '/assets/images/work/work-img-3.jpg',
    featured: false,
  },
  {
    id: '4',
    slug: 'kurumsal-tanitim-filmi-neden-onemli',
    title: 'Kurumsal Tanıtım Filmi Neden Önemli? ROI Analizi',
    excerpt: 'Video içerik tüketimi her yıl artıyor. Kurumsal tanıtım filminin marka bilinirliği ve satışlara etkisini rakamlarla inceliyoruz.',
    content: `
## Video Pazarlamanın Gücü

2025'te internet trafiğinin %82'si video içerikten oluşuyor. Kurumsal tanıtım filmi artık bir lüks değil, zorunluluk.

### Rakamlarla Video ROI

- Video içerikli sayfalar **%80 daha fazla** dönüşüm sağlar
- Kullanıcıların **%72'si** ürün/hizmet hakkında bilgi almak için video tercih eder
- E-posta kampanyalarında video, tıklama oranını **%300** artırır

### Profesyonel Film vs. Amatör Video

Kaliteli bir kurumsal film:
- Marka güvenilirliğini artırır
- İlk izlenimi güçlendirir
- Sosyal medyada paylaşım potansiyeli yüksektir

### Maliyet Analizi

Profesyonel bir tanıtım filmi yatırımınızın geri dönüşü ortalama 6 ay içinde başlar.

## DNC7 Prodüksiyon

4K/8K çekim, senaryo yazımından post-prodüksiyona uçtan uca hizmet. 250+ tamamlanan proje deneyimi.
    `.trim(),
    category: 'Prodüksiyon',
    tags: ['Video', 'Prodüksiyon', 'ROI', 'Kurumsal Film'],
    author: 'DNC7 Ekibi',
    authorRole: 'Prodüksiyon',
    date: '2025-01-20',
    readTime: '5 dk',
    image: '/assets/images/work/work-img-4.jpg',
    featured: false,
  },
  {
    id: '5',
    slug: 'e-ticaret-donusum-optimizasyonu',
    title: 'E-Ticaret Dönüşüm Optimizasyonu: Satışlarınızı %40 Artırın',
    excerpt: 'Sepet terk oranını düşürün, ürün sayfalarını optimize edin ve checkout sürecini iyileştirin. Kanıtlanmış CRO teknikleri.',
    content: `
## E-Ticaret CRO Temelleri

Ortalama e-ticaret dönüşüm oranı %2-3 arasındadır. Doğru optimizasyonlarla bunu %4-5'e çıkarmak mümkün.

### 1. Ürün Sayfası Optimizasyonu

- Yüksek kaliteli ürün fotoğrafları (360°)
- Detaylı ürün açıklamaları
- Müşteri yorumları ve puanlamaları
- Stok durumu ve kargo bilgisi

### 2. Sepet Terk Oranını Düşürme

- Exit intent popup ile indirim teklifi
- Misafir checkout seçeneği
- Güven sinyalleri (SSL, ödeme logoları)
- Ücretsiz kargo eşiği

### 3. Checkout Optimizasyonu

- Tek sayfa checkout
- Birden fazla ödeme yöntemi
- Adres otomatik tamamlama
- Progress bar

## DNC7 E-Ticaret Danışmanlığı

Shopify, WooCommerce ve pazar yeri entegrasyonlarıyla e-ticaret altyapınızı güçlendiriyoruz.
    `.trim(),
    category: 'E-Ticaret',
    tags: ['E-Ticaret', 'CRO', 'Dönüşüm', 'Optimizasyon'],
    author: 'DNC7 Ekibi',
    authorRole: 'E-Ticaret',
    date: '2025-01-05',
    readTime: '6 dk',
    image: '/assets/images/work/work-img-1.jpg',
    featured: false,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === 'Tümü') return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}
