# DNC7 Next.js Site Analizi & İyileştirme Planı

## 🔍 Tespit Edilen Sorunlar

### 1. SEO — KRİTİK
- **Hiçbir hizmet alt sayfasında `metadata` export yok** — tüm sayfalar aynı genel title/description ile render ediliyor
- [`layout.tsx`](dnc7-nextjs-clean/app/layout.tsx:4) tek bir genel metadata tanımlıyor, sayfa bazlı override yok
- Hizmet sayfaları `'use client'` olduğu için metadata export edemez — yapısal sorun
- `robots.txt`, `sitemap.xml`, `opengraph-image` dosyaları yok
- Canonical URL tanımı yok

### 2. Hizmet Alt Sayfaları — Tutarsız Yapı
- **Eski format** — [`drone-cekim`](dnc7-nextjs-clean/app/hizmetler/drone-cekim/page.tsx:1) ve [`web-tasarim`](dnc7-nextjs-clean/app/hizmetler/web-tasarim/page.tsx:1): ~317 satır, `Preloader` import, skill bars, `'use client'` yok — server component
- **Yeni format** — [`e-ticaret-danismanligi`](dnc7-nextjs-clean/app/hizmetler/e-ticaret-danismanligi/page.tsx:1) ve [`reklam-yonetimi`](dnc7-nextjs-clean/app/hizmetler/reklam-yonetimi/page.tsx:1): ~100-130 satır, `'use client'`, fiyat paketleri, farklı layout
- **Prodüksiyon Filmleri** hizmeti için ayrı sayfa yok — `slug: 'drone-cekim'` ile eşleştirilmiş ama bu yanlış

### 3. Footer — Link Sorunları
- [`Footer.tsx`](dnc7-nextjs-clean/components/layout/Footer.tsx:7): Tüm linkler `href="#..."` hash link — alt sayfalarda çalışmaz
- Sosyal medya linkleri `href="#"` — gerçek URL yok
- Gizlilik/Kullanım Şartları/Çerez linkleri `href="#"` — sayfalar mevcut değil
- Next.js `Link` bileşeni kullanılmıyor, düz `<a>` tag var
- Bülten formu fonksiyonel değil

### 4. Responsive Design Eksikleri
- [`hizmetler/page.tsx`](dnc7-nextjs-clean/app/hizmetler/page.tsx:62): `gridTemplateColumns: '80px 1fr auto'` — mobilde kırılır
- Süreç bölümü `gridTemplateColumns: 'repeat(4, 1fr)'` — mobil için media query yok
- Inline style kullanımı responsive breakpoint eklemeyi imkansız kılıyor

### 5. Performans Sorunları
- [`layout.tsx`](dnc7-nextjs-clean/app/layout.tsx:17): Google Fonts render-blocking `<link>` ile yükleniyor — `next/font` kullanılmalı
- Bootstrap Icons CDN'den yükleniyor — sadece kullanılan ikonlar bundle edilmeli
- `next/image` yerine düz `<img>` kullanılıyor olabilir
- `Preloader` bileşeni bazı sayfalarda var bazılarında yok — tutarsız

### 6. Navigation Sorunları
- [`Navigation.tsx`](dnc7-nextjs-clean/components/layout/Navigation.tsx:33): `href={hashHref ? href : href}` — gereksiz ternary, her iki dalda aynı değer
- Mobil menüde overlay/backdrop yok
- Active link stili sadece exact match — alt sayfalar highlight edilmiyor

### 7. İçerik Eksikleri
- Hakkımızda sayfası yok — sadece anasayfada ekip bölümü var
- Blog/İçerik bölümü yok
- 404 sayfası yok
- Prodüksiyon Filmleri için ayrı hizmet sayfası eksik

---

## 📋 Öncelik Sırasına Göre İyileştirme Planı

### P0 — Kritik
1. Tüm hizmet alt sayfalarını tek bir şablon yapısına dönüştür — server component wrapper + client bileşen
2. Her sayfa için metadata ekle — title, description, openGraph
3. Footer linklerini Next.js Link ile düzelt, alt sayfalarda da çalışır hale getir
4. `next/font` ile Google Fonts yüklemesini optimize et

### P1 — Yüksek Öncelik
5. Hizmetler sayfası ve alt sayfalardaki inline style'ları CSS class'lara taşı — responsive uyumlu yap
6. Prodüksiyon Filmleri için hizmet alt sayfası oluştur
7. `robots.txt` ve `sitemap.xml` ekle
8. Navigation active state'i alt sayfalar için düzelt
9. 404 sayfası oluştur

### P2 — Orta Öncelik
10. Bootstrap Icons CDN yerine `react-icons` veya seçici import kullan
11. Proje detay sayfalarına metadata ekle
12. Mobil menüye backdrop overlay ekle
13. Bülten formunu fonksiyonel yap veya kaldır

### P3 — Düşük Öncelik
14. Hakkımızda sayfası oluştur
15. `Preloader` kullanımını tutarlı hale getir — ya hepsinde ya hiçbirinde
16. Sosyal medya linklerini gerçek URL'ler ile güncelle
17. Gizlilik/Kullanım Şartları sayfaları oluştur
