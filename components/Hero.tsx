import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="hero-bg pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-darkBlue/20"></div>
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-accent/20 blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-primary/20 blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full bg-accent/20 blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center" data-aos="fade-up" data-aos-duration="800">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 text-white">GIÁ TRỊ THỰC</h1>
        <p className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl mb-6 text-white">Minh Bạch - Chuẩn Xác - Thành Công</p>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-gray-200">Nền tảng kết nối bất động sản trực tuyến, định giá tự động, hỗ trợ pháp lý minh bạch. Giao dịch trực tiếp, không lo kê giá.</p>

        {/* Search Form */}
        <form id="search" className="bg-white/90 p-5 rounded-xl max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center shadow-xl hover:shadow-2xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
          <div className="relative">
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input type="text" placeholder="Nhập địa chỉ, dự án, hoặc từ khóa..." className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:border-accent text-gray-700 transition-all duration-300 focus:shadow-md" />
          </div>
          <div className="relative">
            <i className="fas fa-home absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hidden sm:block"></i>
            <select className="w-full pl-4 sm:pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:border-accent text-gray-700 transition-all duration-300 focus:shadow-md cursor-pointer">
              <option value="">Loại BĐS</option>
              <option value="can-ho">Căn hộ</option>
              <option value="nha-rieng">Nhà rieng</option>
              <option value="dat-nen">Đất nền</option>
              <option value="biet-thu">Biệt thự</option>
            </select>
          </div>
          <div className="relative">
            <i className="fas fa-map-marker-alt absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hidden sm:block"></i>
            <select className="w-full pl-4 sm:pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:border-accent text-gray-700 transition-all duration-300 focus:shadow-md cursor-pointer">
              <option value="">Khu vực</option>
              <option value="hcm">TP. HCM</option>
              <option value="hn">Hà Nội</option>
              <option value="dn">Đà Nẵng</option>
              <option value="khac">Khác</option>
            </select>
          </div>
          <button type="submit" className="bg-gradient-to-br from-accent to-darkAccent text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all">
            <i className="fas fa-search mr-2"></i>Tìm Kiếm
          </button>
        </form>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm font-medium text-white" data-aos="fade-up" data-aos-delay="500">
          <a href="#" className="hover:underline flex items-center hover:scale-105 transition-transform"><i className="fas fa-plus-circle mr-2 text-accent"></i>Đăng Tin Ngay</a>
          <a href="#" className="hover:underline flex items-center hover:scale-105 transition-transform"><i className="fas fa-play-circle mr-2 text-accent"></i>Video Hướng Dẫn Mua Bán</a>
        </div>
      </div>
    </section>
  );
} 