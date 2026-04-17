export default function SchemaOrg() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DNC7',
    url: 'https://dnc7.com',
    logo: 'https://dnc7.com/assets/images/logos/logo-dark.svg',
    description: 'Prodüksiyon, AI entegrasyonu, web-mobil geliştirme ve dijital çözümler sunan tam hizmet dijital ajans.',
    foundingDate: '2013',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Levent, İstanbul',
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-212-555-0123',
      contactType: 'customer service',
      availableLanguage: 'Turkish',
    },
    sameAs: [
      'https://instagram.com/dnc7',
      'https://linkedin.com/company/dnc7',
      'https://twitter.com/dnc7',
      'https://youtube.com/@dnc7',
    ],
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'DNC7 Dijital Ajans',
    image: 'https://dnc7.com/assets/images/logos/logo-dark.svg',
    url: 'https://dnc7.com',
    telephone: '+90-212-555-0123',
    email: 'info@dnc7.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Levent',
      addressLocality: 'İstanbul',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0082,
      longitude: 28.9784,
    },
    priceRange: '₺₺₺',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '85',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  const services = [
    'Prodüksiyon Filmleri', 'AI Entegrasyonu', 'Drone Çekim',
    'Web Tasarım', 'Mobil Uygulama', 'Mobil Oyun',
    'Sosyal Medya', 'E-Ticaret Danışmanlığı', 'Reklam Yönetimi',
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'DNC7 Hizmetleri',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s,
      url: `https://dnc7.com/hizmetler/${s.toLowerCase().replace(/\s+/g, '-').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g')}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
