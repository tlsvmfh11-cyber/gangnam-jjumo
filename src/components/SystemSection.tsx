import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      num: "01",
      title: "예약 및 방문",
      desc: "전화 예약이 가장 확실합니다. 날짜, 시간, 인원만 알려주시면 됩니다. 평일은 당일도 가능하지만 주말은 2~3일 전 예약 권장드려요. 매장 위치는 강남역 8번 출구에서 도보 5분 거리입니다.",
      icon: "📞",
      image: "/model-5.webp"
    },
    {
      num: "02",
      title: "입실 및 룸 배정",
      desc: "도착하시면 프라이빗 룸으로 안내해드립니다. 인원에 맞는 룸 크기로 배정되며 분위기 선호도 말씀하시면 반영해드립니다. 룸마다 조명, 인테리어가 다른데 전부 고급스러운 느낌이에요. 웰컴 드링크 먼저 나가고요.",
      icon: "🚪",
      image: "/model-6.webp"
    },
    {
      num: "03",
      title: "초이스 시스템",
      desc: "입실 10분 후 담당 매니저 소개가 시작됩니다. 보통 3~5명 정도 소개해드리고 마음에 드시는 분 선택하시면 됩니다. 외모, 스타일, 대화 스타일 등 고려하시면 되고요. 선택 후에도 분위기 안 맞으면 변경 요청 100% 가능하니 부담 갖지 마세요.",
      icon: "✨",
      image: "/model-7.webp"
    },
    {
      num: "04",
      title: "서비스 진행",
      desc: "담당 매니저와 편하게 대화하며 시간 보내시면 됩니다. 추가 주문은 룸 내 인터폰으로 가능하고요. 연장 원하시면 30분 단위로 가능합니다. 시간 체크는 매니저가 알아서 해주니 걱정 마세요. 분위기 메이킹은 담당 매니저가 센스있게 이끌어줍니다.",
      icon: "🥂",
      image: "/model-8.webp"
    },
    {
      num: "05",
      title: "퇴실 및 정산",
      desc: "시간 되면 프론트에서 정산하시면 됩니다. 카드, 현금 모두 가능하고요. 처음 안내받은 가격 그대로 나옵니다. 숨은 비용 없어요. 만족하셨다면 다음 예약 미리 잡으시면 단골 우대 혜택 받으실 수 있습니다. 불편한 점 있으셨다면 솔직히 말씀해주세요.",
      icon: "💳",
      image: "/model-1.webp"
    }
  ];

  const tips = [
    {
      title: "초이스 팁",
      content: "외모만 보지 마시고 대화 스타일도 체크하세요. 첫인상에서 밝고 편한 느낌 주는 분이 대부분 만족도 높습니다. 11년차 매니저가 알려주는 비법이에요."
    },
    {
      title: "시간대 추천",
      content: "평일 저녁 7~9시가 가장 쾌적합니다. 주말은 8시 이후 웨이팅 있을 수 있고요. 금요일 저녁은 예약 필수입니다. 처음이시면 평일 추천드려요."
    },
    {
      title: "복장 및 에티켋",
      content: "편한 복장으로 오셔도 됩니다. 다만 너무 캐주얼하면 분위기가 안 살아요. 스마트 캐주얼 정도 권장합니다. 매니저에 대한 기본 예의만 지켜주시면 문제없습니다."
    },
    {
      title: "단골 혜택",
      content: "재방문 시 이전 담당 지명 가능하고요. 3회 이상 방문하시면 예약 우선권, 특별 이벤트 안내받으실 수 있습니다. 단골 비율이 40% 이상일 정도로 재방문율이 높아요."
    }
  ];

  return (
    <section id="system" className="section-container bg-primary-dark/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-primary text-center mb-4">강남 쩜오 이용 시스템</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          예약부터 퇴실까지 전체 프로세스를 단계별로 설명드립니다. 처음이셔도 10분이면 완벽히 이해 가능합니다.
        </p>

        {/* 좌우 분할 레이아웃 */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* 이미지 영역 */}
              <div className="flex-shrink-0 w-full md:w-1/3">
                <div className="card-premium overflow-hidden text-center p-0">
                  <div className="relative h-80">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="400"
                      height="600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-5xl mb-3">{step.icon}</div>
                      <div className="text-accent/70 text-xs font-bold mb-2">STEP {step.num}</div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* 설명 영역 */}
              <div className="flex-1">
                <div className="card-premium">
                  <p className="text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 실무자 팁 섹션 */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-accent">
            현장 11년차 매니저가 알려주는 꿀팁
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                className="card-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <h4 className="text-lg font-bold text-accent mb-3">{tip.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{tip.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 내부링크 */}
        <div className="mt-12 text-center">
          <a
            href="#price"
            className="inline-block text-accent hover:text-accent-light transition-colors underline"
          >
            강남 쩜오 가격 정보 확인하기 →
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default SystemSection;
