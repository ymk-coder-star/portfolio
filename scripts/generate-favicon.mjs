import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { monogramSvg } from '../src/assets/monogramMark.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');
const svgBuffer = Buffer.from(monogramSvg);

const outputs = [
	{ file: 'favicon.svg', width: null },
	{ file: 'favicon-16.png', width: 16 },
	{ file: 'favicon-32.png', width: 32 },
	{ file: 'apple-touch-icon.png', width: 180 },
	{ file: 'logo192.png', width: 192 },
	{ file: 'logo512.png', width: 512 },
];

async function run() {
	fs.writeFileSync(path.join(publicDir, 'favicon.svg'), monogramSvg);

	for (const { file, width } of outputs) {
		if (!width) continue;

		await sharp(svgBuffer)
			.resize(width, width)
			.png()
			.toFile(path.join(publicDir, file));

		console.log(`  ${file} (${width}x${width})`);
	}

	const icoSizes = [16, 32];
	const icoBuffers = await Promise.all(
		icoSizes.map((size) =>
			sharp(svgBuffer).resize(size, size).png().toBuffer()
		)
	);

	await sharp(icoBuffers[0]).toFile(path.join(publicDir, 'favicon.ico'));
	console.log('  favicon.ico (16x16, 32x32)');

	console.log('\nFavicon assets generated.');
}

run().catch((error) => {
	console.error(error);
	process.exit(1);
});
