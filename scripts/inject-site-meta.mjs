import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
	siteUrl,
	siteName,
	siteTitle,
	siteDescription,
	ogImageUrl,
} from '../src/constants/site.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatePath = path.join(__dirname, '../public/index.template.html');
const indexPath = path.join(__dirname, '../public/index.html');

const replacements = {
	__SITE_URL__: siteUrl.replace(/\/$/, ''),
	__SITE_NAME__: siteName,
	__SITE_TITLE__: siteTitle,
	__SITE_DESCRIPTION__: siteDescription,
	__OG_IMAGE_URL__: ogImageUrl,
};

let html = fs.readFileSync(templatePath, 'utf8');

for (const [token, value] of Object.entries(replacements)) {
	if (!html.includes(token)) {
		console.warn(`  Warning: token ${token} not found in index.template.html`);
		continue;
	}
	html = html.split(token).join(value);
}

fs.writeFileSync(indexPath, html);
console.log('Wrote public/index.html from site.js via index.template.html');
