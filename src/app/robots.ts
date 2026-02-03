import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
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
    sitemap: 'https://milyscakes.com/sitemap.xml',
  };
}
