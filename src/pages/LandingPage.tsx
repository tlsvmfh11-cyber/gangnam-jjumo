import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import ReviewSection from '../components/ReviewSection';
import SystemSection from '../components/SystemSection';
import PriceSection from '../components/PriceSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import MobileCallButton from '../components/MobileCallButton';
import FloatingCallButton from '../components/FloatingCallButton';

const LandingPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "강남 쩜오 예약은 어떻게 하나요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "전화 예약이 가장 확실합니다. 010-2303-3778로 연락 주시면 방문 날짜, 시간, 인원수를 말씀해주세요. 평일은 당일 예약도 가능하지만 주말은 2~3일 전 예약을 권장합니다."
            }
          },
          {
            "@type": "Question",
            "name": "강남 쩜오 가격은 얼마인가요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "강남 쩜오만의 업계 최저가로 안내해드립니다. 시간대, 요일, 인원수에 따라 차이가 있어서 정확한 금액은 전화 상담 시 즉시 안내해드립니다. 타 업체 견적서 있으시면 추가 할인도 가능합니다."
            }
          },
          {
            "@type": "Question",
            "name": "초이스 시스템은 어떻게 되나요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "입실 후 담당 매니저 선택이 가능합니다. 3~5명 정도 소개해드리며 마음에 드는 분을 선택하시면 됩니다. 선택 후에도 변경 요청이 가능합니다."
            }
          },
          {
            "@type": "Question",
            "name": "혼자 방문해도 되나요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "가능합니다. 1인 고객도 많이 방문하십니다. 다만 주말 저녁 시간대는 2인 이상 우선 배정되니 평일 방문을 추천드립니다."
            }
          },
          {
            "@type": "Question",
            "name": "주차는 가능한가요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "건물 지하 주차장 이용 가능하며 2시간 무료 주차권을 제공해드립니다. 만차 시 인근 공영주차장을 안내해드립니다."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "강남 쩜오 프리미엄 라운지",
        "image": "https://via.placeholder.com/1200x630",
        "telephone": "01023033778",
        "@id": "https://gangnam-jjumo.com",
        "url": "https://gangnam-jjumo.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "강남구 역삼동",
          "addressLocality": "서울",
          "addressRegion": "서울특별시",
          "addressCountry": "KR"
        },
        "priceRange": "₩₩₩",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "18:00",
            "closes": "05:00"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "홈",
            "item": "https://gangnam-jjumo.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "강남 쩜오 가이드"
          }
        ]
      },
      {
        "@type": "WebPage",
        "name": "강남 쩜오 시스템부터 가격까지 완전 가이드",
        "description": "2017년부터 강남 전문 운영. 현장 11년차 매니저가 알려드리는 쩜오 시스템, 초이스, 가격 완전 가이드",
        "datePublished": new Date().toISOString(),
        "dateModified": new Date().toISOString()
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>강남 쩜오 시스템부터 가격까지 - 초보자도 10분이면 이해</title>
        <meta
          name="description"
          content="2017년부터 강남 전문 운영 중. 현장 11년차 매니저가 직접 알려드리는 쩜오 시스템, 초이스 방법 완전 가이드. 재방문율 81%. 강남 쩜오만의 업계 최저가 보장. 유선 상담 시 정확한 견적 안내."
        />
        <meta name="keywords" content="강남 쩜오, 쩜오 가격, 쩜오 시스템, 강남 유흥, 역삼 쩜오, 선릉 쩜오" />
        <link rel="canonical" href="https://gangnam-jjumo.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="강남 쩜오 프리미엄 가이드" />
        <meta property="og:title" content="강남 쩜오 시스템부터 가격까지 - 초보자도 10분이면 이해" />
        <meta property="og:description" content="2017년부터 강남 전문 운영. 재방문율 81%. 강남 쩜오만의 업계 최저가 보장. 유선 상담 시 정확한 견적 안내." />
        <meta property="og:url" content="https://gangnam-jjumo.com" />
        <meta property="og:image" content="https://gangnam-jjumo.com/og-image-optimized.webp" />
        <meta property="og:image:secure_url" content="https://gangnam-jjumo.com/og-image-optimized.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="강남 쩜오 프리미엄 라운지 - 업계 최저가 보장" />
        <meta property="og:locale" content="ko_KR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="강남 쩜오 시스템부터 가격까지 - 초보자도 10분이면 이해" />
        <meta name="twitter:description" content="2017년부터 강남 전문 운영. 재방문율 81%. 강남 쩜오만의 업계 최저가 보장." />
        <meta name="twitter:image" content="https://gangnam-jjumo.com/og-image-optimized.webp" />
        <meta name="twitter:image:alt" content="강남 쩜오 프리미엄 라운지" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <main className="relative min-h-screen">
        <div className="grid-pattern fixed inset-0 -z-10" />

        <HeroSection />
        <ReviewSection />
        <SystemSection />
        <PriceSection />
        <FAQSection />
        <CTASection />

        {/* 우측 하단 플로팅 버튼 (Desktop) */}
        <FloatingCallButton />

        {/* 모바일 하단 고정 버튼 */}
        <MobileCallButton />
      </main>
    </>
  );
};

export default LandingPage;
