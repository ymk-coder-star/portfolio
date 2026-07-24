/** Site metadata — injected into public/index.html by `npm run inject-meta`. */
export const siteUrl = 'https://codecanvas.uk';

export const siteName = 'Code Canvas';

export const siteTitle = 'Code Canvas | Software by Yisroel Krausz';

export const siteDescription =
  'I’m Yisroel — Code Canvas is my studio for software development: web apps, dashboards, APIs, and more. Based in Tyne and Wear, England.';

export const ogImageUrl = `${siteUrl}/site-preview.webp`;

/** Static assets in /public — paths respect CRA homepage (root deploy). */
export const CVFilename = 'Yisroel-Krausz-CV.pdf';

export const CVUrl = `${process.env.PUBLIC_URL}/${CVFilename}`;

export const contactEmail = 'ymk613.dev@gmail.com';

export const contactMailto = `mailto:${contactEmail}`;

export const socialLinks = {
  github: 'https://github.com/ymk-coder-star',
  linkedin: 'https://www.linkedin.com/in/yisroel-krausz/',
};
