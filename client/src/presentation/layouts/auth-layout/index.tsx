import { cn } from '@/shared/utils'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='grid min-h-screen lg:grid-cols-5'>
      <div className='flex flex-col justify-center items-center h-screen lg:col-span-2'>
        <div className={cn('flex flex-col gap-6 w-full max-w-md px-8 md:px-10')}>
          <div className='flex flex-col items-center mb-4'></div>

          <Outlet />

          <div className='text-center text-xs text-gray-400 mt-4'>© 2026 TOBO IT. All rights reserved.</div>
        </div>
      </div>

      <div className='relative hidden lg:block lg:col-span-3 h-screen bg-gradient-to-br from-blue-50 to-purple-50'>
        <div className='absolute inset-0 flex flex-col justify-center items-center p-12'>
          <div className='w-full max-w-2xl'>
            <div className='relative'>
              <img
                src='/assets/images/bg-autismcenter.jpg'
                alt='Autism Center'
                className='object-cover object-center w-full h-[500px] rounded-3xl shadow-2xl'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl' />
            </div>

            <div className='mt-8 text-center'>
              <h2 className='text-3xl font-bold text-gray-800 mb-4'>Đồng Hành Cùng Sự Phát Triển</h2>
              <p className='text-lg text-gray-600 max-w-xl mx-auto'>
                Chúng tôi cam kết mang đến môi trường học tập và phát triển tốt nhất cho trẻ em tự kỷ với đội ngũ chuyên
                gia tận tâm và phương pháp giáo dục hiện đại.
              </p>

              <div className='grid grid-cols-3 gap-4 mt-8'>
                <div className='bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md'>
                  <div className='w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <p className='text-sm font-semibold text-gray-700'>Chuyên Nghiệp</p>
                </div>

                <div className='bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md'>
                  <div className='w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                      />
                    </svg>
                  </div>
                  <p className='text-sm font-semibold text-gray-700'>Giáo Dục</p>
                </div>

                <div className='bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md'>
                  <div className='w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                      />
                    </svg>
                  </div>
                  <p className='text-sm font-semibold text-gray-700'>Tận Tâm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-3xl' />
        <div className='absolute bottom-10 left-10 w-40 h-40 bg-purple-200 rounded-full opacity-50 blur-3xl' />
      </div>
    </div>
  )
}

export default AuthLayout
