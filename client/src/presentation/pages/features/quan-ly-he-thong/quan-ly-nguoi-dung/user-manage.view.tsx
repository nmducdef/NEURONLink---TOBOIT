import { Typography } from 'antd'

const UserManageView = () => {
  const { Title } = Typography

  return (
    <div className='p-2'>
      <div>
        <Title className='!font-bold !text-[#008080]' level={3}>
          Quản lý người dùng
        </Title>
      </div>
    </div>
  )
}

export default UserManageView
