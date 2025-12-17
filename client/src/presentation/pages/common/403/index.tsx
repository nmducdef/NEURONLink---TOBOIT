const ForbiddenPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative'>
      <div className='absolute inset-0 overflow-hidden opacity-20'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>
      </div>

      <div className='absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse'></div>
      <div className='absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-1000'></div>

      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        <div className='mb-8 flex justify-center'>
          <div className='relative'>
            <div className='absolute inset-0 bg-purple-500 blur-2xl opacity-50 rounded-full animate-pulse'></div>
            <div className='relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-purple-500/30 shadow-2xl'>
              <svg
                className='w-24 h-24 md:w-32 md:h-32 text-purple-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                />
              </svg>
            </div>
          </div>
        </div>

        <div className='mb-6'>
          <h1 className='text-7xl md:text-9xl font-black tracking-tighter'>
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent inline-block'>
              403
            </span>
          </h1>
        </div>

        <div className='space-y-6 mb-10'>
          <h2 className='text-3xl md:text-5xl font-bold text-white tracking-tight'>Truy cập bị từ chối</h2>
          <div className='max-w-2xl mx-auto px-4 space-y-4'>
            <p className='text-lg md:text-xl text-purple-200 leading-relaxed'>
              Bạn không có quyền truy cập vào trang này.
            </p>
            <div className='flex items-center justify-center gap-3 text-purple-300/80'>
              <div className='flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-purple-500/20'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
                <span className='text-sm font-medium'>Yêu cầu xác thực</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-8'>
          <button
            onClick={() => window.history.back()}
            className='group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-purple-400/20'
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
          </button>

          <button
            onClick={() => (window.location.href = '/')}
            className='px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-purple-500/30 hover:border-purple-400/50 hover:bg-slate-700/50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg'
          >
            Về trang chủ
          </button>
        </div>
        <div className='text-purple-300/60 text-sm space-y-2'>
          <p>Nếu bạn nghĩ đây là lỗi, vui lòng liên hệ với quản trị viên</p>
          <div className='flex justify-center gap-1 mt-4'>
            <div className='w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping'></div>
            <div className='w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-300'></div>
            <div className='w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-600'></div>
          </div>
        </div>

        <div className='absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-scan'></div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes scan {
          0%, 100% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}

export default ForbiddenPage
