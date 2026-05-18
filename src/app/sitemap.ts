import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.milyscake.com').replace(/\/$/, '');
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/links`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/qr`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];
}
