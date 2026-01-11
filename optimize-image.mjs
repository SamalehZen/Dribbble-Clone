import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, 'public', 'hero-illustration.png');
const outputPath = join(__dirname, 'public', 'hero-illustration-optimized.png');

async function optimizeImage() {
    try {
        await sharp(inputPath)
            .resize(800, null, { // Largeur max 800px
                fit: 'inside',
                withoutEnlargement: true
            })
            .png({
                quality: 80,
                compressionLevel: 9,
                palette: true // Utilise une palette pour réduire la taille
            })
            .toFile(outputPath);

        console.log('✅ Image optimized successfully!');
        console.log(`📁 Saved to: ${outputPath}`);
    } catch (error) {
        console.error('❌ Error optimizing image:', error);
    }
}

optimizeImage();
