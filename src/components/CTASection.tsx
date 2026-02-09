import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container" ref={ref}>
      <motion.div
        className="card-premium text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
            지금 바로 예약하세요
          </span>
        </h2>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          2017년부터 강남 전문 운영. 재방문율 81%.
          <br />
          현장 11년차 매니저가 직접 응대해드립니다.
          <br />
          <span className="text-sm text-gray-400 mt-2 inline-block">
            주말은 예약 필수. 평일은 당일 예약도 가능합니다.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="tel:01023033778"
            className="btn-primary text-lg px-10 py-5 w-full sm:w-auto"
          >
            📞 예약 문의
          </a>
          <div className="text-gray-400 text-sm">
            010-2303-3778
            <br />
            <span className="text-xs">평일 18:00 ~ 새벽 05:00</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-accent/20">
          <div>
            <div className="text-accent text-3xl mb-2">✓</div>
            <h4 className="font-bold text-white mb-1">업계 최저가</h4>
            <p className="text-sm text-gray-400">강남 쩜오만의 특별 가격</p>
          </div>
          <div>
            <div className="text-accent text-3xl mb-2">✓</div>
            <h4 className="font-bold text-white mb-1">고급 시설</h4>
            <p className="text-sm text-gray-400">프리미엄 인테리어</p>
          </div>
          <div>
            <div className="text-accent text-3xl mb-2">✓</div>
            <h4 className="font-bold text-white mb-1">친절한 응대</h4>
            <p className="text-sm text-gray-400">11년 경력 전문 매니저</p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="mt-24 pt-12 border-t border-accent/10 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="mb-2">강남 쩜오 프리미엄 라운지</p>
        <p className="mb-4">서울 강남구 역삼동 | 전화: 010-2303-3778</p>
        <p className="text-xs text-gray-600">
          본 페이지는 정보 제공 목적이며, 실제 서비스 이용 시 전화 상담을 통해 정확한 정보를 확인하시기 바랍니다.
          <br />
          © 2024 강남 쩜오. All rights reserved.
        </p>
      </motion.footer>
    </section>
  );
};

export default CTASection;
