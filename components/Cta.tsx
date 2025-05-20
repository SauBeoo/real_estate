export default function Cta() {
  return (
    <section className="py-16 md:py-24 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left" data-aos="fade-right">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Bắt Đầu Hành Trình Bất Động Sản Của Bạn</h2>
            <p className="text-lg text-gray-200 mb-6">Dù bạn là người mua, người bán hay nhà đầu tư, chúng tôi có mọi công cụ bạn cần.</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <a href="#properties" className="bg-gradient-to-br from-accent to-darkAccent text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all">
                <i className="fas fa-home mr-2"></i>Tìm Bất Động Sản
              </a>
              <a href="#" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center hover:shadow-md">
                <i className="fas fa-plus-circle mr-2"></i>Đăng Tin Miễn Phí
              </a>
            </div>
          </div>
          <div className="lg:w-2/5" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" alt="Real Estate House Model" className="rounded-xl shadow-xl w-full animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
} 