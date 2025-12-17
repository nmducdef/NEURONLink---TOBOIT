import type { LoginRequest } from '@/domain/model/Auth'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'

interface Props {
  onLogin: (values: LoginRequest) => void
  isPendingLogin: boolean
}

const LoginView = ({ onLogin, isPendingLogin }: Props) => {
  const [form] = Form.useForm()

  const handleSubmit = (values: LoginRequest) => {
    onLogin(values)
  }

  return (
    <div className='w-full'>
      <div className='mb-6 flex items-center gap-3'>
        <img src='/assets/images/logo-document.png' alt='Logo' className='h-14 w-auto mb-2' />
        <div>
          <h2 className='text-2xl font-bold text-gray-800 mb-1'>Đăng Nhập</h2>
          <p className='text-gray-500 text-sm'>Vui lòng nhập thông tin để truy cập hệ thống</p>
        </div>
      </div>

      <Form onFinish={handleSubmit} form={form} name='login' layout='vertical' requiredMark={false} size='large'>
        <Form.Item
          label='Tên đăng nhập'
          name='username'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên đăng nhập!'
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className='text-gray-400' />}
            placeholder='Nhập tên đăng nhập'
            className='rounded-lg'
          />
        </Form.Item>

        <Form.Item
          label='Mật khẩu'
          name='password'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu!'
            }
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className='text-gray-400' />}
            placeholder='Nhập mật khẩu'
            className='rounded-lg'
          />
        </Form.Item>

        <Form.Item>
          <div className='flex items-center justify-between'>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
            </Form.Item>
            <a href='#' className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
              Quên mật khẩu?
            </a>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            block
            loading={isPendingLogin}
            className='h-12 text-base font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 border-0 hover:from-blue-600 hover:to-purple-600'
          >
            Đăng Nhập
          </Button>
        </Form.Item>

        <div className='text-center text-sm text-gray-500'>
          Chưa có tài khoản?{' '}
          <a href='#' className='text-blue-600 hover:text-blue-700 font-medium'>
            Đăng ký ngay
          </a>
        </div>
      </Form>
    </div>
  )
}

export default LoginView
