export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Khách Hàng Nói Về Chúng Tôi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Những phản hồi chân thực từ khách hàng đã sử dụng dịch vụ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-6">
              <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Customer avatar" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">Chị Nguyễn Thị Mai</h4>
                <p className="text-sm text-gray-500">Đã mua căn hộ Quận 7</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">"Tôi rất hài lòng với dịch vụ của Giá Trị Thực. Nhờ công cụ định giá AI, tôi đã mua được căn hộ với giá tốt hơn 15% so với thị trường."</p>
            <div className="flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-6">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer avatar" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">Anh Trần Văn Nam</h4>
                <p className="text-sm text-gray-500">Đã bán nhà Quận 2</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">"Tôi đã bán nhà nhanh chóng chỉ sau 2 tuần đăng tin. Đội ngũ hỗ trợ rất nhiệt tình, tư vấn pháp lý rõ ràng giúp giao dịch diễn ra suôn sẻ."</p>
            <div className="flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center mb-6">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Customer avatar" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">Chị Lê Thị Hương</h4>
                <p className="text-sm text-gray-500">Nhà đầu tư BĐS</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">"Công cụ phân tích quy hoạch giúp tôi xác định được khu vực tiềm năng. Sau 6 tháng, giá đất nơi tôi mua đã tăng 30%. Cảm ơn Giá Trị Thực!"</p>
            <div className="flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 