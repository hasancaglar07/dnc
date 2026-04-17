# 🎨 DNC7 Next.js - Design System Documentation

## 🎯 Design Philosophy

**UX/UI Pro-Max**: Her elementin büyütüldüğü, spacing'in artırıldığı, okunabilirliğin maksimize edildiği premium deneyim.

---

## 📐 Typography Scale

### Font Sizes (Büyütüldü)
```
Base Font: 18px (was 16px)
Hero Title: clamp(3rem, 7vw, 6rem) (was 2.4rem)
Section Title: clamp(2.4rem, 5vw, 4rem) (was 2.2rem)
Card Title: 1.3rem (was 1.05rem)
Body Text: 17px (was 15px)
Small Text: 14px (was 13px)
```

### Line Heights
```
Headings: 1.05 (was 1.08)
Body Text: 1.75 (was 1.7)
Compact: 1.5 (was 1.6)
```

### Letter Spacing
```
Headings: -2px (more tight)
Labels: 3px (more readable)
Body: Normal
```

---

## 🎨 Color Palette

### Primary Colors
```
Accent: #F97316 (Orange)
Accent Dark: #EA6C0A
Accent Light: #FDBA74

Text: #0D0D0D
Text Secondary: #3D3D3D
Text Muted: #888888
```

### Background Colors
```
White: #FFFFFF
BG2: #F7F7F5 (Light Gray)
BG3: #F0EDE8 (Beige)
Dark: #111111
```

### Service Colors
```
Production: #F97316 (Orange)
AI: #6366F1 (Purple)
Drone: #0EA5E9 (Sky Blue)
Web: #10B981 (Green)
Mobile: #8B5CF6 (Violet)
Gaming: #EC4899 (Pink)
Social: #F59E0B (Amber)
```

---

## 📏 Spacing System (Büyütüldü)

### Section Padding
```
XL Sections: 120px 0 (was 96px)
Large Sections: 96px 0 (was 64px)
Regular Sections: 80px 0 (was 48px)
Compact Sections: 64px 0
```

### Container Padding
```
Desktop: 40px (was 28px)
Tablet: 28px (was 16px)
Mobile: 20px (was 12px)
```

### Component Spacing
```
Card Padding: 40px (was 32px)
Button Padding: 16px 32px (was 14px 28px)
Input Padding: 14px 20px (was 12px 16px)
Gap Between Elements: 32px (was 24px)
```

---

## 🔘 Buttons & Interactives

### Primary Button
```
Font Size: 16px (was 14px)
Padding: 16px 32px (was 14px 28px)
Border Radius: 9999px
Min Height: 56px
Transition: All 0.2s ease
```

### Secondary Button
```
Font Size: 15px (was 14px)
Padding: 14px 28px (was 12px 24px)
Border: 2px solid
Min Height: 52px
```

### Hover Effects
```
Transform: translateY(-2px)
Box Shadow: 0 12px 40px rgba(0,0,0,0.15)
```

---

## 🃏 Cards

### Service Cards
```
Padding: 40px (was 32px)
Border Radius: 20px (was 16px)
Gap: 28px (was 24px)
Icon Size: 4rem (was 3rem)
```

### Project Cards
```
Border Radius: 20px (was 16px)
Image Aspect: 16:10 (was 16:9)
Info Padding: 24px (was 20px)
```

---

## 📱 Breakpoints

```
xl: 1440px (Large desktops)
lg: 1024px (Laptops)
md: 768px (Tablets)
sm: 640px (Large phones)
xs: 480px (Small phones)
```

---

## 🎭 Animations

### Hover Effects
```
Cards: translateY(-4px), scale(1.02)
Buttons: translateY(-2px), shadow-lg
Links: color change, underline
```

### Scroll Animations
```
Fade In: opacity 0 -> 1, translateY(20px) -> 0
Slide Up: translateY(40px) -> 0
Scale: scale(0.95) -> 1
```

### Page Transitions
```
Fade: 0.3s ease
Slide: 0.4s cubic-bezier(0.22, 1, 0.36, 1)
```

---

## ♿ Accessibility

### Contrast Ratios
```
Normal Text: 7:1+ (AAA)
Large Text: 4.5:1+ (AA)
Interactive Elements: 3:1+ (AA)
```

### Focus States
```
Outline: 2px solid #F97316
Offset: 2px
```

### Touch Targets
```
Min Size: 44x44px
Recommended: 48x48px
```

---

## 📐 Layout Grids

### Max Widths
```
Container: 1320px (was 1260px)
Text Content: 720px (was 650px)
Narrow Content: 560px (was 500px)
```

### Grid Gaps
```
Large: 32px (was 24px)
Regular: 24px (was 18px)
Compact: 16px
```

---

## 🎯 Key Improvements

### 1. Typography
- ✅ Base font increased to 18px
- ✅ All headings enlarged
- ✅ Better line heights for readability
- ✅ Improved letter spacing

### 2. Spacing
- ✅ Section padding increased 25%
- ✅ Container padding increased 40%
- ✅ Card padding increased 25%
- ✅ Gap between elements increased

### 3. Interactive Elements
- ✅ Buttons enlarged (min 52px height)
- ✅ Inputs enlarged (min 52px height)
- ✅ Better touch targets
- ✅ Enhanced hover effects

### 4. Visual Hierarchy
- ✅ Bigger titles
- ✅ More whitespace
- ✅ Better contrast
- ✅ Clearer sections

### 5. Readability
- ✅ Larger body text (17px)
- ✅ Increased line-height (1.75)
- ✅ Optimal line length (60-75 chars)
- ✅ Better paragraph spacing

---

## 🚀 Performance

### Optimization
- CSS minified
- Images optimized (WebP)
- Font preload
- Critical CSS inline
- Lazy loading below fold

### Bundle Size
- CSS: ~15KB gzipped
- JS: ~120KB gzipped
- Total: ~135KB gzipped

---

## 📱 Responsive Behavior

### Desktop (1440px+)
- Maximum spacing
- Largest fonts
- Full grid columns

### Tablet (768px - 1024px)
- 75% spacing
- 90% font sizes
- Adjusted grids

### Mobile (< 768px)
- 60% spacing
- 85% font sizes
- Single column
- Touch-optimized
