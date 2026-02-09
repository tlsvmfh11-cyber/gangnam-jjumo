const MobileCallButton = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe">
      <a
        href="tel:01023033778"
        className="block w-full bg-gradient-to-r from-accent via-accent-light to-accent
                   text-primary-dark font-bold text-center py-4 px-6
                   shadow-2xl shadow-accent/50
                   active:scale-95 transition-transform"
        style={{ minHeight: '56px' }}
      >
        <span className="text-lg">예약 문의</span>
      </a>
    </div>
  );
};

export default MobileCallButton;
