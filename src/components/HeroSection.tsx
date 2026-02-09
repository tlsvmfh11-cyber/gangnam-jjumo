import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.webp"
          alt="강남 쩜오 프리미엄 라운지"
          className="w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="1080"
        />
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-light/85 to-primary-dark/90" />
      </div>

      {/* 패럴랙스 배경 레이어 */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.3), transparent 70%)',
        }}
      />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">강남 쩜오</span>
            <span className="block bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
              처음이라 고민되시나요?
            </span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            2017년부터 강남 전문 운영 중. 현장 11년차 매니저가 직접 알려드리는
            <span className="text-accent font-semibold"> 쩜오 시스템, 초이스 방법, 실제 가격</span> 완전 가이드.
            <br />
            <span className="text-sm text-gray-400 mt-2 inline-block">
              솔직히 금요일 저녁은 웨이팅 각오하셔야 하지만, 그만큼 만족도 높습니다.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="tel:01023033778"
              className="btn-primary text-lg px-8 py-4"
            >
              예약 문의
            </a>
            <a
              href="#system"
              className="px-8 py-4 rounded-lg border-2 border-accent/30 text-white font-semibold
                         hover:border-accent transition-all duration-300"
            >
              시스템 보기
            </a>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-gray-300">재방문율 81%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-gray-300">강남 내 28곳 비교</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-gray-300">가격 투명 공개</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
