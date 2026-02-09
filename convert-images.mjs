import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const publicDir = './public';

async function convertImages() {
  try {
    const files = await readdir(publicDir);
    const imageFiles = files.filter(file =>
      file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
    );

    console.log(`Found ${imageFiles.length} images to convert...`);

    for (const file of imageFiles) {
      const inputPath = join(publicDir, file);
      const outputFileName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const outputPath = join(publicDir, outputFileName);

      console.log(`Converting ${file}...`);

      await sharp(inputPath)
        .webp({ quality: 85 }) // 고품질 WebP
        .resize(1920, null, { // 최대 너비 1920px, 비율 유지
          fit: 'inside',
          withoutEnlargement: true
        })
        .toFile(outputPath);

      console.log(`✓ Created ${outputFileName}`);
    }

    console.log('\n✅ All images converted successfully!');
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

convertImages();
