"use client";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Định Giá Bất Động Sản</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Công cụ định giá thông minh giúp bạn biết giá trị thực của bất động sản</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="bg-secondary p-8 rounded-xl shadow-md">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-6">Nhập thông tin bất động sản</h3>

              <form>
                <div className="mb-6">
                  <label htmlFor="property-type-pricing" className="block text-gray-700 font-medium mb-2">Loại bất động sản</label>
                  <select id="property-type-pricing" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:border-accent text-gray-700 cursor-pointer">
                    <option value="">Chọn loại BĐS</option>
                    <option value="can-ho">Căn hộ</option>
                    <option value="nha-rieng">Nhà riêng</option>
                    <option value="dat-nen">Đất nền</option>
                    <option value="biet-thu">Biệt thự</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="address-pricing" className="block text-gray-700 font-medium mb-2">Địa chỉ</label>
                  <input id="address-pricing" type="text" placeholder="Nhập địa chỉ" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:border-accent text-gray-700" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="area-pricing" className="block text-gray-700 font-medium mb-2">Diện tích (m²)</label>
                    <input id="area-pricing" type="number" placeholder="Ví dụ: 75" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:border-accent text-gray-700" />
                  </div>
                  <div>
                    <label htmlFor="bedrooms-pricing" className="block text-gray-700 font-medium mb-2">Số phòng ngủ</label>
                    <input id="bedrooms-pricing" type="number" placeholder="Ví dụ: 3" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:border-accent text-gray-700" />
                  </div>
                </div>

                <button type="submit" className="bg-gradient-to-br from-accent to-darkAccent text-white w-full px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all">
                  <i className="fas fa-calculator mr-2"></i>Định Giá Ngay
                </button>
              </form>
            </div>
          </div>

          <div className="lg:w-1/2" data-aos="fade-left">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-6">Kết quả định giá mẫu</h3>

            <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden mb-8 hover:scale-105 transition-transform">
              <div className="p-6 bg-primary text-white">
                <h4 className="font-semibold text-lg">Căn hộ 75m² Quận 2</h4>
                <p className="text-sm opacity-90">123 Đường Nguyễn Văn Linh, Quận 2, TP.HCM</p>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Giá thị trường:</span>
                  <span className="font-semibold text-primary relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-accent before:rounded-full">3.2 - 3.8 tỷ</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Giá đề xuất:</span>
                  <span className="font-bold text-accent text-lg relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-accent before:rounded-full">3.5 tỷ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Giá/m²:</span>
                  <span className="font-semibold text-primary">46.7 triệu/m²</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
              <h4 className="font-semibold text-gray-800 mb-4">Xu hướng giá Quận 2</h4>
              <div className="h-48 bg-gradient-to-br from-secondary to-white rounded-lg flex items-center justify-center text-gray-400">
                [Biểu đồ xu hướng giá sẽ hiển thị ở đây]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 