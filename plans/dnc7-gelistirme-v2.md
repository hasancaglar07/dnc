# DNC7 Site Geliştirme Planı v2

## 🔴 KRİTİK — Build Bozuyor
1. **6 eski hizmet sayfasından Preloader import kaldır** — ai-entegrasyonu, drone-cekim, web-tasarim, mobil-uygulama, mobil-oyun, sosyal-medya hepsi `import Preloader` yapıyor ama Preloader artık kullanılmıyor
2. **/particles demo sayfasını kaldır** — gereksiz, sitede link yok

## 🟠 YÜKSEK — Tasarım Tutarlılığı
3. **6 eski hizmet alt sayfasını yeni şablona dönüştür** — Eski sayfalar inline style, skill bar, equipment section ile ~300 satır. Yeni format: e-ticaret-danismanligi ve reklam-yonetimi gibi ~100 satır, temiz yapı
4. **Prodüksiyon Filmleri için ayrı hizmet sayfası oluştur** — /hizmetler/produksiyon-filmleri yok, services.ts'de id:1 olarak tanımlı ama slug yanlış eşleştirilmiş
5. **Hizmetler ana sayfası responsive düzelt** — gridTemplateColumns: 80px 1fr auto ve repeat 4,1fr mobilde kırılıyor

## 🟡 ORTA — Mobil Uyumluluk
6. **globals.css'e kapsamlı mobil responsive CSS ekle**:
   - Hero: .hero-layout, .hero-card-inner mobil boyutlar
   - Hizmetler: grid'ler tek kolon
   - Projeler: proj-grid tek kolon
   - İletişim: contact-in tek kolon
   - Footer: footer-g tek kolon
   - Proje detay: pdet-process-grid, pdet-meta-strip
7. **Mobil menüye backdrop overlay ekle**

## 🟢 DÜŞÜK — İçerik ve İyileştirme
8. **Proje detay sayfalarına dinamik metadata ekle** — generateMetadata ile proje adı title'da
9. **İletişim formu fonksiyonel yap** — API route ile email gönder veya 3rd party servis
10. **Bülten formu kaldır veya basitleştir**

## Sayfa Envanteri
| Sayfa | Durum | Sorun |
|-------|-------|-------|
| / | ✅ Çalışıyor | Hero slider aktif |
| /hizmetler | ✅ Yeni tasarım | Responsive eksik |
| /hizmetler/ai-entegrasyonu | ⚠️ Eski format | Preloader import, eski tasarım |
| /hizmetler/drone-cekim | ⚠️ Eski format | Preloader import, eski tasarım |
| /hizmetler/web-tasarim | ⚠️ Eski format | Preloader import, eski tasarım |
| /hizmetler/mobil-uygulama | ⚠️ Eski format | Preloader import, eski tasarım |
| /hizmetler/mobil-oyun | ⚠️ Eski format | Preloader import, eski tasarım |
| /hizmetler/sosyal-medya | ⚠️ Eski format | Preloader import, eski tasarım |
| /hizmetler/e-ticaret-danismanligi | ✅ Yeni tasarım | OK |
| /hizmetler/reklam-yonetimi | ✅ Yeni tasarım | OK |
| /projeler | ✅ Yeni tasarım | OK |
| /projeler/1-8 | ✅ Premium tasarım | Metadata eksik |
| /particles | ❌ Demo | Kaldırılmalı |
| /not-found | ✅ Yeni | OK |
