import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ReviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reviews = [
    {
      title: "첫 방문, 솔직한 인상",
      content: "친구 소개로 처음 가봤는데 생각보다 부담 없더라고요. 입구부터 고급스러운 느낌이 확 왔고요. 처음이라 긴장했는데 매니저분이 시스템 먼저 친절하게 설명해주셔서 편했습니다. 강남 쩜오가 처음이면 평일 저녁 추천드려요.",
      author: "직장인 K씨",
      badge: "첫 방문",
      image: "/model-1.webp"
    },
    {
      title: "인테리어와 분위기",
      content: "딥한 와인색 톤에 골드 포인트가 정말 고급스럽습니다. 룸마다 조명이 다 달라서 분위기 선택도 가능하더라고요. 제가 갔던 강남 내 다른 곳들이랑 비교하면 확실히 인테리어에 신경 많이 쓴 게 느껴졌어요. 사진 찍기도 좋고요.",
      author: "회사원 L씨",
      badge: "재방문 3회",
      image: "/model-2.webp"
    },
    {
      title: "초이스 시스템 체험담",
      content: "입실하고 10분 정도 지나니까 3명 소개해주시더라고요. 외모도 외모지만 대화가 잘 통하는 분으로 선택했습니다. 선택 후에도 분위기 안 맞으면 변경 요청 가능하다고 해서 부담이 덜했어요. 담당분이 센스있게 분위기 이끌어줘서 2시간이 정말 빨리 갔습니다.",
      author: "사업가 P씨",
      badge: "재방문 5회",
      image: "/model-3.webp"
    },
    {
      title: "만족도와 재방문 이유",
      content: "가격 대비 만족도가 높아요. 숨은 비용 없이 처음 말한 가격 그대로고요. 담당분들 수준도 높고 무엇보다 편하게 즐길 수 있다는 게 장점입니다. 전 벌써 네 번째 방문인데 갈 때마다 새로운 담당분 만나는 재미도 있어요. 단골 되면 예약도 우선권 주신다고 하더라고요.",
      author: "재방문 고객",
      badge: "단골",
      image: "/model-4.webp"
    }
  ];

  return (
    <section id="reviews" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-primary text-center mb-4">실제 방문 고객 후기</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          포장 없는 솔직한 경험담. 강남 쩜오를 처음 방문한 고객부터 단골까지 다양한 시각의 후기입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="card-premium overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* 이미지 섹션 */}
              <div className="relative h-64 -m-6 md:-m-8 mb-6 md:mb-8">
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 bg-accent text-primary-dark text-xs font-bold rounded-full">
                  {review.badge}
                </span>
              </div>

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-accent">{review.title}</h3>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                {review.content}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-accent/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">
                    {review.author[0]}
                  </span>
                </div>
                <span className="text-sm text-gray-400">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 통계 섹션 */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center p-6 bg-primary-light/30 rounded-xl border border-accent/10">
            <div className="text-3xl font-bold text-accent mb-2">81%</div>
            <div className="text-sm text-gray-400">재방문율</div>
          </div>
          <div className="text-center p-6 bg-primary-light/30 rounded-xl border border-accent/10">
            <div className="text-3xl font-bold text-accent mb-2">11년</div>
            <div className="text-sm text-gray-400">현장 경력</div>
          </div>
          <div className="text-center p-6 bg-primary-light/30 rounded-xl border border-accent/10">
            <div className="text-3xl font-bold text-accent mb-2">28곳</div>
            <div className="text-sm text-gray-400">강남 비교</div>
          </div>
          <div className="text-center p-6 bg-primary-light/30 rounded-xl border border-accent/10">
            <div className="text-3xl font-bold text-accent mb-2">2017</div>
            <div className="text-sm text-gray-400">운영 시작</div>
          </div>
        </motion.div>

        {/* 내부링크 */}
        <div className="mt-12 text-center">
          <a
            href="#system"
            className="inline-block text-accent hover:text-accent-light transition-colors underline"
          >
            강남 쩜오 시스템 자세히 알아보기 →
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ReviewSection;
