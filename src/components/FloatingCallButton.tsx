import { motion } from 'framer-motion';

const FloatingCallButton = () => {
  return (
    <motion.div
      className="hidden md:block fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <a
        href="tel:01023033778"
        className="btn-primary flex items-center gap-3 text-lg px-6 py-4 shadow-2xl"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span>상담 신청</span>
      </a>
    </motion.div>
  );
};

export default FloatingCallButton;
