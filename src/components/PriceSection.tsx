import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PriceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const priceTable = [
    {
      time: "평일 오후 (18:00~21:00)",
      price: "최저가 유선문의",
      desc: "가장 쾌적한 시간대. 초보자 추천",
      popular: false
    },
    {
      time: "평일 밤 (21:00~01:00)",
      price: "최저가 유선문의",
      desc: "적당한 분위기와 가격",
      popular: true
    },
    {
      time: "주말 오후 (18:00~21:00)",
      price: "최저가 유선문의",
      desc: "주말 할증 있음. 예약 필수",
      popular: false
    },
    {
      time: "주말 밤 (21:00~01:00)",
      price: "최저가 유선문의",
      desc: "최고 피크 타임. 3일 전 예약",
      popular: false
    }
  ];

  const additionalInfo = [
    {
      title: "기본 포함 사항",
      items: [
        "2시간 기본 이용",
        "담당 매니저 배정",
        "기본 주류 및 안주",
        "프라이빗 룸 사용",
        "무료 주차 2시간"
      ]
    },
    {
      title: "추가 옵션",
      items: [
        "시간 연장: 유선문의",
        "프리미엄 주류: 유선문의",
        "특급 지명: 유선문의",
        "인원 추가: 유선문의",
        "* 사전 고지 후 진행"
      ]
    },
    {
      title: "할인 및 이벤트",
      items: [
        "재방문 고객: 특별 할인",
        "생일 이벤트: 특별 서비스",
        "단체 (5인 이상): 추가 할인",
        "타 업체 견적 지참: 추가 할인",
        "* 전화 상담 시 안내"
      ]
    },
    {
      title: "결제 방법",
      items: [
        "현금 결제 가능",
        "카드 결제 가능",
        "계좌이체 가능",
        "분할 결제 가능",
        "영수증 발행 가능"
      ]
    }
  ];

  return (
    <section id="price" className="section-container relative" ref={ref}>
      {/* 배경 이미지 */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <img
          src="/model-2.webp"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-primary text-center mb-4">강남 쩜오 가격 안내</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          <span className="text-accent font-bold text-lg">강남 쩜오만의 업계 최저가 보장</span>
          <br />
          정확한 가격은 유선 상담 시 시간대, 인원수에 맞춰 안내해드립니다.
          <br />
          <span className="text-sm">타 업체 견적서 지참 시 추가 할인 가능</span>
        </p>

        {/* 가격표 */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {priceTable.map((item, index) => (
            <motion.div
              key={index}
              className={`card-premium relative ${
                item.popular ? 'border-accent/40 shadow-2xl shadow-accent/20' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item.popular && (
                <div className="absolute -top-3 right-4 px-3 py-1 bg-accent text-primary-dark text-xs font-bold rounded-full">
                  인기
                </div>
              )}

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.time}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>

              <div className="text-2xl font-bold text-accent">
                {item.price}
              </div>
              <div className="text-xs text-gray-500 mt-1">2시간 기준</div>
            </motion.div>
          ))}
        </div>

        {/* 추가 정보 */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {additionalInfo.map((section, index) => (
            <motion.div
              key={index}
              className="card-premium"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <h4 className="text-lg font-bold text-accent mb-4 pb-2 border-b border-accent/20">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* 투명성 강조 */}
        <motion.div
          className="mt-12 p-6 bg-accent/10 border border-accent/30 rounded-xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h4 className="text-lg font-bold text-accent mb-3">💡 강남 쩜오만의 최저가 약속</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <strong className="text-white">업계 최저가 보장</strong>
              <p className="text-xs mt-1">같은 조건 대비 타 업체보다 무조건 저렴합니다. 전화 상담으로 확인하세요.</p>
            </div>
            <div>
              <strong className="text-white">유선 상담 시 정확한 견적</strong>
              <p className="text-xs mt-1">시간대, 인원, 옵션에 따른 정확한 금액을 즉시 안내해드립니다.</p>
            </div>
            <div>
              <strong className="text-white">타 업체 견적 환영</strong>
              <p className="text-xs mt-1">다른 곳 견적서 있으시면 추가 할인 가능합니다. 부담 없이 비교하세요.</p>
            </div>
          </div>
        </motion.div>

        {/* 내부링크 */}
        <div className="mt-12 text-center">
          <a
            href="#faq"
            className="inline-block text-accent hover:text-accent-light transition-colors underline"
          >
            자주 묻는 질문 FAQ 보기 →
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default PriceSection;
