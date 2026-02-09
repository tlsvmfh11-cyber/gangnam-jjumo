import sharp from 'sharp';

// 오픈 그래프 이미지 생성 (1200x630)
await sharp('./public/og-image.webp')
  .resize(1200, 630, {
    fit: 'cover',
    position: 'center'
  })
  .webp({ quality: 90 })
  .toFile('./public/og-image-optimized.webp');

console.log('✅ Open Graph image created: 1200x630');
