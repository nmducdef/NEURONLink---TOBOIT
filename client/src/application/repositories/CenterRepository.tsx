import type { ResponseCommon } from '@/application/dto/response/ResponseCommon'
import type { CentersResponse, QueryCenters } from '@/domain/model/Center'
import type { useGetApi } from '@/infrastructure/hooks/useApi'
import type { QueryOptions } from '@/shared/types/react-query'

export interface CenterRepository {
  getCenters: (
    params?: QueryCenters,
    options?: QueryOptions<ResponseCommon<CentersResponse>>
  ) => ReturnType<typeof useGetApi<ResponseCommon<CentersResponse>>>
}
