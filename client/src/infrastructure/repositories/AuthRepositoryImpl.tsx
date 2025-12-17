import type { ResponseCommon } from '@/application/dto/response/ResponseCommon'
import type { AuthRepository } from '@/application/repositories/AuthRepository'
import type { LoginRequest, LoginResponse } from '@/domain/model/Auth'
import { usePostApi } from '@/infrastructure/hooks/useApi'
import { Endpoint } from '@/shared/endpoints'

export const AuthRepositoryImpl = (): AuthRepository => ({
  login: () =>
    usePostApi<LoginRequest, ResponseCommon<LoginResponse>>({
      endpoint: Endpoint.AUTH.LOGIN
    })
})
