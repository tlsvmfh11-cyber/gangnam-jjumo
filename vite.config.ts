import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // 최적화 설정 (esbuild 사용 - 더 빠름)
    minify: 'esbuild',
    target: 'es2015',
    // 청크 분할 최적화
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-helmet': ['react-helmet-async'],
        },
        // 파일명 최적화 (캐싱 전략)
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType)) {
            extType = 'images';
          } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // 청크 크기 경고 임계값
    chunkSizeWarningLimit: 1000,
    // 소스맵 비활성화 (프로덕션)
    sourcemap: false,
    // CSS 코드 스플리팅
    cssCodeSplit: true,
    // 압축 최적화
    reportCompressedSize: true,
  },
  // 개발 서버 설정
  server: {
    port: 3000,
    open: true,
    // CORS 설정
    cors: true,
  },
  // Preview 서버 설정
  preview: {
    port: 4173,
    open: true,
  },
})
