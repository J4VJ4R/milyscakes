import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.milyscake.com').replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'CCBot', 'Applebot', 'FacebookBot'],
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
