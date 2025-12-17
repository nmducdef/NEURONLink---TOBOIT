import { Activity, BarChart3, Building2, Calendar, FileText, Shield, UserCircle, Users } from 'lucide-react'

const HomeView = () => {
  const features = [
    {
      icon: Building2,
      title: 'Quản lý Trung tâm',
      description: 'Quản lý thông tin trung tâm, cơ sở vật chất, phòng học và lịch hoạt động',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Quản lý Người dùng',
      description: 'Quản lý giáo viên, nhân viên, phụ huynh với phân quyền chi tiết',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: UserCircle,
      title: 'Quản lý Bệnh nhân',
      description: 'Hồ sơ chi tiết, lịch sử điều trị và theo dõi tiến triển của trẻ',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Calendar,
      title: 'Lịch can thiệp',
      description: 'Sắp xếp lịch trình can thiệp, buổi học và hoạt động hàng ngày',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Activity,
      title: 'Theo dõi tiến độ',
      description: 'Đánh giá và ghi nhận sự phát triển của trẻ qua từng giai đoạn',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FileText,
      title: 'Báo cáo & Thống kê',
      description: 'Tạo báo cáo chi tiết về kết quả điều trị và hoạt động trung tâm',
      color: 'from-cyan-500 to-cyan-600'
    }
  ]

  const stats = [
    { label: 'Trung tâm đang sử dụng', value: '150+', icon: Building2 },
    { label: 'Trẻ được quản lý', value: '5000+', icon: UserCircle },
    { label: 'Người dùng', value: '10000+', icon: Users },
    { label: 'Đánh giá tích cực', value: '98%', icon: BarChart3 }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center'>
          <div className='inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6'>
            <Shield className='w-4 h-4' />
            <span className='text-sm font-medium'>Giải pháp toàn diện cho trung tâm</span>
          </div>
          <h2 className='text-5xl font-bold text-gray-900 mb-6'>
            Quản lý trung tâm trẻ tự kỷ
            <br />
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Hiệu quả và Chuyên nghiệp
            </span>
          </h2>
          <p className='text-xl text-gray-600 mb-10 max-w-3xl mx-auto'>
            Hệ thống quản lý toàn diện giúp tối ưu hóa quy trình vận hành, theo dõi tiến trình điều trị và nâng cao chất
            lượng chăm sóc cho trẻ tự kỷ
          </p>
          <div className='flex items-center justify-center space-x-4'>
            <button className='px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg'>
              Bắt đầu ngay
            </button>
            <button className='px-8 py-4 bg-white text-gray-700 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 font-semibold text-lg'>
              Xem demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100'
            >
              <div className='flex items-center justify-between mb-3'>
                <stat.icon className='w-8 h-8 text-blue-500' />
              </div>
              <div className='text-3xl font-bold text-gray-900 mb-1'>{stat.value}</div>
              <div className='text-gray-600'>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center mb-16'>
          <h3 className='text-4xl font-bold text-gray-900 mb-4'>Tính năng nổi bật</h3>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Giải pháp tích hợp đầy đủ các công cụ cần thiết để quản lý trung tâm hiệu quả
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1'
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className='w-7 h-7 text-white' />
              </div>
              <h4 className='text-xl font-bold text-gray-900 mb-3'>{feature.title}</h4>
              <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl'>
          <h3 className='text-4xl font-bold text-white mb-4'>Sẵn sàng nâng cao chất lượng quản lý?</h3>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Hàng trăm trung tâm đã tin tưởng sử dụng AutismCare để tối ưu hóa quy trình làm việc
          </p>
          <button className='px-10 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-all duration-300 font-bold text-lg shadow-lg'>
            Đăng ký dùng thử 30 ngày miễn phí
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-gray-300'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <div className='flex items-center space-x-2 mb-4'>
                <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
                  <Activity className='w-5 h-5 text-white' />
                </div>
                <span className='text-white font-bold text-lg'>AutismCare</span>
              </div>
              <p className='text-sm'>Giải pháp quản lý trung tâm trẻ tự kỷ toàn diện và chuyên nghiệp</p>
            </div>
            <div>
              <h5 className='text-white font-semibold mb-4'>Sản phẩm</h5>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Tính năng
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Bảng giá
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className='text-white font-semibold mb-4'>Hỗ trợ</h5>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Tài liệu
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Câu hỏi thường gặp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className='text-white font-semibold mb-4'>Công ty</h5>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Tuyển dụng
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-gray-800 mt-8 pt-8 text-center text-sm'>
            <p>© 2024 AutismCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomeView
