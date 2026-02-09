import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "강남 쩜오 예약은 어떻게 하나요?",
      answer: "전화 예약이 가장 확실합니다. 010-2303-3778로 연락 주시면 방문 날짜, 시간, 인원수를 말씀해주세요. 평일은 당일 예약도 가능하지만 주말은 2~3일 전 예약을 권장합니다. 예약 시 대략적인 가격도 안내해드립니다."
    },
    {
      question: "강남 쩜오 가격은 얼마인가요?",
      answer: "강남 쩜오만의 업계 최저가로 안내해드립니다. 시간대, 요일, 인원수에 따라 차이가 있어서 정확한 금액은 전화 상담 시 즉시 안내해드립니다. 평일 저녁이 가장 저렴하고 주말 밤이 최고가입니다. 타 업체 견적서 있으시면 추가 할인도 가능하니 부담 없이 비교해보세요."
    },
    {
      question: "초이스 시스템은 어떻게 되나요?",
      answer: "입실 후 10분 정도 지나면 담당 매니저 선택이 가능합니다. 보통 3~5명 정도 소개해드리며 마음에 드는 분을 선택하시면 됩니다. 외모, 스타일, 대화 분위기 등을 고려해서 선택하시면 되고요. 선택 후에도 분위기가 안 맞으면 변경 요청이 100% 가능하니 부담 갖지 마세요."
    },
    {
      question: "혼자 방문해도 되나요?",
      answer: "가능합니다. 1인 고객도 많이 방문하십니다. 다만 주말 저녁 시간대는 2인 이상 고객에게 우선 배정되니 평일 방문을 추천드립니다. 혼자 오셔도 담당 매니저가 편하게 대화 이끌어주니 부담 없으실 겁니다. 오히려 혼자 오시는 분들 만족도가 더 높은 편이에요."
    },
    {
      question: "주차는 가능한가요?",
      answer: "건물 지하 주차장 이용 가능하며 2시간 무료 주차권을 제공해드립니다. 만차 시 인근 공영주차장을 안내해드리고요. 대중교통 이용하시면 강남역 8번 출구에서 도보 5분 거리입니다. 택시 타시면 정확한 주소 문자로 보내드립니다."
    },
    {
      question: "복장은 어떻게 입고 가야 하나요?",
      answer: "편한 복장으로 오셔도 됩니다. 굳이 정장 입고 오실 필요 없고요. 다만 너무 캐주얼하면 고급스러운 분위기가 안 살아서 스마트 캐주얼 정도 권장합니다. 청바지에 깔끔한 셔츠 정도면 적당해요. 중요한 건 복장보다 기본 에티켓입니다."
    },
    {
      question: "시간 연장은 어떻게 하나요?",
      answer: "30분 단위로 연장 가능합니다. 추가 비용은 전화 상담 시 안내해드리고요. 연장 원하시면 담당 매니저에게 미리 말씀해주세요. 다음 예약이 잡혀있지 않으면 대부분 가능합니다. 주말 피크 타임은 연장이 어려울 수 있으니 처음부터 넉넉하게 예약하시는 걸 추천합니다."
    },
    {
      question: "담당 매니저 지명이 가능한가요?",
      answer: "재방문 고객은 이전 담당 지명이 가능합니다. 예약 시 말씀해주시면 스케줄 확인 후 배정해드립니다. 다만 해당 매니저가 이미 예약이 차있거나 휴무일 경우 어려울 수 있어요. 지명 시 추가 비용은 유선 상담 시 안내해드립니다. 첫 방문이시면 초이스로 선택하시는 걸 추천드립니다."
    },
    {
      question: "환불이나 취소는 어떻게 되나요?",
      answer: "예약 취소는 방문 24시간 전까지 무료입니다. 24시간 이내 취소 시 취소 수수료 30% 발생하고요. 노쇼(예약 후 미방문)는 100% 수수료 부과됩니다. 급한 일정 변경 시 미리 연락 주시면 최대한 배려해드립니다. 환불은 결제 수단에 따라 3~7일 소요됩니다."
    },
    {
      question: "처음 방문인데 어떤 시간대가 좋을까요?",
      answer: "평일 저녁 7~9시를 추천드립니다. 사람이 가장 적당하고 매니저진도 여유있어서 초보자 응대에 신경 많이 써줍니다. 가격도 저렴하고요. 주말은 붐비고 정신없어서 첫 방문에는 비추천입니다. 시스템 천천히 설명 듣고 싶으시면 평일 오후 시간대가 베스트입니다."
    }
  ];

  return (
    <section id="faq" className="section-container bg-primary-dark/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-primary text-center mb-4">자주 묻는 질문</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          강남 쩜오에 대해 가장 많이 묻는 질문들을 모았습니다.
          <br />
          추가 궁금한 점은 전화 상담으로 편하게 물어보세요.
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="card-premium overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <button
                className="w-full text-left flex items-start justify-between gap-4 p-6"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-accent font-bold text-lg flex-shrink-0">
                    Q{index + 1}
                  </span>
                  <h3 className="text-white font-semibold text-lg">
                    {faq.question}
                  </h3>
                </div>
                <svg
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="pl-10 pt-2 border-l-2 border-accent/20">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 추가 문의 CTA */}
        <motion.div
          className="mt-12 text-center p-8 bg-accent/10 border border-accent/30 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4 className="text-xl font-bold text-accent mb-3">
            더 궁금한 점이 있으신가요?
          </h4>
          <p className="text-gray-300 mb-6">
            강남 쩜오 이용에 대한 모든 질문에 친절히 답변해드립니다.
            <br />
            전화 상담이 가장 빠르고 정확합니다.
          </p>
          <a
            href="tel:01023033778"
            className="btn-primary inline-block"
          >
            전화 상담 신청
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
