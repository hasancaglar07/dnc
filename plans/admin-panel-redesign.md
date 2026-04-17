# DNC7 Admin Panel - Modern Minimal Tasarım Planı

## Tasarım Felsefesi

**"Less is More"** - Gereksiz her şeyden arındırılmış, fonksiyonel ve zarif bir admin panel.

### Referanslar
- Vercel Dashboard
- Linear
- Notion
- Stripe Dashboard
- Shadcn UI

---

## Renk Paleti

### Neutral (Ana)
```
bg-white           #FFFFFF  - Ana arka plan
bg-gray-50         #FAFAFA  - İkincil arka plan
bg-gray-100        #F5F5F5  - Kart arka planı
bg-gray-200        #E5E5E5  - Border
bg-gray-300        #D4D4D4  - Divider
text-gray-900      #171717  - Ana başlık
text-gray-600      #525252  - Ana metin
text-gray-400      #A3A3A3  - İkincil metin
text-gray-300      #D4D4D4  - Placeholder
```

### Accent (Brand)
```
primary            #F97316  - Ana action (turuncu)
primary-hover      #EA580C  - Hover durumu
primary-light      #FFEDD5  - Highlight/background
```

### Semantic
```
success            #22C55E  - Başarılı işlemler
warning            #F59E0B  - Uyarılar
error              #EF4444  - Hatalar
info               #3B82F6  - Bilgi
```

---

## Tipografi

```
Font: Inter veya Geist (sistem fontu)

H1 (Page Title)    text-3xl font-semibold text-gray-900  (30px/600)
H2 (Section)       text-xl font-semibold text-gray-900   (20px/600)
H3 (Card Title)    text-lg font-medium text-gray-900     (18px/500)
Body               text-sm text-gray-600                  (14px/400)
Small              text-xs text-gray-500                  (12px/400)
```

---

## Spacing Sistemi

```
1   4px   - Tiny gap
2   8px   - Small gap
3   12px  - Medium gap
4   16px  - Large gap
6   24px  - XL gap
8   32px  - XXL gap
```

---

## Radius Sistemi

```
sm   rounded-sm    2px   - Input, button
md   rounded-md    6px   - Card
lg   rounded-lg    8px   - Modal
xl   rounded-xl    12px  - Special cards
```

---

## Shadow Sistemi

```
sm   shadow-sm     Minimal lift
md   shadow        Card lift
lg   shadow-lg     Modal/dropdown
xl   shadow-xl     Floating elements
```

---

## Bileşen Tasarımları

### 1. Button
```
Primary (Solid):
bg-primary text-white hover:bg-primary-hover px-4 py-2 rounded-md font-medium text-sm

Secondary:
bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md font-medium text-sm

Ghost:
text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md font-medium text-sm

Icon Button:
w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-md
```

### 2. Input
```
border border-gray-200 bg-white rounded-md px-3 py-2 text-sm text-gray-900
focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary

With Label:
label: text-xs font-medium text-gray-700 mb-1 block
```

### 3. Card
```
bg-white border border-gray-200 rounded-lg shadow-sm p-4

Variant - Interactive:
hover:border-gray-300 hover:shadow-md transition-all duration-200
```

### 4. Table
```
Minimal row borders, alternating row hover

thead: border-b border-gray-200
tr: hover:bg-gray-50
td: py-3 px-4 text-sm
```

### 5. Badge/Tag
```
bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium

Colored variants available
```

---

## Layout Yapısı

### Sidebar (Sol Navigasyon)
```
Width: 240px (desktop)
Background: bg-white
Border: border-r border-gray-200

Logo: Top, left aligned
Nav Items: Vertical stack
User Profile: Bottom
```

### Main Content
```
Margin: ml-60 (desktop)
Max-width: 1200px
Padding: px-6 py-8
```

---

## Sayfa Tasarımları

### Dashboard
```
┌─────────────────────────────────────────┐
│  Header: Page Title + Breadcrumb        │
├─────────────────────────────────────────┤
│  Stats Grid (4 columns)                 │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐           │
│  │ 54 │ │ 12 │ │ 8  │ │ 74 │           │
│  └────┘ └────┘ └────┘ └────┘           │
├─────────────────────────────────────────┤
│  Recent Activity / Quick Actions        │
└─────────────────────────────────────────┘

Stat Card:
- White bg, subtle border
- Icon + Value + Label
- Minimal, no gradients
```

### List Pages (Blog/Projects)
```
┌─────────────────────────────────────────┐
│  Header + Search + Filter + Add Button  │
├─────────────────────────────────────────┤
│  Table View (Desktop)                   │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  Title │ Category │ Date │ Actions     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  Item  │ ...      │ ...  │ •••         │
└─────────────────────────────────────────┘

Or Card View (Mobile):
Stacked cards with key info
```

### Form Pages (Edit/Create)
```
┌─────────────────────────────────────────┐
│  Header: Title + Save/Cancel            │
├─────────────────────────────────────────┤
│  Form Sections (grouped)                │
│  ┌────────────────────────────────────┐ │
│  │ Section Title                      │ │
│  │ [Label]                            │ │
│  │ [Input Field]                      │ │
│  │ [Helper Text]                      │ │
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

---

## Animasyon Stratejisi

**Minimal ve Purposeful**

```css
/* Sadece gerekli animasyonlar */
.transition-all { transition: all 150ms ease-in-out; }

/* Hover states */
.hover-lift:hover { transform: translateY(-1px); }

/* Focus states */
.focus-ring:focus { 
  outline: none;
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.2);
}

/* Fade in (page load) */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fadeIn 200ms ease-out; }
```

---

## Responsive Strateji

```
Mobile (< 768px):
  - Sidebar → Bottom nav or Hamburger menu
  - Tables → Cards
  - Grid → 1 column
  - Reduced padding

Tablet (768px - 1024px):
  - Collapsible sidebar
  - 2 column grids
  - Tables remain

Desktop (> 1024px):
  - Fixed sidebar
  - Multi-column grids
  - Full tables
```

---

## Accessibility (a11y)

```
- WCAG AA compliant
- Focus visible states
- Aria labels for icon buttons
- Keyboard navigation support
- Sufficient color contrast (4.5:1)
- Semantic HTML
```

---

## İkon Seti

```
Lucide Icons (lightweight, consistent)
- 24x24 default size
- stroke-width: 2
- No fill, outline style
```

---

## Implementasyon Sırası

1. ✅ Tasarım sistemi ve renk paleti
2. ✅ Layout ve navigasyon (sidebar)
3. ✅ Dashboard sayfası
4. ✅ List sayfaları (Blog, Projects)
5. ✅ Form sayfaları (Create, Edit)
6. ✅ Responsive düzenlemeleri
7. ✅ Accessibility kontrolleri
