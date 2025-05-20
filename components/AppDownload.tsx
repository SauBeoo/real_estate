export default function AppDownload() {
  return (
    <section className="py-16 md:py-24 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Tải Ứng Dụng Giá Trị Thực</h2>
            <p className="text-lg opacity-90 mb-8">Trải nghiệm nền tảng bất động sản thông minh ngay trên điện thoại của bạn. Tiện lợi, nhanh chóng và đầy đủ tính năng.</p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-8">
              <a href="#" className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:scale-105 transition-transform hover:shadow-md">
                <i className="fab fa-apple text-2xl mr-3"></i>
                <div className="text-left">
                  <div className="text-xs">Tải trên</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:scale-105 transition-transform hover:shadow-md">
                <i className="fab fa-google-play text-2xl mr-3"></i>
                <div className="text-left">
                  <div className="text-xs">Tải trên</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <img src="https://placehold.co/120x120/FFFFFF/1A376A?text=QR+Code&font=opensans" alt="QR Code for app download" className="w-24 h-24" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Quét mã QR để tải ứng dụng</h4>
                <p className="text-sm opacity-80">Mở camera hoặc ứng dụng quét mã QR trên điện thoại để tải ngay</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" alt="Mobile App Mockup" className="rounded-xl shadow-2xl w-full max-w-md mx-auto animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
} 