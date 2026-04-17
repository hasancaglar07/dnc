# DNC7 — Kapsamlı Site Analizi & İyileştirme Planı v3

## 📊 Mevcut Durum Özeti

### Mevcut Sayfalar
- `/` — Ana sayfa (Hero, Ticker, Services, Projects, Stats, Testimonials, Team, FAQ, Contact)
- `/hizmetler` — Hizmetler listesi
- `/hizmetler/[slug]` — 9 hizmet detay sayfası
- `/projeler` — Proje listesi (filtrelenebilir)
- `/projeler/[id]` — Proje detay sayfaları
- `/hakkimizda` — Hakkımızda (Story, Values, Timeline, Team, Awards)
- `/gizlilik` — Gizlilik Politikası
- `/kullanim-sartlari` — Kullanım Şartları

### Son Eklenenler (v2)
- ✅ Exit Intent Popup
- ✅ WhatsApp sabit buton
- ✅ FAQ objection handling soruları
- ✅ Testimonials logoları
- ✅ Hizmet sayfalarında fiyat anchor
- ✅ Sitemap güncellemesi

---

## 🔴 Kritik Eksiklikler

### 1. Blog / İçerik Sayfası — SEO Boşluğu
- Hiç blog yok. Organik trafik çekecek içerik altyapısı eksik
- **Yapılacak:** `/blog` listesi + `/blog/[slug]` detay sayfası
- MDX veya basit JSON/data tabanlı başlangıç makaleleri
- Kategori filtreleme, okuma süresi, paylaşım butonları

### 2. /fiyatlandirma Sayfası
- Hizmet detaylarında fiyat anchor var ama merkezi bir fiyat sayfası yok
- **Yapılacak:** `/fiyatlandirma` — paket bazlı fiyat kartları
- 3 paket modeli: Başlangıç / Profesyonel / Kurumsal

### 3. Proje Başvuru Formu — Detaylı
- Mevcut contact formu çok genel: Ad, Soyad, Email, Konu, Mesaj
- **Yapılacak:** `/proje-basvuru` veya mevcut formu geliştir
- Ek alanlar: Bütçe aralığı dropdown, Hizmet tipi seçimi, Proje zaman çizelgesi, Dosya yükleme

### 4. Metadata Eksiklikleri
- Hizmet detay sayfaları `use client` olduğu için Next.js metadata export edemez
- `generateMetadata` kullanılmalı veya server component'e çevrilmeli
- Her hizmet sayfası için benzersiz title/description/OG image

---

## 🟡 High-Impact İyileştirmeler

### 5. Contact Formu İyileştirme
- Telefon numarası alanı eksik
- Bütçe aralığı seçimi yok
- Hizmet tipi seçimi yok
- **Yapılacak:** Form alanlarını genişlet

### 6. Footer Newsletter Entegrasyonu
- Footer'daki bülten formu `e.preventDefault()` ile hiçbir şey yapmıyor
- **Yapılacak:** API endpoint bağla veya en azından email toplama mekanizması

### 7. Navigation'a Blog Linki
- Blog sayfası eklenince nav'a da eklenmeli
- Footer'a da blog linki eklenmeli

### 8. Projeler Sayfası — Case Study Formatı
- Mevcut proje kartları basit
- **Yapılacak:** Proje detaylarına sonuç metrikleri, müşteri yorumu, kullanılan teknolojiler ekle

### 9. 404 Sayfası İyileştirme
- `not-found.tsx` var ama içeriğini kontrol etmek lazım
- Kullanıcıyı yönlendiren akıllı bir 404 sayfası olmalı

### 10. Cookie Consent Banner
- KVKK/GDPR uyumu için cookie consent yok
- **Yapılacak:** Alt kısımda cookie banner ekle

### 11. Breadcrumb Navigation
- Alt sayfalarda breadcrumb yok
- SEO ve UX için tüm alt sayfalara breadcrumb ekle

### 12. Schema.org Structured Data
- JSON-LD structured data yok
- **Yapılacak:** Organization, LocalBusiness, Service, FAQ, BreadcrumbList schema

---

## 🟢 Önerilen Yeni Özellikler

### 13. Loading / Skeleton States
- Sayfa geçişlerinde loading state yok
- Next.js `loading.tsx` dosyaları ekle

### 14. Dark Mode Toggle
- Site şu an sadece light mode
- Dark mode desteği ekle veya tema değişken yapısını iyileştir

### 15. Animasyonlar İyileştirme
- Scroll-triggered animasyonlar var ama bazı sayfalarda tutarsız
- Framer Motion veya GSAP ile tutarlı animasyon sistemi

### 16. Performance Optimizasyonları
- Projeler sayfasında `<img>` tag kullanılıyor, Next.js `<Image>` olmalı
- Font dosyaları optimize edilmeli
- Lazy loading stratejisi

### 17. Google Analytics / GTM Entegrasyonu
- Hiçbir analytics kodu yok
- **Yapılacak:** GA4 veya GTM script'i ekle

### 18. robots.txt Güncellemesi
- `public/robots.txt` var ama içeriğini kontrol et
- Sitemap referansı olmalı

---

## 📋 Öncelikli Uygulama Sırası

| Sıra | Görev | Etki | Zorluk |
|------|-------|------|--------|
| 1 | Blog altyapısı oluştur | Yüksek | Orta |
| 2 | Fiyatlandırma sayfası | Yüksek | Düşük |
| 3 | Contact formu genişlet | Yüksek | Düşük |
| 4 | Schema.org structured data | Yüksek | Düşük |
| 5 | Cookie consent banner | Orta | Düşük |
| 6 | Metadata düzeltmeleri | Yüksek | Orta |
| 7 | Footer newsletter bağla | Orta | Düşük |
| 8 | Breadcrumb navigation | Orta | Düşük |
| 9 | Loading states | Düşük | Düşük |
| 10 | Analytics entegrasyonu | Yüksek | Düşük |
| 11 | Image optimization | Orta | Düşük |
| 12 | Proje başvuru formu | Orta | Orta |
