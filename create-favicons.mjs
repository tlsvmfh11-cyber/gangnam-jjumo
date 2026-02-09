import sharp from 'sharp';
import { writeFile } from 'fs/promises';

// 기본 이미지에서 파비콘 생성
const sourceImage = './public/model-4.webp';

console.log('Creating favicons...\n');

// 1. favicon.ico용 32x32 PNG
await sharp(sourceImage)
  .resize(32, 32, { fit: 'cover', position: 'center' })
  .png()
  .toFile('./public/favicon-32x32.png');
console.log('✓ Created favicon-32x32.png');

// 2. favicon.ico용 16x16 PNG
await sharp(sourceImage)
  .resize(16, 16, { fit: 'cover', position: 'center' })
  .png()
  .toFile('./public/favicon-16x16.png');
console.log('✓ Created favicon-16x16.png');

// 3. Apple Touch Icon (180x180)
await sharp(sourceImage)
  .resize(180, 180, { fit: 'cover', position: 'center' })
  .png()
  .toFile('./public/apple-touch-icon.png');
console.log('✓ Created apple-touch-icon.png');

// 4. Android Chrome 192x192
await sharp(sourceImage)
  .resize(192, 192, { fit: 'cover', position: 'center' })
  .png()
  .toFile('./public/android-chrome-192x192.png');
console.log('✓ Created android-chrome-192x192.png');

// 5. Android Chrome 512x512
await sharp(sourceImage)
  .resize(512, 512, { fit: 'cover', position: 'center' })
  .png()
  .toFile('./public/android-chrome-512x512.png');
console.log('✓ Created android-chrome-512x512.png');

// 6. site.webmanifest 생성
const manifest = {
  name: "강남 쩜오 프리미엄 가이드",
  short_name: "강남쩜오",
  description: "2017년부터 강남 전문 운영. 업계 최저가 보장",
  start_url: "/",
  display: "standalone",
  background_color: "#4A0E1F",
  theme_color: "#D4AF37",
  icons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ]
};

await writeFile('./public/site.webmanifest', JSON.stringify(manifest, null, 2));
console.log('✓ Created site.webmanifest');

// 7. browserconfig.xml 생성 (IE/Windows)
const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/android-chrome-192x192.png"/>
      <TileColor>#4A0E1F</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;

await writeFile('./public/browserconfig.xml', browserconfig);
console.log('✓ Created browserconfig.xml');

console.log('\n✅ All favicons created successfully!');
console.log('\n📱 PWA Ready - site.webmanifest included');
