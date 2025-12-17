// main-layout.tsx
import { useIsMobile } from '@/presentation/hooks/useMobile'
import HeaderLayout from '@/presentation/layouts/main-layout/header-layout'
import LeftMenu from '@/presentation/layouts/main-layout/left-menu'
import { Layout } from 'antd'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

interface MainLayoutProps {
  children?: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const isMobile = useIsMobile()
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prev) => !prev)
  }

  return (
    <Layout className='fixed !font-acumin top-0 bottom-0 left-0 right-0'>
      <Layout className='relative h-full'>
        <HeaderLayout isMobile={isMobile} toggleMobileMenu={toggleMobileMenu} />
        <Layout className='flex-row relative flex-1 overflow-hidden'>
          <LeftMenu isMobile={isMobile} mobileMenuVisible={mobileMenuVisible} toggleMobileMenu={toggleMobileMenu} />
          <Layout.Content className='overflow-auto flex-1 flex flex-col'>
            {children || (
              <div className='flex-1 overflow-hidden rounded-xl bg-[#fff] flex flex-col gap-3 shadow-custom'>
                <Outlet />
              </div>
            )}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
