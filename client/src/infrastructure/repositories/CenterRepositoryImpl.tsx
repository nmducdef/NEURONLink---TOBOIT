import type { ResponseCommon } from '@/application/dto/response/ResponseCommon'
import type { CenterRepository } from '@/application/repositories/CenterRepository'
import type { CentersResponse, QueryCenters } from '@/domain/model/Center'
import { useGetApi } from '@/infrastructure/hooks/useApi'
import { Endpoint } from '@/shared/endpoints'
import type { QueryOptions } from '@/shared/types/react-query'

export const CenterRepositoryImpl = (): CenterRepository => ({
  getCenters: (params?: QueryCenters, options?: QueryOptions<ResponseCommon<CentersResponse>>) =>
    useGetApi<ResponseCommon<CentersResponse>>({
      endpoint: Endpoint.CENTER.GET_LIST_CENTERS,
      queryParams: { ...params },
      options
    })
})
