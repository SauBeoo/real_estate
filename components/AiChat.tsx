export default function AiChat() {
  return (
    <section id="ai-chat" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="AI Assistant" className="rounded-xl shadow-xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg">
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center">
                  <i className="fas fa-robot text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2" data-aos="fade-left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">Trợ Lý AI - Giải Đáp Mọi Thắc Mắc</h2>
            <p className="text-gray-600 mb-8">Trợ lý thông minh 24/7 sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi với kiến thức chuyên sâu về bất động sản.</p>

            <div className="space-y-4">
              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:scale-105">
                <div className="bg-lightOrange text-accent rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-file-contract"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Hỗ trợ pháp lý</h4>
                  <p className="text-gray-600 text-sm">Tư vấn các vấn đề pháp lý, giấy tờ liên quan đến bất động sản</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:scale-105">
                <div className="bg-lightOrange text-accent rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-search-dollar"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Định giá bất động sản</h4>
                  <p className="text-gray-600 text-sm">Phân tích và đưa ra mức giá hợp lý dựa trên dữ liệu thị trường</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:scale-105">
                <div className="bg-lightOrange text-accent rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Tư vấn đàm phán</h4>
                  <p className="text-gray-600 text-sm">Chiến lược đàm phán giá cả và điều khoản hợp đồng</p>
                </div>
              </div>
            </div>

            <a href="#" className="inline-block mt-8 bg-gradient-to-br from-accent to-darkAccent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all">
              <i className="fas fa-comment-dots mr-2"></i>Trò Chuyện Ngay Với AI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 