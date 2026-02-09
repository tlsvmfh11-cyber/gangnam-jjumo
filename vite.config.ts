import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 최적화 설정 (esbuild 사용 - 더 빠름)
    minify: 'esbuild',
    // 청크 분할 최적화
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-helmet': ['react-helmet-async'],
        },
      },
    },
    // 청크 크기 경고 임계값
    chunkSizeWarningLimit: 1000,
    // 소스맵 비활성화 (프로덕션)
    sourcemap: false,
  },
  // 개발 서버 설정
  server: {
    port: 3000,
    open: true,
  },
})
