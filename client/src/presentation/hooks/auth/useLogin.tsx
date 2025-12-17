import { useRepository } from '@/di/RepositoriesProvider'
import type { LoginRequest } from '@/domain/model/Auth'
import LocalStorageServiceImpl from '@/infrastructure/services/LocalStorageServiceImpl'
import { AppRoutes } from '@/shared/appRoutes'
import { Constants } from '@/shared/constants'
import { notification } from 'antd'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const navigate = useNavigate()
  const localStorageService = new LocalStorageServiceImpl()
  const { authRepository } = useRepository()
  const { mutate: login, ...rest } = authRepository.login()

  return {
    login: (credentials: LoginRequest) => {
      login(credentials, {
        onSuccess: (data) => {
          if (data) {
            localStorageService.setStorage(Constants.API_TOKEN_STORAGE, data.results.accessToken)
            notification.success({ message: 'Đăng nhập thành công' })
            navigate(AppRoutes.PRIVATE.TRANG_CHU)
          }
        },
        onError: (error: any) => {
          notification.error({ message: error.message || 'Đăng nhập thất bại' })
        }
      })
    },
    ...rest
  }
}
