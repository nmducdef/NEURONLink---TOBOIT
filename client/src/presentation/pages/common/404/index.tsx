const NotFoundPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center p-4 overflow-hidden relative'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob'></div>
        <div className='absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000'></div>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        <div className='relative mb-8'>
          <h1 className='text-[12rem] md:text-[20rem] lg:text-[24rem] font-black leading-none tracking-tighter'>
            <span className='bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300'>
              404
            </span>
          </h1>
          <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
            <div className='absolute top-1/4 -left-8 w-16 h-16 border-4 border-orange-500 rotate-12 animate-float'></div>
            <div className='absolute bottom-1/3 -right-12 w-12 h-12 border-4 border-red-500 -rotate-45 animate-float animation-delay-1000'></div>
            <div className='absolute top-1/2 left-1/4 w-8 h-8 bg-pink-400 rounded-full animate-float animation-delay-2000'></div>
          </div>
        </div>

        <div className='space-y-6 mb-10'>
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight'>
            Trang không tìm thấy
          </h2>
          <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4'>
            Có vẻ như trang bạn đang tìm kiếm đã biến mất hoặc chưa bao giờ tồn tại. Đừng lo, hãy thử quay lại trang chủ
            nhé!
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center px-4'>
          <button
            onClick={() => window.history.back()}
            className='group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden'
          >
            <span className='relative z-10 flex items-center gap-2'>
              <svg
                className='w-5 h-5 transform group-hover:-translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
              Quay lại
            </span>
            <div className='absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></div>
          </button>

          <button
            onClick={() => (window.location.href = '/')}
            className='px-8 py-4 bg-white text-gray-800 font-semibold rounded-2xl shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-orange-300 transform hover:-translate-y-1 transition-all duration-300'
          >
            Về trang chủ
          </button>
        </div>

        <div className='mt-16 flex justify-center gap-2'>
          <div className='w-2 h-2 bg-orange-400 rounded-full animate-bounce'></div>
          <div className='w-2 h-2 bg-red-400 rounded-full animate-bounce animation-delay-200'></div>
          <div className='w-2 h-2 bg-pink-400 rounded-full animate-bounce animation-delay-400'></div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default NotFoundPage
