import './globals.css'
import type { Metadata } from 'next'
import 'aos/dist/aos.css'

export const metadata: Metadata = {
  title: 'Giá Trị Thực - Nền tảng bất động sản minh bạch',
  description: 'Nền tảng kết nối bất động sản trực tuyến, định giá tự động, hỗ trợ pháp lý minh bạch. Giao dịch trực tiếp, không lo kê giá.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        {children}
      </body>
    </html>
  )
} 