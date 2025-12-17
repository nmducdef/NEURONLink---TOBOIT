import type { LoginRequest } from '@/domain/model/Auth'
import { useLogin } from '@/presentation/hooks/auth/useLogin'
import LoginView from '@/presentation/pages/auth/login/login.view'

const LoginContainer = () => {
  const { login, isPending: isPendingLogin } = useLogin()

  const hanleLogin = async (values: LoginRequest) => {
    await login(values)
  }

  return (
    <div>
      <LoginView onLogin={hanleLogin} isPendingLogin={isPendingLogin} />
    </div>
  )
}

export default LoginContainer
