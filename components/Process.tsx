export default function Process() {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold mb-2 text-sm tracking-wider">QUY TRÌNH LÀM VIỆC</span>
          <div className="title-container mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 inline-block">
              Giải Pháp <span className="highlight-text">4 Bước</span> Đơn Giản
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Quy trình rõ ràng giúp bạn sở hữu bất động sản mơ ước một cách an toàn và hiệu quả
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="process-card p-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="process-number">1</div>
            <div className="process-icon text-center">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-3 text-center">Tìm Kiếm</h3>
            <p className="text-gray-600 text-center">
              Phân tích và đề xuất những bất động sản phù hợp với nhu cầu của bạn
            </p>
          </div>
      
          {/* Step 2 */}
          <div className="process-card p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="process-number">2</div>
            <div className="process-icon text-center">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-3 text-center">Phân Tích</h3>
            <p className="text-gray-600 text-center">
              Đánh giá tiềm năng đầu tư và giá trị thực tế của bất động sản
            </p>
          </div>
      
          {/* Step 3 */}
          <div className="process-card p-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="process-number">3</div>
            <div className="process-icon text-center">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-3 text-center">Đàm Phán</h3>
            <p className="text-gray-600 text-center">
              Chiến lược đàm phán giúp tiết kiệm chi phí tối đa
            </p>
          </div>
      
          {/* Step 4 */}
          <div className="process-card p-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="process-number">4</div>
            <div className="process-icon text-center">
              <i className="fas fa-file-contract"></i>
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-3 text-center">Hoàn Tất</h3>
            <p className="text-gray-600 text-center">
              Hỗ trợ pháp lý toàn diện, đảm bảo an toàn giao dịch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 