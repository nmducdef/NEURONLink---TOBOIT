import LocalStorageServiceImpl from '@/infrastructure/services/LocalStorageServiceImpl'
import { AppRoutes } from '@/shared/appRoutes'
import { Constants } from '@/shared/constants'
import { BellOutlined, LogoutOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Dropdown, Layout, Space, type MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Header: AntHeader } = Layout

interface HeaderLayoutProps {
  isMobile: boolean
  toggleMobileMenu: () => void
}

const HeaderLayout = ({ isMobile, toggleMobileMenu }: HeaderLayoutProps) => {
  const navigate = useNavigate()
  const localStorageService = new LocalStorageServiceImpl()

  const userName = 'Nguyễn Văn A'
  const userRole = 'Quản trị viên'

  const handleLogout = () => {
    localStorageService.removeStorage(Constants.API_TOKEN_STORAGE)
    navigate(AppRoutes.PUBLIC.AUTH.LOGIN)
  }

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Thông tin cá nhân'
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Đăng xuất',
      danger: true,
      onClick: handleLogout
    }
  ]

  return (
    <AntHeader className='bg-white shadow-sm px-4 flex items-center justify-between h-16 sticky top-0 z-10'>
      <div className='flex items-center gap-4'>
        {isMobile && (
          <Button
            type='text'
            icon={<MenuOutlined />}
            onClick={toggleMobileMenu}
            className='text-lg hover:bg-gray-100'
          />
        )}
        <div className='flex items-center gap-2'>
          <img src='/assets/images/logo-document.png' alt='Logo' className='h-8 w-auto' />
          {!isMobile && (
            <div>
              <h1 className='text-lg font-bold text-[#22577A]'>NEURONLink</h1>
              <p className='text-xs text-gray-500 -mt-1'>Hệ thống quản lý</p>
            </div>
          )}
        </div>
      </div>

      <Space size='large'>
        <Badge count={5} size='small'>
          <Button type='text' icon={<BellOutlined />} className='text-lg hover:bg-gray-100' />
        </Badge>

        <Dropdown menu={{ items: userMenuItems }} placement='bottomRight' arrow>
          <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition-all'>
            <Avatar size={36} icon={<UserOutlined />} className='bg-[#22577A]' />
            {!isMobile && (
              <div className='text-left'>
                <div className='text-sm font-semibold text-gray-800'>{userName}</div>
                <div className='text-xs text-gray-500'>{userRole}</div>
              </div>
            )}
          </div>
        </Dropdown>
      </Space>
    </AntHeader>
  )
}

export default HeaderLayout
