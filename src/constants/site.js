/** Site metadata — injected into public/index.html by `npm run inject-meta`. */
export const siteUrl = 'https://codecanvas.uk';

export const siteName = 'Portfolio | Yisroel Krausz';

export const siteTitle = 'Portfolio | Yisroel Krausz';

export const siteDescription =
  'Software developer portfolio showcasing web applications and digital solutions built for real clients, with a strong focus on modern frontend development. Based in Tyne and Wear, England. Open to opportunities.';

export const ogImageUrl = `${siteUrl}/site-preview.webp`;

/** Static assets in /public — paths respect CRA homepage (root deploy). */
export const CVFilename = 'Yisroel-Krausz-CV.pdf';

export const CVUrl = `${process.env.PUBLIC_URL}/${CVFilename}`;
