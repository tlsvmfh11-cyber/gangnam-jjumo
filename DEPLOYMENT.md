# 배포 가이드

## 🚀 Vercel 배포 (추천)

### 1. Vercel CLI 설치
```bash
npm i -g vercel
```

### 2. 로그인
```bash
vercel login
```

### 3. 배포
```bash
# 프로젝트 루트에서
vercel

# 프로덕션 배포
vercel --prod
```

### 4. 도메인 연결
```
Vercel Dashboard → Settings → Domains
→ gangnam-jjumo.com 추가
→ DNS 설정 (A 레코드 또는 CNAME)
```

---

## 🌐 Netlify 배포

### 1. Netlify CLI 설치
```bash
npm i -g netlify-cli
```

### 2. 로그인
```bash
netlify login
```

### 3. 배포
```bash
# 빌드
npm run build

# 배포
netlify deploy --prod --dir=dist
```

### 4. 도메인 연결
```
Netlify Dashboard → Domain Settings
→ Add custom domain
→ gangnam-jjumo.com
```

---

## 📄 GitHub Pages 배포

### 1. gh-pages 설치
```bash
npm install -D gh-pages
```

### 2. package.json 수정
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. 배포
```bash
npm run deploy
```

### 4. GitHub 설정
```
Repository → Settings → Pages
Source: gh-pages branch
```

---

## 🔧 도메인 DNS 설정

### Vercel
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Netlify
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

---

## ✅ 배포 전 체크리스트

- [ ] npm run build 성공 확인
- [ ] dist/ 폴더 확인
- [ ] 모든 이미지 로딩 확인
- [ ] 모바일 반응형 확인
- [ ] 전화번호 클릭 테스트
- [ ] SEO 메타 태그 확인
- [ ] Sitemap.xml 접근 가능
- [ ] Robots.txt 접근 가능

---

## 🔍 배포 후 검증

### 1. Lighthouse 점수 확인
```
Chrome DevTools → Lighthouse
Performance: 95+
SEO: 100
```

### 2. Open Graph 테스트
```
https://www.opengraph.xyz/
URL 입력 후 미리보기 확인
```

### 3. Google Search Console 등록
```
https://search.google.com/search-console
속성 추가 → 도메인 인증 → Sitemap 제출
```

### 4. Core Web Vitals
```
https://pagespeed.web.dev/
URL 입력 후 점수 확인
```

---

## 📈 SEO 모니터링

### Google Search Console
```
1. 속성 추가
2. 소유권 확인
3. Sitemap 제출: https://gangnam-jjumo.com/sitemap.xml
4. URL 검사 → 색인 생성 요청
```

### Google Analytics (선택)
```
1. GA4 계정 생성
2. 추적 ID 발급
3. index.html에 스크립트 추가
```

### Naver Search Advisor
```
1. 사이트 등록
2. 소유권 확인
3. 사이트맵 제출
```

---

## 🛠️ 문제 해결

### 빌드 실패
```bash
# 캐시 삭제
rm -rf node_modules dist
npm install
npm run build
```

### 이미지 로딩 안됨
```
public/ 폴더의 이미지 경로 확인
/ 로 시작하는지 확인
```

### 404 에러
```
_redirects 파일 확인
/*  /index.html  200
```

---

## 🎯 최종 확인

- [ ] https://gangnam-jjumo.com 접속 확인
- [ ] 모든 섹션 정상 표시
- [ ] 이미지 로딩 확인
- [ ] 모바일 하단 버튼 작동
- [ ] 전화번호 클릭 테스트
- [ ] Lighthouse 점수 95+
- [ ] Google Search Console 등록
- [ ] Sitemap 제출 완료

배포 완료! 🎉
