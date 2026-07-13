import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../src/assets');

const projectImages = {
	'memory_game.png': { maxWidth: 800 },
	'movie-app-img.png': { maxWidth: 800 },
	'myMoney_app.png': { maxWidth: 800 },
	'practice.png': { maxWidth: 800 },
	'shopping-list-app-img.png': { maxWidth: 800 },
	'tracalorie-app-img.png': { maxWidth: 800 },
	'the dojo.png': { maxWidth: 800, outputName: 'the-dojo.webp' },
};

const profileImage = {
	file: 'profile-pic.jpg',
	maxWidth: 640,
	outputName: 'profile-pic.webp',
};

async function optimizeToWebp(inputPath, outputPath, maxWidth) {
	const image = sharp(inputPath);
	const metadata = await image.metadata();

	await image
		.resize(maxWidth, null, {
			fit: 'inside',
			withoutEnlargement: true,
		})
		.webp({ quality: 82 })
		.toFile(outputPath);

	const before = fs.statSync(inputPath).size;
	const after = fs.statSync(outputPath).size;
	const saved = (((before - after) / before) * 100).toFixed(1);

	console.log(
		`  ${path.basename(inputPath)} → ${path.basename(outputPath)} (${formatKb(before)} → ${formatKb(after)}, -${saved}%)`
	);

	if (metadata.width && metadata.width > maxWidth) {
		console.log(`    resized from ${metadata.width}px wide to max ${maxWidth}px`);
	}
}

function formatKb(bytes) {
	return `${(bytes / 1024).toFixed(1)} KB`;
}

async function run() {
	console.log('Optimizing portfolio images...\n');

	for (const [fileName, config] of Object.entries(projectImages)) {
		const inputPath = path.join(assetsDir, fileName);
		const outputName =
			config.outputName || `${path.parse(fileName).name}.webp`;
		const outputPath = path.join(assetsDir, outputName);

		if (!fs.existsSync(inputPath)) {
			console.warn(`  Skipping missing file: ${fileName}`);
			continue;
		}

		await optimizeToWebp(inputPath, outputPath, config.maxWidth);
	}

	const profileInput = path.join(assetsDir, profileImage.file);
	const profileOutput = path.join(assetsDir, profileImage.outputName);

	if (fs.existsSync(profileInput)) {
		await optimizeToWebp(
			profileInput,
			profileOutput,
			profileImage.maxWidth
		);
	}

	console.log('\nDone. Update imports in assetsHandler.js and About.js to use .webp files.');
}

run().catch((error) => {
	console.error(error);
	process.exit(1);
});
