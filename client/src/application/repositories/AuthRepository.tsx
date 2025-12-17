import type { ResponseCommon } from '@/application/dto/response/ResponseCommon'
import type { LoginRequest, LoginResponse } from '@/domain/model/Auth'
import type { usePostApi } from '@/infrastructure/hooks/useApi'

export interface AuthRepository {
  login: () => ReturnType<typeof usePostApi<LoginRequest, ResponseCommon<LoginResponse>>>
}
